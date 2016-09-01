var Header = require('./header.jsx');

class HelloReacts extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Hello React</p>
      </div>
    );
  }
}
module.exports = HelloReacts;
