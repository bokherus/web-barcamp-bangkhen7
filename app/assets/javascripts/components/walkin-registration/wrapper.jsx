import Suggestion from './suggestion.jsx';
import UserInfo from './user-info.jsx';
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestion: false,
      code: '',
      suggestion: [],
      selectedUser: null
    };
    this.onClick = this.onClick.bind(this);
    this.clear = this.clear.bind(this);
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
    this.setState({
      showSuggestion: false,
      code: '',
      suggestion: [],
      selectedUser: null
    });
    $('#code-field').val('');
  }
  render() {
    return (
      <div style={{display: 'inline-block', width: '100%'}}>
        <input id="code-field" onChange={this.onChange.bind(this)} className="form-control" placeholder="Code"/>
        <Suggestion onItemClick={this.onClick} open={this.state.showSuggestion} code={this.state.code}  suggestion={this.state.suggestion}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="col-sm-5 col-md-5 col-lg-5">
            <UserInfo clearAction={this.clear} user={this.state.selectedUser} />
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
