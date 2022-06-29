import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/protectedRoute/ProtectedRoute';
import Context from './context/Context';
import LogIn from './pages/login/LogIn';
import LogOut from './pages/logout/LogOut';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppContainer = () => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <React.StrictMode>
    <Context.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<LogOut />} />
          </Route>
        </Routes>
      </Router>
    </Context.Provider>
  </React.StrictMode>
  )
};


root.render(
  <AppContainer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
