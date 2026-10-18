// ─────────────────────────────────────────────────────────────────────────────
// CONFIG — edit here to update content without touching HTML
// ─────────────────────────────────────────────────────────────────────────────

var COURSE_NAME       = 'SaaS Demo Motion Lab';
var CHECKOUT_URL      = '#checkout';    // [PLACEHOLDER] replace with Gumroad / Lemon Squeezy link
var BOOKING_URL       = '#book';        // [PLACEHOLDER] replace with Cal.com / Calendly link
var WEBINAR_URL       = '#webinar';     // [PLACEHOLDER] replace with webinar registration link
var WEBINAR_FORM_KEY  = '';             // [PLACEHOLDER] paste your Web3Forms access key — get one free at web3forms.com

var ANNOUNCEMENT = {
  enabled: true,
  text:    'Launch price for the first cohort · ends [DATE]',
  cta:     '→',
  url:     CHECKOUT_URL
};

var SHOWCASE = [
  {
    video:  'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/saas_demo.mp4',
    poster: 'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/saas_demo.jpg',
    cat:    'LAUNCH TRAILER',
    title:  'SaaS launch trailer',
    desc:   '30 s product debut, editorial look.',
    tags:   ['16:9', 'editorial'],
    ratio:  '16/9'
  },
  {
    video:  'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/Hostwise.mp4',
    poster: 'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/Hostwise.jpg',
    cat:    'FEATURE REVEAL',
    title:  'Hostwise — feature reveal',
    desc:   'New capability, warm product look.',
    tags:   ['16:9', 'warm product'],
    ratio:  '16/9'
  },
  {
    video:  'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/GammaLoop.mp4',
    poster: '/GammaLoop.jpg',
    cat:    'AD',
    title:  'GammaLoop — product ad',
    desc:   'Problem → solution, 30 s social ad.',
    tags:   ['16:9', 'dark tech'],
    ratio:  '16/9'
  },
  {
    video:  'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/nexus.mp4',
    poster: 'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/nexus.jpg',
    cat:    'HOW IT WORKS',
    title:  'Nexus — app walkthrough',
    desc:   'App launch ad, Meta feed, 9:16.',
    tags:   ['9:16', 'apple minimal'],
    ratio:  '9/16'
  },
  {
    video:  'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/erp_api_pr.mp4',
    poster: 'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/erp_api_pr.jpg',
    cat:    'FEATURE REVEAL',
    title:  'WebArm ERP — API release',
    desc:   'Technical product, clean editorial.',
    tags:   ['16:9', 'editorial'],
    ratio:  '16/9'
  },
  {
    video:  'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/ksef_video_2.mp4',
    poster: 'https://pub-c279d7a852214fa6a518129df114c389.r2.dev/ksef_video_2.png',
    cat:    'AI FEATURE DEMO',
    title:  'KSeF — AI document processing',
    desc:   'Document AI, soft gradient look.',
    tags:   ['16:9', 'soft gradient'],
    ratio:  '16/9'
  },
  {
    video:    '/course/media/yuna-hook.mp4',
    poster:   '',
    cat:      'UGC AVATAR',
    title:    'Yuna — UGC hook',
    desc:     'AI talking head for social ads.',
    tags:     ['9:16', 'AI avatar'],
    ratio:    '9/16',
    isAvatar: true
  },
  {
    video:    '/course/media/daniel-hook.mp4',
    poster:   '',
    cat:      'UGC AVATAR',
    title:    'Daniel — UGC hook',
    desc:     'AI talking head for social ads.',
    tags:     ['9:16', 'AI avatar'],
    ratio:    '9/16',
    isAvatar: true
  }
];

var PRICING = [
  {
    id:       'diy',
    label:    'Do it yourself',
    name:     'Course + plugin',
    price:    20,
    per:      'one-time',
    was:      null,
    url:      CHECKOUT_URL,
    cta:      'Get the course + plugin',
    featured: true,
    items: [
      'The full step-by-step course',
      'The saas-demo-director plugin (5 templates, 5 looks)',
      'Brand from your website: colours, fonts, real logo',
      '11 talking avatars for UGC clips',
      'Helper agents: brand researcher, render reviewer, UGC producer',
      'Future plugin updates [CONFIRM]'
    ]
  },
  {
    id:       'dfy',
    label:    'Done for you',
    name:     'I make the video for you',
    price:    null,
    per:      null,
    was:      null,
    url:      BOOKING_URL,
    cta:      'Book a free 30-min call',
    featured: false,
    desc:     "Don't want to learn it? Send me your website and I'll make the video for you.",
    items: [
      'Brand research from your website',
      'Script and scenes written for your product',
      'The finished video, ready to post',
      '[N] revision rounds [CONFIRM]',
      'Delivery in [N] days [CONFIRM]'
    ]
  }
];

