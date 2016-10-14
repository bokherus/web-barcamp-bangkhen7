class ParkingCard extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      visible: false
    };
  }
  onClick() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    return (
      <div className="parking-card">
        <h2 onClick={this.onClick} className="uk-text-uppercase uk-text-center no-margin">{this.props.cardName}</h2>
        <div style={{display: this.state.visible ? '' : 'none'}} className="uk-margin-top">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ParkingCard;
