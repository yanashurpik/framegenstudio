# T01 · Sunglasses — summer drop

Created 2026-08-24 · 12 spots planned · FrameGen Studio

`[sunglasses]` is bracketed everywhere it appears so this whole block swaps to
another product without a rewrite. Change the bracket, keep the structure.

---

## 1 · The angle

**A $3,000 eyewear shoot and a $140 AI spot, cut side by side, and you can't
tell which is which until I tell you.**

Sunglasses are the perfect proof product. They're reflective, they sit on a
face, and they show up in every "AI can't do this" argument — glass, skin, and
a real reflection in the same frame. If it holds up on eyewear, it holds up.

- **Segment:** DTC founders (primary) · media buyers (secondary)
- **Pain point:** *"Will it look cheap, and will that turn off my customers?"*
- **What this block is NOT:** a tutorial. Nobody scrolling wants a workflow.
  They want to see the frame and go "wait, that's fake?"

---

## 2 · Avatar DNA — locked

Paste this block **verbatim** into every prompt in T01. Don't paraphrase it,
don't shorten it, don't "clean it up." Verbatim is the only reason her face
stays the same person across all 12 spots.

```
AVATAR DNA — T01 · "MAYA"
────────────────────────────────────────────────────────────
Age / build:   27, 5'6", slim but not model-thin, slightly
               rounded shoulders, natural posture
Skin:          light-medium olive, warm undertone. Visible
               pores across the nose and inner cheeks. A
               scatter of roughly eighteen small freckles over
               the bridge of the nose and upper cheeks —
               uneven, denser on the left side. Faint natural
               shine on the forehead and nose bridge, never
               matte. One small healed blemish mark on the
               left jaw. Fine vellus hair catching light along
               the jawline.
Hair:          dark brown, near-black at the roots, warmer
               through the mid-lengths from sun. Shoulder-
               blade length, natural loose wave, slight frizz
               at the crown. Centre part that isn't perfectly
               straight. Several flyaways lit from behind.
Eyes:          dark brown, almond-shaped. Left lid slightly
               more hooded than the right. Natural full brows,
               a small gap in the tail of the left brow. No
               eyeliner. Faint natural under-eye shadow.
Face:          soft square jaw, straight nose with a slight
               bump at the bridge, medium-full lips. The right
               corner of her mouth lifts higher than the left
               when she smiles.
Wardrobe:      unbranded plain cotton — white ribbed tank,
               faded black tee, or oatmeal linen shirt. No
               logos. One thin gold chain, nothing else.
Voice match:   ElevenLabs — warm mid-range American, light
               vocal fry, unhurried, slightly flat affect.
               Voice ID: ____________
────────────────────────────────────────────────────────────
```

Generate the angle set first — front, 3/4 left, 3/4 right, profile, plus one
laughing and one neutral — into `01_product-refs/avatar/`. Lock the best front
3/4 as the master and feed it to Seedance 2 on every clip.

---

## 3 · Lighting rule for this block

**Plain natural daylight. Slightly cool. A little boring.**

Warm light is the single biggest reason AI footage reads as fake — the model
has seen ten million golden-hour stock frames and it drifts there on its own.
North-facing window light and flat overcast are what real phone footage
actually looks like, and that "boring" is exactly what reads as real.

Push these into the negative list on **every** prompt, image and video:

```
NEGATIVE — paste on every T01 prompt
golden hour, sunset light, amber, orange cast, tungsten, warm 3000K,
ring light, catchlight ring, beauty light, glow, bloom, halation,
airbrushed skin, poreless, plastic skin, 3D render, CGI, waxy,
symmetrical face, perfect teeth, stock photo composition, watermark,
text overlay, extra fingers, warped glasses frame, floating lenses
```

The one exception is §5B, the editorial showcase set — those are lit like a
product campaign, not like a phone. They still stay cool; they just get
controlled.

---

## 4 · The 12 hooks

First spoken line, non-price by default, written to stop the scroll. Hook IDs
continue from the tracker's Hooks tab.

