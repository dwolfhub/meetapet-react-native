import {Navigation} from 'react-native-navigation';
// import {Home, Search} from './screens';
import Favorites from './screens/favorites';
import Search from './screens/search';

Navigation.registerComponent('map.Favorites', () => Favorites);
Navigation.registerComponent('map.Search', () => Search);

Navigation.startTabBasedApp({
    tabs: [{
        screen: 'map.Search',
        icon: require('../img/search-icon.png'),
        title: 'Pet Search',
        label: 'Search',
    }, {
        screen: 'map.Favorites',
        icon: require('../img/heart-icon.png'),
        title: 'Your Favorites',
        label: 'Favorites',
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