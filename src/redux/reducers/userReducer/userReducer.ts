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
    // GET AN USER BY ID
    case types.GET_USER_DETAILS_REQUEST:
      return { ...state, gettingUserDetails: true };
    case types.GET_USER_DETAILS_SUCCESS:
      const { first_name, last_name, avatar, email, id } = action.payload;
      return {
        ...state,
        userDetails: {
          firstName: first_name,
          lastName: last_name,
          avatar,
          email,
          id,
        },
        gettingUserDetails: false,
      };
    case types.GET_USER_DETAILS_FAILURE:
      return { ...state, gettingUserDetails: false };
    // DELETE AN USER BY ID
    case types.DELETE_USER_REQUEST:
      return { ...state, gettingUserDetails: true };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        gettingUserDetails: false,
        userDetails: null,
      };
    case types.DELETE_USER_FAILURE:
      return { ...state, gettingUserDetails: false };
    // UPDATE AN USER
    case types.UPDATE_USER_REQUEST:
      return { ...state, gettingUserDetails: true };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        gettingUserDetails: false,
        userDetails: { ...action.payload },
      };
    case types.UPDATE_USER_FAILURE:
      return { ...state, gettingUserDetails: false };

    default:
      return { ...state };
  }
}
