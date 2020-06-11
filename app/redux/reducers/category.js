import { FETCH_CATEGORIES } from '../actions/type';

let initialState = {
  categoryList: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES:
      state.categoryList=payload;
      return{...state};
    default:
      return state;
  }
};
