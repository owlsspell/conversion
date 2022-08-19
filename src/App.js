import './App.css';
import './App.scss';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid="md" className="mt-50">
          <UserList />
        </Container>
      </header>
    </div>
  );
}

export default App;
