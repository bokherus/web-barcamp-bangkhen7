class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id="index-section" style={{ backgroundColor: this.props.color }}>
        <p className="text">Index</p>
      </div>
    );
  }
}

export default Section;
