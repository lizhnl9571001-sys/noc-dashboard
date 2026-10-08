# NOC 大屏设计资源

来源：[Figma 大屏](https://www.figma.com/design/D8cf68XwZMH4BYNXh7LACM/)；导出日期：2026-10-08。

## 内容

- `tokens/design-tokens.json`：49 个变量与 7 个文字样式，使用 $type / $value 格式，保留颜色别名。
- `tokens/figma-source.json`：原始变量、集合、模式、字体与来源 ID，供核对。
- `styles/variables.css`：可直接引入的 CSS 变量，统一使用 --noc- 前缀。
- `icons/`：拓扑矩形、圆形两个 SVG；8 个来源节点按内容去重。文件没有独立图标库，这些是拓扑节点基础图形，并非完整业务图标集。

## React + TypeScript 使用

将 styles、tokens、icons 放入项目 src/design-system 目录。

```tsx
import './design-system/styles/variables.css';
```

```css
.dashboard {
  background: var(--noc-color-bg);
  color: var(--noc-color-text);
  gap: var(--noc-space-16);
  border-radius: var(--noc-radius-4);
}
.panel-title {
  font-family: var(--noc-type-panel-title-family), sans-serif;
  font-size: var(--noc-type-panel-title-size);
  font-weight: var(--noc-type-panel-title-weight);
  line-height: var(--noc-type-panel-title-line-height);
}
```

SVG 保留 Figma 原始颜色和描边；使用 img 引用时不继承 CSS 颜色。字体文件未包含，请由项目加载 Noto Sans SC 与 Rajdhani；否则会使用回退字体。这里只导出设计资源，不包含组件或图表运行代码。

## 上传 GitHub

1. 解压 ZIP，进入 noc-design-assets 文件夹。
2. 在 GitHub 仓库中选择 Add file → Upload files。
3. 上传本目录下的 tokens、styles、icons 文件夹和 README.md，提交更改。

变量 JSON 与 CSS 应同步修改；figma-source.json 保留导出快照，避免误认为最新 Figma 状态。

