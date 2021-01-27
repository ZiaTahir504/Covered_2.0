import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PickingScreen from './PickingScreen';
import FavBookScreen from './FavBookScreen';
import BookStoresMap from './BookStoresMap';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator swipeEnabled={false}>
      <Tab.Screen name="swiping" component={PickingScreen} />
      <Tab.Screen name="favs" component={FavBookScreen} />
      <Tab.Screen name="stores" component={BookStoresMap} />
    </Tab.Navigator>
  );
}
