class PaidPark extends React.Component {
  render() {
    return (
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
    );
  }
}

export default PaidPark;
