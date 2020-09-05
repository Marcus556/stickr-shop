import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imgUrl, size, history, match, linkUrl}) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
  <div 
  style={{
    backgroundImage:`url(${imgUrl})`
  }} 
  className='background-image'>
  </div>
  <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>SHOP NOW</span>
  </div>
</div>
);

export default withRouter(MenuItem);