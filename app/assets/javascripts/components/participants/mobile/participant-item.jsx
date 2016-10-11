class ParticipantItem extends React.Component {
  render() {
    var participant = this.props.participant;
    return (
      <div className="table-body-row uk-grid uk-width-1-1 mobile-body-row">
        <div className="uk-width-1-10 uk-flex uk-flex-center uk-flex-middle">
          <h4 className="thin">{participant.no}</h4>
        </div>
        <div className="uk-width-9-10">
          <h3>{participant.name}</h3>
          <h5 className="thin">{participant.education}</h5>
          <h6 className="thin">{participant.twitter + " / " + participant.website}</h6>
          <h6 className="thin">{_.replace(participant.interest.toString(), /,/g, " ")}</h6>
        </div>
      </div>
    );
  }
}

export default ParticipantItem;
