---
layout: post
title: .gitignore 설정했는데 정상적으로 적용되지 않는 문제 해결하기
---

#### 1. 캐시를 삭제한다.
``` shell
$ git rm -r --cached .
```

#### 2. 다시 커밋한다.
``` shell
$ git add .
$ git commit -m "fixed untracked files”
```
