# 📝 Noter
Android and iOS application for taking notes.

## Description

Users can create new notes, see all existing notes, open any note to view details as well as edit it, notes can be deleted and notes are automatically saved and persisted on change.

Built with React Native and unit tested with [Jest](https://jestjs.io) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/). Application-wide state is managed with [MobX](https://mobx.js.org) and locally persisted with the key-value store library [AsyncStorage](https://react-native-async-storage.github.io/async-storage/).

Application navigation is handled with [React Navigation](https://reactnavigation.org/) and vector icons provided by the NPM package, [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons).

## Installation

Setup a [React Native development environment](https://reactnative.dev/docs/environment-setup) if you have not already.

### Running on Android

Attach a device or start and emulator and run the following commands.

```sh
$ yarn install
$ yarn react-native start
$ yarn android
```

### Running on iOS

With CocoaPods installed, run the following commands.

```sh
$ yarn install
$ cd ios
$ pod install
$ cd ..
$ yarn ios
```

### Running tests

```sh
$ yarn install
$ yarn test
```

## Project Structure

### Overview

Noter is setup as a Typescript React Native project. Code style and quality are enforced by [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

Tests are run with Jest as the general test framework and React Native Testing library for React Native specific test utility functions.

MobX is used for managing application state. When users create notes they are saved to the MobX store, serialized and persisted to device storage with AsyncStorage. On launch, these persisted notes are retrieved from device storage, deserialized and added to the MobX store for use in the application.

Edits to notes are automatically saved and persisted. Updates to the persisted store from note edits are batched by way of a debounce to minimize disk operations and prevent performance bottlenecks.

### Testing

Components and screens in the application are unit tested with a variety of different test cases with the goal of ensuring high test coverage. Native modules as well as some external JavaScript dependencies are mocked, with said mocks in the `src/mocks` directory.

Test Suites for each component and screen are located in their respective component directories with a `.test.(js|ts(x?))` extension.

Tests are [continuously run on pushes](https://github.com/a11rew/noter/actions/workflows/tests.yml) to the Noter repository with a CI Action to check for regressions.

### Folders Description

Description of folders in the project directory

- `android|ios/`: Platform specific native code.
- `src/assets`: Binary files bundled alongside application like fonts and images.
- `src/common`: Extended JSX elements and constants.
- `src/components`: Reusable React UI components.
- `src/hooks`: Reusable functions for abstracting React component logic.
- `src/mocks`: Jest mocks for project dependencies.
- `src/store`: MobX store for notes.
- `src/utils`: General helper functions.

## Screenshots

<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/87580113/150241023-4a25e58d-ceb5-4974-abc9-f67f76c2ec95.png" />
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/87580113/150241186-a3867820-dd66-4c5c-b89c-d65641616ec8.png" />
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/87580113/150241206-dbf370f5-4b43-4eed-afb0-b93756e48703.png" />
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/87580113/150241274-c33e0db3-34ed-4d06-b43e-20460a1bc515.png" />
    </td>
  </tr>
  
</table>
