import {NumberReq} from './NumberReq';
import {UserCreation} from './UserCreation';
import {PasswordReq} from './PasswordReq';
import {LoginStackParamList} from './RoutesTypes';
import {PasswordRestore1} from './PasswordRestore1';
import {PasswordRestore2} from './PasswordRestore2';

type LoginRoutes = {
  name: keyof LoginStackParamList;
  component: () => JSX.Element;
}[];

export const LoginRoutes: LoginRoutes = [
  {name: 'NumberReq', component: NumberReq},
  {name: 'UserCreation', component: UserCreation},
  {name: 'PasswordReq', component: PasswordReq},
  {name: 'PasswordRestore1', component: PasswordRestore1},
  {name: 'PasswordRestore2', component: PasswordRestore2},
];
