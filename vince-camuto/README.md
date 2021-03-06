#vince-camuto

This repository contains the code for the vince-camuto Adaptive.js project.

## Documentation

For documentation for Adaptive.js, including tool installation, and information on running your project in the Mobify Cloud, please see our [Adaptive.js documentation](http://adaptivejs.mobify.com/).

## Support

Please contact <support@mobify.com> for assistance.

## Project Information

- **Project Slug**: vince-camuto
- **Site URL**: www.vincecamuto.com
- **Generated by**: generator-adaptivejs@2.0.2

## Installation

To install, first clone the repository:

```
git clone https://github.com/<organization>/vince-camuto.git
```

## Running locally

Adaptive.js uses [grunt.js](http://gruntjs.com/) to run, build, test, and deploy. The following grunt tasks are available:

### `grunt preview`

Builds the project and runs a local development server, allowing the project to be run locally. The preview command additionally outputs the preview URL of the target site, allowing you to easily navigate to [preview.mobify.com](https://preview.mobify.com) to enable previewing.

For more information on previewing, please see our [preview documentation](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

### `grunt push`

Builds and deploys a version of this project to [cloud.mobify.com](https://cloud.mobify.com).

```
grunt push -m "Bundle for January 1st"
```

### `grunt lint`

Runs eslint against the project, ensuring that code style and stynax are correct. For more information on lint errors, please see [eslint.org](http://eslint.org/docs/rules/).

To find out more about Mobify's code style rules, please see the [Mobify Code Style](https://github.com/mobify/mobify-code-style) repository.

### `grunt test`

Runs our unit and integration tests.

```
// runs tests in the terminal/command line
grunt test

// runs tests whose name matches the filter parameter. The
//  filtering IS case sensitive. This option can also be used with
//  `grunt test_skip_build` command
grunt test --filter Home

// runs tests in the terminal/command line and skips the build process
grunt test_skip_build

// runs tests in the browser, viewable at http://localhost:8888/tests/runner
grunt test_browser
```

### `grunt test_ci`

Runs our unit tests just like `grunt test` but the output is designed
for consumption by CircleCI

### `grunt nightwatch`

Runs nightwatch, our WebDriver system test framework written in Node.js.

```
// runs all tests
grunt nightwatch

// runs a specific group
grunt nightwatch --group path/to/my/tests/

// runs a specific test file
grunt nightwatch --test path/to/my/tests/test.js

// runs all tests, parallelized by group
grunt nightwatch-parallel
```

Device testing can also be accomplished using [Appium](http://appium.io). This requires the Android/iOS development environment to be set up (eg. $ANDROID_HOME pointing to Android SDK, Xcode installed with simulators, etc). To run on a real device, connect it to your computer.

```
// runs tests on a local Android device through Appium
grunt android

// runs tests on a local iOS device through Appium
grunt ios
```

Device testing on Android emulators and iOS simulators can also be done through [Sauce Labs](https://saucelabs.com). Specify environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`.

```
// run nightwatch tests on Android emulator
grunt sauce-android

// run nightwatch tests on iOS simulator
grunt sauce-ios
```
