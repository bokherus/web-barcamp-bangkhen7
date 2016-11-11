const TimeHeader = (props) => {
  let className= "time-header";
  if(!props.primary) {
    className += ' time-header-secondary';
  }
  return (
    <div className={className} onClick={props.onClick}>
      <h3 className="uk-text-center" style={{paddingTop: 5, paddingBottom: 5, color: "white"}}>
        {props.text}
      </h3>
    </div>
  );
};

export default TimeHeader;
