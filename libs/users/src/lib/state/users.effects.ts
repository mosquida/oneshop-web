import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { LocalStorageService } from '@oneshop-web/auth';
import { concatMap } from 'rxjs';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';

@Injectable()
export class UsersEffects {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private actions$: any = inject(Actions);

  constructor(private localStorageService: LocalStorageService) {}

  // this.action$.pipe = subscribe to Actions events from ngrx
  // ofType() = name of action to listen then do something with
  // concatMap = map response action into new action
  buildUserStateSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.buildUserStateSession),
      concatMap(() => {
        if (this.localStorageService.isTokenValid()) {
          // Run buildUserStateSession Success Action(Set User and Auth)
        } else {
          // RUn buildUserStateSession Failure Action (Reset)
        }
      })
    )
  );
}
