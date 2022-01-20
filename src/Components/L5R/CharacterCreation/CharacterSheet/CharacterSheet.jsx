import React from 'react';
import PropTypes from 'prop-types';

const CharacterSheet = ({character}) => {
  return (
    <div id='characterSheet' className='split column'>
        <h3>Character Sheet</h3>
        <div className='row'>
          <p>Clan:</p>
          <p>{character.clan}</p>
        </div>
        <div>
          <p>Family:</p>
          <p>{character.family}</p>
        </div>
        <div className='row'>
          <p>School:</p>
          <p>{character.school}</p>
        </div>
        <div className='row'>
          <div className='row'>
            <p>Status:</p>
            <p>{character.status}</p>
          </div>
          <div className='row'>
            <p>Glory:</p>
            <p>{character.glory}</p>
          </div>
          <div className='row'>
            <p>Honor:</p>
            <p>{character.honor}</p>
          </div>
          <div className='row'>
            <p>Wealth:</p>
            <p>{character.wealth}</p>
          </div>
        </div>
        <div className='row'>
          <p>Skills: </p>
        </div>
        <div className='row'>
          <p>Aesthetics:</p>
          <p>{character.skills.Aesthetics}</p>
        </div>
        <div className='row'>
          <p>Composition:</p>
          <p>{character.skills.Composition}</p>
        </div>
        <div className='row'>
          <p>Design:</p>
          <p>{character.skills.Design}</p>
        </div>
        <div className='row'>
          <p>Smithing:</p>
          <p>{character.skills.Smithing}</p>
        </div>
        <div className='row'>
          <p>Command:</p>
          <p>{character.skills.Command}</p>
        </div>
        <div className='row'>
          <p>Courtesy:</p>
          <p>{character.skills.Courtesy}</p>
        </div>
        <div className='row'>
          <p>Games:</p>
          <p>{character.skills.Games}</p>
        </div>
        <div className='row'>
          <p>Performance:</p>
          <p>{character.skills.Performance}</p>
        </div>
        <div className='row'>
          <p>Culture:</p>
          <p>{character.skills.Culture}</p>
        </div>
        <div className='row'>
          <p>Government:</p>
          <p>{character.skills.Government}</p>
        </div>
        <div className='row'>
          <p>Medicine:</p>
          <p>{character.skills.Medicine}</p>
        </div>
        <div className='row'>
          <p>Sentiment:</p>
          <p>{character.skills.Sentiment}</p>
        </div>
        <div className='row'>
          <p>Theology:</p>
          <p>{character.skills.Theology}</p>
        </div>
        <div className='row'>
          <p>Fitness:</p>
          <p>{character.skills.Fitness}</p>
        </div>
        <div className='row'>
          <p>Martial Arts [Melee]:</p>
          <p>{character.skills.Melee}</p>
        </div>
        <div className='row'>
          <p>Martial Arts [Ranged]:</p>
          <p>{character.skills.Ranged}</p>
        </div>
        <div className='row'>
          <p>Martial Arts [Unarmed]</p>
          <p>{character.skills.Unarmed}</p>
        </div>
        <div className='row'>
          <p>Meditation:</p>
          <p>{character.skills.Meditation}</p>
        </div>
        <div className='row'>
          <p>Tactics:</p>
          <p>{character.skills.Tactics}</p>
        </div>
        <div className='row'>
          <p>Commerce:</p>
          <p>{character.skills.Commerce}</p>
        </div>
        <div className='row'>
          <p>Labor:</p>
          <p>{character.skills.Labor}</p>
        </div>
        <div className='row'>
          <p>Seafaring:</p>
          <p>{character.skills.Seafaring}</p>
        </div>
        <div className='row'>
          <p>Skulduggery:</p>
          <p>{character.skills.Skulduggery}</p>
        </div>
        <div className='row'>
          <p>Survival:</p>
          <p>{character.skills.Survival}</p>
        </div>
      </div>
  )
};

CharacterSheet.propTypes = {
  clan: PropTypes.string,
};

CharacterSheet.defaultProps = {
  clan: 'Crab',
};

export default CharacterSheet;