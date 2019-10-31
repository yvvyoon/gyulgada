import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class GoToWork extends React.Component {
	render() {
		return (
			<ScrollView alwaysBounceVertical={true}>
				<View style={styles.container}>
					<View style={styles.titleContainer}>
						<Text style={styles.titleText}>퇴 근</Text>
					</View>
					<View style={styles.subtitleContainer}>
						<Text style={styles.nameText}>윤영욱</Text>
						<Text style={styles.subtitleText}>
							묻고 대방어로 가!
						</Text>
					</View>
					<View style={styles.btnContainer}>
						<TouchableOpacity onPress={() => alert(props.currTime)}>
							<MaterialCommunityIcons
								name="exit-run"
								size="100"
								color="orange"
								style={styles.btn}
							></MaterialCommunityIcons>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 30 }}>
						<Text style={styles.logText}>
							2019년 10월 30일 20:45:03
						</Text>
						<Text style={styles.logText}>
							2019년 10월 30일 20:45:03
						</Text>
						<Text style={styles.logText}>
							2019년 10월 30일 20:45:03
						</Text>
						<Text style={styles.logText}>
							2019년 10월 30일 20:45:03
						</Text>
						<Text style={styles.logText}>
							2019년 10월 30일 20:45:03
						</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 50,
		marginBottom: 50,
		marginHorizontal: 20,
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
	},
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		marginLeft: 10,
		justifyContent: 'center',
	},
	subtitleContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: 30,
	},
	nameText: {
		fontSize: 30,
		marginLeft: 10,
	},
	subtitleText: {
		fontSize: 25,
		color: '#808080',
		marginTop: 10,
		marginLeft: 10,
	},
	btnContainer: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 30,
	},
	btn: {
		borderRadius: 8,
	},
	btnText: {
		fontSize: 35,
		color: '#ffffff',
	},
	logText: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 10,
	},
});
