import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LogIn from './pages/login/LogIn';
import LogOut from './pages/logout/LogOut';
import Header from './components/header/Header';
import ProtectedRoutes from './components/protectedRoute/ProtectedRoute';
import Context from './context/Context';
import { ROUTES } from './constants';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('./assets/fonts/HelveticaNeueCyr-Bold.eot');
    src: local('HelveticaNeueCyr-Bold'),
        url('./assets/fonts/HelveticaNeueCyr-Bold.eot?#iefix') format('embedded-opentype')
        url('./assets/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),
        url('./assets/fonts/HelveticaNeueCyr-Bold.woff') format('woff'),
        url('./assets/fonts/HelveticaNeueCyr-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue';
    src: url('./assets/fontsHelveticaNeueCyr-Medium.eot');
    src: local('HelveticaNeueCyr-Medium'),
        url('./assets/fontsHelveticaNeueCyr-Medium.eot?#iefix') format('embedded-opentype')
        url('./assets/fontsHelveticaNeueCyr-Medium.woff2') format('woff2'),
        url('./assets/fontsHelveticaNeueCyr-Medium.woff') format('woff'),
        url('./assets/fontsHelveticaNeueCyr-Medium.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }


  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    font-family: 'Helvetica Neue', sans-serif;
    color: #1F1F1F;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  main, section {
    width: 100%;
  }

  main {
    padding-inline: 20px;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppContainer = () => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <React.StrictMode>
    <Context.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <main>
          <section>
            <Routes>
              <Route path={ROUTES.LOGIN} element={<LogIn />} />
              <Route element={<ProtectedRoutes />}>
                <Route path={ROUTES.PROFILE} element={<LogOut />} />
              </Route>
            </Routes>
          </section>
        </main>
      </Router>
    </Context.Provider>
  </React.StrictMode>
  )
};


root.render(
  <> 
    <GlobalStyle />
    <AppContainer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
