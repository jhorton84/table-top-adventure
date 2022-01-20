import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import config from '../../../../Config/L5RConfig.json';

const Family = ({...additionalProps}) => {
  // Extract properties from props passed down from CharacterCreationScreen.
  const { clan, family, setFamily, familyInfo, setFamilyInfo, updateCharacter } = additionalProps;
  
  // Map over the families object and render the names of each family for the clan in state.
  const getFamilies = config.families[0][clan].map(families => {
    return (
      <div className='' id='' key={families.name}>
        <div className="ring mg-1-lr" onClick={()=> setFamily(families.name)} alt={families.name} key={families.name}>
          <p onClick={() => getFamilyObject(families.name)}>{families.name}</p>
        </div>
      </div>
    )
  });

  /**
   * Maps over the families and using the family name held in state returns the correlating object
   * to that family and saves it in state as familyInfo. This value is then used for rendering
   * the description and character values to the user.
   * @param {string} familyName 
   */
  const getFamilyObject = (familyName) => {
    setFamily(familyName)
    config.families[0][clan].map(familyObject => {
      if (familyObject.name === familyName) {
        setFamilyInfo(familyObject);
      }
      return familyObject;
    });
  };

  // Hook that sets the family object by default to the first family in the array of families (index 0)
  useEffect(() => {
    getFamilyObject(config.families[0][clan][0].name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id='family'>
      Family
      <div className='row'>
        {getFamilies}
      </div>
      { family && (
        <div className='row hero'>
          <div className='stats center-text'>
            <p>{`${familyInfo.ring1} or ${familyInfo.ring2} | ${familyInfo.skill1}, ${familyInfo.skill2} | Glory: ${familyInfo.glory} | Wealth: ${familyInfo.startingWealth}`}</p>
          </div>
          {familyInfo.description}
        </div>
      )}
      <div>
        <button onClick={() => updateCharacter('clan', '')}>Back</button>  
        <button onClick={() => {updateCharacter('family', family)}}>Next</button>
      </div>
    </div>
  );
};

Family.propTypes = {
  family: PropTypes.string,
  clan: PropTypes.string.isRequired,
};

export default Family;
