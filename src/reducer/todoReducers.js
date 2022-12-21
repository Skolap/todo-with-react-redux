const initialState = {
  list: [],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, data } = action.payload;

      return {
        ...state,
        data: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    }
  }
};

export default todoReducers;
