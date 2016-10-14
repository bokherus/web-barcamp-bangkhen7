class ParticipantItem extends React.Component {
  render() {
    var participant = this.props.participant;
    return (
      <div className="table-body-row uk-flex uk-width-1-1 mobile-body-row">
        <div className="uk-width-9-10 uk-container-center">
          <h3 className="no-margin">{participant.first_name + " " + participant.last_name}</h3>
          <h5 className="thin no-margin">{participant.workplace}</h5>
          <h6 className="thin no-margin">{participant.twitter + " / " + participant.website}</h6>
          <h6 className="thin interest-text no-margin">{_.replace(_.map(participant.topics, 'name').toString(), /,/g, " ")}</h6>
        </div>
      </div>
    );
  }
}

export default ParticipantItem;
