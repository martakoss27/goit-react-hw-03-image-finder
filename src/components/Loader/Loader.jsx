import React, { Component } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <ProgressBar
          height="200"
          width="200"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="darkcyan"
          barColor="lightskyblue"
        />
      </div>
    );
  }
}

export default Loader;