var FAQ_ITEMS = [
  {
    q: 'Do I need design or animation skills?',
    a: 'No. The plugin handles all the visual decisions — look, layout, motion — and writes everything as ready-to-paste Claude Design prompts. You paste the output and work through it step by step.'
  },
  {
    q: 'Do I need After Effects?',
    a: 'No. You finish the videos in CapCut. No After Effects, no Premiere, no motion-design background required.'
  },
  {
    q: 'Which Claude plan do I need, and what does it cost?',
    a: 'The plugin requires a paid Claude plan (plugins are a paid-tier feature). [CONFIRM exact plan level and current price]'
  },
  {
    q: 'Can you just make the video for me?',
    a: 'Yes — that\'s the done-for-you option in pricing. You send me your website, I handle everything, and deliver the finished video. No course required.'
  },
  {
    q: 'How long does one video really take?',
    a: 'About 30 minutes per video once you\'ve made your first one. Your first video will take longer because you\'re learning the workflow — the course walks you through it start to finish.'
  },
  {
    q: 'Can I use it for client work and multiple projects?',
    a: 'Yes. One purchase covers your own projects and client work. [CONFIRM licence terms]'
  },
  {
    q: 'Is it only for demo videos?',
    a: 'No. The 5 templates cover launch trailers, feature reveals, problem → solution ads, how-it-works and AI feature demos — the main video formats SaaS teams need.'
  },
  {
    q: 'What do the talking avatars cost to generate?',
    a: 'The 11 avatars included in the plugin are pre-built — you use them at no extra cost. Generating additional custom avatars requires a Higgsfield account. [CONFIRM current Higgsfield pricing]'
  },
  {
    q: 'What if my brand is very specific?',
    a: 'The plugin reads your actual website and pulls your real colours, fonts and logo. If something needs manual tuning, the course covers how to adjust the output inside Claude Design.'
  },
  {
    q: "What's the refund policy?",
    a: '[REFUND POLICY — add your policy here]'
  }
];

var CURRICULUM = [
  { title: 'Setup: Claude plan, Claude Design, installing the plugin', lessons: '[N]' },
  { title: 'Brand from a website: colours, fonts, the real logo',       lessons: '[N]' },
  { title: 'The 5 templates, one lesson each',                          lessons: '[N]' },
  { title: 'The 5 looks and when to use which',                         lessons: '[N]' },
  { title: 'Building in Claude Design, scene by scene',                 lessons: '[N]' },
  { title: 'Review and fix: what makes AI video look cheap',            lessons: '[N]' },
  { title: 'Talking avatars for UGC ads (Higgsfield)',                  lessons: '[N]' },
  { title: 'Finishing in CapCut and posting',                           lessons: '[N]' }
];

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  renderAnnouncement();
  renderShowcase();
  renderPricing();
  renderFAQ();
  renderCurriculum();
  setupCopyButtons();
  setupLightbox();
  setupNav();
  setupStickyBar();
  setupWordAnimations();
  setupVideoLazyLoad();
  setupCardReveal();
  setupMobileMenu();
  setupAccordion();
  setupWebinarForm();
});

// ─────────────────────────────────────────────────────────────────────────────
// RENDER ANNOUNCEMENT BAR
// ─────────────────────────────────────────────────────────────────────────────

