import { useState, useCallback } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './App.css'
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export default function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() =>  setOpen(false), [setOpen]);

  return (
    <BrowserRouter>
    <div className='App'>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/page1'>Page1</Link>
      <br />
      <Link to='/page2'>Page2</Link>
      <br />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/page1'>
          <Page1 />
        </Route>
        <Route path='/page2'>
          <Page2 />
        </Route>
      </Switch>
      <br />
      <InlineStyle />
      <br />
      <CssModules />
      <br />
      <StyledJsx />
      <br />
      <StyledComponents />
      <br />
      <Emotion />
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
    </BrowserRouter>
  )
}

