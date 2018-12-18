import React from 'react';
import '../Person/Person.css';


const person = ( props ) => {  
   return (
       <div className="Person">
            <p>I'm {props.name} and I am {props.age} years of age!</p>
            <p>{props.children}</p>
            <input 
            type="text"
            onChange={props.changed}
            value={props.name} />
       </div>
  
   );
};

export default person;