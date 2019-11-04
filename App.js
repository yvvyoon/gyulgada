import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SelectRole from './components/SelectRole';
import TypePhone from './components/TypePhone';
import MyPage from './components/MyPage';
import GoToWork from './components/GoToWork';
import LeaveWork from './components/LeaveWork';
import Contract from './components/Contract';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				{/* <SelectRole></SelectRole> */}
				{/* <TypePhone></TypePhone> */}
				{/* <MyPage></MyPage> */}
				<GoToWork></GoToWork>
				{/* <LeaveWork></LeaveWork> */}
				{/* <Contract></Contract> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
