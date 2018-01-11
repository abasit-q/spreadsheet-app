import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { loadState, saveState } from '../storage';

const persistedState = loadState();

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, persistedState, middleWare);

store.subscribe(() => {
    saveState({
        userData: store.getState().User
    });
});

export default store;