class FreePark extends React.Component {
  render() {
    return (
      <div className="location-inneritem">
          <div>
              <h3>(E) LH1 Parking</h3>
              <ul>
                  <li>Location: Lecture Hall 1 (LH1)</li>
                  <li>Capacity: 30</li>
              </ul>
              <h3>(F) Basketball Field Parking</h3>
              <ul>
                  <li>Location: Opposite of Computer Engineering Building</li>
                  <li>Capacity: 40</li>
              </ul>
              <h3>(G) Jakbandhu Building Parking</h3>
              <ul>
                  <li>Price: 10THB/hr</li>
                  <li>Location: Behind Jakbandhu Building</li>
                  <li>Capacity: 150</li>
              </ul>
          </div>
      </div>
    );
  }
}

export default FreePark;
