const TimeHeader = (props) => {
  let className= "time-header relative pointer";
  if(!props.primary) {
    className += ' time-header-secondary';
  }
  return (
    <div className={className} onClick={props.onClick}>
      <h3 className="uk-text-center" style={{paddingTop: 5, paddingBottom: 5, color: "white"}}>
        {props.text}
        <img className="pull-right" style={{marginRight: 10}} src={props.arrowDownImg}/>
      </h3>
    </div>
  );
};

export default TimeHeader;
