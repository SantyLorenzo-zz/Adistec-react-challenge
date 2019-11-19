import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createItem: ['newItem'],
  deleteItem: ['item'],
  createCurrentlyBundledItem: ['itemBundled'],
  deleteCurrentlyBundledItem: ['itemBundled'],
  createRealeasedBundled: ['realeasedBundled'],
  deleteRealeasedBundled: ['realeasedBundled'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fields: [
    {
      label: 'Code:',
      type: 'text',
      name: 'code',
      isRequired: true,
      errorMessage: 'Should be less then 14 characters without blackspaces',
    },
    {
      label: 'Description:',
      type: 'text',
      name: 'description',
      isRequired: true,
      errorMessage: 'This field is required',
    },
    {
      label: 'Price:',
      type: 'numeric',
      name: 'price',
      isMoney: true,
      isRequired: true,
      errorMessage: 'Price must be more than 0',
    },
    {
      label: 'Type:',
      type: 'radio',
      name: 'type',
      isRequired: false,
      values: ['Single', 'Multiple'],
    },
    {
      label: 'Parent:',
      type: 'select',
      name: 'parent',
      isRequired: false,
    },
  ],
  items: [],
  currentlyBlunded: [],
  realeasedBundles: [],
};

/* ------------- Reducers ------------- */

const createItem = (state, { newItem }) => {
  if (newItem.parent) {
    const papa = state.items[newItem.parent];
    papa.children.push(newItem);
    return {
      ...state,
      items: {
        ...state.items,
        [newItem.parent]: papa,
      },
    };
  }
  return {
    ...state,
    items: {
      ...state.items,
      [newItem.code]: newItem,
    },
  };
};

const deleteItem = (state, { item }) => {
  delete state.items[item.code];
  return {
    ...state,
    items: {
      ...state.items,
    },
  };
};

const createCurrentlyBundledItem = (state, { itemBundled }) => {
  delete state.items[itemBundled.code];

  return {
    ...state,
    items: {
      ...state.items,
    },
    currentlyBlunded: {
      ...state.itemBundled,
      [itemBundled.code]: itemBundled,
    },
  };
};

const deleteCurrentlyBundledItem = (state, { itemBundled }) => {
  delete state.currentlyBlunded[itemBundled.code];
  console.log('itemBundled', itemBundled);
  return {
    ...state,
    currentlyBlunded: {
      ...state.itemBundled,
    },
    items: {
      ...state.items,
      [itemBundled.code]: itemBundled,
    },
  };
};

const createRealeasedBundled = (state, { realeasedBundled }) => {
  delete state.currentlyBlunded[realeasedBundled.code];

  console.log('realeasedBundled', realeasedBundled);
  return {
    ...state,
    currentlyBlunded: {
      ...state.itemBundled,
    },
    realeasedBundles: realeasedBundled,
  };
};

const deleteRealeasedBundled = (state, { realeasedBundled }) => {
  delete state.realeasedBundles[realeasedBundled];
  console.log('delete', realeasedBundled);
  return {
    ...state,
    realeasedBundles: {
      ...state.realeasedBundles,
    },
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_ITEM]: createItem,
  [Types.DELETE_ITEM]: deleteItem,
  [Types.CREATE_CURRENTLY_BUNDLED_ITEM]: createCurrentlyBundledItem,
  [Types.DELETE_CURRENTLY_BUNDLED_ITEM]: deleteCurrentlyBundledItem,
  [Types.CREATE_REALEASED_BUNDLED]: createRealeasedBundled,
  [Types.DELETE_REALEASED_BUNDLED]: deleteRealeasedBundled,
});
