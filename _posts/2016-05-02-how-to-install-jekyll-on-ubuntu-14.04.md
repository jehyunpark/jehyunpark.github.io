---
layout: post
title: How to install Jekyll on Ubuntu 14.04
---
## Install Ruby
- Install RVM  

``` shell
\curl -L https://get.rvm.io | bash -s stable  
```
``` shell
//If you have an error  
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -L https://get.rvm.io | bash -s stable
```

- Apply RVM

``` shell
source ~/.rvm/scripts/rvm
```

- Install Ruby

``` shell
rvm install 2.3.0
```

## Install RubyGems
- [Download RubyGems][Download RubyGems]
- Unpack downloaded file into a directory
- change directory to unpacked folder

``` shell
cd there
```
- ruby setup

``` shell
$ ruby setup.rb
```
- If you have rubygems version error

``` shell
sudo gem update --system
```

## Install jekyll
```shell
rvmsudo gem install jekyll
```



[Download RubyGems]: https://rubygems.org/pages/download
