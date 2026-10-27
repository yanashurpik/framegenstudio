function isValidEmail(e) {
  return typeof e === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length < 320;
}

async function sendEmail({ apiKey, from, to, replyTo, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, html }),
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, body: json };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM = process.env.RESEND_FROM || 'FrameGen Studio <hello@framegenstudio.com>';
  const OWNER_EMAIL = process.env.OWNER_EMAIL || 'shurpik.y@gmail.com';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ success: false, error: 'Server not configured' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const email = (body && body.email) ? String(body.email).trim() : '';
  const honeypot = body && body.website;

  if (honeypot) return res.status(200).json({ success: true });
  if (!isValidEmail(email)) return res.status(400).json({ success: false, error: 'Valid email required' });

  try {
    await sendEmail({
      apiKey: RESEND_API_KEY,
      from: FROM,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New subscriber — ${email}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#201d19;">
          <h2 style="margin:0 0 12px;">New email subscriber</h2>
          <p style="margin:0 0 6px;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 6px;"><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p style="margin:16px 0 0;color:#5d5546;">This person left their email on framegenstudio.com.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('subscribe handler error:', err);
    return res.status(500).json({ success: false, error: 'Unexpected error' });
  }
}
