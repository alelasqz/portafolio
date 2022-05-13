import './App.css';
import Inicio from './views/inicio';
import Proyectos from './views/proyectos';
import Blog from './views/blog';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/header';
import Footer from './components/footer';
import { Routes, Route, Link } from "react-router-dom";


const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
        <Header/>
        <Routes>
          <Route path="/portafolio" element={<Inicio />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
        <Footer/>
    </FirestoreProvider>
  );
}

export default App;
