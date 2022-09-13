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

export const creatCategories = (catgory) => {
  return async () => {
    try {
      createCategory(catgory);
    } catch (e) {
      console.log("Error in creating products!!");
    }
  };
};

const createCategory = async(category) => {
  const response = await Categories.create(category);
  if (!response) {
    throw new Error("Could not create category");
  }
  return response;
};

const fetchCategory = async () => {
  const response = await Categories.list();
  if (!response) {
    throw new Error("Error in fetching categories!");
  }

  return response;
};
