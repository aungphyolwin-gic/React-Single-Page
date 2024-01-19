import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import ContentBody from './ContentBody';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <ContentBody></ContentBody>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
