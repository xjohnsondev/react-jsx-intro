const App = () => (
    <div>
        <Tweet username="user1" name="user" date="12/29/2023" message="Hello" color="red" /> 
        <Tweet username="user2" name="name" date="12/30/2023" message="Goodbye" color="blue" />
        <Tweet username="user3" name="lorem" date="12/31/2023" message="See ya" color="green" />

    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))
