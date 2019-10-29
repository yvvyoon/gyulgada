import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SelectRole from './components/SelectRole';
import TypePhone from './components/TypePhone';
import MyPage from './components/MyPage';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <SelectRole></SelectRole> */}
			<MyPage></MyPage>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
