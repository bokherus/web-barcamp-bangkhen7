const moment = require('moment');
let morningTime = [{start: '10:40', end: '11:05'}, {start: '11:10', end: '11:35'}, {start: '11:40', end: '12:05'} ];
let afternoonTime = [{start: '13:00', end: '13:25'}, {start: '13:30', end: '13:55'}, {start: '14:00', end: '14:25'}, {start: '14:30', end: '14:55'} ];
let afterBreakTime = [{start: '15:20', end: '15:45'}, {start: '15:50', end: '16:15'}, {start: '16:20', end: '16:45'}];
let vm = (state, action) => {
  switch(action.type) {
    case 'init':
      state = {
        toggle: {
          'morning-table': true,
          'afternoon-table': true,
          'afterbreak-table': true
        },
        morningSessions: dataFormatter(morningTime, $.extend(true, {}, action.data)),
        afternoonSessions: dataFormatter(afternoonTime, $.extend(true, {}, action.data)),
        afterbreakSessions: dataFormatter(afterBreakTime, $.extend(true, {}, action.data))
      };
      return state;
    default:
      return state;
  }
};

let dataFormatter = (times,sessions) => {
  let returnSessions = [];
  let validatedData = _.map(sessions, (session) => {
    let startTime      = moment(session.start_time).utc().format('HH:mm');
    let endTime        = moment(session.end_time).utc().format('HH:mm');
    session.start_time_str = startTime;
    session.end_time_str   = endTime;
    return session;
  });
  _.map(times, (time) => {
    let eachTime = _.filter(validatedData, (data) => {
      return data.start_time_str === time.start && data.end_time_str === time.end;
    });
    eachTime.sort((a, b) => {
      return parseInt(a.location) - parseInt(b.location);
    });
    returnSessions.push(eachTime);
  });
  return returnSessions;
};

let isLive = (session) => {
  let now = new Date().getTime() + (60*60*7*1000);
  let startTime = new Date(session.start_time).getTime();
  let endTime = new Date(session.end_time).getTime();
  return startTime < now && now < endTime;
};

vm.isLive = isLive;
export default vm;
