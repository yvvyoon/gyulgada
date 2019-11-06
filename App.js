import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import TypePhone from './TypePhone';
import SelectRole from './components/SelectRole';
import Index from './Index';
import Axios from 'axios';

export default class App extends React.Component {
	state = {
		isLoggedIn: false,
		isSignedUp: false,
		id: '',
		pw: '',
	};

	toIndex = () => {
		this.setState({
			isLoggedIn: !this.state.isLoggedIn,
		});
	};

	toSelectRole = () => {
		this.setState({
			isSignedUp: !this.state.isSignedUp,
		});
	};

	login = () => {
		this.setState({
			isLoggedIn: true,
		});
	};

	logout = async () => {
		/* 		this.setState({
			isLoggedIn: false,
		}); */
		await AsyncStorage.clear();
	};

	static navigationOptions = {
		title: '로그인해주세요.',
	};

	_signInAsync = async () => {
		await AsyncStorage.setItem('userToken', 'abc');

		this.props.navigation.navigate('Index');
	};

	componentDidMount = () => {
		// await AsyncStorage.clear();
		// AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
		// const a = await AsyncStorage.getItem('pnum')
	};

	render() {
		return (
			<View style={styles.container}>
				{AsyncStorage.getItem('pnum') ? <Index /> : <TypePhone />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
