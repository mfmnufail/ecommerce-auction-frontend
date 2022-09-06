import { configureStore } from "@reduxjs/toolkit";

import productReducer  from './Product/product-slice'

const store = configureStore({
    reducer:{
        product: productReducer
    }
})


export default store;
 