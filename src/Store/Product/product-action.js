import {Products} from '../../API/agent'
import { productActions } from './product-slice'


export const fetchProduct = ()=>{
    return async(dispatch)=>{
        try{
            const products = await fetchData();
            console.log("products", products)
            dispatch(productActions.fetchProduct(products))
        } catch(e){
            console.log("Error in fetching products")
        }
    }
}



const fetchData = async()=>{
    const response = await Products.list();
    if(!response){
        throw new Error("Could not fetch products")
    }

    return response;
}