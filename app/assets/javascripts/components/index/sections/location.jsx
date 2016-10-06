class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id="location-section" style={{ backgroundColor: this.props.color }}>
        <p className="text">Location</p>
      </div>
    );
  }
}

export default Section;
