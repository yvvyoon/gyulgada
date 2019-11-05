import React, { version } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class Schedule extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//set value in state for start and end date
			selectedStartDate: null,
			selectedEndDate: null,
			workCount: 0,
			list: [
				{
					name: '제주 귤 농장',
					address: '제주 서귀포시... 주소',
				},
				{
					name: '제주 한라봉 따기',
					address: '제주 서귀포시... 주소',
				},
				{
					name: '우도 가기',
					address: '제주 서귀포시... 주소',
				},
				{
					name: '땅콩 아이스크림',
					address: '제주 서귀포시... 주소',
				},
			],
		};

		this.onDateChange = this.onDateChange.bind(this);
	}

	onDateChange(date, type) {
		//function to handle the date change
		if (type === 'END_DATE') {
			this.setState({
				selectedEndDate: date,
			});
		} else {
			this.setState({
				selectedStartDate: date,
				selectedEndDate: null,
			});
		}
	}

	render() {
		const { selectedStartDate, selectedEndDate } = this.state;
		const minDate = new Date(2018, 1, 1); // Min date
		const maxDate = new Date(2050, 6, 3); // Max date
		const startDate = selectedStartDate ? selectedStartDate.toString() : ''; //Start date
		const endDate = selectedEndDate ? selectedEndDate.toString() : ''; //End date

		return (
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.titleText}>일정</Text>
					</View>
					<View style={styles.calendarContainer}>
						<CalendarPicker
							startFromMonday={false}
							allowRangeSelection={true}
							minDate={minDate}
							maxDate={maxDate}
							weekdays={[
								'일',
								'월',
								'화',
								'수',
								'목',
								'금',
								'토',
							]}
							months={[
								'1월',
								'2월',
								'3월',
								'4월',
								'5월',
								'6월',
								'7월',
								'8월',
								'9월',
								'10월',
								'11월',
								'12월',
							]}
							previousTitle="이전"
							nextTitle="다음"
							todayBackgroundColor="#808080"
							selectedDayColor="#000000"
							selectedDayTextColor="#ffffff"
							scaleFactor={375}
							textStyle={{
								// fontFamily: 'NanumGothicCoding.ttf',
								color: '#ffffff',
								fontSize: 17,
							}}
							onDateChange={this.onDateChange}
						/>
					</View>
				</View>
				<View style={styles.listContainer}>
					<View style={styles.listTitleContainer}>
						<Text style={styles.listTitle}>알바 리스트</Text>
						<Text style={styles.listSubtitle}>업무 내용 : 3개</Text>
					</View>
					<ScrollView alwaysBounceVertical>
						{this.state.list.map(res => {
							return (
								<View style={styles.listContentContainer}>
									<Text style={styles.name}>{res.name}</Text>
									<Text style={styles.address}>
										{res.address}
									</Text>
								</View>
							);
						})}
					</ScrollView>
				</View>
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
		minHeight: '60%',
		backgroundColor: '#FFA904',
		paddingTop: 50,
	},
	titleContainer: {
		// flex: 1,
		// borderColor: '#000000',
		// borderWidth: 1,
		minHeight: '10%',
	},
	calendarContainer: {
		// flex: 1,
		// borderColor: '#000000',
		// borderWidth: 1,
		minHeight: '50%',
	},
	listContainer: {
		minHeight: '40%',
		paddingHorizontal: 30,
		paddingTop: 30,
	},
	listTitleContainer: {
		borderBottomColor: '#d3d3d3',
		borderBottomWidth: 0.5,
	},
	listContentContainer: {
		paddingTop: 15,
		paddingLeft: 20,
		paddingBottom: 10,
	},
	titleText: {
		fontSize: 25,
		paddingTop: 10,
		textAlign: 'center',
		color: '#ffffff',
	},
	listTitle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginBottom: 10,
	},
	listSubtitle: {
		color: '#808080',
		fontSize: 20,
		paddingBottom: 15,
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	address: {
		fontSize: 17,
		color: '#808080',
	},
});
