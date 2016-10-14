import Header from './header.jsx';
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.resend = this.resend.bind(this);
    this.state = {
      email : null
    };
  }
  resend() {
    var email = this.refs.email.value || this.refs['email-mobile'].value;
    this.setState({
      email: email
    });
    Service.email.resend(email,this.props.token);
  }
  render() {
    return (
      <div id="resend-wrapper" className="uk-width-1-1 full-height uk-flex uk-flex-middle">
        <div className="uk-width-8-10 uk-width-medium-6-10 uk-width-large-6-10 uk-container-center uk-flex uk-flex-center uk-flex-column">
          <Header />
          <div className="uk-width-1-1 uk-text-center resend-text" style={{marginTop: "16vh"}}>
            <h3 className="thin">Missing the email? Try checking your spam and trash folder before requesting a resend</h3>
            <h3 className="thin">กรุณาตรวจสอบในโฟลเดอร์อีเมลขยะ หรือสแปมก่อนส่งอีเมลอีกครั้ง</h3>
          </div>
          <div className="uk-width-1-1 uk-flex uk-hidden-small">
            <div className="uk-width-8-10 email-input-wrapper">
              <div className="uk-flex uk-flex-middle">
                <h3 className="uk-text-uppercase no-margin uk-margin-right">e-mail</h3>
              </div>
              <input ref="email" className="full-width-flex" style={{paddingTop: 7, paddingBottom: 7}}/>
            </div>
            <div onClick={this.resend} className="uk-width-2-10 submit-button uk-flex uk-flex-middle pointer">
              <div className="uk-width-3-10 uk-container-center">
                <img src={this.props.email1}/>
              </div>
            </div>
          </div>
          <div className="uk-width-1-1 uk-flex uk-hidden-medium uk-hidden-large uk-flex-column">
            <div className="uk-width-1-1 email-input-wrapper uk-flex uk-flex-column">
              <div className="uk-width-1-1 uk-text-center uk-margin-bottom">
                <h2 className="uk-text-uppercase no-margin">e-mail</h2>
              </div>
              <input ref="email-mobile" className="full-width-flex uk-width-1-1 uk-text-center" style={{paddingTop: 7, paddingBottom: 7}}/>
            </div>
            <div onClick={this.resend} className="uk-width-1-1 submit-button uk-flex uk-flex-middle pointer" style={{padding: 20}}>
              <div className="uk-width-1-10 uk-container-center">
                <img src={this.props.email1}/>
              </div>
            </div>
          </div>
          <h3 className="uk-text-center thin" style={{display: this.state.email !== null ? "" : "none"}}>E-mail has been sent to {this.state.email}. Please check in the inbox.</h3>
        </div>
      </div>
    );
  }
}

export default Wrapper;
