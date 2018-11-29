import React, { Component } from 'react';
// import Square from './Square.js';
// import styles from './App.scss';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

import Button from './components/Button';

class App extends Component {
  render() {
    // const isBlue = true;
    return (
      // <div className={cx('box',{
      //     blue:isBlue
      //   })}>
      //   <div className={cx("box-inside")}></div>
      // </div>

      // <div>
      //   <Square isBlue={isBlue}/>
      // </div>
      <div>
        <Button />
      </div>
    );
  }
}

export default App;
