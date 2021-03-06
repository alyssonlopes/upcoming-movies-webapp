// We're setting these based on the state of the request
const initialAsyncState = { isLoading: false, response: undefined, request: undefined };

/**
 * 
 * @param {*} actionType 
 * @param {*} asyncRequestFn 
 * @param {*} requestParams 
 * 
 * @example createAsyncActionCreator('GET_TOP_MOVIES', getTopMovies, {page: 1})
 */
export const createAsyncActionCreator = (actionType, asyncRequestFn, requestParams) => {
    return (dispatch) => {
        dispatch(createAction(`${actionType}_START`, { request: requestParams }));
        // NOTE: asyncRequestFn must accept single object parameter
        // in order to resolve param values
        return asyncRequestFn(requestParams)
            .then(response => {
                response.json()
                    .then(json => dispatch(createAction(`${actionType}_SUCCESS`, { response: json })))
                    .catch(error => dispatch(createAction(`${actionType}_ERROR`, { error })));
            });

    };
}

/**
 * Creates a basic action
 * @param {*} type 
 * @param {*} actionProps 
 */
export const createAction = (type, actionProps) => {
    return {
        type,
        ...actionProps
    };
}

/**
 *  Generic way of handling state changes for an async request.
 *  Allowable async reducer overrides are: {action_type}_START, {action_type}_SUCCESS, {action_type}_ERROR
 */
export const createAsyncReducer = (actionType, actionHandlerKeyFuncs = {}, initialState = initialAsyncState) => {
    const startReducerOverrideFn = actionHandlerKeyFuncs[`${actionType}_START`];
    const startReducerFn = startReducerOverrideFn ? startReducerOverrideFn : (state, action) => ({
        ...state,
        isLoading: true,
        request: action.request
    });
    const successReducerOverrideFn = actionHandlerKeyFuncs[`${actionType}_SUCCESS`];
    const successReducerFn = successReducerOverrideFn ? successReducerOverrideFn : (state, action) => ({
        ...state,
        isLoading: false,
        response: action.response
    });
    const errorReducerOverrideFn = actionHandlerKeyFuncs[`${actionType}_ERROR`];
    const errorReducerFn = errorReducerOverrideFn ? errorReducerOverrideFn : (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    });

    return createReducer(
        initialState,
        {
            [`${actionType}_START`]: startReducerFn,
            [`${actionType}_SUCCESS`]: successReducerFn,
            [`${actionType}_ERROR`]: errorReducerFn
        }
    );
}

/**
 * Helper function to enables passing an object with
 * the action.type as the key and the reducer function as the value.
 */
export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
    return (state = initialState, action) => {
        const actionHandler = actionHandlerKeyFuncs[action.type];
        return actionHandler ? actionHandler(state, action) : state;
    }
};
