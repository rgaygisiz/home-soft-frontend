import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AuthActions } from 'src/app/auth/actions';
import { fromApp } from 'src/app/store';
import { SiteActions } from '../actions';
import { FileNode } from '../models';

export const siteFeatureKey = 'site';

export interface SiteState {
  isProjectBarOpen: boolean;
  isToolBarOpen: boolean;
  projectStructure: FileNode[];
  loading: boolean;
  sidebarWidth: string;
}

export interface State extends fromApp.State {
  [siteFeatureKey]: SiteState;
}

const initialState: SiteState = {
  isProjectBarOpen: true,
  isToolBarOpen: false,
  loading: false,
  projectStructure: [],
  sidebarWidth: '250px',
};

export const reducer = createReducer(
  initialState,
  // todo: Move toggling of loading spinner to own effect
  on(AuthActions.startLogin, AuthActions.startSignUp, state => ({ ...state, loading: true })),
  on(AuthActions.authenticationSucceeded, state => ({ ...state, loading: false })),
  on(SiteActions.toggleProjectBar, state => ({
    ...state,
    isProjectBarOpen: !state.isProjectBarOpen,
  })),
  on(SiteActions.toggleToolBar, state => ({ ...state, isToolBarOpen: !state.isToolBarOpen })),
  on(SiteActions.sidebarWidthChange, (state, { width }) => ({ ...state, sidebarWidth: width })),
  on(SiteActions.fetchedProject, (state: SiteState, { projectStructure }) => ({
    ...state,
    projectStructure: [...projectStructure],
  })),
);

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectSiteState = createFeatureSelector<State, SiteState>(siteFeatureKey);

export const selectIsProjectBarOpen = createSelector(
  selectSiteState,
  state => state.isProjectBarOpen,
);

export const selectIsToolBarOpen = createSelector(selectSiteState, state => state.isToolBarOpen);

export const selectProjectStructure = createSelector(
  selectSiteState,
  state => state.projectStructure,
);

export const selectSidebarWidth = createSelector(selectSiteState, state => state.sidebarWidth);

export const selectIsLoading = createSelector(selectSiteState, state => state.loading);
