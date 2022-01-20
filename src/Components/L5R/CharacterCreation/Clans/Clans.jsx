import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import config from '../../../../Config/L5RConfig.json';
import './Clans.css';

const Clans = ({...additionalProps}) => {
  // Extract properties passed down from CharacterCreationScreen.
  const { clan, setClan, clanInfo, setClanInfo, updateCharacter } = additionalProps;

  /**
   * Maps over the config file to return all the image icons for the clans.
   */
  const getClans = config.clans.map(clans => {
    return (
      <div id='clanIcons' key={clans.name}>
        <img className="ring mg-1-lr" src={clans.image} onClick={()=> updateClan(clans.name)} alt={clans.name} key={clans.name} />
      </div>
    )
  })

  /**
   * updates the clan information shown to a user by comparing it to the clan in state.
   * @param {object} clan 
   */
  const updateClan = (clan) => {
    setClan(clan)
    config.clans.map(clanObject => {
      if (clanObject.name === clan) {
        setClanInfo(clanObject);
      }
      return clanObject;
    });
  };

   // React hook used when component is loading to trigger fetching vault token from api.
  useEffect(() => {
    updateClan(clan)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div id='clans'>
      <div className="rings">
        <div className="row" key={''}>
          {getClans}
        </div>
      </div>
      {clanInfo && ( 
        <div className='hero'>
          <h1 style={{color: `${clanInfo.color}`}}>The {clanInfo.name} Clan</h1>
          <div className='stats'>
            <p>{`${clanInfo.ring} | ${clanInfo.skill} | ${clanInfo.status} status`}</p>
          </div>
          <div id="clanDescription" className="textBlock">
            <p>{clanInfo.description}</p>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => updateCharacter('clan', clan)}>Next</button>
      </div>
    </div>
  );
};

Clans.propTypes = {
  clan: PropTypes.string,
};

Clans.defaultProps = {
  clan: 'Crab',
};

export default Clans;