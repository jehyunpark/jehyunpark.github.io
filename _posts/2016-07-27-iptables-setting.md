---
layout: post
title: "Linux 포트 열기, 닫기, 포워딩 설정"
excerpt: ""
categories: [linux]
---

- iptables 포트 열기

```
iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT
iptables -I OUTPUT 1 -p tcp --dport 80 -j ACCEPT
```

- iptables 포트 포워딩 설정

```
// 80 포트를 9042로 포워딩
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9042
```

- iptables 포트 포워딩 삭제

```
iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9042
```

- iptables 확인

```
iptables -t nat -L
```
