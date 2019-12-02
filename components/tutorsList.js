import React from 'react'
import data from '../tutors.json';

const TutorsList = () => {
  return (
    <div>
      {
        data.map( ({id, subjects, name, city}) => (
          <div key = {id}>
            <h3>{name} from {city}</h3>
              <section>
              {
                subjects.map( ({name, level}) => (
                  <div key = {name}>
                    <h3>{name}</h3>
                      <ul>
                        {
                          level.map( (item, i) => <li key = {i}>{item}</li>)
                        }
                      </ul>
                  </div>
                ) )
              }
              </section>
            <p></p>
          </div>
        ) )
      }
    </div>
  )
}

export default TutorsList;
