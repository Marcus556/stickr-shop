import React from 'react';
import './preview-collection.styles.scss';
import PreviewItem from '../preview-item/preview-item.component';
import { withRouter } from 'react-router-dom';



const PreviewCollection = ({title, items, history, match, routeName}) => (
  <div className='collection-preview'>
    <div className='title'>
      <span onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</span>
    </div>
    <div className='preview'>
    {items
    .filter((item, index) => index < 4)
    .map((item) => (
      <PreviewItem key={item.id} item={item} />
    ))}
    </div>
  </div>
)


export default withRouter(PreviewCollection);