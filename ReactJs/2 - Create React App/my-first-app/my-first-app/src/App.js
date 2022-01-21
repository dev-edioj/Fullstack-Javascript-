import React from 'react';


function HelloWorld() {
  return <h1>
    Hello Word!
  </h1>
}

function Dev(){
  return <h2>
    Fala Dev!
  </h2>
}


function App() {
  return (
    <div>
      <HelloWorld/>
      <Dev></Dev>
    </div>
  );
}

export default App;
