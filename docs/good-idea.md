# 好的想法

### 网站置灰

```css
/* -webkit-filter css滤镜 */
html.gray-mode {
  filter: grayscale(0.95);
  -webkit-filter: grayscale(0.95);
}
```

- blur 模糊-webkit-filter:blur(2px);
- brightness 亮度-webkit-filter:brightness(25%);
- contrast 对比度-webkit-filter: contrast(50%);
- drop-shadow 阴影-webkit-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
- opacity 透明度-webkit-filter: opacity(50%);
- grayscale 灰度-webkit-filter: grayscale(80%);
- sepia 褐色-webkit-filter: sepia(100%);
- invert 反色-webkit-filter: invert(100%);
- hue-rotate 色相旋转-webkit-filter:hue-rotate(180deg);
- saturate 饱和度-webkit-filter: saturate(1000%);
