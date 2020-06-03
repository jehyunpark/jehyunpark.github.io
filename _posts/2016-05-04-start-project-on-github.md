---
layout: post
title: "Github에서 프로젝트 시작하기"
excerpt: ""
categories: [github]
---
## Local에 프로젝트 설정

### 1. git 초기화
해당 프로젝트 경로에서 git 초기화 명령어를 입력한다.

``` shell
git init
```

### 2. git user 정보 추가

``` shell
git config --local user.email "jehyunpark@github.com"
git config --local user.name "jehyunpark"
```
`--local` - 해당 프로젝트에서만 입력한 user 정보를 사용한다는 옵션  
`--global` - 해당 사용자가 모든 프로젝트에서 user정보를 동일하게 설정하는 옵션

### 3. 프로젝트 폴더에 README.md 생성 후 내용 추가

``` shell
gedit README.md
```

### 4. git으로 관리하지 않을 파일 정의
`.gitignore` 파일 생성

``` shell
gedit .gitignore
```
[gitignore.io][] 에 접속해서 프로젝트에서 사용하는 언어, 빌드 툴, IDE 등을 입력한 후, `Generate`버튼을 클릭한다.  
Generate 된 내용을 `.gitignore`에 추가한다.

### 5. 모든 파일을 Staged 상태로 만들고 commit
`git add`는 파일을 새로 추적하거나 수정한 파일을 `Staged` 상태로 만들 때 사용한다.

``` shell
git add .
git commit -m 'New Project'
```


## Github에 로그인하여 새로운 repository를 생성

### 1. Remote repository 추가
Github에 새로 생성한 repository 주소를 복사한다.  
`origin`이라는 이름으로 Remote Repository로 추가

``` shell
git remote add origin https://github.com/jehyunpark/new-project
```

### 2. Remote repository에 push

``` shell
git push -u origin master
```

[gitignore.io]: https://www.gitignore.io/
