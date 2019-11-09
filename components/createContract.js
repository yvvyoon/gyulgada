import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Modal,
	Alert,
	AsyncStorage,
} from 'react-native';
import axios from 'axios';

export default class createContract extends React.Component {
	state = {
		pubKey: '',
		articles: [],
	};

	callArticles = async () => {
		try {
			const {
				data: { applyList },
				// } = await axios.post('http://172.20.10.3:4000/timelog', {
			} = await axios.post('http://192.168.11.150:4000/createcontract', {
				params: {
					pubKey: this.state.pubKey,
				},
			});

			// alert(applyList);
			this.setState({ articles: applyList });
		} catch (err) {
			alert(err);
		}
	};

	approve = () => {
		alert('ㅗㅑ');
	};

	deny = () => {
		alert('ㅗㅑ');
	};

	componentDidMount() {
		this.callArticles();

		AsyncStorage.getItem('pubKey')
			.then(result => {
				this.setState({ pubKey: result });
			})
			.catch(err => {
				alert(err);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.articles.map(item => {
					return (
						<View style={styles.itemContainer}>
							<View style={styles.article}>
								<Text style={styles.buttonText}>
									{item.db_title}
								</Text>
								<Text style={styles.buttonText}>
									{item.db_wtype}
								</Text>
								<Text style={styles.buttonText}>
									{item.db_name}
								</Text>
							</View>
							{/* 컴포넌트  */}
							<TouchableOpacity
								style={styles.button}
								onPress={this.approve}
							>
								<Text style={styles.buttonText}>승인</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={this.deny}
							>
								<Text style={styles.buttonText}>거부</Text>
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// maxHeight: '50%',
		paddingTop: 130,
	},
	itemContainer: {
		flex: 1,
		// borderColor: '#000000',
		// borderWidth: 1,
		maxHeight: '10%',
		minHeight: '10%',
		flexDirection: 'row',
		marginVertical: 5,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	article: {
		borderWidth: 1,
		flex: 3,
		justifyContent: 'center',
		// alignItems: 'center',
		// flexDirection: 'row',
		paddingLeft: 10,
		borderColor: '#000000',
		borderWidth: 1,
	},
	button: {
		borderColor: '#000000',
		borderWidth: 1,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 5,
	},
	buttonText: {
		fontSize: 15,
	},
});
