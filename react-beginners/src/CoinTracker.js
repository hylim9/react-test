import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //   const [cost, setCost] = useState(1);
  //   const [need, setNeed] = useState(1);
  //   const [symbol, setSymbol] = useState("");
  //   const onChange = (event) => {
  //     console.log(event.target.title);
  //     setCost(event.target.value);
  //     setSymbol(event.target.title);
  //     setNeed(1);
  //   };
  //   const handleInput = (event) => {
  //     setNeed(event.target.value);
  //   };
  const [cost, setCost] = useState(1);
  const [usd, setUsd] = useState(1);
  const onChange = (event) => {
    // console.log(event);
    setCost(event.target.value);
    setUsd(1);
  };
  const dollarChange = (event) => {
    setUsd(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    // <div>
    //   <h1>The coins!{loading ? "" : `Here are..${coins.length} coins`}</h1>
    //   {loading ? (
    //     <strong>loading...</strong>
    //   ) : (
    //     <select onChange={onChange}>
    //       <option>Select Coin!</option>
    //       {coins.map((coin, index) => (
    //         <option
    //           key={index}
    //           value={coin.quotes.USD.price}
    //           id={coin.symbol}
    //           title={coin.symbol}
    //         >
    //           {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
    //         </option>
    //       ))}
    //     </select>
    //   )}
    //   <h2>Please enter the amount</h2>
    //   <div>
    //     <input
    //       type="number"
    //       value={need}
    //       onChange={handleInput}
    //       placeholder="dollor"
    //     />
    //     $
    //   </div>
    //   <h2>
    //     You can get {need / cost} {symbol}
    //   </h2>
    // </div>
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>"Loading"</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin!</option>
          {coins.map((item, index) => (
            <option key={index} value={item.quotes.USD.price}>
              {item.name} ({item.symbol}): {item.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      {/* <strong>{cost}</strong> */}
      <h2>USD to Selected Coin</h2>
      <div>
        $
        <input
          type="number"
          value={usd}
          onChange={dollarChange}
          placeholder="Please enter USD"
        />
      </div>

      <strong>{usd / cost}</strong>
    </div>
  );
}
export default App;
