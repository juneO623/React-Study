import { useTitle } from "./useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 5000);
  return <div></div>;
};

export default App;
