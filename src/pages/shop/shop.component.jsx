import React, {Component} from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Spring } from 'react-spring/renderprops';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

 

const ShopPage = ({match}) => {
    return(
      <Spring
      from={{ opacity: 0}}
      to={{ opacity: 1 }}
      >
        {props => (
          <div style={props}>
            <div className='shop-page'>
              <Route exact path={`${match.path}`} component={CollectionsOverview} />
              <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
          </div>
        )}
      </Spring>

    )
  }



export default ShopPage