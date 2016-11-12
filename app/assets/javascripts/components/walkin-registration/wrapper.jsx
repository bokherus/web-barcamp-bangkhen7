import Suggestion from './suggestion.jsx';
import UserInfo from './user-info.jsx';
let initialState = {
  showSuggestion: false,
  code: '',
  suggestion: [],
  selectedUser: null,
  showSuccess: false,
  showFail: false
};

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = $.extend(true, {}, initialState);
    this.onClick = this.onClick.bind(this);
    this.clear = this.clear.bind(this);
    this.success = this.success.bind(this);
    this.fail = this.fail.bind(this);
  }
  onChange(e) {
    let code = e.target.value;
    if(code.length >= 2) {
      this.setState({
        showSuggestion: true,
        code: code,
        suggestion: filter(code,this.props.users),
      });
    }else {
      this.setState({
        showSuggestion: false,
        code: ''
      });
    }
  }
  onClick(item) {
    this.setState({
      selectedUser: item,
      showSuggestion: false
    }, () => {
    });
  }
  clear() {
    this.setState($.extend(true, {}, initialState));
    $('#code-field').val('');
  }
  success() {
    this.setState({
      showSuccess: true,
      showFail: false
    });
  }
  fail() {
    this.setState({
      showSuccess: false,
      showFail: true
    });
  }
  render() {
    let message;
    if(this.state.showSuccess) {
      message = (
        <div className="alert alert-success" role='alert'>
          <b>Success</b>
        </div>
      );
    }else if(this.state.showFail) {
      message = (
        <div className="alert alert-danger" role='alert'>
          <b>Error</b><span>This person has already checked in</span>
        </div>
      );
    }
    return (
      <div style={{display: 'inline-block', width: '100%'}}>
        { message }
        <input id="code-field" onChange={this.onChange.bind(this)} className="form-control" placeholder="Code"/>
        <Suggestion onItemClick={this.onClick} open={this.state.showSuggestion} code={this.state.code}  suggestion={this.state.suggestion}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="col-sm-5 col-md-5 col-lg-5">
            <UserInfo success={this.success} fail={this.fail} clearAction={this.clear} user={this.state.selectedUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;

const filter = (code, users) => {
  let filtered = _.filter(users, function(item) {
    return (item.code).indexOf(code) === 0;
  });
  return filtered;
};