| ID | Hook | Segment | Pain point |
|---|---|---|---|
| H007 | One of these `[sunglasses]` shoots cost three grand. The other cost a hundred and forty. | DTC founders | Cost of creator content |
| H008 | Nobody in this ad exists. Look at the reflection in the lens. | DTC founders | Fear it looks cheap |
| H009 | My photographer is booked till October. I needed the campaign Thursday. | DTC founders | Missed deadlines mid-campaign |
| H010 | Every AI video you've hated had the same problem. It's the light. | Media buyers | Seen bad AI video |
| H011 | Twelve `[sunglasses]` variations. One product. Forty minutes. | Media buyers | Volume of creative needed |
| H012 | I ran the AI version against the real creator version. Same audience, same budget. | Media buyers | No proof it performs |
| H013 | The reason your AI product shots look fake isn't the model. It's that you asked for golden hour. | E-commerce | Fear it looks cheap |
| H014 | This is the third `[sunglasses]` brand I've done this month and I haven't left the flat. | DTC founders | Hard to find a creator who gets it |
| H015 | Your competitor is testing thirty creatives a week. You're testing three. | Media buyers | Falling behind on testing |
| H016 | Show me the product on a real face, in real light, and I'll show you why it converts. | E-commerce | Content that sells vs pretty |
| H017 | I gave the same `[sunglasses]` to five different faces in five different cities. Same afternoon. | E-commerce | Versions for different markets |
| H018 | Freckles. Pores. A bit of shine on the nose. That's the whole trick. | DTC founders | Fear it looks cheap |

**Strongest three, in order:** H008, H007, H013. H008 is the one to lead the
block with — it makes a claim you can verify in the frame, which is the only
kind of claim that survives a scroll.

---

## 5 · Prompts

### 5A · UGC realism — avatar + product

These are the spots. Paste the AVATAR DNA block verbatim into each, then the
NEGATIVE block at the end.

---

**P1 · Product review** *(H008 — "nobody in this ad exists")*

```
[PASTE AVATAR DNA — T01 · MAYA]

Maya holds a pair of matte black acetate [sunglasses] up toward the camera at
arm's length, turning them slowly so the lens catches the window behind her.
Medium close-up, 35mm, f/2.8, handheld at chest height with visible micro-drift
and one small refocus hunt. Light: single large north-facing window camera-left,
flat overcast daylight, roughly 6000K, no fill — soft shadow falls across the
right side of her face and the wall behind. Materials: matte acetate with a
faint mould seam along the temple, one fingerprint smudge on the left lens,
brushed steel hinge. Her skin holds visible pores and natural shine on the nose
bridge. Composition: Maya left of centre, lower two-thirds, plain off-white wall
behind with a real scuff mark, clean negative space upper right. Shot on a phone,
not a camera. Mood: unimpressed, matter-of-fact, mid-sentence.

[PASTE NEGATIVE BLOCK]
```

---

**P2 · Unboxing** *(H011 — "twelve variations, forty minutes")*

```
[PASTE AVATAR DNA — T01 · MAYA]

Overhead shot of Maya's hands only, opening a folded kraft-card [sunglasses]
case on a raw linen surface. The case creases as it opens; the [sunglasses]
inside sit slightly crooked in their pocket, not styled. Top-down, 35mm, f/4,
handheld with a slight tilt that corrects mid-shot. Light: broad overcast
daylight from a window above and camera-right, 6200K, soft-edged shadow under
the case, no fill card. Materials: slubby raw linen with visible weave and one
crease, uncoated kraft card, matte acetate frame, a single dust speck near the
hinge. Composition: case centred lower third, one hand entering frame from the
right, generous empty linen upper third. Mood: quiet, tactile, unrehearsed.

[PASTE NEGATIVE BLOCK]
```

---

**P3 · ASMR** *(H018 — "freckles, pores, a bit of shine")*

```
[PASTE AVATAR DNA — T01 · MAYA]

Extreme close-up of Maya's face from the cheekbones up as she slides the
[sunglasses] on. The frame passes her temple, catches a few flyaway hairs and
pushes them slightly. Extreme close-up, 85mm, f/2.0, near-static handheld with
one small breath movement. Light: flat north window light camera-left, 6000K,
one soft specular highlight travelling across the lens as it moves. Materials:
real skin — pores across the nose, eighteen uneven freckles, faint shine on the
nose bridge, fine vellus hair on the jaw catching light. Lens surface shows one
faint smudge and a true reflection of the window frame, not a painted highlight.
Composition: eyes on the upper third line, frame arm entering from camera-left.
Mood: intimate, slow, almost too close.

[PASTE NEGATIVE BLOCK]
```

