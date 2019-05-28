/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import {OpenCameraDialogOptions, OpenSelectDialogOptions} from './types';

export interface ImagePickerIOSNativeModule {
  canRecordVideos(callback: (value: boolean) => void): void;
  canUseCamera(callback: (value: boolean) => void): void;
  openCameraDialog(
    config: OpenCameraDialogOptions,
    successCallback: (
      imageUrlOrTag: string,
      height: number,
      width: number,
    ) => void,
    cancelCallback: (args: any) => void,
  ): void;
  openSelectDialog(
    config: OpenSelectDialogOptions,
    successCallback: (
      imageUrlOrTag: string,
      height: number,
      width: number,
    ) => void,
    cancelCallback: (args: any) => void,
  ): void;
}
