export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSCATION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSCATION":
      return {
  transactions: [action.payload, ...state.transactions],
        ...state,
      
      };
    default:
      return state;
  }
};
