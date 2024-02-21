function App() {
  return (
    <div className="header">
      <div className="title">
        <h1>Create an account</h1>
        <h1>
          <span>Uptrust</span>
        </h1>
      </div>
      <div className="signup">
        <input type="text" name="text" placeholder="Enter Your Email" /> <br />
        <input
          type="text"
          name="text"
          placeholder="Enter Your Phone Number"
        />{" "}
        <br />
        <input type="password" name="text" placeholder="Enter Your Password" />
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default App;
