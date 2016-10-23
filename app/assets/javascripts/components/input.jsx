class Input extends React.Component {
  render() {
    var success = typeof this.props.success === 'undefined' ? true : this.props.success;
    var errorMessage = typeof this.props.errorMessage === 'undefined' ? "" : this.props.errorMessage;
    return (
      <div className={"input-label " + this.props.className} style={this.props.padding ? {paddingLeft: 10, paddingRight:10} : {}}>
        <label className={success ? "" : "error-label"}>{this.props.label + (!success ?  " (" + errorMessage + ")" : "")}</label>
        <input type={this.props.type || "text"}
          name={this.props.name}
          className={"uk-width-1-1" + (this.props.center ? " uk-text-center" : "") + (this.props.thin ? " thin" : "") + (success ? "" : " error-form")}
          defaultValue={this.props.value || ""} placeholder={this.props.placeholder || ""}/>
      </div>
    );
  }
}

export default Input;
