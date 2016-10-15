class Wrapper extends React.Component {
  render() {
    return (
      <div id="thankyou-wrapper" className="full-width full-height uk-flex uk-flex-middle">
        <div style={{padding: 40}} className="uk-container-center uk-width-8-10 uk-width-large-6-10 uk-width-medium-6-10 parking-card uk-flex uk-flex-column uk-text-center">
          <h3>{this.props.user.first_name + " " + this.props.user.last_name}</h3>
          <h3 className="no-margin thin">Thank you for joining us.</h3>
          <h3 className="no-margin thin">See you on 13 November 2016.</h3>
          <h3 className="thin">Please check your inbox for confirmation e-mail.</h3>
          <div className="uk-width-1-1 uk-margin-top">
            <a href="/participants" className="flat-white-button pointer">See who's coming</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
