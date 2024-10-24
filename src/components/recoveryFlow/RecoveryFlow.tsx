import { Text, View } from 'react-native';
import React from 'react';
import { IRecoveryFlow } from '../../interfaces/IRecoveryFlow';
import InputRenderer from '../inputRenderer/InputRenderer';
import AppButton from '../button/Button';
import recoveryFlowStyles from './RecoveryFlowStyles';

const RecoveryFlow = ({inputProps,title,description,recoveryButton}:IRecoveryFlow) => {
  return (
    <View>
      <Text style={recoveryFlowStyles.recoveryTitle}>{title}</Text>
      <Text style={recoveryFlowStyles.recoveryDescription}>{description}</Text>
      <InputRenderer inputAttributes={inputProps.inputAttributes} value={inputProps.value} onChangeText={inputProps.onChangeText} />
      <AppButton {...recoveryButton} />
    </View>
  );
};

export default RecoveryFlow;
