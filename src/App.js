import './App.css';
import Inicio from './views/inicio';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/header';

const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
        <Header className="App-header"/>
        <div className="App">
          <Inicio/>
        </div>  
    </FirestoreProvider>
  );
}

export default App;
