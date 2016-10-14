class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1 style={{marginBottom: "0px"}} className="header uk-text-uppercase">{this.props.header}</h1>
        <h2 className="thin" style={{marginTop: "0px"}}>
          {this.props.children}
        </h2>
      </div>
    );
  }
}

export default PageHeader;
