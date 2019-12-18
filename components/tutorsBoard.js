import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'

import FilterPanel from './filterPanel';
import TutorsList from './tutorsList';
import LinkContainer from './LinkContainer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { types as catalog} from '../sagas/catalog/types';
import { catalogActions} from '../sagas/catalog/actions';

// import {getFilters, getSelected, isSelected, createLinkPlaceholder, createLinkTemplate} from '../helper'

const TutorsBoard = (props) => {
  const router = useRouter();
  console.log(props)
  // const initFilters = getFilters();
  // const initSelectedFilter = getSelected();
  // const initIsNewFilter = isSelected();
  
  // const [filters, setFilter] = useState(initFilters)
  // const [selectedFilter, setSelectedFilter] = useState(initSelectedFilter)
  // const [isNewFilter, setIsNewFilter] = useState(initIsNewFilter)

  // useEffect(() => {
  //   localStorage.setItem('filters', JSON.stringify(filters))
  //   localStorage.setItem('selectedFilter', selectedFilter)
  //   localStorage.setItem('isNewFilter', isNewFilter)
  // }, [filters]);
  
  // const setNewFilter = (name, value) => {
    
  //   if(filters[name]) {
  //     setIsNewFilter(false);
  //   } else {
  //     setIsNewFilter(true);
  //   }

  //   setSelectedFilter(name)
  //   setFilter({ ...filters, ...{ [name]: value } });
  // }

  // const nextlink = createLinkTemplate(router, filters, isNewFilter);

  const createLinkTemplate = (router) => {
    const routeIndex = Number(router.pathname.slice(-2, -1));  // (:|)
    const { filter1, filter2, filter3, filter4, filter5, filter6 } = router.query;
    const link =  router.pathname === '/tutors'
    ? `[filter]/[filter2]`
    : `${router.pathname}/[filter${routeIndex+1}]`;
    return link;
  }

  const setNewFilter = (name, value) => { console.log(name, value)}
  
  const nextlink = createLinkTemplate(router);

  // createLinkPlaceholder(router, filters, selectedFilter)
  

  const fields = {
    subjects: ['subject', ['english', 'math', 'italian', 'biology']],
    cities: ['city', ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odessa']],
    districts: ['district', ['District1', 'District2', 'District3', 'District4', 'District5']],
    levels: ['level', ['low', 'medium', 'high', 'superStar']],
  }

  // const isSaving = filters ? true : false
  const isSaving = true

  const currentLink = {
    subject: 'math',
    city: 'Kyiv',
    level: 'high',
    district: null
  }
  
  return (
    <section>
      <div>
        <Link href="/[filter1]/[filter2]" as={`/tutors/math`}>
          <a>Bread Crumbs</a>
        </Link>        
      </div>
      <div>
        {isSaving && <FilterPanel
          fields = { fields }
          cb = { setNewFilter }
          nextlink = { nextlink }
        />}
        <TutorsList />
        <LinkContainer currentLink = { currentLink }/>
      </div>
      
    </section>
  )
}

// export default TutorsBoard;

const mstp = ({catalog}) => ({
  query: catalog.currentRoute
});

const mdtp = (dispatch) => ({
  actions: bindActionCreators(catalogActions, dispatch) 
})

export default connect(mstp, mdtp)(TutorsBoard)
