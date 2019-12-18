//
// //Core
// import { createStore } from 'redux';
//
// //Roots
// import { rootReducer } from './rootReducer';
// import { rootSaga } from './rootSaga';
//
// //Middleware
// import { enhancedStore, sagaMiddleware } from './middleware/core';
//
// export const store = createStore(rootReducer, enhancedStore);
//
// sagaMiddleware.run(rootSaga);


import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware])
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export default configureStore
