function isValidEmail(e) {
  return typeof e === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length < 320;
}

async function sendEmail({ apiKey, from, to, replyTo, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, html }),
  });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, body: json };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const WEBINAR_URL    = process.env.WEBINAR_URL || '#';
  const FROM           = process.env.RESEND_FROM || 'FrameGen Studio <hello@framegenstudio.com>';
  const OWNER_EMAIL    = process.env.OWNER_EMAIL || 'shurpik.y@gmail.com';

  if (!RESEND_API_KEY) return res.status(500).json({ success: false, error: 'Server not configured' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const email    = body?.email ? String(body.email).trim() : '';
  const honeypot = body?.website;

  if (honeypot) return res.status(200).json({ success: true });
  if (!isValidEmail(email)) return res.status(400).json({ success: false, error: 'Valid email required' });

  try {
    // Send webinar link to the user
    await sendEmail({
      apiKey: RESEND_API_KEY,
      from:    FROM,
      to:      email,
      replyTo: OWNER_EMAIL,
      subject: 'Your free webinar link — FrameGen Studio',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#201d19;max-width:560px;margin:0 auto;">
          <p style="font-size:18px;font-weight:700;margin:0 0 16px;">Here's your webinar link 👇</p>
          <a href="${WEBINAR_URL}" style="display:inline-block;background:#d24034;color:#fff;text-decoration:none;padding:14px 28px;border-radius:12px;font-weight:600;font-size:16px;">Watch the free webinar</a>
          <p style="margin:24px 0 8px;color:#5d5546;font-size:14px;">This is a free session on making SaaS demo videos with Claude. No upsell — just the process.</p>
          <p style="margin:0;color:#5d5546;font-size:14px;">— Yana, FrameGen Studio</p>
        </div>
      `,
    });

    // Notify owner
    await sendEmail({
      apiKey: RESEND_API_KEY,
      from:    FROM,
      to:      OWNER_EMAIL,
      replyTo: email,
      subject: `New webinar signup — ${email}`,
      html: `<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#201d19;">
        <h2 style="margin:0 0 12px;">New webinar signup</h2>
        <p style="margin:0 0 6px;"><strong>Email:</strong> ${email}</p>
        <p style="margin:0 0 6px;"><strong>Time:</strong> ${new Date().toISOString()}</p>
      </div>`,
    }).catch(err => console.error('Owner notify failed:', err));

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('webinar handler error:', err);
    return res.status(500).json({ success: false, error: 'Unexpected error' });
  }
}
