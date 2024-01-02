
import { Suspense } from 'react';
import RoutesComponent from 'Routes';
import LoadingComponent from 'Components/LoadingComponent';
import './App.css';


function App() {
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <RoutesComponent />
      </Suspense>
    </>

  );
}

export default App;
