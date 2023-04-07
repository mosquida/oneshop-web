import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY, UsersState } from './users.reducer';

// Selectors selects fields from states to return
// Set the the state template using UserState
// Lookup, Fetch the 'Users' feature state managed by NgRx using USERS_FEATURE_KEY
export const getUsersState =
  createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

// createSelectur(state, () => return)
export const getUser = createSelector(getUsersState, (state) => state.user);

export const getUserAuth = createSelector(
  getUsersState,
  (state) => state.isAuthenticated
);
