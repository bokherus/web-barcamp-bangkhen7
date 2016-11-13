import DesktopTable from './desktop/desktop-table.jsx';
import MobileList from './mobile/mobile-list.jsx';
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
  toggleTable(element) {
    let newState = {};
    newState[element] = !this.state.toggle[element];
    this.setState(_.merge(this.state.toggle, newState));
  }
  render() {
    return (
      <div id="sessions" className="uk-width-1-1">
        <div className="banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
          <h1 className="uk-text-uppercase">Sessions</h1>
        </div>
        <div id="sessions-wrapper" className="uk-width-9-10 uk-flex uk-flex-center uk-flex-column uk-container-center uk-margin-top padding-all">
          <div className="uk-margin-top">
            <TimeHeader {...this.props} text="Morning" primary={true} onClick={this.toggleTable.bind(this,"morning-table")}/>
            <DesktopTable isLive={vm.isLive} show={this.state.toggle['morning-table']} sessions={this.state.morningSessions} />
            <MobileList isLive={vm.isLive} show={this.state.toggle['morning-table']} sessions={this.state.morningSessions} />
          </div>
          {/* <div className="uk-margin-top">
            <TimeHeader {...this.props}  text="Afternoon" primary={true} onClick={this.toggleTable.bind(this,"afternoon-table")}/>
            <DesktopTable isLive={vm.isLive} show={this.state.toggle['afternoon-table']} sessions={this.state.afternoonSessions} />
            <MobileList isLive={vm.isLive} show={this.state.toggle['afternoon-table']} sessions={this.state.afternoonSessions} />
          </div>
          <div className="uk-margin-top">
            <TimeHeader {...this.props}  text="Break" primary={false} onClick={this.toggleTable.bind(this,"afterbreak-table")}/>
            <DesktopTable isLive={vm.isLive} show={this.state.toggle['afterbreak-table']} sessions={this.state.afterbreakSessions} />
            <MobileList isLive={vm.isLive} show={this.state.toggle['afterbreak-table']} sessions={this.state.afterbreakSessions} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Wrapper;
