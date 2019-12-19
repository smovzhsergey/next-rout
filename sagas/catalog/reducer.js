const initialState = {
  currentRoute: {
    subject: '',
    city: '',
    district: '',
    level: '',
    from: '',
    to: '',
    sex: '',
    sortBy: '',
  }
};

export const catalogReducer = (state = initialState, {payload, type}) => {
  switch (type) {

      case 'CHANGE_ROUTE': 

        return {
          ...state,
          currentRoute: { ...state.currentRoute, ...payload },
        };
        
      default:
          return state;
  }
};
