import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);

  // Observable vars for apps to subcribe for, returns data from store by select
  currentUser$ = this.store.select(UsersSelectors.getUser);
  isAuthenticated$ = this.store.select(UsersSelectors.getUserAuth);

  // Facade works as a Service

  buildUserStateSession() {
    // Calls an Action
    this.store.dispatch(UsersActions.buildUserStateSession());
  }
}
