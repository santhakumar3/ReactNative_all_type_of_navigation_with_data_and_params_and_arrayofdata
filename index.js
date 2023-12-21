/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppOne from './screens/navigation_from_one_page_to_other_page_into_single_js_file/MainScreen';
import AppData from './screens/navigation_with_data_from_one_page_to_other_page/AppDataNavigation';
import ArraySend from './screens/navigation_with_array_from_one_page_to_other_page/NavigationArray';
import FirstPageWithoutNavigationContainer from './screens/navigation_from_one_page_to_other_page_without_navigationContainer/FirstPageWithoutNavigationContainer';
import AppNav from './screens/navigation_from_one_page_to_other_page/NavigationScreenRoot';
import AppArray from './screens/navigation_with_array_from_one_page_to_other_page/NavigationArray';
import AppWithParams from './screens/navigation_with_one_parameter_from_one_page_to_other_page/NavigationSingleParameter';
import AppWithImageUrl from './screens/navigation_with_imageurl_from_one_page_to_other_page/NavigationImageUrl';
import AppWithStaticCustomData from './screens/navigation_with_static_customData_from_one_page_to_other_page/NavigationWithStaticCustomData';
import AppWithStaticJsonCustomData from './screens/navigation_with_static_json_custom_data_from_one_page_to_other_page/NavigationWithStaticJsonCustomData';
import AppWithModelClassData from './screens/navigation_with_model_class_of_data_from_one_pae_to_other_page/NavigationWithModelClass';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => AppOne);

// AppRegistry.registerComponent(appName, () => AppData);
// AppRegistry.registerComponent(appName, () => ArraySend);
// AppRegistry.registerComponent(
//   appName,
//   () => FirstPageWithoutNavigationContainer,
// );
// AppRegistry.registerComponent(appName, () => AppWithParams);
// AppRegistry.registerComponent(appName, () => AppArray);
// AppRegistry.registerComponent(appName, () => AppWithImageUrl);
// AppRegistry.registerComponent(appName, () => AppWithStaticCustomData);
// AppRegistry.registerComponent(appName, () => AppWithStaticJsonCustomData);
AppRegistry.registerComponent(appName, () => AppWithModelClassData);
