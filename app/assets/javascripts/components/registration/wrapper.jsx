import Chips, {Chip} from 'react-chips';
import Input from '../input.jsx';
import CustomChip from './CustomChip';

const data = [
  "Javascript",
  "Swift",
  "Programming"
];

class Wrapper extends React.Component {
	onSubmit(e) {
		e.preventDefault();
		var data = $('form').serializeArray();
		Service.authentication.signup(data);
	}

	change(chips) {
		console.log(chips);
	}

	render() {
		return (
			<div id="registration_form" className="full-height">
				{/* <div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
					<h1 className="uk-text-uppercase">Registration</h1>
				</div> */}
				<div className="uk-flex uk-flex-center uk-flex-middle full-height">
					<div className="uk-container-center parking-card uk-width-9-10 uk-width-medium-5-10 uk-width-large-5-10">
						<form onSubmit={this.onSubmit} className="uk-form">
							<fieldset data-uk-margin>
								<input name="authenticity_token" type="hidden" value={this.props.token}/>
									<div className="uk-form-row input-label uk-width-1-1">
										<Input className="uk-width-medium-4-10" thin label="Firstname" name="first_name" center/>
										<Input className="uk-width-medium-4-10 uk-push-2-10" thin label="Lastname" name="last_name" center/>
									</div>

									<div className="uk-form-row input-label uk-width-1-1">
										<Input className="uk-width-medium-4-10" thin label="E-mail" name="email" center/>
										<Input className="uk-width-medium-4-10 uk-push-2-10" thin label="Twitter" name="twitter" center/>
									</div>

									<div className="uk-form-row input-label uk-width-1-1">
										<Input className="uk-width-medium-4-10" thin label="Workplace" name="workplace" center/>
										<Input className="uk-width-medium-4-10 uk-push-2-10" thin label="Personal Website" name="website" center/>
									</div>

									<div className="uk-form-row">
											<label>Interests</label>
											<Chips
                        suggestions={data}
											  renderChip={(item) => (
									        <CustomChip>{item}</CustomChip>
									      )}
                        onChange={this.change}
										// 	renderSuggestion={(item, { query }) => (
								    //   <div key={item.name}>{item.name}</div>
								    // )}
								    // suggestionsFilter={(opt, val) => (
								    //   opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
								    // )}
								    // getSuggestionValue={suggestion => suggestion.name}

											/>
									</div>

									<div className="uk-form-row">
											<label>Shirt size</label><br></br>
											<select className="uk-width-medium-4-10">
												<option value="default" disabled selected>ไซส์ รอบอก(นิ้ว) ความยาว(นิ้ว)</option>
												<option value="s">S	34 26</option>
												<option value="m">M 36 27</option>
												<option value="l">L 38 28</option>
												<option value="xl">XL 40 29</option>
												<option value="2xl">2XL 42 30</option>
												<option value="3xl">3XL 44 31</option>
												<option value="4xl">4XL 46 32</option>
												<option value="5xl">5XL 48 32</option>
												<option value="6xl">6XL 50 33</option>
											</select>
									</div>

									<button className="flat-white-button uk-width-medium-4-10 uk-push-3-10" type="button" style={{marginTop: 25}}>Confirm</button>

							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Wrapper;
