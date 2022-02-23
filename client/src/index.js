import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import NoteStore from './store/NoteStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    note: new NoteStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