---

**P4 · Street interview** *(H015 — "thirty creatives a week")*

```
[PASTE AVATAR DNA — T01 · MAYA]

Maya stands on a wide pavement outside a plain concrete storefront, wearing the
[sunglasses], answering someone just off-camera. She gestures once with her left
hand mid-answer. Medium shot, 35mm, f/2.8, handheld at eye level, the operator
adjusts framing once. Light: flat overcast city daylight, 6500K, no direct sun,
soft shadow under the chin, real reflections of the street in both lenses.
Materials: worn concrete with staining, a plain metal shutter, her faded black
tee showing a soft wash. Composition: Maya right of centre, real street depth
falling out of focus behind, a genuine passer-by blurred at the far left.
Mood: candid, slightly caught off guard, real.

[PASTE NEGATIVE BLOCK]
```

---

**P5 · UGC entertainment** *(H009 — "my photographer is booked till October")*

```
[PASTE AVATAR DNA — T01 · MAYA]

Maya sits at a lived-in desk talking straight to camera, [sunglasses] pushed up
on her head, laughing at the end of her own sentence and glancing off to the
side. Medium close-up, 35mm, f/2.5, handheld phone propped slightly too low so
the angle is a touch up-the-nose. Light: single window camera-right, flat
daylight 6000K, a laptop screen throwing faint cool fill on the left of her
face. Materials: a mug with a tea ring, a stack of papers not squared up, a
cable running across the desk. Composition: Maya centre-right, the real
untidiness of the desk in the lower frame, plain wall upper left.
Mood: unpolished, funny, talking to a friend.

[PASTE NEGATIVE BLOCK]
```

---

### 5B · Editorial showcase — product only

This is the campaign set. No avatar, no face — just the product, shot the way a
good eyewear brand would shoot it. Still cool, still real: the difference is
control, not warmth.

---

**P6 · Hero still** — the one that goes on the grid

```
A single pair of matte black acetate [sunglasses], folded, resting at a slight
angle on a slab of unpolished travertine. Close-up, 100mm macro, f/5.6, camera
just above the surface plane. Light: one large diffused source from upper left
simulating an overcast skylight, 5800K, plus a single black flag camera-right
deepening the shadow side. Shadow falls long and soft to the lower right with a
true contact shadow where the frame meets stone. Materials: matte acetate with a
faint visible mould seam, brushed steel hinge with one micro-scratch, travertine
with open pores and natural pitting, a few real dust motes on the surface. The
lenses carry a genuine soft reflection of the light source and the room edge —
not a painted highlight. Composition: product on the lower-left third, generous
empty stone across the upper right. Mood: expensive, restrained, honest.

[PASTE NEGATIVE BLOCK]
```

---

**P7 · Contrast frame** — the before/after that carries H013

```
Two pairs of the same matte black [sunglasses] side by side on a seamless
off-white paper sweep, twelve centimetres apart, both in identical light. Wide
product shot, 50mm, f/8, straight-on at surface height. Light: one large
diffused overhead source, 6000K, plus a subtle graduated falloff toward the
frame edges. Materials: matte acetate, brushed steel hinges, the paper sweep
showing one faint crease and a slight tooth. Both pairs cast identical soft
contact shadows. Composition: perfectly level horizon, the two products
symmetrical about the vertical centre, clean empty space above for a caption.
Mood: forensic, side-by-side, nothing hidden.

[PASTE NEGATIVE BLOCK]
```

---

**P8 · Detail macro** — the texture proof

```
Extreme macro of the hinge and temple joint of matte black acetate [sunglasses],
the temple half-folded. Extreme close-up, 100mm macro, f/8, focus stacked so the
hinge screw and the acetate grain are both sharp. Light: one narrow diffused
strip from camera-left, 5800K, raking across the surface to reveal texture, with
a white bounce card just out of frame right lifting the shadow. Materials:
acetate showing fine tool marks and one shallow scuff, steel screw head with a
real driver slot and faint tarnish in the recess, a single fibre of lint caught
in the hinge gap. Composition: hinge on the intersection of the lower-left
thirds, the rest falling away into soft focus. Mood: made by someone, not
moulded by a machine.

[PASTE NEGATIVE BLOCK]
```

