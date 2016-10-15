import Chips, {Chip} from 'react-chips';
import Input from '../input.jsx';
import CustomChip from './CustomChip';

const data = [
  "Javascript",
  "Swift",
  "Programming"
];

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: []
    };
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
	onSubmit(e) {
		e.preventDefault();
		var data = $('#registration-form').serializeArray();
    data.push({name: "interest", value: this.state.chips});
		Service.authentication.signup(data);
	}

	change(chips) {
    // var chips = [];
    // var childNodes = $('#chips-wrapper')['0'].childNodes[0];
    // // console.log(typeof childNodes);
    // // childNodes = childNodes.slice(0,childNodes.length-1);
    // for(var c in childNodes) {
    //   if(c === 'length') { return; }
    //   console.log(c);
    //   console.log(childNodes[c]);
    //   chips.push(childNodes[c].firstChild.innerHTML);
    // }
    console.log(chips);
    this.setState({
      chips: chips
    });
	}

	render() {
		return (
			<div id="registration_form" className="uk-flex uk-flex-middle">
				{/* <div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
					<h1 className="uk-text-uppercase">Registration</h1>
				</div> */}
				<div className="registration-form uk-container-center">
					<div className="uk-container-center parking-card uk-width-9-10 uk-width-medium-5-10 uk-width-large-5-10">
						<form id="registration-form" onSubmit={this.onSubmit} className="uk-form">
							<fieldset>
								<input name="authenticity_token" type="hidden" value={this.props.token}/>
									<div className="uk-form-row input-label uk-width-1-1 no-margin">
										<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Firstname" name="first_name" center/>
										<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Lastname" name="last_name" center/>
									</div>

									<div className="uk-form-row input-label uk-width-1-1 no-margin">
										<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="E-mail" name="email" center/>
										<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Twitter" name="twitter" center/>
									</div>

									<div className="uk-form-row input-label uk-width-1-1 no-margin">
										<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Workplace" name="workplace" center/>
										<Input padding className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-2 uk-margin-bottom" thin label="Personal Website" name="website" center/>
									</div>
                  <div className="uk-form-row no-margin" style={{paddingLeft: 10, paddingRight:10}}>
                  <div className="uk-form-row no-margin" >
                      <label>Interests</label>
                      <Chips
                        suggestions={data}
                        renderChip={(item) => (
                          <CustomChip>{item}</CustomChip>
                        )}
                        onChange={this.change}
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
                  <div className="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
                    <button className="flat-white-button uk-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center pointer" style={{marginTop: 25}}>Confirm</button>
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
