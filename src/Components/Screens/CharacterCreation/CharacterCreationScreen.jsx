import React, { useState } from 'react';
// import CharacterCreationL5R from '../../L5R/CharacterCreation/CharacterCreationL5R';
import Rings from '../../L5R/CharacterCreation/Rings/Rings';
import Clans from '../../L5R/CharacterCreation/Clans/Clans';
import Family from '../../L5R/CharacterCreation/Family/Family';
import School from '../../L5R/CharacterCreation/School/School';
import '../../Screens/Screen.css';
import '../../L5R/CharacterCreation/Rings/Rings.css';
import CharacterSheet from '../../L5R/CharacterCreation/CharacterSheet/CharacterSheet';

function CharacterCreationScreen () {

   // Hooks for managing character sheet statistics in state.
  const [ring, setRing] = useState({
    earth: 1,
    air: 1,
    water: 1,
    fire: 1,
    void: 1
  });
  const [clan, setClan] = useState('Crab');
  const [clanInfo, setClanInfo] = useState({});
  const [family, setFamily] = useState('')
  const [familyInfo, setFamilyInfo] = useState({});
  const [school, setSchool] = useState('');
  const [skills, setSkills] = useState({
    Aesthetics: 0,
    Composition: 0,
    Design: 0,
    Smithing: 0,
    Command: 0,
    Courtesy: 0,
    Games: 0,
    Performance: 0,
    Culture: 0,
    Government: 0,
    Medicine: 0,
    Sentiment: 0,
    Theology: 0,
    Fitness: 0,
    Melee: 0,
    Ranged: 0,
    Unarmed: 0,
    Meditation: 0,
    Tactics: 0,
    Commerce: 0,
    Labor: 0,
    Seafaring: 0,
    Skulduggery: 0,
    Survival: 0,
  });
  const [status, setStatus] = useState(0);
  // const [glory, setGlory] = useState(0);
  // const [honor, setHonor] = useState(0);
  // const [wealth, setWealth] = useState(0);
  // const [techniques, setTechniques] = useState([]);
  // const [outfit, setOutfit] = useState([]);
  // const [advantages, setAdvantages] = useState([]);
  // const [disadvantages, setDisadvantages] = useState([]);
  // const [passion, setPassion] = useState([]);
  // const [anxiety, setAnxiety] = useState([]);
  const [character, setCharacter] = useState({
    clan: "",
    family,
    school,
    status: 0,
    glory: 0,
    honor: 0,
    wealth: 0,
    skills: {
      Aesthetics: 0,
      Composition: 0,
      Design: 0,
      Smithing: 0,
      Command: 0,
      Courtesy: 0,
      Games: 0,
      Performance: 0,
      Culture: 0,
      Government: 0,
      Medicine: 0,
      Sentiment: 0,
      Theology: 0,
      Fitness: 0,
      Melee: 0,
      Ranged: 0,
      Unarmed: 0,
      Meditation: 0,
      Tactics: 0,
      Commerce: 0,
      Labor: 0,
      Seafaring: 0,
      Skulduggery: 0,
      Survival: 0,
    },
    techniques: [],
    outfit: [],
    advantages: [],
    disadvantages: [],
    passion: [],
    anxiety: [],
  });

  // Updates the value of the rings object in state based on user's character Creation choices.
  const updateRings = (ringValue) => {
    setRing((prevRing) => {
      return Object.assign({}, prevRing, {
        [ringValue.toLowerCase()]: prevRing[ringValue.toLowerCase()] + 1
      })
    });
  };

  // Updates the clan and all the skills and rings for that clan choice.
  const updateClan = (value) => {
    // Sets the Clan to the value.
    setCharacter(Object.assign({}, character, {clan: value}));
    // Re-assigns clans to be the rings values that correlate to each clans choice.
    const mapping = {
      "Crab": "earth",
      "Crane": "air",
      "Dragon": "fire",
      "Lion": "water",
      "Phoenix": "void",
      "Scorpion": "air",
      "Unicorn": "water"
    };
    // Updates the rings based on passed in mapped values 
    // for when Next button is pressed.
    if (value !== '') {
      updateRings(mapping[value]);
    // Conditional for if the back button is pressed to reset
    // the rings values.
    } else {
      setRing({
        earth: 1,
        air: 1,
        water: 1,
        fire: 1,
        void: 1
      })
    }
    // Adds the clan choices correlating Skill increase.
    switch (value) {
      case 'Crab':
        updateSkill('Fitness');
        updateStatus(30);
        break;
      case 'Crane':
        updateSkill('Culture');
        updateStatus(35);
        break;
      case 'Dragon':
        updateSkill('Meditation');
        updateStatus(30);
        break;
      case 'Lion':
        updateSkill('Tactics');
        updateStatus(35);
        break;
      case 'Phoenix':
        updateSkill('Theology');
        updateStatus(30);
        break;
      case 'Scorpion':
        updateSkill('Skulduggery');
        updateStatus(35);
        break;
      case 'Unicorn':
        updateSkill('Survival');
        updateStatus(30);
        break;
      default:
        setSkills('');
    }
  }

  const updateSkill = (skill) => {
    setSkills(Object.assign({}, skills, {[skill]: 1}));
    setCharacter((prevCharacter) => {
      return Object.assign({}, prevCharacter, {
        [prevCharacter.skills]: prevCharacter.skills[skill] =+1
      })
    })
  }

  // Object.assign({}, objectToChange, {keyInObject: valueToChangeTo})
  const updateStatus = (statusValue) => {
    setStatus(statusValue);
    setCharacter((prevCharacter) => {
      return Object.assign({}, prevCharacter, {
        status: prevCharacter =+ statusValue
      })
    })
  };

  /**
   * Updates the key value pair inside of the character object hook in state
   * by assigning the value to the key matching the passed in element.
   * @param {string} element 
   * @param {string} value 
   */
  const updateCharacter = (element, value) => {
    console.log('character ++++', character)
    switch (element) {
      case 'clan':
        updateClan(value);
        break;
      case 'family':
        setCharacter(Object.assign({}, character, {family: value}));
        break;
      case 'school':
        setCharacter(Object.assign({}, character, {school: value}));
        break;
      case 'status':
        setCharacter(Object.assign({}, character, {status: value}));
        break;
      case 'glory':
        setCharacter(Object.assign({}, character, {glory: value}));
        break;
      case 'honor':
        setCharacter(Object.assign({}, character, {honor: value}));
        break;
      case 'wealth':
        setCharacter(Object.assign({}, character, {wealth: value}));
        break;
      case 'techniques':
        setCharacter(Object.assign({}, character, {techniques: value}));
        break;
      case 'outfit':
        setCharacter(Object.assign({}, character, {outfit: value}));
        break;
      case 'advantages':
        setCharacter(Object.assign({}, character, {advantages: value}));
        break;
      case 'disadvantages':
        setCharacter(Object.assign({}, character, {disadvantages: value}));
        break;
      case 'passion':
        setCharacter(Object.assign({}, character, {passion: value}));
        break;
      case 'anxiety':
        setCharacter(Object.assign({}, character, {anxiety: value}));
        break;
      default:
        setCharacter(Object.assign({}, character, {}));
    }
  };

  return (
    <div className='screen'>
      <div id='characterSheet' className='split column'>
        <Rings
          ring={ring} 
        />
        <CharacterSheet 
          character={character} 
        />
      </div>
      <div className='column'>
        {!character.clan &&  (
        <Clans
          clan={clan}
          setClan={setClan}
          clanInfo={clanInfo}
          setClanInfo={setClanInfo}
          updateCharacter={updateCharacter}
        /> 
      )}
        { character.clan && !character.family && (
        <Family
          clan={clan}
          family={family}
          setFamily={setFamily}
          familyInfo={familyInfo}
          setFamilyInfo={setFamilyInfo}
          updateCharacter={updateCharacter}
        />)}
        { character.family && (
        <School 
          clan={clan}
          school={school}
          setSchool={setSchool}
          updateCharacter={updateCharacter}
        />)}
      </div>
    </div>
  )
};

export default CharacterCreationScreen;