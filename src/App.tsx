import { BrowserRouter as Router } from "react-router-dom";

import RouteWrapper from "./route/route";

const App: React.FC = () => {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
};

export default App;
