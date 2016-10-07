class Section extends React.Component {
  render() {
    return (
      <div className="section flex" id="location-section">
        <div className="uk-width-8-10 uk-container-center">
          <div id="location-head">
              <p className="text">LOCATION</p>
              <p>
              IUP International Building 17 <br />
              Kasetsart University
              </p>
          </div>
        </div>
        <div>
        <iframe
            width="100%"
            height="300"
            frameBorder="0" style={{border:"0"}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB3BYkLjKKhvcbiwxKYlY3huEHW0qcOnH4&q=ภาควิชาวิศวกรรมคอมพิวเตอร์+คณะวิศวกรรมศาสตร์+มหาวิทยาลัยเกษตรศาสตร์+(วิทยาเขตบางเขน)">
        </iframe>
        </div>
        <div id="location-body">
            <div className="location-item" >
                <div className="location-innerhead"><p>PAID PARKING</p></div>
                <div className="location-inneritem">
                    <div>
                        <p>(A) Ngam Wong Wan 1 Parking Building</p>
                        <ul>
                            <li>Price with bcbk stamp: FREE</li>
                            <li>Price without bcbk stamp: 10THB/hr</li>
                            <li>Location: Ngam Wong Wan 1 entrance</li>
                            <li>Capacity: 210</li>
                        </ul>
                        <br/>
                        <p>(B) Ngam Wong Wan 2 Parking Building</p>
                        <ul>
                            <li>Price with bcbk stamp: FREE</li>
                            <li>Price without bcbk stamp: 10THB/hr</li>
                            <li>Location: Ngam Wong Wan 2 entrance</li>
                            <li>Capacity: 192</li>
                        </ul>
                        <p>For the above locations please collect a parking stamp at the event to be eligible for FREE parking from the entire period of 8.00 AM - 9.00 PM
                        </p>
                    </div>
                    <div>
                        <p>(C) Vibhavadi Parking Building</p>
                        <ul>
                            <li>Price: 10THB/hr</li>
                            <li>Location: Vibhavadi entrance</li>
                            <li>Capacity: 245</li>
                        </ul>
                        <br/>
                        <p>(D) Bangkhen Parking Building</p>
                        <ul>
                            <li>Price: 10THB/hr</li>
                            <li>Location: Behing KU Golden Jubilee entrance</li>
                            <li>Capacity: 300</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="location-item">
                <div className="location-innerhead"><p>FREE PARKING</p></div>
                <div className="location-inneritem">
                    <div>
                        <p>(E) LH1 Parking</p>
                        <ul>
                            <li>Location: Lecture Hall 1 (LH1)</li>
                            <li>Capacity: 30</li>
                        </ul>
                        <br/>
                        <p>(F) Basketball Field Parking</p>
                        <ul>
                            <li>Location: Opposite of Computer Engineering Building</li>
                            <li>Capacity: 40</li>
                        </ul>
                        <br />
                    </div>
                    <div>
                        <p>(G) Jakbandhu Building Parking</p>
                        <ul>
                            <li>Price: 10THB/hr</li>
                            <li>Location: Behind Jakbandhu Building</li>
                            <li>Capacity: 150</li>
                        </ul>
                        <p>Illegal or double parking may result in wheel damp and 500 THB fine imposed</p>
                    </div>
                </div>
                <div className="location-innerhead" id="location-transport"><p>TRANSPORTATION</p></div>
                <div className="location-inneritem">
                    <div id="location-bus">
                        <p className="location-transport-topic">Bus</p>
                        <div><p>
                        24 26 29 39 51 52 59 63 104 107 114 126 129 177 185 186 522 524 528 545
                        </p></div>
                    </div>
                    <div>
                        <p className="location-transport-topic">Van</p>
                        <div><p>
                        14 40 62 79
                        </p></div>
                    </div>
                    <div>
                        <p className="location-transport-topic">KU Shuttle Bus</p>
                        <div><p>
                            1 2 4
                        </p></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Section;
