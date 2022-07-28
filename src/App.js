import React from 'react';

// Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';

import GameScreen from './screens/GameScreen';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <GameScreen />
    </React.Fragment>
  );
}

export default App;
