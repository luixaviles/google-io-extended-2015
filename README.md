AngularJS: Fast Development and Testing of Web Applications
===========================================================
## Prerequisites

* NodeJS - Download and Install [NodeJS](http://http://nodejs.org)
* Git - Download and Install [Git](http://git-scm.com)

You need to have installed NodeJS and Git in your machine before to start.
Use `Git bash` to run all commands if you are on Windows platform.

## Install yeoman dependencies

Install `yeoman`:
```
npm install -g yo
```

Install `Grunt`:
```
npm install -g grunt-cli
```

Install `bower`:
```
npm install -g bower
```

Install generator `angular-fullstack`
```
npm install -g generator-angular-fullstack
```

## Presentation

If you want to learn more about used technologies in the project, you can see the slides [here](https://github.com/luixaviles/google-io-extended-2015/tree/master/slides).
Just follow the instructions to run the slides locally. Please feel free to contact me if you have any question.

## Run the project

To run the project just follow next steps:

```
cd google-io-extended-2015
```

```
npm install
```

```
bower install
```

Run `grunt serve`, to allow application running. Default browser should be open with `localhost:9000`
```
grunt serve
```

To run unit tests:
```
grunt test:client
```

To run E2E tests:
```
grunt test:e2e
```

To add new controllers, just type:
```bash
yo angular-fullstack:controller user
```

To add new services, just type:
```bash
yo angular-fullstack:service user-service
```

To see more generators available you can visit main documentation page of [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

## License

MIT
