---
layout: post
title: 자바스크립트 - null과 undefined 차이
comments: false
categories: [JAVASCRIPT]
tags: [javascript, null, undefined]
date: "2019-12-17"
---

내가 헷갈리기 때문에 작성하는 null과 undefined의 차이~~  
그냥 보면 둘 다 '없음'을 나타내지만, 용도와 목적이 다른 두 객체를 비교해보려고 한다.

<br><br><br>

# 1. null

null이라는 **빈 값을 할당한 상태**로 null은 자료형이 객체이다.

```javascript
let num = null
console.log(num) // null
console.log(typeof num) // object
```

<br><br><br>

# 2. undefined

**변수를 선언만** 하고, 아무런 값을 할당하지 않은 상태이다.  
그러므로 자료형이 결정되지 않았다.

```javascript
let num
console.log(num) // undefined
console.log(typeof num) // undefined
```

<br><br><br>

# 3. null == undefined

하지만 비교연산자 == 는 true가 나온다. 이유는 자동형변환으로 자료형을 강제로 맞춰 비교하기 때문이다.  
따라서 둘의 자료형을 맞추면 '없음'이라는 값이 나타나기 때문에 true라는 결과가 나온다.  
하지만 === 식을 비교한다면 자동형변환이 이루어지지 않아 false 값이 나온다.

<br><br><br><br><br>

> <subtitle> refernece

-   <https://helloworldjavascript.net/pages/160-null-undefined.html>
