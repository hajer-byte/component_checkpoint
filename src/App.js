import ProfilPhoto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function App() {
  return (
    <div className="body">
      <MDBRow className="row">
        <MDBCol md="5">
          <ProfilPhoto />
        </MDBCol>
        <MDBCol md="5" className="col2">
          <FullName />
          <br />
          <Address />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
export default App;
