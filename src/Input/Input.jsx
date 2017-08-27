import React from 'react';
import styles from 'Input/Input.css';
import PropTypes from 'prop-types';

export default class Input extends React.PureComponent {
  static propTypes = {
    isDisabled: PropTypes.bool.isRequired,
  }

  render() {
    const { isDisabled } = this.props;

    return (
      <input
        className={styles.input}
        disabled={isDisabled}
      />
    );
  }
}
