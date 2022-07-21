import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './pages/login/LogIn';
import Profile from './pages/profile/Profile';
import Header from './components/header/Header';
import ProtectedRoutes from './components/protectedRoute/ProtectedRoute';
import Context from './context/Context';
import { ROUTES } from './constants';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './globalStyle';
import 'normalize.css';



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
                <Route path={ROUTES.PROFILE} element={<Profile />} />
              </Route>
              <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
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
