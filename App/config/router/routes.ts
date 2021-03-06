import {HomeScreen} from '@app/screens/Home';
import {Basket} from '@app/screens/Basket';
import {Checkout} from '@app/screens/Checkout';
import {ButtonNavigation} from './ButtonNavigation';

import {MainBottomTabParamList, RootStackParamList} from './RouteTypes';

type ButtonRouteType = {
  name: keyof MainBottomTabParamList;
  component: () => JSX.Element;
}[];

type StackRouteType = {
  name: keyof RootStackParamList;
  component: () => JSX.Element;
}[];

export const ButtonRoutes: ButtonRouteType = [
  {name: 'Home', component: HomeScreen},
  {name: 'Basket', component: Basket},
];

export const Routes: StackRouteType = [
  {name: 'ButtonNavigation', component: ButtonNavigation},
  {name: 'Checkout', component: Checkout},
];
