import { useHover } from "./useHover";

const App = () => {
  const sayHello = () => console.log("Hellooooo");
  const title = useHover(sayHello);
  return (
    <div>
      <h1 ref={title}>하이하이</h1>
    </div>
  );
};

export default App;
