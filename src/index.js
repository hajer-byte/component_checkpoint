import reactDOM from "react-dom";
import react from "react";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Rootapp() {
  return (
    <react.Fragment>
      <App />
    </react.Fragment>
  );
}

const rootElement = document.getElementById("root");
reactDOM.render(<Rootapp />, rootElement);
