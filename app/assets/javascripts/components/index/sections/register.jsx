class Section extends React.Component {
  render() {
    return (
      <div className="flex flex-center" id="description-section">
          <div className="uk-width-8-10">
            <article className = "uk-article" id = "register-text">
              <div id="what-is-barcamp-wrapper">
                <div className="uk-width-1-1 uk-margin-bottom">
                  <h1 className="uk-text-uppercase thin no-margin">what is&nbsp;</h1><h1 className="uk-text-uppercase no-margin">barcamp?</h1>
                </div>
                <h3 className="thin no-margin">BarCamp is a participant-generated conference primarily focused on exchanging knowledge, experience and stories.</h3>
                <h3 className="thin no-margin uk-margin-bottom">The participants will have a chance to come into contact with new ideas as well as propose some of their own.</h3>
                <h3 className="thin no-margin uk-margin-bottom">บาร์แคมป์เป็นงานชุมนุมรวมกลุ่มสำหรับผู้ที่สนใจแบ่งปันความรู้ ประสบการณ์ หรือเรื่องราวต่างๆให้ผู้ร่วมงานคนอื่นๆได้ฟังกัน งานนี้ไม่มีการกำหนดหัวข้อเอาไว้ล่วงหน้า ผู้ร่วมงานทุกคนจะเป็นผู้กำหนดหัวข้อในงาน</h3>
              </div>
              <h1 style={{marginTop: 50}}>WHO IS PARTICIPATING?</h1>
              <h3 className="thin">Anybody!</h3>
              <h3 className="uk-margin-top thin">คุณไงละ! งานของเราจะขาดคุณผู้ซึ่งเป็นผู่แบ่งปันเรื่องราวดีๆไปไมได้</h3>
              <h1 style={{marginTop: 50}}>WHY SHOULD WE GO TO BARCAMP?</h1>
              <h3 className="thin">Along with me no entrance fee, the participants will be given the privilege to propose their ideas they want to talk about
              once they have registered. Given enough votes from people who are interested,the staff will re-schedule a session where anybody is welcome to join to
              exhange ideas about the topic.</h3>
              <h3 className="uk-margin-top thin">เราไม่จำกัดหัวข้อในการนำเสนอ ถ้าคุณมีเรื่องราวที่สนใจอยากจะพูดคุย คุณสามารถเสนอหัวข้อที่ต้องการได้เลย แต่หากคุณยังคิดไม่ออก คุณก็สามารถเลือกหัวข้อที่คนอื่นเสนอและเข้าไปร่วมพูดคุยได้ หัวข้อในงานของเรามีความหลากหลายแตกต่างกันไป หัวข้อที่ถูกเลือกอาจจะเกี่ยวกับเทคโนโลยี ทริปท่องเที่ยว สอนธุรกิจ รีวิวเกมส์ เอาตัวรอดในดินแดนซอมบี้ และอื่นๆอีกมากมาย</h3>
              </article>
          </div>
      </div>
    );
  }
}

export default Section;
