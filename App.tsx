import * as React from 'react';
import './style.css';


function usePi() {
  const [pi, setPi] = React.useState<string>('10');
  const [loading, setLoading] = React.useState(false)
  const handlePi = React.useCallback((e) => {
    const size= Number(e.target.value)
    let inCircle = 0;
    for(let i = 0; i < size; i++) {
      const x = Math.random();
      const y = Math.random();
      const euclid = x*x + y*y
      if(euclid < 1){
        inCircle++
      }
    }
    setLoading(true)
    setPi(4*inCircle/size)
    setLoading(false)
  }, [setPi])
  return [pi, handlePi, loading]
}


function MonteCarlo() {
  const [pi, handlePi, loading] = usePi()

  return(
  <>
      {!loading && 
        (<>
          <input type="text" onChange={handlePi}/>
          <p> Pi is about {pi} </p>
        </>)
      }
      {loading && (<p>Loading...</p>)
  </>
  )
}

export default function App() {


  return (
    <div>
      <MonteCarlo />
    </div>
  );
}
