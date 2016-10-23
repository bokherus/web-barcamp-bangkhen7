import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class CustomChip extends Component {
  render() {
    return (
      <div style={this.props.selected ? {...styles.container, ...styles.selected} : styles.container}>
        <div style={styles.text}>{this.props.children}</div>
        <div style={styles.remove} onClick={() => this.props.onRemove(this.props.index)}>&times;</div>
      </div>
    );
  }
}

let styles = {
  selected: {
    background: "#ccc",
  },
  container: {
    display: "flex",
    alignItems: "center",
    boxSizing: 'border-box',
    color: "#222",
    background: "#FFC107",
    margin: "2.5px",
    borderRadius: 5,
    cursor: 'default',
  },
  image: {
    width: 32,
    height: 32,
    overflow: 'hidden',
    borderRadius: 16,
    background: "#888",
  },
  text: {
    fontSize: 13,
    boxSizing: 'border-box',
    padding: '0px 4px 0px 8px',
  },
  remove: {
    textAlign: "center",
    cursor: "pointer",
    fontSize: 18,
    width: 20,
    height: 20,
    color: "#222",
    borderRadius: 12,
    background: "#FFC107",
    margin: "0 6px"
  }
}

export default Radium(CustomChip);
