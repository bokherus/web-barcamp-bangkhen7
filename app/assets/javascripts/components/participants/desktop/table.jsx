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
            this.props.participants.map(function(object, i ) {
              var interest ="";
              object.interest.map(function(item) {
                interest += item + " ";
              });
              return (
                <tr className="table-body-row">
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

export default connect()(Table);
