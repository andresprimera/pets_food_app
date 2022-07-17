import {StackNavigationProp} from '@react-navigation/stack';

export type LoginStackParamList = {
  NumberReq: undefined;
  UserCreation: undefined;
  PasswordReq: undefined;
  PasswordRestore1: undefined;
  PasswordRestore2: undefined;
};

export type LoginScreenProps = StackNavigationProp<LoginStackParamList>;
