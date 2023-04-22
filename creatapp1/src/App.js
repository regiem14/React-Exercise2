import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useState} from 'react';

function App() {

  const [tasklist, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Watch Memes',
            day: 'April 18, 2023',
            reminder: true
        },
        {
            id: 2,
            text: 'Play Stick it to Stickman',
            day: 'April 19, 2023',
            reminder: true
        },
        {
            id: 3,
            text: 'Stay Home',
            day: 'April 20, 2023',
            reminder: false
        },
        {
            id: 4,
            text: 'Watching mobiles',
            day: 'April 21, 2023',
            reminder: false
        },
    
    ]
);


  return (
    <div className="container">
      <Header />
      <Tasks tasklist={tasklist} />

    </div>
  );
}

export default App;
