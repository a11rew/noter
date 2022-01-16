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
};

export type NavigationStackScreenProps<
  Screen extends keyof NavigationStackParamList,
> = NativeStackScreenProps<NavigationStackParamList, Screen>;
