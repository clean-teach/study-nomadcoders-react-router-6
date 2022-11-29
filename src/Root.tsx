import {Outlet} from 'react-router-dom';
import Header from "./components/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet context={{darkmode: true}} />
    </>
  );
}

export default Root;
