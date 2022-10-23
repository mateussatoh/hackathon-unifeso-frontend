import './App.css';
import { AppRoutes } from './app.routes';
import VLibras from "@djpfs/react-vlibras"
function App() {
  return (
      <>
       <VLibras forceOnload={true} />
      <AppRoutes />
      </>
  );
}

export default App;
