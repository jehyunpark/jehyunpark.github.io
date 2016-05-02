---
layout: post
title: How to install Jekyll on Ubuntu 14.04
---
# Install
## Install Ruby
1. Install RVM
```
\curl -L https://get.rvm.io | bash -s stable  
```
```
//If you have an error  
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -L https://get.rvm.io | bash -s stable
```
2. Apply RVM
```
source ~/.rvm/scripts/rvm
```
3. Install Ruby
```
rvm install 2.3.0
```

## Install RubyGems
1. [Download RubyGems][Download RubyGems]
2. Unpack downloaded file into a directory
3. `cd` there
4. `$ ruby setup.rb`
5. If you have rubygems version error `sudo gem update --system`

## Install jekyll
```
rvmsudo gem install jekyll
```



[Download RubyGems]: https://rubygems.org/pages/download
