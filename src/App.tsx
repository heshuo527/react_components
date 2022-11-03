import React from 'react';
import Alert from './components/Alert/Alert';
import Button, { ButtonSize, ButtonType } from './components/Button/Button';
import Axios from './server/axios'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom" disabled> hello </Button>
        <Button onClick={() => {console.log(1)}} butType={ButtonType.Default} size={ButtonSize.large}> hello button </Button>
        <Button butType={ButtonType.Primary} size={ButtonSize.Small}> hello button </Button>
        <Button butType={ButtonType.Link} href="http://www.baidu.com" disabled> baidu </Button>
        <br />
        <Alert artType={'success'} />
        <Alert artType={'danger'} />
        <Alert artType={'default'} />
      </header>
    </div>
  );
}

export default App;

