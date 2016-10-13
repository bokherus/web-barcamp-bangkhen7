import ParticipantItem from './participant-item.jsx';
import {connect} from 'react-redux';
class Wrapper extends React.Component {
	render() {
		return (
			<div className="table-header-row uk-width-1-1 uk-hidden-medium uk-hidden-large">
				{
          this.props.reducer.filtered.map(function(item, i) {
					  return <ParticipantItem participant={item} key={i}/>;
				  })
        }
			</div>
		);
	}
}

var mapStateToProps = function(state) {
	return {reducer: state};
};

export default connect(mapStateToProps)(Wrapper);
