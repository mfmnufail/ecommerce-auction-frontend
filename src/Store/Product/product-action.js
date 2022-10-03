import {Products} from '../../API/agent'
import { productActions } from './product-slice'


export const fetchProducts = ()=>{
    return async(dispatch)=>{
        try{
            const products = await fetchProduct();
           
            dispatch(productActions.fetchProduct(products))
        } catch(e){
            console.log("Error in fetching products")
        }
    }
}

export const fetchProductsByCategories = (id)=>{
    return async(dispatch)=>{
        try{
            const products = await fetchProductByCategory(id);
            
            dispatch(productActions.fetchProductByCategory(products))
        } catch(e){
            console.log("Error in fetching products by category")
        }
    }
}

export const createProducts=(product)=>{
    return async()=>{
        try{
            createProduct(product);
        }catch(e){
            console.log("Error in creating product")
        }
    }
}

export const deleteProducts=(id)=>{
    return async()=>{
        try{
            deleteProduct(id);
        }catch(e){
            console.log("Error in deleting product")
        }
    }
}

const deleteProduct = async(id)=>{
    const response = await Products.delete(id);
    if(!response){
        throw new Error("Could not delete product")
    }
    return response
}

 const createProduct= async(product)=>{
    const response = await Products.create(product);
    if(!response){
        throw new Error("Could not create product")
    }

    return response
}



const fetchProduct = async()=>{
    const response = await Products.list();
    if(!response){
        throw new Error("Could not fetch products")
    }

    return response;
}

const fetchProductByCategory = async(id)=>{
    const response = await Products.listByCategoryId(id);
    if(!response){
        throw new Error("Could not fetch products by category id")
    }

    return response;
}