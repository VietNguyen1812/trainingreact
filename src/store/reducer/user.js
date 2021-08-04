const initialState = {
  info: {}, // xuất ra list thông tin
  token: "",
  list: [],
  listCategory: [],
  result: {},
  currentUser: {},
  resultCategory :{},
};

function user(state = initialState, action) {
  switch (action.type) {
    case "signin":
      return {
        ...state,
        token: action.payload.token,
      };
    case "signup":
      return {
        ...state,
        info: action.payload.user,
      };
    case "getListUser":
      return {
        ...state,
        list: action.payload.listUser,
      };
    case "getListCategory":
      return {
        ...state,
        listCategory: action.payload.listCategory,
      };
    case "createCategory":
      return {
        ...state,
        result: action.payload.createCategory,
      };
    case "getDetailUser":
      return {
        ...state,
        currentUser: action.payload.user,
      };
      case "getDetailCategory":
      return {
        ...state,
        resultCategory: action.payload.createCategory,
      };

    default:
      return state;
  }
}

export default user;
