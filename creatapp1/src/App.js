import Header from './components/Header.js';
// import './App.css';
import Button from './components/Button.js';
function App() {
  // const name =  "regie";
  
  // const a = true;
  // const b = 5+5;

  const clickEvent = () => {
   alert('This is an example of on onclick Event!');
    console.log('Alert test on console');   
  }
  return (
    
    // <div className="container">
    //   <h1>Hello World. Reacts</h1>
    // <h2>Welcome {name} to our react crash course</h2>
    // <h2 className="App">Hi. This an h2 in React!</h2>
    // <h2>I am new to JSX & I love it {a ? 'yes': 'no'} </h2>
    // <h2>{5+5}</h2>
    // <h2>{b}</h2>
    // </div>
    // <div className="contianer">
    //   <Header />
    // </div>

    <div className="container">
      <Header title={'Heading Test'}/>
      <Button text='Add' color='green' clickEvent={clickEvent} />
      <Button text='Delete' color='red' />
      <Button text='About' />

    </div>
  );
}

export default App;
