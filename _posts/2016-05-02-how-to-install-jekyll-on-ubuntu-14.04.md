---
layout: post
title: How to install Jekyll on Ubuntu 14.04
category: Jekyll
---
## Install Ruby


### 1. Install RVM  

``` shell
\curl -L https://get.rvm.io | bash -s stable  
```
``` shell
//If you have an error  
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -L https://get.rvm.io | bash -s stable
```

### 2. Apply RVM
``` shell
source ~/.rvm/scripts/rvm
```

### 3. Install Ruby

``` shell
rvm install 2.3.0
```

## Install RubyGems

### 1. [Download RubyGems][Download RubyGems]

### 2. Unpack downloaded file into a directory

### 3. Change directory to unpacked folder

``` shell
cd there
```

### 4. Ruby setup

``` shell
$ ruby setup.rb
```

### 5. If you have rubygems version error

``` shell
sudo gem update --system
```

## Install jekyll

### 1. Install jekyll gem

```shell
rvmsudo gem install jekyll
```

## Run jekyll

``` shell
jekyll new jehyunpark.github.io
cd jehyunpark.github.io
jekyll serve
```


[Download RubyGems]: https://rubygems.org/pages/download
