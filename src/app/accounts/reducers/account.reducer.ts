import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AccountActions } from '../actions';
import { Account } from '../models';

export const accountsFeatureKey = 'accounts';

export interface State extends EntityState<Account> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const accountReducer = createReducer(
  initialState,
  on(AccountActions.addAccount, (state, action) => adapter.addOne(action.account, state)),
  on(AccountActions.upsertAccount, (state, action) => adapter.upsertOne(action.account, state)),
  on(AccountActions.addAccounts, (state, action) => adapter.addMany(action.accounts, state)),
  on(AccountActions.upsertAccounts, (state, action) => adapter.upsertMany(action.accounts, state)),
  on(AccountActions.updateAccount, (state, action) => adapter.updateOne(action.account, state)),
  on(AccountActions.updateAccounts, (state, action) => adapter.updateMany(action.accounts, state)),
  on(AccountActions.deleteAccount, (state, action) => adapter.removeOne(action.id, state)),
  on(AccountActions.deleteAccounts, (state, action) => adapter.removeMany(action.ids, state)),
  on(AccountActions.loadAccounts, (state, action) => adapter.addAll(action.accounts, state)),
  on(AccountActions.clearAccounts, state => adapter.removeAll(state)),
);

export function reducer(state: State | undefined, action: Action) {
  return accountReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// ------------------------

export const selectAccountsState = createFeatureSelector<State>(accountsFeatureKey);

export const selectAllAccounts = createSelector(selectAccountsState, selectAll);
