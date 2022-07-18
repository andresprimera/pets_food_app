import {
  MainBottomTabParamList,
  RootStackParamList,
  RootModalStackParamList,
} from './RouteTypes';

import {HomeScreen} from '@app/screens/Home';
import {Basket} from '@app/screens/Basket';
import {Checkout} from '@app/screens/Checkout';
import {ButtonNavigation} from './ButtonNavigation';
import {LoginStackNavigation} from '@app/screens/Login';
import {AddAddress} from '@app/screens/AddAddress';
import {Profile} from '@app/screens/Profile';
import {Orders} from '@app/screens/Orders';

type ButtonRouteType = {
  name: keyof MainBottomTabParamList;
  component: () => JSX.Element;
}[];

type StackRouteType = {
  name: keyof RootStackParamList;
  component: () => JSX.Element;
}[];

type StackModalRouteType = {
  name: keyof RootModalStackParamList;
  component: () => JSX.Element;
}[];

export const ButtonRoutes: ButtonRouteType = [
  {name: 'Home', component: HomeScreen},
  {name: 'Basket', component: Basket},
  {name: 'Orders', component: Orders},
  {name: 'Profile', component: Profile},
];

export const Routes: StackRouteType = [
  {name: 'ButtonNavigation', component: ButtonNavigation},
  {name: 'Checkout', component: Checkout},
];

export const ModalRoutes: StackModalRouteType = [
  {name: 'Login', component: LoginStackNavigation},
  {name: 'AddAddress', component: AddAddress},
];
