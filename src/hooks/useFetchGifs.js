import { useEffect, useState } from "react";
import { GetGIfts } from "../helpers/getGIfts";


export const useFetchGifs = (category) => {
 
    const [images, setimages] = useState([])
    const [isLoading, setisLoading] = useState(true)


   const getImages = async()=>{
    const newImages = await GetGIfts(category);
    setimages(newImages);
    setisLoading(false)
   
   }


 useEffect(() => {
    getImages()
 },[])
 
 
 
    return {
    images:images,
    isLoading
   }
}
