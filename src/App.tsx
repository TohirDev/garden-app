import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./Routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
