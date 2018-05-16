import React from 'react';

import TodoBar from './todoBar';
import TodoListContainer from './todoListContainer';

const Home = (props) => ( 
  <div>
    <TodoBar />
    <TodoListContainer />
  </div>
)

export default Home;