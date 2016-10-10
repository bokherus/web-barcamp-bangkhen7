import Button from './button.jsx';
class Wrapper extends React.Component {
  render() {
    return (
      <div id="coming-soon-section" className="full-width full-height uk-flex uk-flex-middle">
        <div className="uk-text-center uk-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-flex uk-container-center uk-flex-column">
          <img src={this.props.logo} />
          <h2 className="thin uk-margin-bottom" style={{color: "#727272"}}>Coming Soon</h2>
          <Button location="/" text="Back to main page"/>
        </div>
      </div>
    );
  }
}

export default Wrapper;
