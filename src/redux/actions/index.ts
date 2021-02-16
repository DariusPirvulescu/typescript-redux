import { ActionType } from '../action-types'

// interface Action {
//   type: string;
//   payload?: any; // the 'any' type annotation can be improved
// }

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositories
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