---

**P9 · In-situ still life** — the lifestyle frame without a person

```
Matte black [sunglasses] resting open on a folded oatmeal linen shirt beside a
half-drunk glass of water on a pale ash wood table. Medium shot, 50mm, f/4,
three-quarter angle from slightly above. Light: broad north window light from
camera-left, flat overcast 6200K, real refraction throwing a faint distorted
bright shape onto the wood from the water glass. Materials: slubby linen with
visible weave and genuine creases, ash grain with one water ring, condensation
beading unevenly down the glass, a few fingerprints on the tabletop.
Composition: [sunglasses] lower-left third, glass upper-right, the linen
diagonal linking them, negative space top-centre. Mood: mid-morning, lived in,
nobody arranged this.

[PASTE NEGATIVE BLOCK]
```

---

### 5C · Nano Banana Pro — JSON for the two that matter most

**Avatar angle sheet** — generate this first, everything else depends on it.

```json
{
  "subject": "Maya, 27, light-medium olive skin with warm undertone, visible pores across nose and inner cheeks, approximately eighteen uneven freckles across the nose bridge and upper cheeks denser on the left, faint natural shine on forehead and nose bridge, one small healed blemish mark on the left jaw, fine vellus hair along the jawline. Dark brown hair near-black at the roots and warmer through the mid-lengths, shoulder-blade length, natural loose wave, slight frizz at the crown, imperfect centre part, several flyaways. Dark brown almond eyes, left lid slightly more hooded than the right, natural full brows with a small gap in the left tail, no eyeliner, faint natural under-eye shadow. Soft square jaw, straight nose with a slight bump at the bridge, medium-full lips, right mouth corner lifting higher when she smiles. Plain white ribbed cotton tank, one thin gold chain, no logos.",
  "shot": "character angle sheet — six frames: front neutral, three-quarter left, three-quarter right, full profile left, front laughing, front mid-speech",
  "lens": "50mm, f/4, eye level, consistent camera distance across all six",
  "light": "single large north-facing window camera-left, flat overcast daylight, 6000K, no fill, no reflector, identical across all six frames",
  "texture": "real skin with pores, uneven tone and natural shine; individual hair strands separated at the edges; cotton showing rib texture and soft wear",
  "composition": "plain off-white wall background, head and upper shoulders, generous even margin, identical framing in every frame",
  "style": "documentary portrait reference, phone-camera honesty, no retouching",
  "negative": "golden hour, sunset light, amber, orange cast, tungsten, warm 3000K, ring light, catchlight ring, beauty light, glow, bloom, halation, airbrushed skin, poreless, plastic skin, 3D render, CGI, waxy, symmetrical face, perfect teeth, makeup, stock photo composition, watermark, text overlay",
  "aspect_ratio": "9:16"
}
```

**Hero still (P6)** — the grid image.

```json
{
  "subject": "a single pair of matte black acetate sunglasses, folded, resting at a slight angle on a slab of unpolished travertine",
  "shot": "close-up product still, camera just above the surface plane",
  "lens": "100mm macro, f/5.6",
  "light": "one large diffused source from upper left simulating an overcast skylight at 5800K, one black flag camera-right deepening the shadow side, long soft shadow falling to the lower right with a true contact shadow where frame meets stone",
  "texture": "matte acetate with a faint visible mould seam, brushed steel hinge carrying one micro-scratch, travertine with open pores and natural pitting, a few real dust motes on the surface, genuine soft reflection of the light source and room edge in both lenses",
  "composition": "product on the lower-left third, generous empty stone across the upper right, horizon level",
  "style": "contemporary eyewear campaign photography, restrained, material-honest",
  "negative": "golden hour, sunset light, amber, orange cast, tungsten, warm 3000K, ring light, glow, bloom, painted highlight, plastic, 3D render, CGI, floating product, missing contact shadow, gradient background, watermark, text overlay",
  "aspect_ratio": "9:16"
}
```

---

## 6 · Six script variants — H008

The lead hook, written six ways. Same claim, six different ways in. Run them as
six spots and let the feed tell you which opening works; that answer carries
into every block after this one.

*All six: ~15–22 seconds. Spoken pace ~140 wpm. No music under the first line —
the hook lands dry.*

