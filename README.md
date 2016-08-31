# README

### Build
![](https://travis-ci.org/bokherus/web-barcamp-bangkhen7.svg?branch=development)

### Requirements
1. Ruby 2.3.0
2. Rails 5.0 
3. [PostgreSQL](http://www.postgresql.org/) version 9.4.x
4. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
5. Bundler ` gem install bundler`
  
### Installation Steps
#### OSX 10.10 (Yosemite)

1. [Xcode](https://developer.apple.com/xcode/downloads/)
2. [Xcode Command Line Tools](https://developer.apple.com/downloads/)
3. [Homebrew](http://brew.sh/)<br /><code>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>

4. Install Git command line<br/><code>brew install git</code>
5. Postgresql 9.4.x<br/><code>brew install postgresql</code>

6. [RVM](https://rvm.io/)
  * <code>gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3</code>
  * <code>\curl -sSL https://get.rvm.io | bash -s stable --ruby</code>

7. Install ruby-2.3.0 using RVM<br/><code>rvm install ruby-2.3.0</code>


### Getting start
1. Clone this repository into your machine
<br/> `git clone https://github.com/bokherus/web-barcamp-bangkhen7.git`

2. Install required ruby gems
<br/> `bundle install`

3. Start postgres
4. Create database in postgres
<br/>`rake db:create`
     `rake db:migrate`


### Adding new features
1. Create a new branch
<br/> `git checkout -b feature/feature_name`
  
2. Work on the new branch, don't forget to commit regularly
<br/> `git commit -m 'commit message'`

3. Pass Rpsec test
<br/> `rspec`
  
4. Push to remote server
<br/> `git push origin feature/feature_name`
  
5. Create a pull request to merge into development

### Useful websites
1. [Official Rails guide](http://guides.rubyonrails.org/)
2. [Basic ruby](http://tryruby.org/levels/1/challenges/0)
3. [Codecademy](https://www.codecademy.com/)
4. [Git (Code School)](https://try.github.io/levels/1/challenges/1)
