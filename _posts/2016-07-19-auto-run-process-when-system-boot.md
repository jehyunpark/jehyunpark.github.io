---
layout: post
title: "Linux 시스템 부팅 시, 서비스 자동 실행하기"
excerpt: ""
categories: [linux]
---

- `start.sh` 파일에 실행할 명령어 작성

```
#!/bin/bash
java -jar /home/사용자/Documents/test/test.war &
```

- `start.sh` 권한 변경하기

```
chmod 755 /home/사용자/Documents/test/start.sh
```

- `/etc/rc.local`에 특정 사용자로 `start.sh`을 실행하는 명령어 입력

```
su - 사용자 -c /home/사용자/Documents/test/start.sh
```
