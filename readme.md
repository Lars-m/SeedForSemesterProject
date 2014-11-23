# Angular-Express-Mongo-seed

This project is an application skeleton for a typical
Angular+ Express + MongoDB + Mongoose application

It is made for 3. semester at: http://www.cphbusiness.dk/english/computer-science
Highly inspired by the seed made by the Angular team

lam@cphbusiness.dk
hsty@cphbusiness.dk


You can use it to quickly bootstrap a dev environment for these projects.

The seed contains a sample AngularJS/Express/Mongo application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

The seed app does the following:
Shows how to wire three controllers and views together.
Setups and simple REST API used by the main page to grab a name (Donald Duck)
and for view 3 to grab a list of users (fetched from a MongoDB instance)



## Getting Started

To get you started you can simply clone the seed repository and install the dependencies:

This seed is inspired by several other seeds including the Angular seed.
It is NOT meant for production, but as a quick start to get a project UP running involving Angular + Express + MongoDB + Mongoose.

### Prerequisites

You need git to clone the angular-seed repository. You can get git from


We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
https://github.com/Lars-m/ExpressAngularSeed.git
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

The simplest way to start the project is;

```
npm start
```

Now browse to the app at `http://localhost:3000`.

### Directory Layout

TODO: Changed. Change the structure below.



## Testing

There are three kinds of tests in the seed application: Backend Unit tests (Mocha), Front end unit tests (Karma) and End to End tests.

### Running Backend Unit Tests
Run the test with:
 npm run backendtests
Or set up a configuration in WebStorm to run the test from within the ide

### Running Frontend Unit Tests

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm run testserver
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

