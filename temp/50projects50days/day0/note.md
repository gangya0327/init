### CSS书写顺序

#### 1. 布局，定位
display, float, position, top, right, bottom, left, z-index

#### 2. 大小，排版
width, min-width, max-width, height, margin, margin-top, margin-right, padding, border, outline, list-style

#### 3. 文字
font, line-height, text-align, letter-spacing, color

#### 4. 背景
background

#### 5. 其他
opacity, cursor, animation, transition

#### 示例参考
```css
el {
    display: ;
    visibility: ;
    float: ;
    clear: ;
    position: ;
    top: ;
    right: ;
    bottom: ;
    left: ;
    z-index: ;
    width: ;
    min-width: ;
    max-width: ;
    height: ;
    min-height: ;
    max-height: ;
    overflow: ;
    margin: ;
    margin-top: ;
    margin-right: ;
    margin-bottom: ;
    margin-left: ;
    padding: ;
    padding-top: ;
    padding-right: ;
    padding-bottom: ;
    padding-left: ;
    border: ;
    border-top: ;
    border-right: ;
    border-bottom: ;
    border-left: ;
    border-width: ;
    border-top-width: ;
    border-right-width: ;
    border-bottom-width: ;
    border-left-width: ;
    border-style: ;
    border-top-style: ;
    border-right-style: ;
    border-bottom-style: ;
    border-left-style: ;
    border-color: ;
    border-top-color: ;
    border-right-color: ;
    border-bottom-color: ;
    border-left-color: ;
    outline: ;
    list-style: ;
    table-layout: ;
    caption-side: ;
    border-collapse: ;
    border-spacing: ;
    empty-cells: ;
    font: ;
    font-family: ;
    font-size: ;
    line-height: ;
    font-weight: ;
    text-align: ;
    text-indent: ;
    text-transform: ;
    text-decoration: ;
    letter-spacing: ;
    word-spacing: ;
    white-space: ;
    vertical-align: ;
    color: ;
    background: ;
    background-color: ;
    background-image: ;
    background-repeat: ;
    background-position: ;
    opacity: ;
    cursor: ;
    content: ;
    quotes: ;
}
```

### day1-expanding-cards
- 过渡属性`transition`，动画属性`animation`
- 节点类数组`classList`，有方法`add, remove, toggle`

### day2-progresss-steps
- 属性选择器使用“:”符号 `.btn:disabled`
- css变量声明`--xxx:aa`，使用`bb:var(--xxx)`
- 简化节点内容，部分内容可使用:before伪元素
- 有计数时使用变量值
- 抽取公共方法
