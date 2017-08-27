import React from 'react';
import Input from 'Input/Input';
import Trigger from 'rc-trigger';
import PropTypes from 'prop-types';

export default class AutocompleteInput extends React.PureComponent {
  static propTypes = {
    isDisabled: PropTypes.bool,
  }
  static defaultProps = {
    isDisabled: false,
  }

  render() {
    const { isDisabled } = this.props;

    return (
      <Trigger
        action={['click', 'focus']}
        popupAlign={{ points: ['tc', 'bc'] }}
        popup={<div>test</div>}
      >
        <Input
          isDisabled={isDisabled}
        />
      </Trigger>
    );
  }
}
