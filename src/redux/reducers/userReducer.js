const initialState = {
  number: 0,
  text: "Hello Word!!"
};

export default (state = initialState, action) => {
  switch(action.type){
      case "SET_NUMBER": {
        return {
            ...state,
            number: ++state.number
        };
      }
      case "SET_USERNAME": {
        return {
            ...state,
            text: action.username
        };
      }
      default: {
        return state;
      }
  }
  
};
