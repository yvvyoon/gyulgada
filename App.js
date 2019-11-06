import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TypePhone from './components/TypePhone';
import SelectRole from './components/SelectRole';
import Index from './Index';

export default class App extends React.Component {
	state = {
		isLoggedIn: false,
		isSignedUp: false,
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

	componentDidMount() {
		return <TypePhone />;
	}

	render() {
		return (
			<View style={styles.container}>
				{/* <TypePhone
					toIndex={this.toIndex}
					toSelectRole={this.toSelectRole}
				/> */}
				{!this.state.idLoggedIn ? <Index /> : <TypePhone />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
