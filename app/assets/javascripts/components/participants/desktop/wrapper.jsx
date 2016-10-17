import Table from './table.jsx';
import {connect} from 'react-redux';
class Wrapper extends React.Component {
  render() {
    return (
      <div className="uk-width-1-1 uk-hidden-small participants-tabel">
        <Table items={this.props.reducer.filtered}/>
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {reducer: state};
};

export default connect(mapStateToProps)(Wrapper);
