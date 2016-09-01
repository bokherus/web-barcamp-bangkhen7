# README

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


## How to install this project in Windows (Very Difficult)

ps. Don't try this whole things, I recommend you install Linux instead.

### 1.) Install Ruby using RubyInstaller

* You can download Ruby using [RubyInstaller].
 
### 2.) Install Ruby on Rails using RailsInstaller
* You can download Ruby using [RailsInstaller].
* Youtube: https://www.youtube.com/watch?v=OHgXELONyTQ
* In this step, bundler will be installed.
```sh
    $ gem install bundler
```
### 3.) Install PostgreSQL
* You can download PostgreSQL from [PostgreSQL].
* Youtube: https://www.youtube.com/watch?v=-f9lke78g2U

### 4.) Clone repository
```sh
    $ git clone https://github.com/bokherus/web-barcamp-bangkhen7.git
```

### 5.) Install bundle
ps. It's not too late to change your mind...
* Type this command into command line
```sh
    $ bundle install
```
* You may find this error:

```sh
    $ rack requires Ruby version >= 2.2.2
```
* This happens because the system is using the old Ruby version. We can solve it by changing it to a newer one. Download [uru] and create C:\tools and add it to the PATH, then you run these following commands in C:\tools:

```sh
    C:\tools> uru_rt admin install
```

* After that, set the default Ruby version to be >= 2.2.2
```sh
    C:\tools> uru list
     => 231p112     : ruby 2.3.1p112 (2016-04-26 revision 54768) [x64-mingw32]
```

* You will find the list of Ruby versions, pick one which >= 2.2.2
```sh
    C:\tools> uru 231p112
```
* Run bundle install, problem solved :)

* You might also find this error:
```sh
    ERROR:  Error installing nio4r:
    ERROR: Failed to build gem native extension.
```

* This happens because it needs a DevKit, then download [DevKit] in the Development Kit section. Next, create file C:\RubyDevKit and extract DevKit into it. Finally, run these following commands:
```sh
    cd C:\RubyDevKit
    ruby dk.rb init
    ruby dk.rb install
```

### 6.) Start your PostgreSQL, create new database and user
* Don't forget to set the user permission to be able to create database.
```sh
    Right click on user -> Properties -> Role priviledges
```
### 7.) Sign in PostgreSQL in command line
* You have to add these following lines into Path in System Variables:
```sh
   C:\Program Files\PostgreSQL\9.5\bin;C:\Program Files\PostgreSQL\9.5\lib
```
* Go
```sh
   $ psql -U --username={USERNAME} // Your username
```

### 8.) Create database
* Type this command into command line:
```sh
   $ rake db:create
```

* You might find this error:
```sh
  rake aborted! 
  no such file to load -- pg
```
* It happens because of the bug, the solution is changing pg version in Gemfile.
```sh
  $ gem install pg --pre
```

* Access Gemfile in your repository and edit the version to the pre one.
```sh
    # Use postgresql as the database for Active Record
    gem 'pg', '~> 0.19.0.pre20160820113039'
```

* Try running this command into command line and open http://localhost:3000 from your browser.

```sh
    $ rails s
```

[RubyInstaller]: <http://rubyinstaller.org/>
[RailsInstaller]: <http://railsinstaller.org/en>
[PostgreSQL]: <https://www.postgresql.org/>
[uru]: <https://bitbucket.org/jonforums/uru>
[DevKit]: <http://rubyinstaller.org/downloads/>
