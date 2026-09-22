# Design analysis

Source: [Figma portfolio designs](https://www.figma.com/design/93v809jzL8xLenP5LpVcEk/isaacvendryes.com?node-id=1-13).
Behavior reference: [Angelina Cao](https://angelinacao.com/).

## Layout

The selected Figma section contains the landing frame `1:14`, BRYX case study `1:64`, and Wabtec case study `1:356`. Design context and screenshots were inspected before implementation.

The 1440px landing design has a 64px header, a 400px introduction column with 32px padding, a 32px gap, and a two-column project grid with 16px gutters. Project images use warm gray/peach and cool gray/lavender backgrounds, with compact 12px metadata below.

Both case studies use an 834px reading column, 32px section spacing, fine gray dividers, paired text columns, and pale bordered panels. Body copy is 14px with a 1.6 line height; serif headings are 32px and 20px. The user's correction replaces the second case study's Newsreader typography with the shared New York serif stack.

At tablet sizes, the introduction moves above the grid. Phones use one project column and stack case-study columns. The desktop back link moves into a sticky top row when the side margin can no longer accommodate it. Image and flow galleries scroll horizontally instead of expanding the page width.

## Reference behavior

Live inspection showed fixed 100px blur regions at the top and bottom. Each has eight overlapping gradient masks with blur strengths from 0.1328125px through 17px. The intro stays in place on desktop while work scrolls. The effect is caused by content moving under persistent blur layers.

The reference page's entrance configuration uses opacity from 0.001 to 1, vertical motion from 40px to 0, an 800ms duration, easing `[0.12, 0.23, 0.5, 1]`, and staggered delays. The portfolio uses the same timing and easing with a subtler 24px movement. The edge region reduces to 64px on smaller screens.

## Asset decisions

Existing screenshots are reused. The similarly named `bryx_framework_roboflat.png` is an image placeholder, so the finished framework diagram was exported from Figma. The before/after workflow diagrams were also exported directly, rather than using the placeholder comparison file. Original repo files were preserved.

New York is requested locally; it falls back consistently across all pages on devices without that font. Google Sans Flex and the exact Figma navigation glyphs are stored locally so the implementation does not depend on expiring Figma URLs.
