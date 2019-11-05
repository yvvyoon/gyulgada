import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SelectRole from './components/SelectRole';
import TypePhone from './components/TypePhone';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TypePhone />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
