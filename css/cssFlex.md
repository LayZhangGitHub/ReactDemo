## 容器属性

### 以下6个属性设置在容器上。
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

#### flex-direction
```
flex-direction:
row | row-reverse | column | column-reverse;
```

#### flex-wrap
```
flex-wrap: nowrap | wrap | wrap-reverse;
```

#### flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

#### justify-content
```
justify-content: flex-start | flex-end | center | space-between | space-around;
```

#### align-items
```
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

#### align-content
```
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```