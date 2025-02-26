
import Hello from'./assets/Hello';
import Contact from'./assets/Contact';
import Counter from './assets/Counter';

function App() {
  const helloData = [
  {name: 'Phatsakon',message: 'Hello there '},
  {name: 'Phatsakon',message: 'Hello....'},
  ];
  return (
    <div>
      <Counter />
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="phaiskon47@gamil.com" phone="0812345678" />
    
    </div>
  );
}

export default App
