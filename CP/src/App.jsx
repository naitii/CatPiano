import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const sounds = import.meta.glob('./RawSamples/*', { eager: true });
const filesArray=Object.values(sounds);
console.log(filesArray)
console.log(sounds)

filesArray.forEach((importedFile) => {
  const wavFile = importedFile();
  // Do something with the wavFile
});

function App() {
  const [count, setCount] = useState(0)
  console.log(sounds)
  return (
    <>
      <h1>Cat Piano</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
