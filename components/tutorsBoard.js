import React, { useState, useEffect } from 'react';

import BreadCrumbs from './breadCrumbs';
import FilterPanel from './filterPanel';
import TutorsList from './tutorsList';
import LinkContainer from './LinkContainer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catalogActions} from '../sagas/catalog/actions';

const TutorsBoard = (props) => {

  const { currentRoute, actions: { changeRoute } } = props;

  const fields = {
    subjects: ['subject', ['english', 'math', 'italian', 'biology']],
    cities: ['city', ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odessa']],
    districts: ['district', ['District1', 'District2', 'District3', 'District4', 'District5']],
    levels: ['level', ['low', 'medium', 'high', 'superStar']],
  }

  const currentLink = {
    subject: 'math',
    city: 'Kyiv',
    level: 'high',
    district: null
  }
  
  return (
    <section>
      <BreadCrumbs route = { props.currentRoute } />
      <div>
                
      </div>
      <div>
        {!!currentRoute && <FilterPanel
          fields = { fields }
          cb = { changeRoute }
          currentRoute = { currentRoute }
        />}
        <TutorsList />
        <LinkContainer currentLink = { currentLink }/>
      </div>
      
    </section>
  )
}

// export default TutorsBoard;

const mstp = ({catalog}) => ({
  currentRoute: catalog.currentRoute
});

const mdtp = (dispatch) => ({
  actions: bindActionCreators(catalogActions, dispatch) 
})

export default connect(mstp, mdtp)(TutorsBoard)
