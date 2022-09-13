import { configureStore } from "@reduxjs/toolkit";

import productReducer  from './Product/product-slice'
import categoryReducer from './Category/category-slice'

const store = configureStore({
    reducer:{
        product: productReducer,
        category: categoryReducer
    }
})


export default store;
 