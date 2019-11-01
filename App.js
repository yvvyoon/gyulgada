import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import SelectRole from './components/SelectRole';
import TypePhone from './components/TypePhone';
import MyPage from './components/MyPage';
import GoToWork from './components/GoToWork';
import LeaveWork from './components/LeaveWork';
import Contract from './components/Contract';
import WorkHistory from './components/WorkHistory';

export default class App extends React.Component {
	state = {
		timestamp: [],
	};

	logTimestamp = () => {
		const currTime = new Date().toLocaleTimeString();

		this.setState({ timestamp: currTime });
	};

	render() {
		return (
			<View style={styles.container}>
				{/* <TypePhone></TypePhone> */}
				{/* <SelectRole></SelectRole> */}
				{/* <MyPage></MyPage> */}
				{/* <Sidebar></Sidebar> */}
				{/* <GoToWork></GoToWork> */}
				<LeaveWork></LeaveWork>
				{/* <Contract></Contract> */}
				{/* <WorkHistory></WorkHistory> */}
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
