## Props

### `TextFontProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `h1` (optional) | boolean | Apply `Heading1` css.
| `h2` (optional) | boolean | Apply `Heading2` css.
| `h3` (optional) | boolean | Apply `Heading3` css.
| `h4` (optional) | boolean | Apply `Heading4` css.
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
| `outlined` (optional) | boolean | Outline text.
| `autoAlignVertical` (optional) | boolean | Set vertical margin of text to auto.
| `autoAlignHorizontal` (optional) | boolean | Set horizontal margin of text to auto.
| `autoAlign` (optional) | boolean | Align text vertically and horizontally, and fix height and line-height.
| `bold` (optional) | boolean | Increased font weight.
| `green` (optional) | boolean | Apply green color to text.
| `error` (optional) | boolean | Apply error color to text.
| `warning` (optional) | boolean | Apply warning color to text.
| `high_em` (optional) | boolean | Apply high emphasis level of color to text.
| `med_em` (optional) | boolean | Apply medium emphasis level of color to text.
| `low_em` (optional) | boolean | Apply low emphasis level of color to text.

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

### `HeadingCss`
- **Info**: Custom style increasing font weight.

### `Heading1Css`
- **Additional Styles**: HeadingCss, Font1
- **Info**: Custom style with heading and large font size.

### `Heading2Css`
- **Additional Styles**: HeadingCss, Font2
- **Info**: Custom style with heading and medium font size.

### `Heading3Css`
- **Additional Styles**: HeadingCss, Font3
- **Info**: Custom style with heading and small font size.

### `Heading4Css`
- **Additional Styles**: HeadingCss, Font4
- **Info**: Custom style with heading and smallest font size.

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
- **Info**: Normal text component.

### `TextSpan` (exported)
- **Props**: GeneralTextProps, GeneralElementProps
- **Additional Styles**: GeneralTextCss, GeneralElementCss
- **Info**: Normal text span component.

### `Text1` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text1Css
- **Info**: Normal text component with large font size with no heading.

### `Text2` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text2Css
- **Info**: Normal text span component with medium font size with no heading.

### `Text3` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text3Css
- **Info**: Normal text span component with small font size with no heading.

### `Text4` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Text4Css
- **Info**: Normal text span component with smallest font size with no heading.

### `Heading1` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading1Css
- **Info**: Normal text span component with large font size with heading.

### `Heading2` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading2Css
- **Info**: Normal text span component with medium font size with heading.

### `Heading3` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading3Css
- **Info**: Normal text span component with small font size with heading.

### `Heading4` (exported)
- **Props**: TextAlignProps, TextStyleProps
- **Additional Styles**: TextAlignCss, TextStyleCss, Heading4Css
- **Info**: Normal text span component with smallest font size with heading.