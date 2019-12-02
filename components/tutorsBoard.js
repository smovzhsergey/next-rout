import React from 'react';
import {useRouter} from 'next/router';

import FilterPanel from './filterPanel';
import TutorsList from './tutorsList';

import {createLink} from '../helper'

const TutorsBoard = () => {

  const fields = {
    subjects: ['subject', ['english', 'math', 'italian', 'biology']],
    cities: ['city', ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odessa']],
    districts: ['district', ['District1', 'District2', 'District3', 'District4', 'District5']],
    levels: ['level', ['low', 'medium', 'high', 'superStar']],
  }

  const router = useRouter();

  const changeRoute = (name, path) => { 
    const newRoute = createLink(name, path, router)
    
    router.push(newRoute)
  }

  return (
    <section>
      <h1>Bread Crumbs</h1>
      <div>
        <FilterPanel
          fields = { fields }
          cb = { changeRoute }
        />
        <TutorsList />
      </div>
      
    </section>
  )
}

export default TutorsBoard;
