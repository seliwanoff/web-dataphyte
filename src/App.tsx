import { BrowserRouter as Router } from "react-router-dom";

import RouteWrapper from "./route/route";
import { AxiosProvider } from "./utills/AxiosContext";
import { ReactNotifications } from "react-notifications-component";

const App: React.FC = () => {
  return (
    <Router>
      <AxiosProvider>
        <ReactNotifications />

        <RouteWrapper />
      </AxiosProvider>
    </Router>
  );
};

export default App;
