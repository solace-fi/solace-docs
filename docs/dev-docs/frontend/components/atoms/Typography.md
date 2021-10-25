## Props

### `TextFontProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `t1` (optional) | boolean | Apply style from [**Text1Css**](/docs/dev-docs/frontend/components/atoms/Typography#text1css-exported).
| `t2` (optional) | boolean | Apply style from [**Text2Css**](/docs/dev-docs/frontend/components/atoms/Typography#text2css-exported).
| `t3` (optional) | boolean | Apply style from [**Text3Css**](/docs/dev-docs/frontend/components/atoms/Typography#text3css-exported).
| `t4` (optional) | boolean | Apply style from [**Text4Css**](/docs/dev-docs/frontend/components/atoms/Typography#text4css-exported).

### `TextAlignProps` (exported)

| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `textAlignCenter` (optional) | boolean | Align text center.
| `textAlignLeft` (optional) | boolean | Align text left.
| `textAlignRight` (optional) | boolean | Align text right.

### `TextStyleProps` (exported)

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
- **Extends**: [**TextFontProps**](/docs/dev-docs/frontend/components/atoms/Typography#textfontprops-exported), [**TextAlignProps**](/docs/dev-docs/frontend/components/atoms/Typography#textalignprops-exported), [**TextStyleProps**](/docs/dev-docs/frontend/components/atoms/Typography#textstyleprops-exported)

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
- **Additional Styles**: [**AlignHeightCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignheightcss), [**AlignVerticalCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignverticalcss), [**AlignHorizontalCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignhorizontalcss)
- **Info**: Align text vertically and horizontally, and fix height and line-height.

### `TextOutlineCss`
- **Additional Styles**: [**AlignHeightCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignheightcss)
- **Info**: Create outline for text.

### `NoWrapCss`
- **Info**: Disable wrapped text.

### `Text1Css` (exported)
- **Additional Styles**: [**Font1**](/docs/dev-docs/frontend/components/atoms/Typography#font1)
- **Info**: Custom style with large heading.

### `Text2Css` (exported)
- **Additional Styles**: [**Font2**](/docs/dev-docs/frontend/components/atoms/Typography#font2)
- **Info**: Custom style with medium font size.

### `Text3Css` (exported)
- **Additional Styles**: [**Font3**](/docs/dev-docs/frontend/components/atoms/Typography#font3)
- **Info**: Custom style with small font size.

### `Text4Css` (exported)
- **Additional Styles**: [**Font4**](/docs/dev-docs/frontend/components/atoms/Typography#font4)
- **Info**: Custom style with smallest font size.

### `TextFontCss` (exported)
- **Props**: [**TextFontProps**](/docs/dev-docs/frontend/components/atoms/Typography#textfontprops-exported)
- **Additional Styles**: [**Text1Css**](/docs/dev-docs/frontend/components/atoms/Typography#text1css-exported), [**Text2Css**](/docs/dev-docs/frontend/components/atoms/Typography#text2css-exported), [**Text3Css**](/docs/dev-docs/frontend/components/atoms/Typography#text3css-exported), [**Text4Css**](/docs/dev-docs/frontend/components/atoms/Typography#text4css-exported)
- **Info**: Determine font size and heading of text.

### `TextAlignCss` (exported)
- **Props**: [**TextAlignProps**](/docs/dev-docs/frontend/components/atoms/Typography#textalignprops-exported)
- **Additional Styles**: [**AlignCenterCss**](/docs/dev-docs/frontend/components/atoms/Typography#aligncentercss), [**AlignLeftCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignleftcss), [**AlignRightCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignrightcss)
- **Info**: Determine text alignment.

### `TextStyleCss` (exported)
- **Props**: [**TextStyleProps**](/docs/dev-docs/frontend/components/atoms/Typography#textstyleprops-exported)
- **Additional Styles**: [**NowrapCss**](/docs/dev-docs/frontend/components/atoms/Typography#nowrapcss), [**TextOutlineCss**](/docs/dev-docs/frontend/components/atoms/Typography#textoutlinecss), [**AlignAutoCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignautocss), [**AlignVerticalCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignverticalcss), [**AlignHorizontalCss**](/docs/dev-docs/frontend/components/atoms/Typography#alignhorizontalcss)
- **Info**: Determine text style.

### `GeneralTextCss` (exported)
- **Props**: [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported)
- **Additional Styles**: [**TextFontCss**](/docs/dev-docs/frontend/components/atoms/Typography#textfontcss-exported), [**TextAlignCss**](/docs/dev-docs/frontend/components/atoms/Typography#textaligncss-exported), [**TextStyleCss**](/docs/dev-docs/frontend/components/atoms/Typography#textstylecss-exported)
- **Info**: Determine alignment, style, font size, and heading of text.

## Components

### `Text` (exported)
- **Props**: [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported)
- **Info**: Div element to contain text.

### `TextSpan` (exported)
- **Props**: [**GeneralTextProps**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextprops-exported), [**GeneralElementProps**](/docs/dev-docs/frontend/components/general-interfaces#generalelementprops-exported)
- **Additional Styles**: [**GeneralTextCss**](/docs/dev-docs/frontend/components/atoms/Typography#generaltextcss-exported), [**GeneralElementCss**](/docs/dev-docs/frontend/components/general-interfaces#generalelementcss-exported)
- **Info**: Span element to contain text.
