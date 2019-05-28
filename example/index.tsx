/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
} from 'react-native';

import ImagePickerIOS from '../src/index';
import {
  OpenCameraDialogOptions,
  OpenSelectDialogOptions,
} from '../src/internal/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  sectionTitle: {
    fontSize: 24,
    marginHorizontal: 8,
    marginTop: 24,
  },
  exampleContainer: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#FFF',
    borderColor: '#EEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  exampleTitle: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  label: {
    fontWeight: 'bold',
  },
});

interface State {
  canUseCamera: boolean;
  canRecordVideos: boolean;

  imageUrl: string | null;
  height: number | null;
  width: number | null;
}

class ExampleApp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      canUseCamera: false,
      canRecordVideos: false,

      imageUrl: null,
      height: null,
      width: null,
    };
  }

  componentDidMount() {
    ImagePickerIOS.canUseCamera(value =>
      this.setState(() => ({canUseCamera: value})),
    );
    ImagePickerIOS.canRecordVideos(value =>
      this.setState(() => ({canRecordVideos: value})),
    );
  }

  render() {
    const {canUseCamera, canRecordVideos, imageUrl, height, width} = this.state;
    return (
      <ScrollView testID="scrollView" style={styles.container}>
        <SafeAreaView />
        <Text style={styles.sectionTitle}>Static methods</Text>
        <View style={styles.exampleContainer}>
          <Text>{`Can use camera: ${canUseCamera}!`}</Text>
          <Text>{`Can record video: ${canRecordVideos}!`}</Text>
        </View>
        <Text />
        <Text style={styles.sectionTitle}>Open Camera Dialog</Text>
        <Text style={styles.exampleTitle}>(doesn't work on a simulator)</Text>
        <View style={styles.exampleContainer}>
          <Button
            title="Open camera dialog"
            onPress={this.onOpenCameraDialogPress({})}
          />
          <Button
            title="Open camera dialog (video mode)"
            onPress={this.onOpenCameraDialogPress({videoMode: true})}
          />
        </View>
        <Text style={styles.sectionTitle}>Select Dialog</Text>
        <View style={styles.exampleContainer}>
          <Button
            title="Open select dialog (images & videos)"
            onPress={this.onOpenSelectDialogPress({
              showImages: true,
              showVideos: true,
            })}
          />
          <Button
            title="Open select dialog (images only)"
            onPress={this.onOpenSelectDialogPress({
              showImages: true,
              showVideos: false,
            })}
          />
          <Button
            title="Open select dialog (videos only)"
            onPress={this.onOpenSelectDialogPress({
              showVideos: true,
              showImages: false,
            })}
          />
        </View>
        <Text style={styles.sectionTitle}>Selected Image details</Text>
        <View style={styles.exampleContainer}>
          <Text>
            <Text style={styles.label}>ImageUrl/Tag:</Text> {imageUrl}
            {'\n'}
            <Text style={styles.label}>Height:</Text> {height}
            {'\n'}
            <Text style={styles.label}>Width:</Text> {width}
          </Text>
        </View>
      </ScrollView>
    );
  }

  onOpenCameraDialogPress = (config: OpenCameraDialogOptions) => () => {
    ImagePickerIOS.openCameraDialog(
      config,
      () => {},
      error => {
        Alert.alert(error ? error : 'cancelled');
      },
    );
  };

  onOpenSelectDialogPress = (config: OpenSelectDialogOptions) => () => {
    ImagePickerIOS.openSelectDialog(
      config,
      (imageUrl, height, width) => {
        this.setState(() => ({
          imageUrl,
          height,
          width,
        }));
      },
      error => {
        Alert.alert(error ? error : 'cancelled');
      },
    );
  };
}

AppRegistry.registerComponent('ImagePickerIOSExample', () => ExampleApp);
