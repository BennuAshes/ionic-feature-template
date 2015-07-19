# ionic-feature-template
The ionic tabs template organized "by feature" (user,chat,shoppingList) rather than by type (controllers,services) and some other Angular style choices  

## Setup
* npm install -g ionic
* git clone https://github.com/BennuAshes/ionic-feature-template.git newAppName
* ionic serve

Done!

## Other
Ionic View seems neat. A little suspicious it's free, but it seems clean and great  
Notes: 
* Was tested on an S4 not an S3
* ionic seems to have issues with controllerAs property on ui-router state, but a workaround is to use the controller: 'Controller as vm' syntax


## TODO
* gulp w/ babel for ES6 support
* jspm instead of babel?
* something other than the default tab application?
* feature/core always seems kinda off - maybe find a better place for it?
