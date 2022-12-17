//import React, {useState} from 'react';
// import Timeline from './timeline';
// import EventForm from './form';

// const App = () => {
//   const [events, setEvents] = useState([]);

//   const addEvent = (event) => {
//     setEvents([...events, event]);
//   };

//   return (
//     <div className="app">
//       <EventForm onSubmit={addEvent} />
//       <Timeline events={events} />
//     </div>
//   );
// };

// export default App;
import React from 'react';
import Timeline from './Timeline';

const App = () => {
  return (
    <div>
      <Timeline />
    </div>
  );
};

export default App;





