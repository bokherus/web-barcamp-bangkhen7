class Field extends React.Component {
  render() {
    return (
      <div style={_.merge(this.props.style,{marginTop: 10})}>
        <span style={{display: 'block', fontSize: '0.8em'}}>{this.props.title}</span>
        <span style={{fontSize: '1.2em'}}>{this.props.text}</span>
      </div>
    );
  }
}

export default Field;
