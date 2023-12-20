/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppOne from './screens/navigation_from_one_page_to_other_page_into_single_js_file/MainScreen';
import AppData from './screens/navigation_with_data_from_one_page_to_other_page/AppDataNavigation';
import ArraySend from './screens/navigation_with_array_from_one_page_to_other_page/NavigationArray';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => AppOne);

// AppRegistry.registerComponent(appName, () => AppData);
AppRegistry.registerComponent(appName, () => ArraySend);
