import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GiffExpertApp = () => {

   const [categories, setCategories] = useState(['One Punch']);

   const onAddCategory =(newCategory)=>{
  //  setcategories([...categories, 'Valorant']);

    if( categories.includes(newCategory)) return;

  
  setCategories(cat=>[newCategory , ...cat]);
   }


  return(
    <>
    
      <h1>GIffExpertApp</h1>
      
      <AddCategory 
   
      onNewCategory={event => onAddCategory(event)}
      />
     
      
      
        {categories.map(category=> 
        <GifGrid 
        key={category} 
        category={category}
        /> )}
       



    </>
  )
}
