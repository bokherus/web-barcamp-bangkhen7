class Section extends React.Component {
  render() {
    return (
      <div className="flex flex-center" id="description-section">
          <div className="uk-width-8-10">
            <article className = "uk-article" id = "register-text">
              <h1>WHO IS PARTICIPATING?</h1>
              <h3>Anybody!</h3>
              <h3 className="uk-margin-top">คุณไงละ! งานของเราจะขาดคุณผู้ซึ่งเป็นผู่แบ่งปันเรื่องราวดีๆไปไมได้</h3>
              <h1 style={{marginTop: 50}}>WHY SHOULD WE GO TO BARCAMP?</h1>
              <h3>Along with me no entrance fee, the participants will be given the privilege to propose their ideas they want to talk about
              once they have registered. Given enough votes from people who are interested,the staff will re-schedule a session where anybody is welcome to join to
              exhange ideas about the topic.</h3>
              <h3 className="uk-margin-top">เราไม่จำกัดหัวข้อในการนำเสนอ ถ้าคุณมีเรื่องราวที่สนใจอยากจะพูดคุย คุณสามารถเสนอหัวข้อที่ต้องการได้เลย แต่หากคุณยังคิดไม่ออก คุณก็สามารถเลือกหัวข้อที่คนอื่นเสนอและเข้าไปร่วมพูดคุยได้ หัวข้อในงานของเรามีความหลากหลายแตกต่างกันไป หัวข้อที่ถูกเลือกอาจจะเกี่ยวกับเทคโนโลยี ทริปท่องเที่ยว สอนธุรกิจ รีวิวเกมส์ เอาตัวรอดในดินแดนซอมบี้ และอื่นๆอีกมากมาย</h3>
              </article>
          </div>
      </div>
    );
  }
}

export default Section;
