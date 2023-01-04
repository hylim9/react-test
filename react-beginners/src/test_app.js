import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("destroyed :(");
  // }
  // function hiFn() {
  //   console.log("created :)!");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  useEffect(() => {
    console.log("created :)!");
    // clean up function!
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("CALL THE API....");
//   }, []);
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log("Search for..", keyword);
//     }
//   }, [keyword]);
//   useEffect(() => {
//     console.log("only counter changes");
//   }, [counter]);
//   useEffect(() => {
//     console.log("keyword & counter changes");
//   }, [keyword, counter]);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here.."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click</button>
//     </div>
//   );
// }

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      // kill the function
      return;
    }
    // console.log(toDo);
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My TODOs ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
