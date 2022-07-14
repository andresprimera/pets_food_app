import {CheckoutStackParamList} from './CheckoutRouteTypes';

import {Step1} from '@app/screens/Checkout/Step1/Step1';
import {Step2} from '@app/screens/Checkout/Step2';
import {Step3} from '@app/screens/Checkout/Step3';

type CheckoutStackRouteType = {
  name: keyof CheckoutStackParamList;
  component: () => JSX.Element;
}[];

export const CheckoutRoutes: CheckoutStackRouteType = [
  {name: 'Step1', component: Step1},
  {name: 'Step2', component: Step2},
  {name: 'Step3', component: Step3},
];
