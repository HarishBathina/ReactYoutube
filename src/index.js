import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import {watchGetVideos} from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetVideos);



//ReactDom.render(<App />,document.getElementById('app'));


ReactDom.render(<Provider store={store}><App /></Provider>,document.getElementById('app'));