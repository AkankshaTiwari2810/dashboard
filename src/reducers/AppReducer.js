import { createAction, createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';
import { initialState } from './../config/InitialState';

const toggleStatus = createAction('toggleStatus');
const toggleStatusForGroup = createAction('toggleStatusForGroup');

const AppReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleStatus, (state, action) => {
      return {
        ...state,
        features: state.features.map((item) => {
          if (item.id === action.id) {
            return { ...item, active: !item.active };
          }
          return item;
        }),
      };
    })
    .addCase(toggleStatusForGroup, (state, action) => {
      const groupIds = () => {
        const subCategories = _.find(
          [...state.subCategories],
          (subCategory) => {
            if (action.id === subCategory.id) {
              return true;
            }
          }
        );
        return subCategories.items;
      };

      return {
        ...state,
        features: state.features.map((item) => {
          if (item.id === action.id) {
            return { ...item, active: !item.active };
          } else if (_.includes(groupIds(), item.id)) {
            return {
              ...item,
              active: item.active ? !item.active : item.active,
            };
          }
          return item;
        }),
      };
    });
});

export default AppReducer;
