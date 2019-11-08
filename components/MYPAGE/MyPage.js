import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class MyPage extends React.Component {
	state = {
		firstQuery: '',
	};
	render() {
		const { firstQuery } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>내 계약서</Text>
				</View>
				{/* <View style={styles.searchContainer}> */}
				<Searchbar
					placeholder="사업장명을 검색하세요."
					onChangeText={query => {
						this.setState({ firstQuery: query });
					}}
					value={firstQuery}
				/>
				{/* </View> */}
				<ScrollView
					horizontal="true"
					showsHorizontalScrollIndicator="false"
				>
					<View style={styles.dayContainer}>
						<TouchableOpacity>
							<View style={styles.selectedDayButton}>
								<Text style={styles.selectedDay}>05</Text>
								<Text style={styles.selectedMonth}>May</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.dayButton}>
								<Text style={styles.day}>05</Text>
								<Text style={styles.month}>May</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.dayButton}>
								<Text style={styles.day}>05</Text>
								<Text style={styles.month}>May</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.dayButton}>
								<Text style={styles.day}>05</Text>
								<Text style={styles.month}>May</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.dayButton}>
								<Text style={styles.day}>05</Text>
								<Text style={styles.month}>May</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
				<ScrollView
					alwaysBounceVertical="true"
					showsVerticalScrollIndicator="false"
				>
					<View style={styles.itemContainer}>
						<TouchableOpacity>
							<View style={styles.itemButton}>
								<View style={styles.itemLeft}>
									<AntDesign name="checkcircle" size="30" />
								</View>
								<View style={styles.itemMid}>
									<Text style={styles.itemName}>
										남동영농조합
									</Text>
									<Text style={styles.itemPeriod}>
										05월 01일 (화) - 05월 03월 (목)
									</Text>
								</View>
								<View style={styles.itemRight}>
									<SimpleLineIcons
										name="arrow-right"
										size="15"
										color="#d3d3d3"
									/>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.itemButton}>
								<View style={styles.itemLeft}>
									<AntDesign name="checkcircle" size="30" />
								</View>
								<View style={styles.itemMid}>
									<Text style={styles.itemName}>
										남동영농조합
									</Text>
									<Text style={styles.itemPeriod}>
										05월 01일 (화) - 05월 03월 (목)
									</Text>
								</View>
								<View style={styles.itemRight}>
									<SimpleLineIcons
										name="arrow-right"
										size="15"
										color="#d3d3d3"
									/>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.itemButton}>
								<View style={styles.itemLeft}>
									<AntDesign name="checkcircle" size="30" />
								</View>
								<View style={styles.itemMid}>
									<Text style={styles.itemName}>
										남동영농조합
									</Text>
									<Text style={styles.itemPeriod}>
										05월 01일 (화) - 05월 03월 (목)
									</Text>
								</View>
								<View style={styles.itemRight}>
									<SimpleLineIcons
										name="arrow-right"
										size="15"
										color="#d3d3d3"
									/>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.itemButton}>
								<View style={styles.itemLeft}>
									<AntDesign name="checkcircle" size="30" />
								</View>
								<View style={styles.itemMid}>
									<Text style={styles.itemName}>
										남동영농조합
									</Text>
									<Text style={styles.itemPeriod}>
										05월 01일 (화) - 05월 03월 (목)
									</Text>
								</View>
								<View style={styles.itemRight}>
									<SimpleLineIcons
										name="arrow-right"
										size="15"
										color="#d3d3d3"
									/>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.itemButton}>
								<View style={styles.itemLeft}>
									<AntDesign name="checkcircle" size="30" />
								</View>
								<View style={styles.itemMid}>
									<Text style={styles.itemName}>
										남동영농조합
									</Text>
									<Text style={styles.itemPeriod}>
										05월 01일 (화) - 05월 03월 (목)
									</Text>
								</View>
								<View style={styles.itemRight}>
									<SimpleLineIcons
										name="arrow-right"
										size="15"
										color="#d3d3d3"
									/>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.itemButton}>
								<View style={styles.itemLeft}>
									<AntDesign name="checkcircle" size="30" />
								</View>
								<View style={styles.itemMid}>
									<Text style={styles.itemName}>
										남동영농조합
									</Text>
									<Text style={styles.itemPeriod}>
										05월 01일 (화) - 05월 03월 (목)
									</Text>
								</View>
								<View style={styles.itemRight}>
									<SimpleLineIcons
										name="arrow-right"
										size="15"
										color="#d3d3d3"
									/>
								</View>
							</View>
						</TouchableOpacity>
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
		marginHorizontal: 30,
		marginTop: 50,
		// borderColor: '#000000',
		// borderWidth: 1,
	},
	titleContainer: {
		flex: 1,
		// borderColor: '#000000',
		// borderWidth: 1,
		minHeight: '10%',
		// paddingTop: 50,
	},
	searchContainer: {
		flex: 1,
		// borderColor: '#000000',
		// borderWidth: 1,
		minHeight: '15%',
	},
	dayContainer: {
		flex: 1,
		flexDirection: 'row',
		// borderColor: '#000000',
		// borderWidth: 1,
		alignItems: 'center',
		minHeight: '25%',
	},
	itemContainer: {
		flex: 7,
		// borderColor: '#000000',
		// borderWidth: 1,
		minHeight: '50%',
		maxHeight: '50%',
	},
	titleText: {
		fontSize: 25,
		paddingTop: 10,
		textAlign: 'center',
	},
	selectedDayButton: {
		flex: 1,
		borderRadius: 20,
		minWidth: 80,
		minHeight: 80,
		maxWidth: 80,
		maxHeight: 80,
		backgroundColor: '#FFA904',
		borderColor: '#FFA904',
		marginRight: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dayButton: {
		flex: 1,
		borderRadius: 20,
		minWidth: 80,
		minHeight: 80,
		maxWidth: 80,
		maxHeight: 80,
		backgroundColor: '#d3d3d3',
		borderColor: '#d3d3d3',
		marginRight: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedDay: {
		color: '#ffffff',
		fontSize: 30,
	},
	day: {
		fontSize: 30,
	},
	selectedMonth: {
		color: '#ffffff',
		fontSize: 15,
	},
	month: {
		fontSize: 15,
	},
	itemButton: {
		flex: 1,
		flexDirection: 'row',
		borderColor: '#ffffff',
		borderWidth: 0.5,
		borderColor: '#000000',
		marginBottom: 10,
		borderRadius: 20,
		minHeight: 70,
		maxWidth: '98%',
		alignItems: 'center',
	},
	itemLeft: {
		flex: 1,
		alignItems: 'center',
	},
	itemMid: {
		flex: 3,
	},
	itemRight: {
		flex: 1,
		alignItems: 'center',
	},
	itemName: {
		fontWeight: 'bold',
		paddingBottom: 5,
	},
	itemPeriod: {
		color: '#808080',
	},
});
