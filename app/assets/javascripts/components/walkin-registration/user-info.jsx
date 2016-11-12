import Field from './field.jsx';
import VerifyService from './verify-service';
class UserInfo extends React.Component {

  checkin() {
    VerifyService.checkin(this.props.user.code, this.props.success, this.props.fail);
    this.props.clearAction();
  }
	render() {
    if(!this.props.user){ return <div></div>; }
		return (
			<div className="panel panel-default" style={{marginTop: 30}}>
        <div className="panel-body">
          <Field title="Code" text={this.props.user.code} />
          <div style={{display: 'flex'}}>
            <Field title="Firstname" text={this.props.user.first_name} />
            <Field style={{marginLeft: 10}} title="Lastname" text={this.props.user.last_name} />
          </div>
          <Field title="Email" text={this.props.user.email} />
          <Field title="Shirt Size" text={this.props.user.shirt_size} />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={this.checkin.bind(this)} className="btn btn-success" style={{paddingLeft: 25, paddingRight: 25}}>OK</button>
          </div>
        </div>
      </div>
		);
	}
}

export default UserInfo;
