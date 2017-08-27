import React from 'react';
import PropTypes from 'prop-types';
import styles from 'Input/Input.css';

export default class Input extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
  }

  static defaultProps = {
    onClick: null,
    isDisabled: false,
  }

  render() {
    const { isDisabled, onClick } = this.props;

    return (
      <input
        onClick={onClick}
        disabled={isDisabled}
        className={styles.input}
      />
    );
  }
}
