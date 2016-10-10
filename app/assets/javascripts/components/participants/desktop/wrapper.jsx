import Table from './table.jsx';
class Wrapper extends React.Component {
  render() {
    return (
      <div className="uk-width-1-1">
        <Table {...this.props}/>
      </div>
    );
  }
}

export default Wrapper;
