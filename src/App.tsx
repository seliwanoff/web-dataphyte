import { BrowserRouter as Router } from "react-router-dom";

import RouteWrapper from "./route/route";
import { AxiosProvider } from "./utills/AxiosContext";

const App: React.FC = () => {
  return (
    <Router>
      <AxiosProvider>
        <RouteWrapper />
      </AxiosProvider>
    </Router>
  );
};

export default App;
