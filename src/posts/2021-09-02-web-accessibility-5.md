---
layout: post
title: 웹 접근성이란(이해의 용이성) - 5
comments: false
categories: [Node]
tags: [Web Accessibility, WAI]
date: "2021-09-02"
---

# 2️⃣3️⃣ 마크업 오류 방지

> 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 합니다.

## 1. 요소의 열고 닫음

표준에서 특별히 정한 경우를 제외하고는 시작 요소와 끝나는 요소가 정의되어야 합니다.

```html
<!-- 👎Bad -->
<ol>
	<li></li>
	<li></li>
	<li></li>
<ul>
	<li></li>
	<li></li>
</ul>

<!-- 👍Good -->
<ol>
	<li></li>
	<li></li>
	<li></li>
</ol>
<ul>
	<li></li>
	<li></li>
</ul>
```

## 2. 요소의 중첩

요소가 중첩되지 않도록 제공합니다.

```html
<!-- 👎Bad -->
<a href="#"><span>바로가기</a></span>

<!-- 👍Good -->
<a href="#"><span>바로가기</span></a>
```

## 3. 중복된 속성 사용

하나의 요소 안에서 속성을 중복하여 선언하지 않습니다.

```html
<!-- 👎Bad -->
<img src="images.jpg" alt="" class="img_001" class="img_box" />

<!-- 👍Good -->
<img src="images.jpg" alt="" class="img_001 img_box" />
```

## 4. id 속성 값 중복

하나의 마크업 문서에서는 같은 id 값을 중복하여 선언하지 않습니다.

```html
<!-- 👎Bad -->
<div id="gnb" class="pc_gnb">...</div>
<ul id="gnb" class="mo_gnb">...</ul>

<!-- 👍Good -->
<div id="gnb" class="pc_gnb">...</div>
<ul id="gnb_m" class="mo_gnb">...</ul>
```

# 2️⃣4️⃣ 웹 애플리케이션 접근성 준수

> 콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 합니다.

## 1. 사이트 전체가 플래시로 구현된 경우

플래시를 대체 할 수 있는 접근 가능한 콘텐츠로 제공합니다.