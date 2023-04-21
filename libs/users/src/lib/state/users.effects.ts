/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { LocalStorageService } from '@oneshop-web/auth';
import { catchError, concatMap, map, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private actions$ = inject(Actions);

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
      concatMap(() => {
        const id = this.localStorageService.getUserIdFromToken();
        return this.usersService.getUser(id).pipe(
          map((user) =>
            UsersActions.buildUserStateSessionSuccess({ user: user })
          ),
          catchError(() => of(UsersActions.buildUserStateSessionFailure()))
        );
      })
    )
  );
}
