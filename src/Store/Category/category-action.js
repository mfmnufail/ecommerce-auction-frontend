import { Categories } from "../../API/agent";
import { categoryActions } from "./category-slice";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const category = await fetchCategory();
      dispatch(categoryActions.fetchCategory(category));
    } catch (e) {
      console.log("Error in fetching categories!");
    }
  };
};

export const creatCategories=(category)=>{
 Categories.create(category);

};

export const deleteCategories=(id)=>{
  return async()=>{
      try{
          deleteCategory(id);
      }catch(e){
          console.log("Error in deleting product")
      }
  }
}

const deleteCategory = async(id)=>{
  const response = await Categories.delete(id);
  if(!response){
      throw new Error("Could not delete product")
  }
  return response
}








const fetchCategory = async () => {
  const response = await Categories.list();
  if (!response) {
    throw new Error("Error in fetching categories!");
  }

  return response;
};
