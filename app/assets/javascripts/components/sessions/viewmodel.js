const moment = require('moment');
let morningTime = [{start: '10:30', end: '11:00'}, {start: '11:00', end: '11:30'}, {start: '11:30', end: '12:00'} ];
let afternoonTime = [{start: '13:00', end: '13:30'}, {start: '13:30', end: '14:00'}, {start: '14:00', end: '14:30'} ];

let vm = (state, action) => {
  switch(action.type) {
    case 'init':
      state = {
        morningSessions: dataFormater(morningTime, $.extend(true, {}, action.data)),
        afternoonSessions: dataFormater(afternoonTime, $.extend(true, {}, action.data))
      };
      return state;
    default:
      return state;
  }
};

let dataFormater = (times,sessions) => {
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
  return returnSessions;
};

vm.dataFormater = dataFormater;
export default vm;
