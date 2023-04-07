import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../models/User';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

// State/Store are created in Reducers using interface to hold fields
export interface UsersState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

// User state default values
export const initialUsersState: UsersState = usersAdapter.getInitialState({
  // set initial required properties
  user: null,
  isAuthenticated: false,
});

// on(Action, StateChangeFunction())
// ...state = clone/copy existing
const reducer = createReducer(
  initialUsersState,
  on(UsersActions.buildUserStateSession, (state) => ({ ...state })),
  on(UsersActions.buildUserStateSessionSuccess, (state, action) => ({
    ...state,
    user: action.user,
    isAuthenticated: true,
  })),
  on(UsersActions.buildUserStateSessionFailure, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
  }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
