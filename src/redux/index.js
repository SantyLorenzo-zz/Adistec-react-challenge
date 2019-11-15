// import { createReducer, createActions } from 'reduxsauce';

// /* ------------- Types and Action Creators ------------- */

// const { Types, Creators } = createActions({
//   createItem: ['item'],
//   addToBundle: ['bundle'],
//   acceptToBundle: ['bundle'],
// });

// export const PreferencesTypes = Types;
// export default Creators;

// /* ------------- Initial State ------------- */

// export const INITIAL_STATE = {
//   items: [],
// };

// /* ------------- Reducers ------------- */

// export const setCapacity = (state, { item }) => ({
//   ...state,
//   items: items.push(item),
// });
// export const setDefaultMapApp = (state, { mapApp }) => state.merge({ defaultMapApp: mapApp });
// export const setRadius = (state, { radius }) => state.merge({ radius });

// /* ------------- Hookup Reducers To Types ------------- */

// export const reducer = createReducer(INITIAL_STATE, {
//   [Types.SET_CAPACITY]: setCapacity,
//   [Types.SET_DEFAULT_MAP_APP]: setDefaultMapApp,
//   [Types.SET_RADIUS]: setRadius,
// });
