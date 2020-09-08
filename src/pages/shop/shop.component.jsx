import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Spring } from 'react-spring/renderprops';
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { connect } from 'react-redux'
import { firestore } from '../../firebase/firebase.utils'
import { convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component' 


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
      loading: true
    };

    unSubscribeFromSnapshot = null;

    componentDidMount(){
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');
      collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({loading: false})
      })
    }
    render() {
      const { match } = this.props;
      const { loading } = this.state;
      return(
        <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1 }}
        >
          {props => (
            <div style={props}>
              <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
              </div>
            </div>
          )}
        </Spring>
  
      )
    }
  
  }

  const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  })


export default connect(null, mapDispatchToProps)(ShopPage)