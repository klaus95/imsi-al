import logo from './loading.svg';
import './App.css';

function App() {
  const link = <a className="App-link"
                  href="mailto:muhamercipi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    contact us
                  </a>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Title'>
          UNDER CONSTRACTION
        </p>
        <p className='Subtitle'>
          For more information {link}.
        </p>
      </header>
    </div>
  );
}

export default App;
