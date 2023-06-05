import React from 'react';
import CardHeader from './components/CardHeader/index'
import Products from './components/Products/index'

function App() {
  return (
    <div className="h-screen bg-cinza">
      <CardHeader />
      <div className="p-6">
      <Products />
      </div>
    </div>
  );
}

export default App;