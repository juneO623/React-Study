import { useState } from "react";
import "./App.css";
import { useInput } from "./useInput";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
  };
};

const App = () => {
  const tabs = useTabs(0);
  return (
    <div className="App">
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
};

// const App = () => {
//   // const maxLen = (value) => value <= 10;
//   const maxLen = (value) => !value.includes("@");
//   const name = useInput("Mr.", maxLen);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {/* <input placeholder="Name" value={name.value} /> */}
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

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
