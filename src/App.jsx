import React from 'react';
import styles from 'App.css';
import data from 'kladr.json';
import AutocompleteInput from 'Input/AutocompleteInput';

export default class App extends React.PureComponent {

  render() {
    return (
      <div className={styles.container}>
        Hello SKB
        <div>Disabled input : <AutocompleteInput isDisabled /></div>
        <div>Normal input : <AutocompleteInput /></div>
      </div>
    );
  }
}
