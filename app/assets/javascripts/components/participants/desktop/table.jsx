import {connect} from 'react-redux';
class Table extends React.Component {
  render() {
    return (
      <table className="uk-table uk-text-center">
        <thead>
          <tr className="table-header-row">
            <th style={{width: "20%"}} className="uk-text-center">Name</th>
            <th style={{width: "13%"}} className="uk-text-center">Twitter</th>
            <th className="uk-text-center">Interest</th>
            <th style={{width: "17%"}} className="uk-text-center">Website</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map(function(object, i ) {
              var interest = getInterestPlaceHolder(_.map(object.topics,'name'));
              return (
                <tr className="table-body-row" key={i}>
                  <td>{object.first_name + " " + object.last_name}</td>
                  <td>{object.twitter || "-"}</td>
                  <td>{interest || "-"}</td>
                  <td><a href={"http://" + object.website} target="_blank" style={{color: "white"}}>{object.website || "-"}</a></td>
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
  // var firstTwo = _.chunk(interest, 2)[0];
  // if (typeof firstTwo === 'undefined') { return ""; }
  // if (firstTwo.length === 1){ return firstTwo[0]; }
  // else {
  //   return firstTwo[0] + ", " + firstTwo[1] + ",...";
  // }
  return _.replace(interest.toString(), /,/g, ', ');
};
export default connect()(Table);
