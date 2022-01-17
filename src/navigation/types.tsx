/**
 * React Navigation utility types
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationStackParamList {}
  }
}

export type NavigationStackParamList = {
  Home: undefined;
  Edit: {
    id: string;
  };
  New: undefined;
};

export type NavigationStackScreenProps<
  Screen extends keyof NavigationStackParamList,
> = NativeStackScreenProps<NavigationStackParamList, Screen>;
