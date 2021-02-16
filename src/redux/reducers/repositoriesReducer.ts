interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

enum ActionType {
    SEARCH_REPOSITORIES='search_repositories',
    SEARCH_REPOSITORIES_SUCCESS='search_repositories_success',
    SEARCH_REPOSITORIES_ERROR='search_repositories_error'
}

type Action =
  | SearchRepositories
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

const repositoriesReducer = (
  state: RepositoryState,
  action: Action
): RepositoryState => {

  /** Type Guard */
  if (action.type === "search_repositories_success") {
    console.log(action) // if you check the action's type it will show SearchRepositoriesSuccessAction
  }
  /************* */
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
