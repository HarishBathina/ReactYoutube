import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../store/reducer';

const store = createStore(reducer);



//ReactDom.render(<App />,document.getElementById('app'));


ReactDom.render(<Provider store={store}><App /></Provider>,document.getElementById('app'));