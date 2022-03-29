import './App.css';

const Person = (props) => {
return(
  <>
  <h1>name: {props.name}</h1>
  <h2>last name:{props.lastName}</h2>
  <h2>Age: {props.age}</h2>
  </>
)
}

const App = () => {
  return (
    <div className="App">
  <>
  <Person name={'John'} lastName={'Doe'} age={'25'}/>
  <Person name="Jane" />
  </>
    </div>
  );
}

export default App;
