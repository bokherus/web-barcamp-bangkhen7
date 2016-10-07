class PageHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{marginBottom: "0px"}} className="header">{this.props.header}</h1>
        <h2 style={{marginTop: "0px"}}>
          {this.props.children}
        </h2>
      </div>
    );
  }
}

export default PageHeader;
