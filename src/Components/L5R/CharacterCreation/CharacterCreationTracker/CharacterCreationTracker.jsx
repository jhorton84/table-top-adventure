import React from 'react';
import './CharacterCreationTracker.css';

const CharacterCreationTracker = ({
  clan,
  familyRingConfirm,
  school,
  emotion,
  relationship,
  bushido,
}) => {
  return (
    <div className={'tracker'}>
      <p className='tracker-color'>Step 1</p>
      <p className={clan ? 'tracker-color' : 'untracked'}>Step 2</p>
      <p className={familyRingConfirm ? 'tracker-color' : 'untracked'}>Step 3</p>
      <p className={school ? 'tracker-color' : 'untracked'}>Step 4</p>
      <p className={emotion ? 'tracker-color' : 'untracked'}>Step 5</p>
      <p className={relationship ? 'tracker-color' : 'untracked'}>step 6</p>
      <p className={bushido ? 'tracker-color' : 'untracked'}>step 7</p>
    </div>
  );
};

export default CharacterCreationTracker;