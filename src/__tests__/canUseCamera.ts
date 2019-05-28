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

type JestMockNativeInterface = jest.Mocked<typeof NativeInterface>;
// @ts-ignore
const MockNativeInterface: JestMockNativeInterface = NativeInterface;

describe('@react-native-community/image-picker-ios', () => {
  describe('canUseCamera', () => {
    it('should pass on the responses when the library executes the callback', () => {
      expect.assertions(2);

      MockNativeInterface.canUseCamera
        .mockImplementationOnce(cb => cb(true))
        .mockImplementationOnce(cb => cb(false));

      ImagePickerIOS.canUseCamera(value => {
        expect(value).toBeTruthy();
      });

      ImagePickerIOS.canUseCamera(value => {
        expect(value).toBeFalsy();
      });
    });
  });
});
