class Section extends React.Component {
  render() {
    return (
      <div className="section flex flex-center" id={this.props.sectionId} style={{ backgroundColor: this.props.color }}>
        <p className="text">{ this.props.text }</p>
      </div>
    );
  }
}

module.exports = Section;
