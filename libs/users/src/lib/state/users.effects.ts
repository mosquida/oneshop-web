/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { LocalStorageService } from '@oneshop-web/auth';
import { ObservableInput, catchError, concatMap, map, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private actions$: any = inject(Actions);

  constructor(
    private localStorageService: LocalStorageService,
    private usersService: UsersService
  ) {}

  // this.action$.pipe = subscribe to Actions events from ngrx
  // ofType() = name of action to listen then do something with
  // concatMap = map response action into new action, waits or previous to finish
  buildUserStateSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.buildUserStateSession),
      concatMap((): any => {
        if (this.localStorageService.isTokenValid()) {
          // Run buildUserStateSession Success Action(Set User and Auth)

          const userId = this.localStorageService.getUserIdFromToken();

          if (userId) {
            this.usersService.getUser(userId).pipe(
              map((user) => {
                return UsersActions.buildUserStateSessionSuccess({
                  user: user,
                });
              }),
              catchError((): ObservableInput<any> => {
                return of(UsersActions.buildUserStateSessionFailure());
              })
            );
          }
        } else {
          // RUn buildUserStateSession Failure Action (Reset)
          return of(UsersActions.buildUserStateSessionFailure());
        }
      })
    )
  );
}
