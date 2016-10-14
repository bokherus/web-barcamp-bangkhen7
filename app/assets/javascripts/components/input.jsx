class Input extends React.Component {
  render() {
    var success = this.props.success || true;
    console.log(success);
    return (
      <div className={"input-label " + this.props.className} style={this.props.padding ? {paddingLeft: 10, paddingRight:10} : {}}>
        <label className={success ? "" : "error-label"}>{this.props.label}</label>
        <input type={this.props.type || "text"}
          name={this.props.name}
          className={"uk-width-1-1" + (this.props.center ? " uk-text-center" : "") + (this.props.thin ? " thin" : "") + (success ? "" : " error-form")}
          defaultValue={this.props.value || ""}/>
      </div>
    );
  }
}

export default Input;
