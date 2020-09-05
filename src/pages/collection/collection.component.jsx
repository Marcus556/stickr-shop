import React from 'react';
import './collection.styles.scss'
import { connect } from 'react-redux';

import PreviewItem from '../../components/preview-item/preview-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

const CollectionPage = ({collection}) => {
  const {title, items} = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>   
      <div className='items'>
        {
          items.map(item => <PreviewItem key={item.id} item={item} />)
        }
      </div> 
    </div>
  )
}


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)