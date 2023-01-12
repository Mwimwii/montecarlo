import * as React from 'react';
import './style.css';


function usePi() {
  const [pi, setPi] = React.useState<string>('10');
  const handlePi = React.useCallback((e) => {
    const size= Number(e.target.value)
    let inCircle = 0;
    for(let i = 0; i < size; i++) {
      const x = Math.random();
      const y = Math.random();
      euclid = x*x + y*y
      if(euclid < 1){
        inCircle++
      }
    }
    setPi(4*inCircle/size)
  }, [setPi])
  return [pi, handlePi]
}

function MonteCarlo() {
  const [pi, handlePi] = usePi()

  return(
  <React.Fragment>
      <input type="text" onChange={handlePi}/>
      <p> Pi is about {pi} </p>
  </React.Fragment>
  )
}

export default function App() {


  return (
    <div>
      <MonteCarlo />
    </div>
  );
}
