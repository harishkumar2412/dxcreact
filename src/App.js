import logo from './logo.svg';
import './App.css';

import ComponentA from './components/hooks/contexthook/ComponentA';
import React from 'react';


export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {'harish'} >
        <ComponentA/>
     </UserContext.Provider>
    </div>
  );
}

export default App;