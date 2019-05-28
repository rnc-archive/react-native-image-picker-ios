/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import NativeInterface from './internal/nativeInterface';
import {
  OpenCameraDialogOptions,
  OpenSelectDialogOptions,
} from './internal/types';

const ImagePickerIOS = {
  canRecordVideos: function(callback: (value: boolean) => void) {
    NativeInterface.canRecordVideos(callback);
  },
  canUseCamera: function(callback: (value: boolean) => void) {
    NativeInterface.canUseCamera(callback);
  },
  openCameraDialog: function(
    config: OpenCameraDialogOptions,
    successCallback: (
      imageUrlOrTag: string,
      height: number,
      width: number,
    ) => void,
    cancelCallback: (args: any) => void,
  ) {
    config = {
      videoMode: false,
      ...config,
    };
    NativeInterface.openCameraDialog(config, successCallback, cancelCallback);
  },
  openSelectDialog: function(
    config: OpenSelectDialogOptions,
    successCallback: (
      imageUrlOrTag: string,
      height: number,
      width: number,
    ) => void,
    cancelCallback: (args: any) => void,
  ) {
    config = {
      showImages: true,
      showVideos: false,
      ...config,
    };
    NativeInterface.openSelectDialog(config, successCallback, cancelCallback);
  },
};

export default ImagePickerIOS;
