import { Suspense } from 'react';
import './App.css';
import Bottles from './components/Bottles/Bottles';

const bottlesPromise = async () => {
  const response = await fetch('./bottles.json');
  return response.json();
};

function App() {
  const bottlesData = bottlesPromise();

  return (
    <>
      <h1>Awesome Water Bottles</h1>

      <div>
        <Suspense fallback={<h4>loading....</h4>}>
          <Bottles bottlesData={bottlesData}></Bottles>
        </Suspense>
      </div>
    </>
  );
}

export default App;
