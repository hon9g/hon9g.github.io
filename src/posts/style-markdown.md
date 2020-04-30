---
date: "2020-04-24"
title: "Styles of Mark down"
---

### text decorate
- this is **strong**.
- this is *italic*.
- this is <mark>mark</mark>.
- 이건 한글입니다.

> this is a blockquote

# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5

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
