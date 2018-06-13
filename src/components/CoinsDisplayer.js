import React from 'react';
import coinImg from '../images/logo.png';

const CoinsDisplayer = props =>{

    return (            
        <div id="currancy-container" className="currancy-container">           
            {props.coinsData.map(coin => 
                <div key={coin.id} className="currancy-element">
                    <img src={coinImg} alt = {coin.name}/>
                    <div className="nameDiv">{coin.name}</div>
                    <div><span className="label">Rank: </span><span>{coin.rank}</span></div>
                    <div><span className="label">Symbol: </span><span>{coin.symbol}</span></div>
                    <div><span className="label">Price-USD: </span><span>{coin.price_usd}</span></div>
                    <div><span className="label">Price-BTC: </span><span>{coin.price_btc}</span></div>
                    <div><span className="label">Change-1h(%): </span><span>{coin.percent_change_1h}</span></div>
                    <div><span className="label">Change-24h(%): </span><span>{coin.percent_change_24h}</span></div>
                    <div><span className="label">Change-7d(%): </span><span>{coin.percent_change_7d}</span></div>
                 </div>                
            )} 
        </div> 
    );
}
export default CoinsDisplayer;