import React from 'react';
import data from '../data';
import Item from './Components/Item/Item';

const HouseDisplay = (props) => {
  return (
    <div className="">
      <div className=''></div>
      {data.map((item, i) => {
        if (props.category === item.category) {
          return  <Item key={i} id={item.id} img={item.imageUrl} details={item.details}/>   
          
        }
        return null;
      })}
    </div>
  );
};

export default HouseDisplay;
