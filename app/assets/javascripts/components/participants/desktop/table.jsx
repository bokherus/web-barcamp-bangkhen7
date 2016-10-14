import {connect} from 'react-redux';
class Table extends React.Component {
  render() {
    return (
      <table className="uk-table uk-text-center">
        <thead>
          <tr className="table-header-row">
            <th className="uk-text-center table-header">No</th>
            <th className="uk-text-center">Name</th>
            <th className="uk-text-center">Twitter</th>
            <th className="uk-text-center">Interest</th>
            <th className="uk-text-center">Website</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map(function(object, i ) {
              var interest = getInterestPlaceHolder(object.interest);
              return (
                <tr className="table-body-row" key={i}>
                  <td>{object.no}</td>
                  <td>{object.name}</td>
                  <td>{object.twitter}</td>
                  <td>{interest}</td>
                  <td>{object.website}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

var getInterestPlaceHolder = function(interest) {
  var firstTwo = _.chunk(interest, 2)[0];
  if (firstTwo.length === 1){ return firstTwo[0]; }
  else {
    return firstTwo[0] + ", " + firstTwo[1] + ",...";
  }
};
export default connect()(Table);
