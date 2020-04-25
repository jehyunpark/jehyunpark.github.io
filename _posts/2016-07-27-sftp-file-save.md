---
title: Linux 원격지의 파일을 로컬에 저장하기
author: jehyunpark
category: [Dev, Linux]
tags: [linux]
---

- sftp 접속

```
$ sftp user@ip
```

- 원하는 파일 로컬에 저장

```
sftp> get /path/filename
```

- 저장 완료 후

```
sftp> exit
```
