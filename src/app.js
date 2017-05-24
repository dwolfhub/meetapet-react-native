import {Navigation} from 'react-native-navigation';
// import {Home, Search} from './screens';
import Home from './screens/home';
import Search from './screens/search';

Navigation.registerComponent('map.Home', () => Home);
Navigation.registerComponent('map.Search', () => Search);

Navigation.startTabBasedApp({
    tabs: [{
        screen: 'map.Home',
        icon: require('../img/house-icon.png'),
        title: 'MeetaPet',
        label: 'Home',
    }, {
        screen: 'map.Search',
        icon: require('../img/search-icon.png'),
        title: 'Search',
        label: 'Search',
    }, {
        screen: 'map.Home',
        icon: require('../img/heart-icon.png'),
        title: 'Home 2',
        label: 'Home',
    }, {
        screen: 'map.Home',
        icon: require('../img/house-icon.png'),
        title: 'Home 3',
        label: 'Home',
    }],
    animationType: 'none',
    tabsStyle: {
        tabBarButtonColor: '#606366',
        tabBarSelectedButtonColor: '#68a6ce',
        tabBarBackgroundColor: '#ffffff',
        forceTitlesDisplay: true
    },
    appStyle: {
        tabBarButtonColor: '#606366',
        tabBarSelectedButtonColor: '#68a6ce',
        tabBarBackgroundColor: '#ffffff',
        forceTitlesDisplay: true
    }
});