function renderAnnouncement() {
  if (!ANNOUNCEMENT.enabled) return;
  var bar = document.getElementById('announce-bar');
  if (!bar) return;
  var text = document.getElementById('announce-text');
  if (text) text.innerHTML = ANNOUNCEMENT.text + ' <span class="announce-cta">' + ANNOUNCEMENT.cta + '</span>';
  bar.removeAttribute('hidden');

  // Dismissible
  var close = bar.querySelector('.announce-close');
  if (close) {
    close.addEventListener('click', function () {
      bar.setAttribute('hidden', '');
      document.documentElement.style.setProperty('--announce-h', '0px');
    });
  }

  // Set bar height as CSS var for nav offset
  function updateH() {
    document.documentElement.style.setProperty('--announce-h', bar.offsetHeight + 'px');
  }
  updateH();
  window.addEventListener('resize', updateH, { passive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER SHOWCASE GRID
// ─────────────────────────────────────────────────────────────────────────────

function renderShowcase() {
  var grid = document.getElementById('showcase-grid');
  if (!grid) return;

  SHOWCASE.forEach(function (item, i) {
    var card = document.createElement('div');
    card.className = 'sc-card reveal';
    card.style.setProperty('--d', (i % 4) * 0.06 + 's');

    var isPortrait = item.ratio === '9/16';
    card.classList.add(isPortrait ? 'sc-portrait' : 'sc-landscape');

    var posterAttr = item.poster ? ' poster="' + item.poster + '"' : '';
    var avatarChip = item.isAvatar ? '<span class="chip chip-avatar">AI AVATAR</span>' : '';

    var chips = item.tags.filter(function (t) { return t !== 'AI avatar'; }).map(function (t) {
      return '<span class="chip">' + t + '</span>';
    }).join('');

    card.innerHTML =
      '<div class="sc-frame">' +
        '<video data-src="' + item.video + '"' + posterAttr + ' loop muted playsinline preload="none" aria-label="' + item.title + '"></video>' +
        '<div class="sc-top"><span class="sc-cat">' + item.cat + '</span>' + avatarChip + '</div>' +
        '<div class="sc-bottom">' +
          '<h3 class="sc-title">' + item.title + '</h3>' +
          '<p class="sc-desc">' + item.desc + '</p>' +
          '<div class="sc-chips">' + chips + '</div>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER PRICING CARDS
// ─────────────────────────────────────────────────────────────────────────────

function renderPricing() {
  var wrap = document.getElementById('pricing-cards');
  if (!wrap) return;

  PRICING.forEach(function (plan) {
    var card = document.createElement('div');
    card.className = 'price-card reveal' + (plan.featured ? ' price-featured' : '');

    var priceHTML;
    if (plan.price) {
      priceHTML = '<div class="price-amount"><span class="price-currency">$</span><span class="price-num">' + plan.price + '</span></div>';
      if (plan.per) priceHTML += '<div class="price-per">' + plan.per + '</div>';
    } else {
      priceHTML = '<div class="price-amount price-custom">Custom quote</div>';
    }

    var wasHTML = '';
    if (plan.was) {
      var savings = Math.round(100 - plan.price / plan.was * 100);
      wasHTML = '<div class="price-was"><s>$' + plan.was + '</s><span class="price-badge">−' + savings + '%</span></div>';
    }

    var descHTML = plan.desc ? '<p class="price-desc">' + plan.desc + '</p>' : '';

    var items = plan.items.map(function (item) {
      return '<li><svg class="check" viewBox="0 0 16 16"><polyline points="2,8 6,12 14,4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' + item + '</li>';
    }).join('');

    card.innerHTML =
      '<div class="price-label-row">' +
        '<span class="price-label">' + plan.label + '</span>' +
        (plan.featured ? '<span class="price-popular">Most popular</span>' : '') +
      '</div>' +
      '<div class="price-name">' + plan.name + '</div>' +
      wasHTML + priceHTML + descHTML +
      '<a href="' + plan.url + '" class="btn ' + (plan.featured ? 'btn-primary' : 'btn-ghost') + ' price-cta" aria-label="' + plan.cta + '">' + plan.cta + '</a>' +
      '<ul class="price-items">' + items + '</ul>';

    wrap.appendChild(card);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER FAQ
// ─────────────────────────────────────────────────────────────────────────────

function renderFAQ() {
  var list = document.getElementById('faq-list');
  if (!list) return;

  FAQ_ITEMS.forEach(function (item, i) {
    var el = document.createElement('details');
    el.className = 'faq-item';
    if (i === 0) el.setAttribute('open', '');

    el.innerHTML =
      '<summary class="faq-q">' +
        '<span>' + item.q + '</span>' +
        '<svg class="faq-arrow" viewBox="0 0 16 16" aria-hidden="true"><polyline points="4,6 8,10 12,6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</summary>' +
      '<div class="faq-a"><p>' + item.a + '</p></div>';

    list.appendChild(el);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER CURRICULUM
// ─────────────────────────────────────────────────────────────────────────────

function renderCurriculum() {
  var grid = document.getElementById('curriculum-grid');
  if (!grid) return;

  CURRICULUM.forEach(function (mod, i) {
    var item = document.createElement('div');
    item.className = 'module-item';
    if (i === 0) item.classList.add('open');

    item.innerHTML =
      '<button class="module-head" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' +
        '<span class="module-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="module-title">' + mod.title + '</span>' +
        '<span class="module-lessons">' + mod.lessons + ' lessons</span>' +
        '<svg class="module-arrow" viewBox="0 0 16 16" aria-hidden="true"><polyline points="4,6 8,10 12,6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<div class="module-body">' +
        '<p class="module-note">Lesson details coming — placeholder for ' + mod.lessons + ' lessons.</p>' +
      '</div>';

    grid.appendChild(item);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// COPY BUTTON
// ─────────────────────────────────────────────────────────────────────────────

function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.dataset.copy;
      var el = targetId ? document.getElementById(targetId) : btn.closest('.cmd-block').querySelector('.cmd-text');
      if (!el) return;
      var text = el.textContent.trim();
      navigator.clipboard.writeText(text).then(function () {
        var orig = btn.textContent;
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = orig;
          btn.classList.remove('copied');
        }, 1500);
      }).catch(function () {
        // fallback
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────

function setupLightbox() {
  var lb       = document.getElementById('lightbox');
  var lbVideo  = document.getElementById('lightbox-video');
  var lbClose  = lb ? lb.querySelector('.lb-close') : null;
  var lbOverlay = lb ? lb.querySelector('.lb-overlay') : null;

  if (!lb || !lbVideo) return;

  document.querySelectorAll('[data-lightbox]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var src = btn.dataset.lightbox;
      if (!src) return;
      lbVideo.src = src;
      lb.removeAttribute('hidden');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbVideo.play().catch(function () {});
      if (lbClose) lbClose.focus();
    });
  });

  function closeLB() {
    lb.setAttribute('hidden', '');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbVideo.pause();
    lbVideo.removeAttribute('src');
    lbVideo.load();
  }

  if (lbClose) lbClose.addEventListener('click', closeLB);
  if (lbOverlay) lbOverlay.addEventListener('click', closeLB);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hasAttribute('hidden')) closeLB();
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// STICKY NAV
// ─────────────────────────────────────────────────────────────────────────────

function setupNav() {
  var nav = document.getElementById('course-nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE STICKY BAR
// ─────────────────────────────────────────────────────────────────────────────

function setupStickyBar() {
  var bar  = document.getElementById('sticky-bar');
  var hero = document.getElementById('hero');
  var cta  = document.getElementById('cta-section');
  if (!bar || !hero) return;

  var heroVisible = true;
  var ctaVisible  = false;

  function sync() {
    var show = !heroVisible && !ctaVisible;
    if (show) bar.removeAttribute('hidden');
    else bar.setAttribute('hidden', '');
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.target === hero) heroVisible = e.isIntersecting;
      if (e.target === cta)  ctaVisible  = e.isIntersecting;
      sync();
    });
  }, { threshold: 0.01 });

  obs.observe(hero);
  if (cta) obs.observe(cta);
}

// ─────────────────────────────────────────────────────────────────────────────
// WORD-BY-WORD HEADING ANIMATION
// ─────────────────────────────────────────────────────────────────────────────

function setupWordAnimations() {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.anim-h');

  els.forEach(function (el) {
    if (reduced) { el.classList.add('in-view'); return; }
    splitWords(el);
  });

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(function (el) { obs.observe(el); });
}

function splitWords(container) {
  var idx = 0;

  function processNode(node, parent) {
    if (node.nodeType === 3) {
      var text = node.textContent;
      if (!text.trim()) return;
      var re = /(\S+)/g, m, last = 0;
      var frag = document.createDocumentFragment();
      while ((m = re.exec(text)) !== null) {
        if (m.index > last) {
          frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        }
        var wrap = document.createElement('span');
        wrap.className = 'word-wrap';
        var inner = document.createElement('span');
        inner.className = 'word-inner';
        inner.style.transitionDelay = (idx++ * 0.06) + 's';
        inner.textContent = m[1];
        wrap.appendChild(inner);
        frag.appendChild(wrap);
        last = re.lastIndex;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      parent.replaceChild(frag, node);
    } else if (node.nodeType === 1) {
      var isAccent = node.classList && node.classList.contains('accent-word');
      var children = Array.from(node.childNodes);
      if (isAccent) {
        // wrap words inside accent-word span, mark them
        node.innerHTML = '';
        children.forEach(function (child) {
          if (child.nodeType === 3) {
            var words = child.textContent.trim().split(/\s+/);
            words.forEach(function (word, wi) {
              if (wi > 0) node.appendChild(document.createTextNode(' '));
              var wrap = document.createElement('span');
              wrap.className = 'word-wrap';
              var inner = document.createElement('span');
              inner.className = 'word-inner';
              inner.setAttribute('data-accent', '');
              inner.style.transitionDelay = (idx++ * 0.06) + 's';
              inner.textContent = word;
              wrap.appendChild(inner);
              node.appendChild(wrap);
            });
          } else {
            node.appendChild(child.cloneNode(true));
          }
        });
      } else {
        children.forEach(function (child) { processNode(child, node); });
      }
    }
  }

  Array.from(container.childNodes).forEach(function (child) {
    processNode(child, container);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO LAZY LOAD
// ─────────────────────────────────────────────────────────────────────────────

function setupVideoLazyLoad() {
  var videos = document.querySelectorAll('video[data-src]');
  if (!videos.length) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var v = e.target;
      if (v.dataset.src) {
        v.src = v.dataset.src;
        delete v.dataset.src;
        v.removeAttribute('data-src');
      }
      v.play().catch(function () {});
      obs.unobserve(v);
    });
  }, { threshold: 0.1 });

  videos.forEach(function (v) { obs.observe(v); });
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD REVEAL (fade-up on scroll)
// ─────────────────────────────────────────────────────────────────────────────

function setupCardReveal() {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cards = document.querySelectorAll('.reveal');
  if (!cards.length) return;
  if (reduced) { cards.forEach(function (c) { c.classList.add('visible'); }); return; }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach(function (c) { obs.observe(c); });
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE MENU SHEET
// ─────────────────────────────────────────────────────────────────────────────

function setupMobileMenu() {
  var btn   = document.getElementById('menu-btn');
  var sheet = document.getElementById('nav-sheet');
  var close = document.getElementById('nav-sheet-close');
  if (!btn || !sheet) return;

  function openSheet() {
    sheet.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
  }
  function closeSheet() {
    sheet.setAttribute('hidden', '');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  btn.addEventListener('click', openSheet);
  if (close) close.addEventListener('click', closeSheet);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !sheet.hasAttribute('hidden')) closeSheet();
  });
  sheet.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeSheet);
  });
  // click outside
  sheet.addEventListener('click', function (e) {
    if (e.target === sheet) closeSheet();
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// CURRICULUM ACCORDION
// ─────────────────────────────────────────────────────────────────────────────

function setupAccordion() {
  document.querySelectorAll('.module-head').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.module-item');
      var isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });

  // Keyboard: Enter/Space already trigger button click
  // Arrow key navigation between module buttons
  var allBtns = Array.from(document.querySelectorAll('.module-head'));
  allBtns.forEach(function (btn, i) {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (allBtns[i + 1]) allBtns[i + 1].focus(); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); if (allBtns[i - 1]) allBtns[i - 1].focus(); }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// WEBINAR EMAIL CAPTURE FORM (Web3Forms)
// ─────────────────────────────────────────────────────────────────────────────

function setupWebinarForm() {
  var form = document.getElementById('webinar-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var emailInput = form.querySelector('input[type="email"]');
    var submitBtn  = form.querySelector('.wf-submit');
    var status     = document.getElementById('wf-status');
    var email      = emailInput ? emailInput.value.trim() : '';

    if (!email) return;

    // Disable while submitting
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    if (status) { status.textContent = ''; status.className = 'wf-status'; }

    var payload = {
      access_key: WEBINAR_FORM_KEY,
      email:      email,
      subject:    'Free webinar — ' + COURSE_NAME,
      from_name:  'FrameGen Studio',
      message:    'New webinar signup: ' + email
    };

    fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(payload)
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data.success) {
        form.innerHTML =
          '<p class="wf-success">You\'re on the list. I\'ll email you the link before the session.</p>';
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    })
    .catch(function (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Get the link →';
      if (status) {
        status.textContent = 'Something went wrong — try again or email me directly.';
        status.className = 'wf-status wf-error';
      }
    });
  });
}
