/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
/* eslint-env jest */

import {NativeModules} from 'react-native';

// Mock the RNCImagePickerIOS native module to allow us to unit test the JavaScript code
NativeModules.RNCImagePickerIOS = {
  canRecordVideos: jest.fn(),
  canUseCamera: jest.fn(),
  openCameraDialog: jest.fn(),
  openSelectDialog: jest.fn(),
};

// Reset the mocks before each test
global.beforeEach(() => {
  jest.resetAllMocks();
});
