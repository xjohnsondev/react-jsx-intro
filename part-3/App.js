const App = () => (
  <div>
    <Person name="Bugs" age={21} hobbies={["eating", "hopping"]} />
    <Person name="Daffy" age={18} hobbies={["Conning", "Basketball"]}/>
    <Person name="Taz" age={16} hobbies={["spinning", "eating"]}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
