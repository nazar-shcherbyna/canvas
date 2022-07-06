import React from 'react';
import { Canvas, ManagePanel } from './components';
import { TopPanel } from './components/TopPanel';

function App() {
  return (
    <div className="app" id="app">
      <ManagePanel />
      <section className="canvas-wrapper">
        <TopPanel />
        <Canvas />
      </section>
    </div>
  )
}

export default App;
