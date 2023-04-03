import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import * as UsersSelectors from './users.selectors';

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);

  // Facade works as a Service

  buildUserStateSession() {
    // Calls an Action
    this.store.dispatch(UsersActions.buildUserStateSession());
  }
}
