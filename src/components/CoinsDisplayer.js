import React, {Component} from 'react';
import coinImg from '../images/logo.png';

class CoinsDisplayer extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }


    render(){
        return (            
            <div id="currancy-container" className="currancy-container">           
                {this.props.coinsData.map(coin => 
                    <div key={coin.id} className="currancy-element">
                        <img src={coinImg} />
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
}
export default CoinsDisplayer;