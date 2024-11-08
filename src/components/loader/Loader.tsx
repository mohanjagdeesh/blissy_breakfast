import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { ILoader } from '../../interfaces/ILoader';
import { Colors } from '../../utils/Colors';
import loaderStyles from './LoaderStyles';

const Loader = ({ loaderState,loadingText }: ILoader) => {
  if (!loaderState) return null;

  return (
    <View style={loaderStyles.loaderContainer}>
      <View style={loaderStyles.loader}>
        <ActivityIndicator color={Colors.lima} size="large" />
        <Text style={loaderStyles.loaderText}>{loadingText}</Text>
      </View>
    </View>
  );
};

export default Loader;
