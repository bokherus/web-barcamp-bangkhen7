import Desktop from './desktop/wrapper.jsx';
class Section extends React.Component {
	render() {
		return (
			<div className="uk-flex uk-flex-center uk-flex-column" id="index-section">
				<div style={{
					marginTop: 100
				}} className="uk-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center logo-wrapper">
					<img src={this.props.logo}/>
				</div>
        <Desktop {...this.props}/>
        {/* <div id="what-is-barcamp-wrapper" className="uk-width-8-10 uk-container-center uk-text-center">
          <div className="uk-width-1-1 flex flex-center uk-margin-bottom">
            <h1 className="uk-text-uppercase thin no-margin">what is&nbsp;</h1><h1 className="uk-text-uppercase no-margin">barcamp?</h1>
          </div>
          <h3 className="thin no-margin">BarCamp is a participant-generated conference primarily focused on exchanging knowledge, experience and stories.</h3>
          <h3 className="thin no-margin uk-margin-bottom">The participants will have a chance to come into contact with new ideas as well as propose some of their own.</h3>
          <h3 className="thin no-margin uk-margin-bottom">บาร์แคมป์เป็นงานชุมนุมรวมกลุ่มสำหรับผู้ที่สนใจแบ่งปันความรู้ ประสบการณ์ หรือเรื่องราวต่างๆให้ผู้ร่วมงานคนอื่นๆได้ฟังกัน งานนี้ไม่มีการกำหนดหัวข้อเอาไว้ล่วงหน้า ผู้ร่วมงานทุกคนจะเป็นผู้กำหนดหัวข้อในงาน</h3>
        </div> */}
			</div>
		);
	}
}

export default Section;
