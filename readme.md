# Angular Demos App
Test app to demo and practice various Angular principals and build re-usable modules and components. This project also includes an Express server to allow further development as a starter template for building Angular apps against a RESTful HTTP backend.

### Firebase
Re: `partials/firebase.html`  
To protect my personal Firebase, the database used in this project is currently not writable.     
**NOTE:**    Firebase Read/Write settings in the Security & Rules tab of your Firebase dashboard. The ability to write to a Firebase database can be controlled by changing the rules setting of ".write" to true/false.
To use Firebase functionality please set up your own [Firebase] database and configure a connection to it in the Firebase controller.

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ cd <project-directory>
$ npm install -d
$ node server
```

### Todos

 - Tests
 - Improve project structure
 - NPM / Bower for managing dependencies

### Tech Used

* [AngularJS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [AngularFire] - Firebase client for AngularJS
* [jQuery] - of course!

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [AngularFire]: <https://github.com/firebase/angularfire>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Firebase]: <https://firebase.google.com/>
