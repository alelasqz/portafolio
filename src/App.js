import logo from './logo.svg';
import './App.css';
import Experiencias from './components/experiencias';
import { doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
    <div className="App">
      <header className="App-header">
          <Experiencias/>
      </header>
    </div>
    </FirestoreProvider>
  );
}

export default App;
