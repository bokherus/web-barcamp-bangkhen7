class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="uk-grid uk-width-1-1 uk-flex uk-flex-center uk-margin-top">
        <div id="footer-bcbk-name" className="uk-text-left uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-bottom">
          <p className="uk-text-uppercase">barcamp bangkhen 2016</p>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-column uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-bottom">
          <p className="uk-text-uppercase uk-text-center">contact with us</p>
          <div className="flex flex-center uk-margin-top">
            <a href="https://www.facebook.com/Barcampbangkhen/" target="_blank">
              <img className="social-icon"  src={this.props.facebookLogo}/>
            </a>
            <a href="https://twitter.com/barcampbangkhen" target="_blank">
              <img className="uk-margin-left social-icon" src={this.props.twitterLogo} />
            </a>
          </div>
        </div>
        <div id="contact-email" className="uk-text-right uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1 uk-margin-top uk-margin-bottom">
          <p className="uk-text-uppercase">contact us</p>
          <p className="uk-margin-top">info@barcampbangkhen.org</p>
        </div>
      </div>
    );
  }
}

export default Footer;
