import React, { Component } from 'react';
import style from './ImgUpload.css'
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast,ImagePicker} from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const ImgUpload =({width,height}) => {
  return (
    <div style={{width:width,height:height}} className={style.bookImg}>
      <input style={{width:width,height:height}} className={style.upButton} type="file" accept="image/*"/>
      <svg aria-hidden="true">
        <use xlinkHref="#icon-camera"></use>
      </svg> 
    </div>
  );
}

export default ImgUpload;