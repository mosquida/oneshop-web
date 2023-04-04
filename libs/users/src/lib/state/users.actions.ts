import { createAction, props } from '@ngrx/store';
import { User } from '../models/User';

// Build an Action
export const buildUserStateSession = createAction('[Users] Build User Session');

export const buildUserStateSessionSuccess = createAction(
  '[Users] Build User Session Success',
  props<{ user: User }>()
);

export const buildUserStateSessionFailure = createAction(
  '[Users] Build User Session Failure'
);
