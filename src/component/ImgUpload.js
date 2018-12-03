import React, { Component } from 'react';
import style from './ImgUpload.css'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class ImgUpload extends Component {
  render(){
    let width = this.props.width
    let height = this.props.height
    let src = this.props.src
    let imgStyle = {width:width,height:height}
    if (src){
      imgStyle = {...imgStyle,background: `url(${src}) no-repeat`,backgroundSize: `100%`}
    }
    return (
      <div style={imgStyle} className={style.bookImg} >
        <input ref="file" accept='image/*' style={{width:width,height:height}} onChange={event=>{this.props.onChange(event)}} className={style.upButton} type="file" accept="image/*"/>
        {src?"":
        <svg aria-hidden="true">
          <use xlinkHref="#icon-camera"></use>
        </svg>}
      </div>
    );
  }
}

export default ImgUpload;