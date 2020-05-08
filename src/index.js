import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
import {initStore} from './reducers/initialState'
ReactDOM.render(
    <Provider store={createStore(reducers, initStore)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
   