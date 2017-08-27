import React from 'react';
import styles from 'App.css';
import data from 'kladr.json';
import Input from 'Input/Input';

export default class App extends React.PureComponent {

  render() {
    return (
      <div className={styles.container}>
        Hello SKB
        <div>Disabled input : <Input isDisabled /></div>
      </div>
    );
  }
}
