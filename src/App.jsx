import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Layout>
          <Route exact path="/" render={() => <LandingPage />} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
