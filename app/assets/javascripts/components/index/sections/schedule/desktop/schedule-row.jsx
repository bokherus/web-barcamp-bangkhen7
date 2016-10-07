class ScheduleRow extends React.Component {
  render() {
    return (
      <div className="uk-width-1-1 uk-flex uk-margin-top">
        <div className="uk-width-3-10 uk-text-center">
          <h3 className="thin">{this.props.time}</h3>
        </div>
        <div className="uk-width-7-10 uk-text-left">
          <h2 className="uk-text-uppercase no-margin">{this.props.head}</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ScheduleRow;
