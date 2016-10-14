import Chips, {Chip} from 'react-chips';
class Wrapper extends React.Component {
	onSubmit(e) {
		e.preventDefault();
		var data = $('form').serializeArray();
		Service.authentication.signup(data);
	}
	getChipValue(c) {
		console.log(c);
	}
	render() {
		return (
			<div id="registration_form">
				<div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
					<h1 className="uk-text-uppercase">Registration</h1>
				</div>
				<div className="uk-width-1-1 black-wrapper">
					<div className="uk-width-8-10 uk-container-center parking-card">
						<form onSubmit={this.onSubmit} className="uk-form uk-width-6-10">
							<input name="authenticity_token" type="hidden" value={this.props.token}/>
							<input className="input-form" name="first_name" placeholder="Firstname"/>
							<input name="last_name" placeholder="Lastname"/>
							<input name="email" placeholder="Email"/>
							<input name="shirt_size" placeholder="S,M,L,XL"/>
							<input name="twitter" placeholder="@twitter"/>
							<input name="workplace" placeholder="Work place (Glazziq,..)"/>
							<input name="website" placeholder="Personal website"/>
							<Chips onChange={this.getChipValue} suggestions={["Your", "Data", "Here"]}/>
							<button className="uk-button">Update Profile</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Wrapper;
