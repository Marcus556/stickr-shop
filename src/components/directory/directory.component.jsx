import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'


const Directory = ({ sections }) => {
    return ( 
      <div className='directory-menu'>
        {
          //mapping through section, using spread-operator on props for cleaner code
           sections.map(({id, ...sectionProps}) => (
             <MenuItem key={id} {...sectionProps}></MenuItem>
           ))
        }
      </div>
    )
  }
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);








