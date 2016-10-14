class Input extends React.Component {
  render() {
    return (
      <div className={"input-label " + this.props.className}>
        <label className={!this.props.success ? "error-label" : ""}>{this.props.label}</label>
        <input type={this.props.type || "text"}
          name={this.props.name}
          className={"uk-width-1-1" + (this.props.center ? " uk-text-center" : "") + (this.props.thin ? " thin" : "") + (!this.props.success ? " error-form" : "")}
          defaultValue={this.props.value || ""}/>
      </div>
    );
  }
}

export default Input;
