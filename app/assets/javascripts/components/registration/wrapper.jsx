class Wrapper extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var data = $('form').serializeArray();
    Service.authentication.signup(data);
  }
  render() {
    return (
      <div id="registration_form">
        <form onSubmit={this.onSubmit} className="uk-form">
          <input name="authenticity_token" type="hidden" value={this.props.token}/>
          <input name="first_name" placeholder="Firstname" />
          <input name="last_name" placeholder="Lastname" />
          <input name="email" placeholder="Email"/>
          <input name="shirt_size" placeholder="S,M,L,XL" />
          <input name="twitter" placeholder="@twitter" />
          <input name="workplace" placeholder="Work place (Glazziq,..)" />
          <input name="website" placeholder="Personal website" />
          <button className="uk-button">Update Profile</button>
        </form>
      </div>
    );
  }
}

export default Wrapper;
