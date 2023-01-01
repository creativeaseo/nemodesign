import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContactContents from './components/main/MainContactContents';
import MainPage from './components/main/MainPage';
import WorkComponent from './components/work/WorkComponent';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          {/* <Route path='/about' element={<Opportunities />} /> */}
          <Route path='/work' element={<WorkComponent />} />
          <Route path='/contact' element={<MainContactContents />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
