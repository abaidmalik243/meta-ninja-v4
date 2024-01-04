
import { Suspense } from 'react';
import RoutesComponent from 'Routes';
import LoadingComponent from 'Components/LoadingComponent';
// import Race from '../src/Components/NFT/Race'
import './App.css';


function App() {
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <RoutesComponent />
        {/* <Race/> */}
      </Suspense>
    </>

  );
}

export default App;
