import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>처음 오셨네요!</Text>
					<Text style={styles.title}>원하시는 것을 선택하세요.</Text>
				</View>
				<View style={styles.itemContainer}>
					<View style={styles.leftItem}>
						<Image
							style={{ height: '80%', width: '80%' }}
							source={require('../public/images/apply.png')}
						/>
					</View>
					<View style={styles.rightItem}>
						<Image
							style={{ height: '80%', width: '80%' }}
							source={require('../public/images/recruit.png')}
						/>
					</View>
				</View>
			</View>
			<View style={styles.bottomContainer}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 50,
		marginHorizontal: 10,
	},
	topContainer: {
		flex: 1,
		justifyContent: 'center',
		// borderWidth: 1,
		// borderColor: '#000000',
	},
	bottomContainer: {
		flex: 1,
		backgroundColor: '#ffffff',
		// borderWidth: 1,
		// borderColor: '#000000',
	},
	title: {
		fontSize: 20,
	},
	titleContainer: {
		flex: 2,
		paddingLeft: 10,
		marginTop: 40,
		// borderWidth: 1,
		// borderColor: '#000000',
	},
	leftItem: {
		flex: 1,
		marginRight: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	rightItem: {
		flex: 1,
		marginLeft: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemContainer: {
		flex: 3,
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 10,
		// borderWidth: 1,
		// borderColor: '#000000',
	},
});
