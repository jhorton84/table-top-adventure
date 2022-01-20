import React, { useState } from 'react';
import config from '../../../../Config/L5RConfig.json';

function School(props) {
  console.log('props', props);
  const {clan} = props;
  console.log('schools', config.schools[0][clan])
  const mapConfig = config.schools[0][clan];

  const [schoolInfo, setSchoolInfo] = useState('')

  const schools = mapConfig.map(school => {
    return (
      <div>
        <p onClick={() => updateSchool(school.name)} >{school.name}</p>
      </div>
    )
  })

  const updateSchool = (school) => {
    console.log('schoolName', school);
    props.setSchool(school)
    mapConfig.map(schoolObject => {
      console.log('school in map', schoolObject);
      if (schoolObject.name === school) {
        setSchoolInfo(schoolObject.description);
        console.log('schoolInfo', schoolInfo)
      }
      return schoolObject;
    });
  };

  return (
    <div className=''>
      School
      <div className='column' key={clan.name}>
        {schools}
      </div>
      { props.school && (
        <div className='hero' key={schoolInfo.name}>
          <p>{schoolInfo}</p>
        </div>
      )}
      <div>
        <button onClick={() => props.updateCharacter('family', '')}>Back</button>
        <button onClick={() => props.updateCharacter('school', props.school)}>Next</button>
      </div>
    </div>
  );
};

export default School;
