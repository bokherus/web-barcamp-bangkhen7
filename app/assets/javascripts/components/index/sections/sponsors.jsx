class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id="sponsors-section" style={{ backgroundColor: this.props.color }}>
        <p className="text">Sponsors</p>
      </div>
    );
  }
}

export default Section;
