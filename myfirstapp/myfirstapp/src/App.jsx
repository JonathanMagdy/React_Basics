function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Jonathan, Maximus!</h1>
      <h2>It is {currDate.toLocaleDateString()} and The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;