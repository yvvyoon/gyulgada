import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import SelectRole from './components/SelectRole';
import TypePhone from './components/TypePhone';

import Sample from './components/SCHEDULE/Sample';
import LeaveWork from './components/LeaveWork';

import GoToWork from './components/GoToWork';
import MyPage from './components/MYPAGE/MyPage';
import Schedule from './components/SCHEDULE/Schedule';

import Contract from './components/Contract';

// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				{/* <SelectRole></SelectRole> */}
// 				{/* <TypePhone></TypePhone> */}
// 				{/* <MyPage></MyPage> */}
// 				{/* <GoToWork></GoToWork> */}
// 				<Schedule></Schedule>
// 				{/* <Sample></Sample> */}
// 				{/* <LeaveWork></LeaveWork> */}
// 				{/* <Contract></Contract> */}
// 			</View>
// 		);
// 	}
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});

const BottomTabNavigator = createBottomTabNavigator({
	출퇴근: {
		screen: GoToWork,
		navigationOptions: {
			// tabBarIcon: ({ tintColor }) => {
			// 	const iconName = 'ios-home';
			// 	// return <Ionicons name={iconName} size={30} color={tintColor} />;
			// },
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
			// tabBarIcon: ({ tintColor }) => {
			// 	const iconName = `ios-contact`;

			// 	// return <Ionicons name={iconName} size={30} color={tintColor} />;
			// },
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
	마이페이지: {
		screen: MyPage,
		navigationOptions: {
			// tabBarIcon: ({ tintColor }) => {
			// 	const iconName = `ios-information-circle`;

			// 	// return <Ionicons name={iconName} size={30} color={tintColor} />;
			// },
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
		screen: Contract,
		navigationOptions: {
			// tabBarIcon: ({ tintColor }) => {
			// 	const iconName = `ios-git-merge`;

			// 	// return <Ionicons name={iconName} size={30} color={tintColor} />;
			// },
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

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// });
