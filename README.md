# ionic-feature-template
The ionic tabs template organized "by feature" (user,chat,shoppingList) rather than by type (controllers,services) and some other Angular style choices influenced by https://github.com/johnpapa/angular-styleguide (does not use hottowel, although I suggest you check it out https://github.com/johnpapa/generator-hottowel )

## Setup
* npm install -g cordova ionic
* git clone https://github.com/BennuAshes/ionic-feature-template.git newAppName
* ionic serve

Done!

## Other
Ionic View seems neat. A little suspicious it's free, but its clean and great so far

#### Notes: 
* Was tested on an S4 not an S3
* ionic seems to have issues with controllerAs property on ui-router state, but a workaround is to use the controller: 'Controller as vm' syntax, which is what I've done. I think controllerAs is a little more clear though


## TODO
* gulp w/ babel for ES6 support
* jspm instead of babel?
* something other than the default tab application?
* feature/core always seems kinda off - maybe find a better place for it?
