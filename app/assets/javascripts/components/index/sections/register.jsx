class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id="register-section" style={{ backgroundColor: this.props.color }}>
        <p className="text">Register</p>
      </div>
    );
  }
}

export default Section;
