import axios from 'axios';
import {  useEffect, useState } from 'react';

import './App.css';

import Coin from "./components/Coin";

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("inr");
  // const [theme, setTheme] = useState("dark");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error))
  }, [ currency ])


  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  }

  const filteredCoins = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="brand">
          <i className="fab fa-bitcoin"></i>CryptoTrack
        </h1>
        <form>
            <input 
              className="inputField" 
              type="text"
              onChange={handleChange} 
              placeholder="Search"
            />
        </form>
        <form>
          <select className="currencyField" onChange={handleCurrencyChange}>
            <option value="aed">AED - United Arab Emirated Dirham</option>
            <option value="ars">ARS - Argentine Peso</option>
            <option value="aud">AUD - Australian Dollar</option>
            <option value="bdt">BDT - Bangladeshi Taka</option>
            <option value="bhd">BHD - Bahraini Dinar</option>
            <option value="bmd">BMD - Bermudan Dollar</option>
            <option value="brl">BRL - Reais</option>
            <option value="btc">BTC - Bitcoin</option>
            <option value="cad">CAD - Canadian Dollar</option>
            <option value="chf">CHF - Swiss Franc</option>
            <option value="clp">CLP - Chilean Peso</option>
            <option value="cny">CNY - Chinese Yuan</option>
            <option value="czk">CZK - Czech Koruna</option>
            <option value="dkk">DKK - Danish Krone</option>
            <option value="eth">ETH - Ethereum</option>
            <option value="eur">EUR - Euro</option>
            <option value="gbp">GBP - British Pound Sterling</option>
            <option value="hkd">HKD - Hong Kong Dollar</option>
            <option value="huf">HUF - Hungarian Forint</option>
            <option value="idr">IDR - Indonesian Rupiah</option>
            <option value="ils">ILS - Israeli New Shekel</option>
            <option value="inr" selected >INR - Indian Rupee</option>
            <option value="jpy">JPY - Japanese Yen</option>
            <option value="krw">KRW - South Korean Won</option>
            <option value="kwd">KWD - Kuwaiti Dinar</option>
            <option value="lkr">LKR - Sri Lankan Rupee</option>
            <option value="ltc">LTC - Litecoin</option>
            <option value="mmk">MMK - Myanmar Kyat</option>
            <option value="mxn">MXN - Mexican Peso</option>
            <option value="myr">MYR - Malaysian Ringgit</option>
            <option value="ngn">NGN - Nigerain Naira</option>
            <option value="nok">NOK - Norway Kroner</option>
            <option value="nzd">NZD - New Zealand Dollar</option>
            <option value="php">PHP - Philippine Peso</option>
            <option value="pkr">PKR - Pakistani Rupee</option>
            <option value="pln">PLN - Polish Zloty</option>
            <option value="rub">RUB - Russian Ruble</option>
            <option value="sar">SAR - Saudi Riyal</option>
            <option value="sek">SEK - Swedish Krona</option>
            <option value="sgd">SGD - Singaporean Dollar</option>
            <option value="thb">THB - Thai Bhat</option>
            <option value="twd">TWD - Taiwan Dollar</option>
            <option value="uah">UAH - Ukrainian Hryvnia</option>
            <option value="vef">VEF - Venezuelan Bolívar</option>
            <option value="vnd">VND - Vietnamese đồng</option>
            <option value="zar">ZAR - South African Rand</option>
          </select>
        </form>
      </div>

      <div className="coinsContainer">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              currency={currency}
            />
          );
        })}
      </div>
      <div className="footer">Favicon made by <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
