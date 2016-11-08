const TimeHeader = (props) => {
  let className= "time-header";
  if(!props.primary) {
    className += ' time-header-secondary';
  }
  return (
    <div className={className}>
      <h3 className="uk-text-center" style={{marginTop: 5, marginBottom: 5}}>
        {props.text}
      </h3>
    </div>
  );
};

export default TimeHeader;
