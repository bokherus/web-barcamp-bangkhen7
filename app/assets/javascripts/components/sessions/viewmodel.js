const moment = require('moment');
let morningTime = [{start: '10:40', end: '11:05'}, {start: '11:10', end: '11:35'}, {start: '11:40', end: '12:05'} ];
let afternoonTime = [{start: '13:00', end: '13:25'}, {start: '13:30', end: '13:55'}, {start: '14:00', end: '14:25'}, {start: '14:30', end: '14:55'} ];
let afterBreakTime = [{start: '15:20', end: '15:45'}, {start: '15:50', end: '16:15'}, {start: '16:20', end: '16:45'}];
let vm = (state, action) => {
  switch(action.type) {
    case 'init':
      state = {
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
    let startTime      = moment(session.start_time).utcOffset('+0000').format('HH:mm');
    let endTime        = moment(session.end_time).utcOffset('+0000').format('HH:mm');
    session.start_time = startTime;
    session.end_time   = endTime;
    return session;
  });
  _.map(times, (time) => {
    let eachTime = _.filter(validatedData, (data) => {
      return data.start_time === time.start && data.end_time === time.end;
    });
    eachTime.sort((a, b) => {
      return parseInt(a.location) - parseInt(b.location);
    });
    returnSessions.push(eachTime);
  });
  console.log(returnSessions);
  return returnSessions;
};
export default vm;
