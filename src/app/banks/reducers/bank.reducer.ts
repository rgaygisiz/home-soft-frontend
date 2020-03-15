import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { BankActions } from '../actions';
import { Bank } from '../models';

export const banksFeatureKey = 'banks';

export interface State extends EntityState<Bank> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Bank> = createEntityAdapter<Bank>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const bankReducer = createReducer(
  initialState,
  on(BankActions.addBank, (state, action) => adapter.addOne(action.bank, state)),
  on(BankActions.upsertBank, (state, action) => adapter.upsertOne(action.bank, state)),
  on(BankActions.addBanks, (state, action) => adapter.addMany(action.banks, state)),
  on(BankActions.upsertBanks, (state, action) => adapter.upsertMany(action.banks, state)),
  on(BankActions.updateBank, (state, action) => adapter.updateOne(action.bank, state)),
  on(BankActions.updateBanks, (state, action) => adapter.updateMany(action.banks, state)),
  on(BankActions.deleteBank, (state, action) => adapter.removeOne(action.id, state)),
  on(BankActions.deleteBanks, (state, action) => adapter.removeMany(action.ids, state)),
  on(BankActions.loadBanks, (state, action) => adapter.addAll(action.banks, state)),
  on(BankActions.clearBanks, state => adapter.removeAll(state)),
);

export function reducer(state: State | undefined, action: Action) {
  return bankReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
