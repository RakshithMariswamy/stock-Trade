const initialState = {
    customerList : [],
    groupList: [],
    batchList: []
}

export default (state=initialState, action) => {
    switch (action.type) {
      case "CustomerInfo":
        return {
          ...state,
          customerList: action.payload
        };
      case "GroupInfo":
        return {
          ...state,
          groupList: action.payload
        };
     case "BatchInfo":
        return {
          ...state,
          batchList: action.payload
        };
      default:
        return state;
    }
  };