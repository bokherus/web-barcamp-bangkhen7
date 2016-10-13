class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  toggle(toggle) {
    var element = $("#login-mobile-wrapper");
    element.removeClass('push-up');
    element.removeClass('push-down');
    if(toggle) {
      UIkit.offcanvas.hide('#offcanvas-1');
      element.addClass('push-up');
    }else {
      element.addClass('push-down');
    }
  }
  componentWillUpdate(nextProps, nextState) {
    this.toggle(nextProps.toggle);
  }
  close() {
    this.toggle(false);
  }
  render() {
    return (
      <div id="login-mobile-wrapper" className="full-height full-width uk-hidden-large uk-hidden-medium">
        <i onClick={this.close} className="uk-icon-close close-icon uk-icon-small"></i>
      </div>
    );
  }
}

export default Wrapper;
