class MobileSessionList extends React.Component {
  render() {
    let display = (this.props.show) ? "initial" : "none";
    return (
      <div className="uk-hidden-medium uk-hidden-large" style={{display: display}}>
        {
          _.map(this.props.sessions, (session,i) => {
            return (
                  _.map(session, (item, j) => {
                    return (
                      <div>
                        <div className="uk-flex uk-margin-top uk-margin-bottom uk-width-1-1" key={j}>
                          <div className="uk-width-4-10 uk-flex uk-flex-middle relative">
                            <h3 className="no-margin pull-right uk-margin-right">{item.location}</h3>
                          </div>
                          <div className="uk-width-6-10 uk-flex uk-flex-middle">
                            <div className="uk-flex uk-flex-column">
                              <h4 className="no-margin">{item.start_time_str + ' - ' + item.end_time_str}</h4>
                              <p className="no-margin">{item.name}</p>
                              <p className="no-margin" style={{fontSize: "0.8em"}}>
                                <span>by</span> {item.speaker}</p>
                            </div>
                          </div>
                        </div>
                        <div className="divider"></div>
                      </div>
                    );
                  })
            );
          })
        }
      </div>
    );
  }
}

export default MobileSessionList;
