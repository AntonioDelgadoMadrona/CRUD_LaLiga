// TYPES
import * as types from "../../actions/userActions/types";

const initialState = {
  userList: [],
};

export default function locationReducer(state = initialState, action: any) {
  switch (action.type) {
    // GET USER LIST
    case types.GET_USER_LIST_REQUEST:
      return { ...state, gettingUserList: true };
    case types.GET_USER_LIST_SUCCESS:
      const { data, page, per_page, total, total_pages } = action.payload;
      return {
        ...state,
        userList: data,
        userPagination: {
          currentPage: page,
          itemsPerPage: per_page,
          totalItems: total,
          totalPages: total_pages,
        },
        gettingUserList: false,
      };
    case types.GET_USER_LIST_FAILURE:
      return { ...state, gettingUserList: false };

    default:
      return { ...state };
  }
}
