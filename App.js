import React from 'react';
import GameBoard from './components/GameBoard';
import { Provider} from  'react-redux'

export default function App() {
  return (
    <Provider>
    <GameBoard/>
    </Provider>
  );
}

