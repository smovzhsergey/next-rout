import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Router from 'next/router'
import BreadCrumbs from './breadCrumbs';
import FilterPanel from './filterPanel';
import TutorsList from './tutorsList';
import LinkContainer from './LinkContainer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catalogActions} from '../sagas/catalog/actions';

import { createFilterList, createCurrentRoute } from '../helper';
import data from '../profileData.json';
import cities from '../cities.json';

const TutorsBoard = (props) => {

  const subjects = createFilterList('subject', data.lessons);
  const towns = createFilterList('city', cities);
  const levels = createFilterList('level', data.levels);
  const router = useRouter()
  
  const [ newFilter, setNewFilter ] = useState('');
  const { currentRoute, actions: { changeRoute } } = props;


  useEffect(() => {

    const handleRouteChange = url => {
      const newRoute = createCurrentRoute(url, towns, levels, subjects);
      changeRoute(newRoute);
    }
  
    Router.events.on('beforeHistoryChange', handleRouteChange);
    return () => {
      Router.events.off('beforeHistoryChange', handleRouteChange);
    }
  }, [newFilter]);


  const handleChangeFilter = (obj) => {
    console.log('setCurrent filter', obj)
    setNewFilter(obj);
  }
  
  return (
    <section>
      <div>
        <button onClick = { () => router.back() }>Back</button>
      </div>
      <BreadCrumbs route = { currentRoute } />
      <div>
                
      </div>
      <div>
        {!!currentRoute && <FilterPanel
          towns = { towns }
          subjects = { subjects }
          levels = { levels }
          cb = { handleChangeFilter } //changeRoute
          currentRoute = { currentRoute }
        />}
        <TutorsList />
        <LinkContainer />
      </div>
      
    </section>
  )
}

const mstp = ({catalog}) => ({
  currentRoute: catalog.currentRoute
});

const mdtp = (dispatch) => ({
  actions: bindActionCreators(catalogActions, dispatch) 
})

export default connect(mstp, mdtp)(TutorsBoard)



// useEffect(() => {
  //   console.log('use EFFECT newFilter', !!newFilter);

  //   const handleRouteChange = url => {
  //     if (!!newFilter) {
  //       changeRoute(newFilter)
  //     } else {
        
  //       const path = url.split('/').splice(2);
  //       const existing = Object.entries(currentRoute).filter( i => i[1] !== '');
  //       const filterName = existing.filter(item => !path.includes(item[1]))[0][0];
  //       changeRoute({ [filterName]: '' });
  //     }
  //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>','App is changing to: ', url)
  //   }
  
  //   Router.events.on('beforeHistoryChange', handleRouteChange)
  //   return () => {
  //     Router.events.off('beforeHistoryChange', handleRouteChange)
  //   }
  // }, [newFilter])
  
