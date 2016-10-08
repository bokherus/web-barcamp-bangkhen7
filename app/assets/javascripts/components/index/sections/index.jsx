class Section extends React.Component {
  render() {
    return (
      <div className="uk-flex uk-flex-center uk-flex-column" id="index-section" >
        <div style={{marginTop: 100}} className="uk-width-3-10 uk-container-center">
          <img src={this.props.logo}/>
        </div>
        <div className="uk-width-1-1 event-info uk-flex uk-flex-center">
          <div className="uk-width-3-10">
            
          </div>
          <div className="uk-width-3-10"></div>
          <div className="uk-width-3-10"></div>
        </div>
      </div>
    );
  }
}

export default Section;
