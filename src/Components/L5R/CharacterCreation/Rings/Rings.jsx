import React from 'react';
import './Rings.css';

function Rings({ring}) {
  
  return (
    <div id='fiveRings' className="rings">
      <div className="row">
        <div className="ring">{ring.earth} Earth</div>
        <div className="ring">{ring.air} Air</div>
      </div>
      <div className="row push">
        <div className="ring">{ring.water} Water</div>
        <div className="ring">{ring.fire} Fire</div>
      </div>
      <div className="ring bottom-ring">{ring.void} Void</div>
    </div>
  );
};

export default Rings;