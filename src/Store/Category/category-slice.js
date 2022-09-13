import {createSlice} from '@reduxjs/toolkit';


const categorySlice = createSlice({
    name : "category",
    initialState:{
        categories : []
    },
    reducers:{
        fetchCategory(state,action){
            state.categories = action.payload
        }
    }
})

export const categoryActions = categorySlice.actions
export default categorySlice.reducer;