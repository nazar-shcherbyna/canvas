import React from 'react';
import { ManagePanel } from './components';
import { WorkPlace } from './components/WorkPlace';

function App() {
  return (
    <div className="app" id="app">
      <ManagePanel />
      <WorkPlace />
    </div>
  )
}

export default App;
