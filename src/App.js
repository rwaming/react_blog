import './App.css';
import Load from './components/Load';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='app dark'>
      <Load />
      <div className='body'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
