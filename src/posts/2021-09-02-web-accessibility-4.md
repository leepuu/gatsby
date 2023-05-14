---
layout: post
title: 웹 접근성이란(이해의 용이성) - 4
comments: false
categories: [Node]
tags: [Web Accessibility, WAI]
date: "2021-09-02"
---

# 1️⃣7️⃣ 기본 언어 표시

> 웹 브라우저는 웹 페이지를 구성하는 텍스트 콘텐츠의 언어 정보를 바탕으로 
> 텍스트 콘텐츠를 화면에 표시하거나 보조 기술로 전달하기 때문에 **주로 사용하는 언어를 명시**해야 합니다.

```html
<html lang="ko">
	...
</html>
```

# 1️⃣8️⃣ 사용자 요구에 따른 실행

> 컨트롤이나 사용자 입력의 기능은 사용자의 마우스 클릭이나 키보드 조작에 의하여 실행되어야 하므로, **사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야** 합니다.

## 1. 페이지 진입 시 뜨는 새 창(팝업)

페이지 진입 시 새 창이 뜨지 않도록 제공합니다.

## 2. 화면을 가리는 레이어 팝업

화면을 가리는 경우 최 상단에 마크업합니다.

![레이어](/posts/web_accessibilty/img24.png)

```html
<!-- 👎Bad -->
<body>
	...
	<div class="popup">레이어 팝업 내용</div>
</body>

<!-- 👍Good -->
<body>
	<div class="popup">레이어 팝업 내용</div>
	...
</body>
```

## 3. 사전에 인식할 수 없는 새 창

새 창이라는 것을 알 수 있도록 제공합니다.

```html
<!-- 👎Bad -->
<a href="#">링크입니다.</a>

<!-- 👍Good -->
<a href="#" title="새 창">링크입니다.</a>
<a href="#" target="_blank">링크입니다.</a>
<a href="#">링크입니다.<span class="blind">새 창</span></a>
```

## 4. 컨트롤 선택 시 기능 실행

컨트롤을 선택하고 따로 버튼을 제공하여 기능을 실행합니다.

## 5. Select에 onchange 이벤트 적용

키보드 접근이 불가능하므로 따로 버튼을 제공하여 기능을 실행합니다.

# 1️⃣9️⃣ 콘텐츠의 논리성

> 콘텐츠는 보조 기술 사용자가 **맥락을 이해할 수 있도록 논리적인 순서로 제공**해야 합니다.

## 1. 탭 콘텐츠

제목 → 내용 → 제목 → 내용 순서로 마크업을 진행하거나 해당 내용에 대한 제목을 숨김 처리로 제공합니다.

![탭](/posts/web_accessibilty/img25.png)

```html
<!-- 👎Bad -->
<ul>
	<li><a href="#">공지사항</a></li>
	<li><a href="#">보도자료</a></li>
	<li><a href="#">입찰정보</a></li>
	<li><a href="#">채용정보</a></li>
</ul>
<div>
	<div>공지사항 내용</div>
	<div>보도자료 내용</div>
	<div>입찰정보 내용</div>
	<div>채용정보 내용</div>
</div>

<!-- 👍Good -->
<h4><a href="#">공지사항</a></h4>
<div>공지사항 내용</div>
<h4><a href="#">보도자료</a></h4>
<div>보도자료 내용</div>
<h4><a href="#">입찰정보</a></h4>
<div>입찰정보 내용</div>
<h4><a href="#">채용정보</a></h4>
<div>채용정보 내용</div>
```

## 2. 더보기가 존재하는 콘텐츠

제목 → 내용 → 더보기 순서로 마크업 합니다.
![더보기](/posts/web_accessibilty/img26.png)

```html
<!-- 👎Bad -->
<div>
	<h3>행사스케치</h3>
	<a href=".."><span class="blind">더보기</span></a>
</div>
<div>콘텐츠</div>

<!-- 👍Good -->
<h3>행사스케치</h3>
<div>콘텐츠</div>
<a href=".."><span class="blind">더보기</span></a>
```

# 2️⃣0️⃣ 표의 구성

> 표의 이해를 돕기 위한 **내용 및 구조에 대한 정보를 쉽게 제공**해야 합니다.

![표](/posts/web_accessibilty/img27.png)

```html
<table>
	<caption>공지사항 목록</caption>
	...
</table>
```

# 2️⃣1️⃣ 레이블 제공

> 사용자 입력은 용도를 이해할 수 있도록 **대응하는 레이블을 제공**합니다.

## 1. 레이블이 시각적으로 노출되어 있는 경우

입력 서식과 레이블을 1:1로 매칭합니다.
![레이블](/posts/web_accessibilty/img28.png)

```html
<label for="user_id">아이디</label>
<input type="text" id="user_id" />
```

## 2. 레이블이 시각적으로 노출되어 있지 않은 경우

1:1로 매칭하거나 입력 서식에 title을 제공합니다.
![레이블](/posts/web_accessibilty/img29.png)


```html
<label for="user_id">아이디</label>
<input type="text" id="user_id" />

또는

<input type="text" id="user_id" title="아이디"/>
```

# 2️⃣2️⃣ 오류 정정

> 입력 서식 작성 시, 사용자의 실수로 오류가 발생할 경우 이를 **정정할 수 있는 방법**을 제공해야 합니다.

## 1. 입력 오류 시 입력 내용이 모두 사라지는 경우

입력 완료 후 또는 제출 시 오류가 발생하면 **내용이 사라지지 않고 유지**되도록 제공합니다.

## 2. 오류 내용 제공

오류의 원인을 알 수 있도록 제공합니다.

![오류](/posts/web_accessibilty/img30.png)

## 3. 오류 발생 시점으로 초점 이동

오류가 발생된 서식으로 초점을 이동시킵니다.
![오류](/posts/web_accessibilty/img31.png)

```javascript
```