import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Bank } from '../models';

export const loadBanks = createAction('[Bank/API] Load Banks', props<{ banks: Bank[] }>());

export const addBank = createAction('[Bank/API] Add Bank', props<{ bank: Bank }>());

export const upsertBank = createAction('[Bank/API] Upsert Bank', props<{ bank: Bank }>());

export const addBanks = createAction('[Bank/API] Add Banks', props<{ banks: Bank[] }>());

export const upsertBanks = createAction('[Bank/API] Upsert Banks', props<{ banks: Bank[] }>());

export const updateBank = createAction('[Bank/API] Update Bank', props<{ bank: Update<Bank> }>());

export const updateBanks = createAction(
  '[Bank/API] Update Banks',
  props<{ banks: Update<Bank>[] }>(),
);

export const deleteBank = createAction('[Bank/API] Delete Bank', props<{ id: string }>());

export const deleteBanks = createAction('[Bank/API] Delete Banks', props<{ ids: string[] }>());

export const clearBanks = createAction('[Bank/API] Clear Banks');
