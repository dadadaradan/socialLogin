import { useContext, useEffect, useState } from 'react'
//Context
import { UserContext } from './context/UserContext'
//Pages
import LoginPage from './Pages/LoginPage'
import InnerApp from './Pages/InnerPage'
import SignupPage from './Pages/SignUpPage';
import SignUpPage from './Pages/SignUpPage';
import ConfirmEmailPage from './Pages/ConfirmPasswordPage';

type ViewMode = 'signup' | 'signin' | 'confirm' | 'app';

function App() {
  const { user } = useContext(UserContext);
  const [viewMode, setViewMode] = useState<ViewMode>(user ? 'app' : 'signin');




  const renderView = () => {
    switch (viewMode) {
      case 'app':
        return <InnerApp/>
      case 'signin': 
        return <LoginPage />;
      case 'signup':
        return <SignUpPage onChangeViewMode={() => setViewMode('confirm')} />;
      case 'confirm': 
        return <ConfirmEmailPage onViewModeChange={() => setViewMode('app')} />
    
      default:
        return <LoginPage />
    }
  }

  return renderView();
}

export default App
