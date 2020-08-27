import React, {Component} from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'cars',
          imgUrl: 'https://1.bp.blogspot.com/-j343p08TFhc/T80NLl9XDgI/AAAAAAAAWBg/oKFfLp1eA4Y/s1600/scion-fr-s-2013-dda-1.jpg',
          id: 1,
        },
        {
          title: 'development',
          imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg&f=1&nofb=1',
          id: 2,
        },
        {
          title: 'liquers',
          imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FB9tcLe0gmf0%2Fmaxresdefault.jpg&f=1&nofb=1',
          id: 3,
        },
        {
          title: 'soccer',
          imgUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdarkroom.baltimoresun.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fcroatia8.jpg&f=1&nofb=1',
          size: 'large',
          id: 4,
        },
        {
          title: 'motorcycles',
          imgUrl: 'http://kickstart.bikeexif.com/wp-content/uploads/2018/11/yamaha-mt-07-hageman.jpg',
          size: 'large',
          id: 5,
        }
      ]
    }
  }

  render() {
    return ( 
      <div className='directory-menu'>
        {
          //mapping through section, using spread-operator on props for cleaner code
           this.state.sections.map(({id, ...sectionProps}) => (
             <MenuItem key={id} {...sectionProps}></MenuItem>
           ))
        }
      </div>
    )
  }
}

export default Directory








