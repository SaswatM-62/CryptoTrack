import React from 'react'
import getSymbolFromCurrency from 'currency-symbol-map'
import './Coin.css'

const Coin = ( {name, price, symbol, marketcap, volume, image, priceChange, currency } ) => {
    return (
        <div className="cryptoCoin">
            <img src={image} alt={`${name}`} className="coinLogo"/>

            <div className="coinNameWrap">
                <h1 className="coinName">
                    {name}
                </h1>
                <p className="coinSymbol">
                    {symbol}
                </p>
            </div>
            
            <p className="coinPrice">
                {getSymbolFromCurrency(currency)} {price.toLocaleString()}
            </p>

            <p className="coinMarketcap">
                Market Cap: {getSymbolFromCurrency(currency)} {marketcap.toLocaleString()}
            </p>

            <p className="coinVolume">
                Volume (24H): {getSymbolFromCurrency(currency)} {volume.toLocaleString()}
            </p>

            {priceChange < 0 ? (
                <div className="priceContainerDOWN">
                    <i className="fas fa-angle-down fa-2x arrowDown"></i>
                    <p className="priceChange">{priceChange.toFixed(2)}%</p>
                </div>
            ) : (
                <div className="priceContainerUP">
                    <i className="fas fa-angle-up fa-2x arrowUp"></i>
                    <p className="priceChange">{priceChange.toFixed(2)}%</p>
                </div>
            )  }
        </div>
    );
};

export default Coin
