import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/root'

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
})

const enhancer = composeWithDevTools(
    applyMiddleware(loggerMiddleware),
)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)
    if (module.hot) {
        module.hot.accept('../reducers/root', () =>
            store.replaceReducer(require('../reducers/root').default),
        )
    }
    return store
}