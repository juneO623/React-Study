import { useInput } from "./useInput";

const App = () => {
  // const maxLen = (value) => value <= 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

// ===================

// class AppUgly extends React.Component {
//   state = {
//     item: 1,
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>IncrementItem</button>
//         <button onClick={this.decrementItem}>DecrementItem</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1,
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item - 1,
//       };
//     });
//   };
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AppUgly />, rootElement);

export default App;
