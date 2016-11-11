import DesktopTable from './desktop/desktop-table.jsx';
import TimeHeader from './time-header.jsx';
import vm from './viewmodel';
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.dispatcher = this.dispatcher.bind(this);
    this.state = vm({}, {type: 'init', data: this.props.sessions});
  }
  componentDidMount() {
  }
  dispatcher(action) {
    this.setState(vm(this.state, action));
  }
  render() {
    return (
      <div id="sessions" className="uk-width-1-1">
        <div className="banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
          <h1 className="uk-text-uppercase">Sessions</h1>
        </div>
        <div id="sessions-wrapper" className="uk-width-9-10 uk-flex uk-flex-center uk-flex-column uk-container-center uk-margin-top padding-all">
          <TimeHeader text="Morning" primary={true}/>
          <DesktopTable sessions={this.state.morningSessions} />

          <TimeHeader text="Afternoon" primary={true}/>
          <DesktopTable sessions={this.state.afternoonSessions} />

          <TimeHeader text="Break" primary={false}/>
          <DesktopTable sessions={this.state.afterbreakSessions} />
        </div>
      </div>
    );
  }
}

export default Wrapper;
