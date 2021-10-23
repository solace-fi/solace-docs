## Props

### `TextFontProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `t1` (optional) | boolean | Apply `Text1` css.
| `t2` (optional) | boolean | Apply `Text2` css.
| `t3` (optional) | boolean | Apply `Text3` css.
| `t4` (optional) | boolean | Apply `Text4` css.

### `TextAlignProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `textAlignCenter` (optional) | boolean | Align text center.
| `textAlignLeft` (optional) | boolean | Align text left.
| `textAlignRight` (optional) | boolean | Align text right.

### `TextStyledProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `nowrap` (optional) | boolean | Disable wrapped text.
| `mont` (optional) | boolean | Apply Montserrat font style.
| `lineHeight` (optional) | number | Set line height of text.
| `analogical` (optional) | boolean | Set text color to blend with background theme.
| `light` (optional) | boolean | Set text color to light.
| `dark` (optional) | boolean | Set text color to dark.
| `outlined` (optional) | boolean | Outline text.
| `autoAlignVertical` (optional) | boolean | Set vertical margin of text to auto.
| `autoAlignHorizontal` (optional) | boolean | Set horizontal margin of text to auto.
| `autoAlign` (optional) | boolean | Align text vertically and horizontally, and fix height and line-height.
| `bold` (optional) | boolean | Increased font weight.
| `info` (optional) | boolean | Apply info color to text.
| `success` (optional) | boolean | Apply success color to text.
| `error` (optional) | boolean | Apply error color to text.
| `warning` (optional) | boolean | Apply warning color to text.

### `GeneralTextProps` (exported)
- **Extends**: TextFontProps, TextAlignProps, TextStyleProps

## Styles

### `Font1`
- **Info**: Custom large font size. 24px (22px on mobile)

### `Font2`
- **Info**: Custom medium font size. 20px (18px on mobile)

### `Font3`
- **Info**: Custom small font size. 16px (14px on mobile)

### `Font4`
- **Info**: Custom smallest font size. 14px (12px on mobile)

### `AlignCenterCss`
- **Info**: Align text center.

### `AlignLeftCss`
- **Info**: Align text left.

### `AlignRightCss`
- **Info**: Align text right.

### `AlignHeightCss`
- **Info**: Fix height and line-height of text.

### `AlignVerticalCss`
- **Info**: Set vertical margin of text to auto.

### `AlignHorizontalCss`
- **Info**: Set horizontal margin of text to auto.

### `AlignAutoCss`
- **Additional Styles**: AlignHeightCss, AlignVerticalCss, AlignHorizontalCss
- **Info**: Align text vertically and horizontally, and fix height and line-height.

### `TextOutlineCss`
- **Additional Styles**: AlignHeightCss
- **Info**: Create outline for text.

### `NoWrapCss`
- **Info**: Disable wrapped text.

### `Text1Css` (exported)
- **Additional Styles**: Font1
- **Info**: Custom style with large heading.

### `Text2Css` (exported)
- **Additional Styles**: Font2
- **Info**: Custom style with medium font size.

### `Text3Css` (exported)
- **Additional Styles**: Font3
- **Info**: Custom style with small font size.

### `Text4Css` (exported)
- **Additional Styles**: Font4
- **Info**: Custom style with smallest font size.

### `TextFontCss` (exported)
- **Props**: TextFontProps
- **Additional Styles**: Heading1Css, Heading2Css, Heading3Css, Heading4Css, Text1Css, Text2Css, Text3Css, Text4Css
- **Info**: Determine font size and heading of text.

### `TextAlignCss` (exported)
- **Props**: TextAlignProps
- **Additional Styles**: AlignCenterCss, AlignLeftCss, AlignRightCss
- **Info**: Determine text alignment.

### `TextStyleCss` (exported)
- **Props**: TextStyleProps
- **Additional Styles**: NowrapCss, TextOutlineCss, AlignAutoCss, AlignVerticalCss, AlignHorizontalCss
- **Info**: Determine text style.

### `GeneralTextCss` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: TextFontCss, TextAlignCss, TextStyleCss
- **Info**: Determine alignment, style, font size, and heading of text.

## Components

### `Text` (exported)
- **Props**: GeneralTextProps
- **Additional Styles**: GeneralTextCss
- **Info**: Div element to contain text.

### `TextSpan` (exported)
- **Props**: GeneralTextProps, GeneralElementProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Span element to contain text.
