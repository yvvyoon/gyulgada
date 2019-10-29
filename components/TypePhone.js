import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.halfContainer}>
				<Text style={styles.title}>휴대폰 번호를 입력해주세요</Text>
				<Text style={styles.subtitle}>휴대폰 번호</Text>
				<TextInput
					style={styles.textInput}
					keyboardType="phone-pad"
					placeholder="하이픈(-) 없이 입력해주세요."
				></TextInput>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200,
	},
	title: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 25,
		marginBottom: 30,
		textAlign: 'left',
	},
	subtitle: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 15,
		textAlign: 'left',
		marginBottom: 10,
	},
	textInput: {
		borderBottomColor: '#d3d3d3',
		borderBottomWidth: 1,
		fontSize: 23,
	},
});
