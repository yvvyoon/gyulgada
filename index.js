import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import LeaveWork from './components/WORK/LeaveWork';
import GoToWork from './components/WORK/GoToWork';
import MyPage from './components/MYPAGE/MyPage';
import Schedule from './components/SCHEDULE/Schedule';
import Setting from './components/SETTING/Setting';

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
		screen: Setting,
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

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 	},
// });
