import Header from "./components/Header";
// import Error from "./Error";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback";
import TextCustom from "./components/TextCustom";

function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary FallbackComponent={Fallback}>
        <TextCustom />
      </ErrorBoundary>
    </div>
  );
}

export default App;
