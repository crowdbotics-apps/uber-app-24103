import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile197334Navigator from '../features/UserProfile197334/navigator';
import Maps197315Navigator from '../features/Maps197315/navigator';
import Settings197293Navigator from '../features/Settings197293/navigator';
import Settings197278Navigator from '../features/Settings197278/navigator';
import NotificationList197277Navigator from '../features/NotificationList197277/navigator';
import Maps197276Navigator from '../features/Maps197276/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile197334: { screen: UserProfile197334Navigator },
Maps197315: { screen: Maps197315Navigator },
Settings197293: { screen: Settings197293Navigator },
Settings197278: { screen: Settings197278Navigator },
NotificationList197277: { screen: NotificationList197277Navigator },
Maps197276: { screen: Maps197276Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
