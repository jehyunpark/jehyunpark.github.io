---
layout: post
title: "Vim에디터에서 내용을 클립보드로 복사하기"
excerpt: ""
categories: [vim]
---

# Vim에디터에서 내용을 클립보드로 복사하기

- 방법 1
	- 선택한 부분 클립보드로 복사하기: VISUAL 모드로 선택 후, ```"*y```
	- 전체 내용 클립보드로 복사하기: ```ggVG "*y```
- 방법 2
	- 선택한 부분 클립보드로 복사하기: VISUAL 모드로 선택 후, ```:w !pbcopy```
	- 전체 내용 클립보드로 복사하기: ```:%w !pbcopy```
	- 클립보드로부터 Vim에 붙여넣기: ```:r !pbpaste```

- 참고
	- [https://stackoverflow.com/questions/3961859/how-to-copy-to-clipboard-in-vim](https://stackoverflow.com/questions/3961859/how-to-copy-to-clipboard-in-vim){:target="_blank"}
	- [https://superuser.com/questions/227385/how-do-i-select-all-text-in-vi-vim](https://superuser.com/questions/227385/how-do-i-select-all-text-in-vi-vim){:target="_blank"}
