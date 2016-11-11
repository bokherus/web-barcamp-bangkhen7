class SessionTableDesktop extends React.Component {
	render() {
		return (
			<table className="uk-table text-center-table">
				<thead className="uk-text-uppercase">
					<tr>
						<th>
							Time
						</th>
						<th>
							17201
						</th>
						<th>
							17302
						</th>
						<th>
							17303
						</th>
						<th>
							17304
						</th>
						<th>
							17401
						</th>
            <th>
              17402
            </th>
					</tr>
				</thead>
        <tbody>
          {
            _.map(this.props.sessions, (session,i) => {
              return (
                <tr key={i}>
                  <td className="room">
                    <div>
                      <p className="no-margin">{session[0].start_time}</p>
                      <p className="no-margin">{session[0].end_time}</p>
                    </div>
                  </td>
                  {
                    _.map(session, (item, j) => {
                      return (
                        <td key={j}>
                          <p className="no-margin">{item.name}</p>
                          <p className="no-margin" style={{fontSize: "0.8em"}}>
                            <span>by</span> {item.speaker}</p>
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
			</table>
		);
	}
}

export default SessionTableDesktop;
