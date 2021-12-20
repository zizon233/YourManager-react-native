import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  dayNames: ['Monday','TuesDay','Wednesday','Thursday','Friday','Saturday','Sunday'],
  dayNamesShort: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  today: ''
};
LocaleConfig.defaultLocale = 'kr';

const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn'
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar'
  },
  calendarList: {CONTAINER: 'calendarList'},
  horizontalList: {CONTAINER: 'horizontalList'},
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item'
  },
  expandableCalendar: {CONTAINER: 'expandableCalendar'},
  weekCalendar: {CONTAINER: 'weekCalendar'}
};

const Calendars = () => {
  return (
    <CalendarList
      testID={testIDs.calendarList.CONTAINER}
      //current={'2021-0-10'}
      pastScrollRange={24}
      futureScrollRange={24}
      renderHeader={date => {
        const header = date.toString('MMMM yyyy');
        const [year, month] = header.split(' ');
        const textStyle = {
          fontSize: 18,
          fontWeight: 'bold',
          paddingTop: 10,
          paddingBottom: 10,
          color: '#5E60CE',
          paddingRight: 5
        };

        return (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Text style={{marginLeft: 5, ...textStyle}}>{`${month}`}</Text>
            <Text style={{marginRight: 5, ...textStyle}}>{year}</Text>
          </View>
        );
      }}
      theme={{
        'stylesheet.calendar.header': {
          dayHeader: {
            fontWeight: '600',
            color: '#48BFE3'
          }
        },
        'stylesheet.day.basic': {
          today: {
            borderColor: '#48BFE3',
            borderWidth: 0.8
          },
          todayText: {
            color: '#5390D9',
            fontWeight: '800'
          }
        }
      }}
    />
  );
};

export default Calendars;