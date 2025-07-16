// App.jsx
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Navbar from './components/navbar/navbar'; // Move Navbar into its own file

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
