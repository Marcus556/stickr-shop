import React, {Component} from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import { Spring } from 'react-spring/renderprops';
 

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const {collections} = this.state;
    return(

      <Spring
      from={{ opacity: 0}}
      to={{ opacity: 1 }}
      >
        {props => (
          <div style={props}>
            <div className='shop-page'>
              {collections.map(({id, ...otherCollectionProps}) => (
              <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
              ))}
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

export default ShopPage