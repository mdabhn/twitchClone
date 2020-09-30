import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import List from './streams/List';
import Create from './streams/Create';
import Delete from './streams/Delete';
import Edit from './streams/Edit';
import Show from './streams/Show';

export default function App() {
  return (
    <div className='ui container' style={{ margin: '10px' }}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={List}></Route>
          <Route path='/streams/new' exact component={Create}></Route>
          <Route path='/streams/edit' exact component={Edit}></Route>
          <Route path='/streams/delete' exact component={Delete}></Route>
          <Route path='/streams/show' exact component={Show}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}
