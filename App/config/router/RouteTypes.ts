import {StackNavigationProp} from '@react-navigation/stack';

//MAIN STACK NAVIGATION TYPES
export type RootStackParamList = {
  ButtonNavigation: undefined;
  Checkout: undefined;
};

export type MainStackScreensProps = StackNavigationProp<RootStackParamList>;

// MAIN MODAL NAVIGATION TYPES
export type RootModalStackParamList = {
  Login: undefined;
  AddAddress: undefined;
};

export type MainModalScreensProps =
  StackNavigationProp<RootModalStackParamList>;

// MAIN BUTTON TAB NAVIGATION TYPES
export type MainBottomTabParamList = {
  Home: undefined;
  Basket: undefined;
};

export type MainBottomScreenProps = StackNavigationProp<MainBottomTabParamList>;
