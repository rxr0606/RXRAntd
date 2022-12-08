// import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">BaiduLink</Button>
      </header>
    </div>
  );
}

export default App;
