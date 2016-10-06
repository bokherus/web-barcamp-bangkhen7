class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id="schedule-section" style={{ backgroundColor: this.props.color }}>
        <p className="text">Schedule</p>
      </div>
    );
  }
}

export default Section;
