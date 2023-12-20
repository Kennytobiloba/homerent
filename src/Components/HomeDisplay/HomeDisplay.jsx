import React from 'react'
import data from '../data';
import Item from '../Item/Item';

 const HomeDisplay = () => {
  return (
    <div className=' Frame216 left-[116px] top-[516px] absolute justify-center items-start gap-4 inline-flex flex-wrap'>

        {
            data.map((item, i) =>{
                return  <Item key={i} id={item.id} img={item.imageUrl} details={item.details}/>
            })
        }
    </div>
  )
}
export default HomeDisplay
