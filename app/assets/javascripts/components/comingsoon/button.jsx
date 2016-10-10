class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.href = this.props.location;
  }
  render() {
    return (
      <div onClick={this.onClick} className="square-button">
        <h3 className="thin">{this.props.text}</h3>
      </div>
    );
  }
}

export default Button;
