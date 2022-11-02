import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom" disabled> hello </Button>
        <Button onClick={(e) => {e.preventDefault(); console.log(111);
        }} butType={ButtonType.Default} size={ButtonSize.large}> hello button </Button>
        <Button butType={ButtonType.Primary} size={ButtonSize.Small}> hello button </Button>
        <Button butType={ButtonType.Link} href="http://www.baidu.com" disabled> baidu </Button>
        <br />
      </header>
    </div>
  );
}

export default App;
