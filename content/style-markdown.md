---
date: "2020-04-24"
title: "Quick check for Markdown Styles"
---

This is to allow you quickly check the markdown style in this blog.
It is based on the gatsby plugin `gatsby-transformer-remark` and `gatsby-remark-prismjs` with some customized style by `@hon9g`.

### text decorate
- this is **strong**.
- this is *italic*.
- this is <mark>mark</mark>.
> this is a blockquote
- 이건 한글입니다.

### source code
- this is `inline code`

```JavaScript
const greeting = 'Hi, This is code block'
const year = 2020
let flag = false

const isEven = n => {
  if (!(n%2)) {
    flag = true
  }
}

console.log(isEven(year)) //expected true
```

### table

|a|b|c|
|:---:|:---:|:---:|
|1|2|3|

# heading 1
## heading 2
### heading 3