import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'

import FilterPanel from './filterPanel';
import TutorsList from './tutorsList';

// import {getFilters, getSelected, isSelected, createLinkPlaceholder, createLinkTemplate} from '../helper'

const TutorsBoard = () => {
  const router = useRouter();

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

  // const createLinkTemplate = (router) => {
  //   const routeIndex = Number(router.pathname.slice(-2, -1));  // (:|)
  //   const link =  router.pathname === '/tutors'
  //   ? `[filter1]/[filter2]`
  //   : `${router.pathname}/[filter${routeIndex+1}]`;
  //   return link;
  // }
  const createLinkTemplate = (router) => {
    console.log(router.pathname);
    
    const routeIndex = Number(router.pathname.slice(-2, -1));  // (:|)
    const link =  router.pathname === '/tutors'
    ? `wtf/someRoutName`
    : `${router.pathname}/[filter${routeIndex+1}]`;
    console.log(link);
    
    
    return link;
  }

  console.log(router);
  

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
      </div>
      
    </section>
  )
}

export default TutorsBoard;
