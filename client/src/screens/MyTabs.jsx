import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PickingScreen from './PickingScreen';
import FavBookScreen from './FavBookScreen';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="swiping" component={PickingScreen} />
            <Tab.Screen name="favs" component={FavBookScreen} />
        </Tab.Navigator>
    );
}
