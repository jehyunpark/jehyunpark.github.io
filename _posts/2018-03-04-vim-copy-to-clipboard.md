---
layout: post
title: "Vim에디터에서 내용을 클립보드로 복사하기"
category: Vim
---

# Vim에디터에서 내용을 클립보드로 복사하기

- On Mac OSX
	- 선택한 부분 클립보드로 복사하기: VISUAL 모드로 선택 후, ```:w !pbcopy```
	- 전체 내용 클립보드로 복사하기: ```:%w !pbcopy```
	- 클립보드로부터 Vim에 붙여넣기: ```:r !pbpaste```
