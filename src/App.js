import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useDarkMode } from './hooks/useDarkMode';

import AddTodo from './components/AddTodo';
import ThemeSwitcher from './components/ThemeSwitcher';
import Todos from './components/Todos';

import { light, dark } from './theme';
import GlobalTheme from './global';

import { store, persistor } from './store';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const currentTheme = theme === 'light' ? light : dark;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <GlobalTheme />
          <main className="main-content">
            <div className="addTodo-theme-section">
              <AddTodo />
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
            <DndProvider backend={HTML5Backend}>
              <Todos />
            </DndProvider>
          </main>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
