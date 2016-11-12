import Desktop from './desktop/wrapper.jsx';
class Section extends React.Component {
	render() {
		return (
			<div className="uk-flex uk-flex-center uk-flex-column" id="index-section">
				<div style={{
					marginTop: 100
				}} className="uk-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center logo-wrapper">
					<img src={this.props.logo}/>
          {/* <a href="/sessions" className="regis-text pointer uk-container-center registration-button-wrapper">
            Sessions
          </a> */}
				</div>
				<Desktop {...this.props}/>
				<div className="uk-width-8-10 description-section uk-container-center uk-hidden-small">
					<article className="uk-article" id="register-text">
						<div id="what-is-barcamp-wrapper">
							<div className="uk-width-1-1 uk-margin-bottom">
								<h1 className="uk-text-uppercase thin no-margin">what is&nbsp;</h1>
								<h1 className="uk-text-uppercase no-margin barcamp">barcamp?</h1>
							</div>
							<h3 className="thin no-margin">BarCamp is an unconference event that assembles people who want to share knowledge, thoughts, experiences, or stories to other participants.</h3>
							<h3 className="thin no-margin uk-margin-bottom">This event has no definite sessions as everyone can choose topics they want to participate in.</h3>
							<h3 className="thin no-margin uk-margin-bottom">บาร์แคมป์เป็นงานที่จัดขึ้นเพื่อรวมกลุ่มผู้ที่สนใจแบ่งปันความรู้ ความคิด ประสบการณ์ หรือเรื่องราวต่างๆที่ได้ค้นคว้าและพบเจอ ให้ผู้ร่วมงานคนอื่น ๆ ได้ฟังกัน งานนี้ไม่ได้มีการกำหนดหัวข้อเอาไว้ล่วงหน้า หากแต่ผู้ร่วมงานทุกๆ คนจะเป็นผู้กำหนดหัวข้อในงานได้เอง</h3>
							<div style={{
								marginTop: 50
							}}>
                <h1 className="uk-text-uppercase thin no-margin">participants</h1>
                <h3 className="thin">Everyone! Participants like you are the essential of our event.</h3>
                <h3 className="uk-margin-top thin">ทุกคน ซึ่งหมายถึงคุณก็สามารถมีส่วนร่วมในงานได้ งานของเราจะขาดคุณผู้แบ่งปันเรื่องราวดีๆ ที่อยากส่งต่อให้ผู้อื่นไปไม่ได้เลย</h3>
							</div>
							<div style={{
                marginTop: 50
              }}>
                <h1 className="uk-text-uppercase thin no-margin">reasons to come</h1>
                <h3 className="thin">We widely accept any topics for the presentation in sessions, without scope and limitation. If you have interesting stories and want to forward, talk about or share with others, you will be able to present your topic freely. Even if you have no idea about what to talk about, you can join other sessions and exchange your ideas as well. Our past sessions have many varieties, such as, technology, food, sport, travel, business, photography and more!</h3>
                <h3 className="uk-margin-top thin">เราเปิดกว้างอย่างมากในเรื่องของหัวข้อในการนำเสนอ ไร้ซึ่งขอบเขตและขีดจำกัด ถ้าคุณมีเรื่องราวที่สนใจ อยากเล่า พูดคุย บอกต่อ คุณสามารถนำเสนอหัวข้อที่คุณต้องการได้อย่างอิสระ ถึงแม้คุณจะยังไม่สามารถคิดหัวข้อได้ขณะนั้น คุณก็สามารถเลือกหัวข้อที่คนอื่นเสนอ และเข้าไปร่วมพูดคุยได้เช่นกัน หัวข้อในงานของเรานั้น มีความหลากหลายแตกต่างกันออกไป หัวข้อที่ถูกเลือกอาจมีความเกี่ยวข้องกับ เทคโนโลยี อาหาร กีฬา การท่องเที่ยว ธุรกิจ สอนแต่งภาพ และอื่นๆอีกมากมายให้คุณได้เข้าร่วมตามความสนใจของคุณ</h3>
							</div>
						</div>

					</article>
				</div>
			</div>
		);
	}
}

export default Section;
