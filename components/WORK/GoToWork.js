import React, { version } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	AsyncStorage,
} from 'react-native';

import axios from 'axios';

export default class GoToWork extends React.Component {
	state = {
		timestamp: [
			{
				date: '',
				time: '',
			},
		],
		go: '',
		leave: '',
		timelog: '',
	};

	handleAddLog = () => {
		this.setState({
			// [a, ...b]
			// 기존에 배열 b에 들어있는 데이터를 뒤로 밀고
			// 새로 들어온 데이터를 앞으로 입력
			timestamp: [
				{
					date: new Date().toLocaleDateString(),
					time: new Date().toLocaleTimeString(),
				},
				...this.state.timestamp,
			],
		});
	};

	logOut = async () => {
		try {
			await AsyncStorage.clear();
		} catch (err) {
			console.error(err);
		}
	};

	Timelog = async () => {
		alert('ㅅㅂㅅㅂ');

		const {
			data: { result },
			// } = await axios.post('http://70.12.225.80:4000/timelog', {
		} = await axios.post('http://localhost:4000/timelog', {
			params: {
				pnum: '01054884480',
				name: '윤영욱',
				go: this.state.go,
				leave: this.state.leave,
				timelog: this.state.timelog,
			},
		});

		this.setState({
			timestamp: [timelog, ...this.state.timelog],
		});

		console.log(result);

		return alert(result);
	};

	gobuttonChange = async () => {
		this.setState({
			go: 1,
			leave: '',
			timelog: Date(),
		});

		await console.log('go', this.state.go);
		await console.log('leave', this.state.leave);
		await console.log('timelog : ', this.state.timelog);

		await this.Timelog();
	};

	leavebuttonChange = async () => {
		await this.setState({
			go: '',
			leave: 1,
			timelog: Date(),
		});
		await console.log('go', this.state.go);
		await console.log('leave', this.state.leave);
		await console.log('timelog', this.state.timelog);

		await this.Timelog();
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.navContainer}></View>
					<View style={styles.titleContainer}>
						<Text style={styles.titleText}>사장님</Text>
						<Text style={styles.titleText}>
							오늘의 업무 내용입니다.
						</Text>
					</View>
					{this.state.go === 1 ? (
						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={this.leavebuttonChange}>
								<View style={styles.buttonView}>
									<Text
										style={{
											color: '#FFA904',
											fontSize: 20,
										}}
									>
										출근 버튼
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					) : this.state.leave === 1 ? (
						<View style={styles.buttonContainer}>
							<TouchableOpacity onPress={this.gobuttonChange}>
								<View style={styles.buttonView}>
									<Text
										style={{
											color: '#FFA904',
											fontSize: 20,
										}}
									>
										퇴근 버튼
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
					<View style={styles.stateContainer}>
						<View style={styles.leftContainer}></View>
						<View style={styles.midContainer}>
							<Text style={styles.stateTitleText}>
								업무 진행 상황
							</Text>
							<Text style={styles.stateContentText}>90%</Text>
						</View>
						<View style={styles.rightContainer}>
							<Text style={styles.stateTitleText}>정산 내역</Text>
							<Text style={styles.stateContentText}>9,000</Text>
						</View>
					</View>
				</View>
				<ScrollView alwaysBounceVertical="true">
					<View style={styles.bottomContainer}>
						<View style={styles.logContainer}>
							<Text style={styles.logText}>
								{this.state.timelog}
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	topContainer: {
		flex: 1,
		backgroundColor: '#000000',
		justifyContent: 'center',
		color: '#ffffff',
		paddingTop: 50,
		paddingHorizontal: 30,
		minHeight: '50%',
		maxHeight: '50%',
	},
	bottomContainer: {
		flex: 1,
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	navContainer: {
		flex: 1,
		// borderColor: '#ffffff',
		// borderWidth: 1,
	},
	titleContainer: {
		flex: 2,
		// borderColor: '#ffffff',
		// borderWidth: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
		// borderColor: '#ffffff',
		// borderWidth: 1,
		justifyContent: 'center',
	},
	stateContainer: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		// borderColor: '#ffffff',
		// borderWidth: 1,
	},
	titleText: {
		color: '#ffffff',
		fontSize: 30,
	},
	button: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFA904',
	},
	leftContainer: {
		flex: 1,
		// borderColor: '#ffffff',
		// borderWidth: 1,
	},
	midContainer: {
		flex: 1,
		// borderColor: '#ffffff',
		// borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	rightContainer: {
		flex: 1,
		// borderColor: '#ffffff',
		// borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	stateTitleText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 17,
	},
	stateContentText: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 25,
		paddingTop: 15,
	},
	buttonView: {
		borderWidth: 1,
		borderRadius: 30,
		borderColor: '#FFA904',
		width: '40%',
		height: '77%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logIconContainer: {
		flex: 1,
		borderColor: '#000000',
		borderWidth: 1,
	},
	logContainer: {
		flex: 2,
		paddingTop: 20,
		// borderColor: '#000000',
		// borderWidth: 1,
	},
	logText: {
		fontSize: 20,
		// paddingVertical: 20,
		// marginLeft: 10,
	},
});
