import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [rate, setRate] = useState(0);
  const [converted, setConverted] = useState(0);

  const fetchRate = async (base) => {
    try {
      const res = await fetch(`http://www.floatrates.com/daily/${base}.json`);
      const data = await res.json();
      const target = data[to];
      setRate(target?.rate || 0);
    } catch (err) {
      console.error("Error fetching rate:", err);
    }
  };

  useEffect(() => {
    fetchRate(from);
  }, [from, to]);

  useEffect(() => {
    setConverted((amount * rate).toFixed(2));
  }, [amount, rate]);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1 className="title">💱 Currency Converter</h1>

        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
          />

          <select value={from} onChange={(e) => setFrom(e.target.value)} className="select">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
            <option value="gbp">GBP</option>
            <option value="jpy">JPY</option>
          </select>

          <button className="swap-btn" onClick={handleSwap}>⇄</button>

          <select value={to} onChange={(e) => setTo(e.target.value)} className="select">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
            <option value="gbp">GBP</option>
            <option value="jpy">JPY</option>
          </select>
        </div>

        <div className="result">
          <h2>
            {amount} {from.toUpperCase()} = {converted} {to.toUpperCase()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
