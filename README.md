# `@react-native-community/image-picker-ios`

[![CircleCI Status](https://img.shields.io/circleci/project/github/react-native-community/react-native-image-picker-ios/master.svg)](https://circleci.com/gh/react-native-community/workflows/react-native-image-picker-ios/tree/master) ![Supports iOS](https://img.shields.io/badge/platforms-ios-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/@react-native-community/image-picker-ios.svg)


## Notice
___
This module was pulled out of React Native core part of the [☂️Lean Core](https://github.com/facebook/react-native/issues/23313) movement and is considered deprecated.

We recommend you use either [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker) or [expo-image-picker](https://docs.expo.io/versions/latest/sdk/imagepicker/). Both packages are well maintainer and have better cross platform support.
___

React Native ImagePicker for iOS. It allows you to get information on:

* Can you use the Camera
* Can you record video

## Getting started
Install the library using either Yarn:

```
yarn add @react-native-community/image-picker-ios
```

or npm:

```
npm install --save @react-native-community/image-picker-ios
```

You then need to link the native parts of the library for the platforms you are using. The easiest way to link the library is using the CLI tool by running this command from the root of your project:

```
react-native link @react-native-community/image-picker-ios
```

If you can't or don't want to use the CLI tool, you can also manually link the library using the instructions below (click on the arrow to show them):

<details>
<summary>Manually link the library on iOS</summary>

Either follow the [instructions in the React Native documentation](https://facebook.github.io/react-native/docs/linking-libraries-ios#manual-linking) to manually link the framework or link using [Cocoapods](https://cocoapods.org) by adding this to your `Podfile`:

```ruby
pod 'react-native-image-picker-ios', :path => '../node_modules/@react-native-community/image-picker-ios'
```

</details>

<details>

## Migrating from the core `react-native` module
This module was created when the ImagePickerIOS was split out from the core of React Native. To migrate to this module you need to follow the installation instructions above and then change you imports from:

```javascript
import { ImagePickerIOS } from "react-native";
```

to:

```javascript
import ImagePickerIOS from "@react-native-community/image-picker-ios";
```

Note that the API was updated after it was extracted from ImagePickerIOS to support some new features, however, the previous API is still available and works with no updates to your code.

## Usage
Import the library:

```javascript
import ImagePickerIOS from "@react-native-community/image-picker-ios";
```

Can you use the camera:

```javascript
ImagePickerIOS.canUseCamera(canUseCamera => {
  console.log("canUseCamera", canUseCamera);
});
```

Can you record videos:

```javascript
ImagePickerIOS.canRecordVideos(canRecordVideos => {
  console.log("canRecordVideos", canRecordVideos);
});
```

## API
* **Types:**
  * [`OpenCameraDialogOptions`](#OpenCameraDialogOptions)
  * [`OpenSelectDialogOptions`](#OpenSelectDialogOptions)
* **Methods:**
  * [`canUseCamera(callback)`](#canUseCamera)
  * [`canRecordVideos(callback)`](#canRecordVideos)
  * [`openCameraDialog(options, successCallback, cancelCallback)`](#openCameraDialog)
  * [`openSelectDialog(options, successCallback, cancelCallback)`](#openCameraDialog)

### Types

#### `OpenCameraDialogOptions`
Describes the settings for the camera:

| Property        | Type                                             | Description                                                                                        |
| --------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `videoMode`   | `boolean`                                        | Should the camera open in video mode. |

#### `OpenSelectDialogOptions`
Describes the settings for the camera:

| Property        | Type                                             | Description                                                                                        |
| --------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `showImages`          | `boolean`          | Should the results include images                                          |
| `showVideos`   | `boolean`                                        | Should the results include videos|

### Methods

#### `canUseCamera()`

Executes a callback with the a boolean value stating whether or not you can use the camera.

**Example:**
```javascript
ImagePickerIOS.canUseCamera(canUseCamera => {
  console.log("canUseCamera", canUseCamera);
});
```

#### `canRecordVideos()`

Executes a callback with the a boolean value stating whether or not you can record videos.

**Example:**
```javascript
ImagePickerIOS.canRecordVideos(canRecordVideos => {
  console.log("canRecordVideos", canRecordVideos);
});
```

#### `openCameraDialog()`

Opens the camera dialog with the specified [`OpenCameraDialogOptions`](#OpenCameraDialogOptions) and two callbacks, one for success and one for cancel.

**Example:**
```javascript
ImagePickerIOS.openCameraDialog({
  unmirrorFrontFacingCamera: false
  videoMode: false
}, () => {
  // success
}, (error) => {
  // cancel
});
```

#### `openSelectDialog()`

Opens the camera dialog with the specified [`OpenSelectDialogOptions`](#OpenSelectDialogOptions) and two callbacks, one for success and one for cancel.

**Example:**
```javascript
ImagePickerIOS.openCameraDialog({
  showImages: true,
  showVideos: false
}, (imageUrl, height, width) => {
  // success
}, (error) => {
  // cancel
});
```
## Troubleshooting

### Errors while running Jest tests

If you do not have a Jest Setup file configured, you should add the following to your Jest settings and create the `jest.setup.js` file in project root:

```js
setupFiles: ['<rootDir>/jest.setup.js']
```

You should then add the following to your Jest setup file to mock the ImagePickerIOS Native Module:

```js
import { NativeModules } from 'react-native';

NativeModules.RNCImagePickerIOS = {
  canRecordVideos: jest.fn(),
  canUseCamera: jest.fn(),
  openCameraDialog: jest.fn(),
  openSelectDialog: jest.fn(),
};
``` 

### Issues with the iOS simulator

As your simulator doesn't have a camera, there is no way to open the camera on the simulator.

## Maintainers

* [Johan du Toit](https://github.com/johan-dutoit) - [Freelance React Native Developer]()

## Contributing

Please see the [contributing guide](/CONTRIBUTING.md).

## License

The library is released under the MIT license. For more information see [`LICENSE`](/LICENSE).
