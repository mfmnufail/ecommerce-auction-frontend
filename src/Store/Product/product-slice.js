import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState:{
        products:[],
        productsByCategory:[]
    },
    reducers:{
        fetchProduct(state,action){
            
            state.products = action.payload
        },
        fetchProductByCategory(state,action){
           
            state.productsByCategory = action.payload
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;