---

**V1 · Straight demonstration**

```
[SHOT — Maya holding the sunglasses up, turning them slowly]

Nobody in this ad exists.

[hold — let it sit for a beat]

Look at the reflection in the lens. That's a window. In a flat I've never
been to.

[SHOT — she puts them on, glances off camera]

Whole thing took forty minutes. The frames are real, the face isn't, and I
genuinely can't tell you which part people notice first.

[SHOT — product on stone, hero still]

That's the point.
```

---

**V2 · The reveal, held back**

```
[SHOT — Maya wearing the sunglasses, mid-answer, street behind her]

I keep getting asked how long the shoot took.

[beat]

There wasn't one.

[SHOT — same frame, she takes them off]

No photographer, no studio, no model. Just the product photos the brand
already had, and an afternoon.

[SHOT — hero still]

If you had to look twice — that's the whole business.
```

---

**V3 · The objection, answered first**

```
[SHOT — Maya at the desk, sunglasses pushed up on her head]

"AI can't do glass." That's the one I get every week.

[SHOT — extreme macro, hinge and lens]

Glass, skin, and a real reflection in the same frame. That's supposed to be
the hard one.

[SHOT — back to Maya, she shrugs slightly]

It's not the model that gets it wrong. It's asking for golden hour.

[SHOT — hero still]
```

---

**V4 · Side by side**

```
[SHOT — contrast frame, two pairs on the paper sweep]

One of these cost three thousand dollars to shoot.

[beat]

The other one cost a hundred and forty.

[SHOT — slow push on the frame]

I'm not going to tell you which. Neither will your customers.

[SHOT — Maya wearing them, plain daylight]

That's not a cost saving. That's a different way of making the campaign.
```

---

**V5 · The technical tell**

```
[SHOT — extreme close-up, sunglasses sliding on, flyaway hair moving]

Freckles. Pores. A bit of shine on the nose.

[beat]

That's it. That's the whole trick.

[SHOT — Maya, medium, flat window light]

Every fake-looking AI person you've scrolled past had perfect skin and warm
light. Real people have neither.

[SHOT — hero still]

Ask for boring light. It's the only note that matters.
```

---

**V6 · Volume**

```
[SHOT — Maya, street, wearing the sunglasses]

Same product. Five faces, five cities, one afternoon.

[SHOT — quick cut, unboxing, hands only]

Twelve variations of this in the time it takes to book a studio.

[SHOT — back to Maya]

That's not a nice-to-have if you're testing creative. That's the entire
difference between three tests a week and thirty.

[SHOT — hero still]
```

---

## 7 · The 12 spots

Paste `spots.csv` into the Spots tab, then fill in these hook IDs and slugs.

| # | Hook | Slug | Format | Prompt |
|---|---|---|---|---|
| 01 | H008 | nobody-in-this-ad-exists | Product review | P1 · V1 |
| 02 | H008 | there-wasnt-a-shoot | Street interview | P4 · V2 |
| 03 | H013 | you-asked-for-golden-hour | UGC entertainment | P5 · V3 |
| 04 | H007 | three-grand-or-one-forty | Product review | P7 · V4 |
| 05 | H018 | freckles-pores-shine | ASMR | P3 · V5 |
| 06 | H017 | five-faces-one-afternoon | Street interview | P4 · V6 |
| 07 | H011 | twelve-variations-forty-minutes | Unboxing | P2 |
| 08 | H009 | booked-till-october | UGC entertainment | P5 |
| 09 | H010 | its-the-light | Product review | P1 |
| 10 | H015 | thirty-creatives-a-week | Street interview | P4 |
| 11 | H016 | real-face-real-light | ASMR | P3 |
| 12 | H014 | third-brand-this-month | Unboxing | P2 |

---

## 8 · Notes

- Generate the avatar angle sheet **before** anything else and lock one master
  frame. Every clip after that feeds the same image to Seedance 2.
- Spots 01–06 are the six script variants — post those first, in order, and
  watch which opening holds. That's your read for T02.
- P6 hero still doubles as the carousel cover and the Reels cover. Generate it
  at 9:16 and crop, never the other way round.
- If a generation drifts warm, don't re-roll — add the offending word to the
  negative list and re-run. Re-rolling on a warm drift usually gives you a
  warmer one.
