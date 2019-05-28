/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import ImagePickerIOS from '../index';
import NativeInterface from '../internal/nativeInterface';
import {OpenSelectDialogOptions} from '../internal/types';

type JestMockNativeInterface = jest.Mocked<typeof NativeInterface>;
// @ts-ignore
const MockNativeInterface: JestMockNativeInterface = NativeInterface;

describe('@react-native-community/image-picker-ios', () => {
  describe('openSelectDialog', () => {
    it('should pass on the responses when the library executes the callback', () => {
      expect.assertions(3);

      const expectedUrl = 'url/to/file';
      const expectedSize = 100;

      const config: OpenSelectDialogOptions = {
        showImages: true,
        showVideos: false,
      };
      MockNativeInterface.openSelectDialog.mockImplementationOnce(
        (cfg, successCb, errorCb) => {
          successCb(expectedUrl, expectedSize, expectedSize);
        },
      );

      ImagePickerIOS.openSelectDialog(
        config,
        (imageUrl, height, width) => {
          expect(imageUrl).toEqual(expectedUrl);
          expect(height).toEqual(expectedSize);
          expect(width).toEqual(expectedSize);
        },
        () => {},
      );
    });

    it('should pass on errors through the callback', () => {
      expect.assertions(1);

      const expectedError = new Error('Test error');
      MockNativeInterface.openSelectDialog.mockImplementationOnce(
        (cfg, successCb, errorCb) => {
          errorCb([expectedError]);
        },
      );

      ImagePickerIOS.openSelectDialog(
        {},
        () => {},
        ([error]) => {
          expect(error).toEqual(expectedError);
        },
      );
    });
  });
});
