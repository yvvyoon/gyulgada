import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import GoToWork from './components/WORK/GoToWork';
import MyPage from './components/MYPAGE/MyPage';
import Schedule from './components/SCHEDULE/Schedule';
import Setting from './components/SETTING/Setting';
import createContract from './components/createContract';

const BottomTabNavigator = createBottomTabNavigator({
	출퇴근: {
		screen: GoToWork,
		navigationOptions: {
			tabBarOptions: {
				activeTintColor: '#FFA904',
				labelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
				},
				style: {
					backgroundColor: '#ffffff',
				},
			},
		},
	},
	일정: {
		screen: Schedule,
		navigationOptions: {
			tabBarOptions: {
				activeTintColor: '#FFA904',
				labelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
				},
				style: {
					backgroundColor: '#ffffff',
				},
			},
		},
	},
	내계약서: {
		screen: MyPage,
		navigationOptions: {
			tabBarOptions: {
				activeTintColor: '#FFA904',
				labelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
				},
				style: {
					backgroundColor: '#ffffff',
				},
			},
		},
	},
	설정: {
		screen: Setting,
		navigationOptions: {
			tabBarOptions: {
				activeTintColor: '#FFA904',
				labelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
				},
				style: {
					backgroundColor: '#ffffff',
				},
			},
		},
	},
});

export default createAppContainer(BottomTabNavigator);
