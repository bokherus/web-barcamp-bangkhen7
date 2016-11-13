class Suggestion extends React.Component {
  render() {
    return (
      <div style={{display: this.props.open ? 'initial' : 'none'}}>
        <ul className="list-group">
          {
            _.map(this.props.suggestion, (item, i) => {
              return (
                <li key={i} className="list-group-item" onClick={this.props.onItemClick.bind(this,item)}>
                  {
                    item.first_name
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Suggestion;
