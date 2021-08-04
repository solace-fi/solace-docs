## Props

### `TextFontProps` (exported)
- **h1 (boolean)**?: Apply `Heading1` css
- **h2 (boolean)**?: Apply `Heading2` css
- **h3 (boolean)**?: Apply `Heading3` css
- **t1 (boolean)**?: Apply `Text1` css
- **t1 (boolean)**?: Apply `Text2` css
- **t1 (boolean)**?: Apply `Text3` css

### `TextAlignProps` (exported)
- **textAlignCenter (boolean)**?: Align text center
- **textAlignLeft (boolean)**?: Align text left
- **textAlignRight (boolean)**?: Align text right

### `TextStyledProps` (exported)
- **nowrap (boolean)**?: Disable wrapped text
- **outlined (boolean)**?: Outline text
- **autoAlignVertical (boolean)**?: Set vertical margin of text to auto
- **autoAlignHorizontal (boolean)**?: Set horizontal margin of text to auto
- **autoAlign (boolean)**?: Align text vertically and horizontally, and fix height and line-height.
- **bold (boolean)**?: Increased font weight
- **green (boolean)**?: Apply green color to text
- **error (boolean)**?: Apply error color to text
- **warning (boolean)**?: Apply warning color to text

### `GeneralTextProps` (exported)
- **Extends**: TextFontProps, TextAlignProps, TextStyleProps

## Styles

### `Font1`
- **Info**: Custom small font size.

### `Font2`
- **Info**: Custom medium font size.

### `Font3`
- **Info**: Custom large font size.

### `HeadingCss`
- **Info**: Custom style increasing font weight.

### `Heading1Css`
- **Additional Styles**: HeadingCss, Font1
- **Info**: Custom style with heading and small font size.

### `Heading2Css`
- **Additional Styles**: HeadingCss, Font2
- **Info**: Custom style with heading and medium font size.

### `Heading3Css`
- **Additional Styles**: HeadingCss, Font3
- **Info**: Custom style with heading and large font size.

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

### `GlobalFont` (exported)
- **Info**: Global default font size.

### `Text1Css` (exported)
- **Additional Styles**: Font1
- **Info**: Custom style with small heading.

### `Text2Css` (exported)
- **Additional Styles**: Font2
- **Info**: Custom style with medium font size.

### `Text3Css` (exported)
- **Additional Styles**: Font3
- **Info**: Custom style with large font size.

### `TextFontCss` (exported)
- **Props**: TextFontProps
- **Additional Styles**: Heading1Css, Heading2Css, Heading3Css, Text1Css, Text2Css, Text3Css
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
- **Info**: Normal text component.

### `TextSpan` (exported)
- **Props**: GeneralTextProps, GeneralElementProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Normal text span component.

### `Text1` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text1Css
- **Info**: Normal text component with small font size with no heading.

### `Text2` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text2Css
- **Info**: Normal text span component with medium font size with no heading.

### `Text3` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text3Css
- **Info**: Normal text span component with large font size with no heading.

### `Heading1` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading1Css
- **Info**: Normal text span component with small font size with heading.

### `Heading2` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading2Css
- **Info**: Normal text span component with medium font size with heading.

### `Heading3` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading3Css
- **Info**: Normal text span component with large font size with heading.