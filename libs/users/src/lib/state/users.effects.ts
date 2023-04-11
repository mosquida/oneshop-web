/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { LocalStorageService } from '@oneshop-web/auth';
import { ObservableInput, catchError, concatMap, map, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // private actions$: any = inject(Actions);

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private usersService: UsersService
  ) {}

  // this.action$.pipe = subscribe to Actions events from ngrx
  // ofType() = name of action to listen then do something with
  // concatMap = map response action into new action, waits or previous to finish
  buildUserStateSession$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(UsersActions.buildUserStateSession),
      concatMap((): any => {
        console.log(2323);
        if (this.localStorageService.isTokenValid()) {
          // Run buildUserStateSession Success Action(Set User and Auth)

          const userId = this.localStorageService.getUserIdFromToken();

          if (userId) {
            this.usersService.getUser(userId).subscribe((user) => {
              console.log(user);
              return UsersActions.buildUserStateSessionSuccess({
                user: user,
              });
            });
          }
        } else {
          // RUn buildUserStateSession Failure Action (Reset)
          return UsersActions.buildUserStateSessionFailure();
        }
      })
    )
  );
}
