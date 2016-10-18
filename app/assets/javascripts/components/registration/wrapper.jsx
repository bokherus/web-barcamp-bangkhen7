import Chips from './chips/Chips.js';
import Chip from './chips/Chip.js';
import Input from '../input.jsx';
import CustomChip from './CustomChip';
const shirtSize = [
	{
		letter: "S",
		number: "34 26"
	}, {
		letter: "M",
		number: "36 27"
	}, {
		letter: "L",
		number: "38 28"
	}, {
		letter: "XL",
		number: "40 29"
	}, {
		letter: "2XL",
		number: "42 30"
	}, {
		letter: "3XL",
		number: "44 31"
	}, {
		letter: "4XL",
		number: "46 32"
	}, {
		letter: "5XL",
		number: "48 32"
	}, {
		letter: "6XL",
		number: "50 33"
	}
];
class Wrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chips: [],
			dropDownText: "ไซส์ รอบอก(นิ้ว) ความยาว(นิ้ว)",
      shirtSize: "",
      shirtError: ""
		};
		this.change = this.change.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
    if(this.state.shirtSize === "") {
      this.setState({
        shirtError: " (required)"
      });
      return false;
    }
		var data = $('#registration-form').serializeArray();
		data.push({name: "interest", value: this.state.chips});
    data.push({name: "shirt_size", value: this.state.shirtSize});
		Service.authentication.signup(data,null,this.props.token);
	}

	change(chips) {
		this.setState({chips: chips});
	}

  onDropdownSelected(item) {
    this.setState({
      dropDownText: item,
      shirtSize: item
    });
  }
	render() {
    var self = this;
		var dropDownText = "ไซส์ รอบอก(นิ้ว) ความยาว(นิ้ว)";
    var dropDownItems = _.map(shirtSize, function(shirt,i) {
      return (<li key={i} className="uk-dropdown-close" onClick={self.onDropdownSelected.bind(self, shirt.letter)}>
                <a className="uk-dropdown-close">
                  <span>{shirt.letter}</span>
                  <span className="pull-right" style={{paddingRight: 15}}>{shirt.number}</span>
                </a>
              </li>);
    });
		return (
			<div id="registration_form" className="uk-flex uk-flex-middle">
				{/* <div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
					<h1 className="uk-text-uppercase">Registration</h1>
				</div> */}
				<div className="registration-form uk-container-center">
					<div className="uk-container-center parking-card uk-width-9-10 uk-width-medium-5-10 uk-width-large-5-10">
            <h3 className="uk-text-center">Registration</h3>
            <div className="uk-width-4-10 uk-container-center uk-flex uk-margin-bottom">
              <img className="uk-container-center" src={this.props.dash} />
            </div>
						<form id="registration-form" onSubmit={this.onSubmit} className="uk-form">
							<fieldset>
								<div className="uk-form-row input-label uk-width-1-1 no-margin">
									<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Firstname" name="first_name" center/>
									<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Lastname" name="last_name" center/>
								</div>

								<div className="uk-form-row input-label uk-width-1-1 no-margin">
									<Input padding errorMessage="Email is already taken" success={!this.props.error} className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="E-mail" name="email" center/>
									<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Twitter (Optional)" placeholder="@bcbk" name="twitter" center/>
								</div>

								<div className="uk-form-row input-label uk-width-1-1 no-margin">
									<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Workplace (Optional)" placeholder="มหาวิทยาลัยเกษตรศาสตร์" name="workplace" center/>
									<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Personal Website (Optional)" name="website" center/>
								</div>
								<div className="uk-form-row no-margin" style={{
									paddingLeft: 10,
									paddingRight: 10
								}}>
									<div className="uk-form-row no-margin">
										<label>Interests</label>
										<Chips suggestions={this.props.interests} renderChip={(item) => (
											<CustomChip>{item}</CustomChip>
										)} onChange={this.change}/>
									</div>
									<div className="uk-form-row input-label shirt-size-dropdown-wrapper">
										<label className={this.state.shirtError === "" ? "" : "error-label"}>{"Shirt size" + this.state.shirtError}</label>
										<br></br>
										<div className="uk-button-dropdown uk-width-1-1- uk-width-medium-5-10 uk-width-large-5-10" data-uk-dropdown="{mode : 'click'}" aria-haspopup="true" aria-expanded="false">
											<div type="button" className="uk-text-center dropdown-button uk-button uk-width-1-1">{this.state.dropDownText}
											</div>
											<div className="uk-dropdown uk-dropdown-bottom" aria-hidden="true" tabIndex="">
												<ul className="uk-nav uk-nav-dropdown">
													{dropDownItems}
												</ul>
											</div>
										</div>
									</div>
									<div className="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
										<button className="flat-white-button uk-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center pointer" style={{
											marginTop: 25
										}}>Confirm</button>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Wrapper;
