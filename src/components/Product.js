// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class  Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
      </div>
    )
  }
}

Order.defaultProps = {
  hasWatermark: false,
}

Order.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,

}
