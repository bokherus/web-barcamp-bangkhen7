import {connect} from 'react-redux';
class Table extends React.Component {
  render() {
    var self = this;
    return (
      <table className="uk-table uk-text-center">
        <thead>
          <tr className="table-header-row">
            <th style={{width: "7%"}}className="uk-text-center">No</th>
            <th style={{width: "15%"}} className="uk-text-center">Name</th>
            <th style={{width: "11%"}} className="uk-text-center">Twitter</th>
            <th className="uk-text-center">Interest</th>
            <th style={{width: "17%"}} className="uk-text-center">Website</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map(function(object, i ) {
              var interest = getInterestPlaceHolder(_.map(object.topics,'name'));
              var validUrl = (((object.website).toLowerCase().indexOf('http://') >= 0) ? "" : "http://") + object.website;
              if(((object.website).toLowerCase().indexOf('https://') >= 0)){
                validUrl = object.website;
              }
              return (
                <tr className="table-body-row" key={i}>
                  <td>{getNo(self.props.items,i)}</td>
                  <td>{object.first_name + " " + object.last_name}</td>
                  <td>{object.twitter || "-"}</td>
                  <td>{interest || "-"}</td>
                  <td><a href={validUrl} target="_blank" style={{color: "white"}}>{object.website || "-"}</a></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

var getNo = function(items,i){
  return items.length-i;
};
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
