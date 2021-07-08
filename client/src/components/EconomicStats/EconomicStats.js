import React, {useState} from 'react'
import {
    useDispatch
} from "react-redux";
import {
    EURUSDActions
} from '../../actions/EURUSDActions';



export default function EconomicStats() {
    const [econStats, seteconStats] = useState({
        EURUSDPrice: 'loading...',
        timeStamp: 'loading...',
    })
    const dispatch = useDispatch();

    var ws = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

    ws.onmessage = function (event) {
        try {
            if (event.topic && event.topic === 'keepalive') {
                return
            }
            const aux = JSON.parse(event.data)
            const {
                price,
                dt
            } = aux
            const formattedDt = new Date(dt).toString()
            if(formattedDt === 'Invalid Date') return
            const obj = {
                EURUSDPrice: price,
                timeStamp: formattedDt,
            }
            seteconStats(obj);
            dispatch(EURUSDActions(obj))
        } catch (err) {
            console.log(err);
        }
    };

    ws.onopen = function () {
        //console.log('Socket is Open!');
        //subscripe to a topic:
        var topic = 'calendar';
        ws.send('{"topic": "subscribe", "to": "' + topic + '"}');
        ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
    };

    return (
        <div className='stocks-box'>
            < img className='eurousd-header' src = "https://dubaotiente.com/images/upload/tuandau/11132020/c8546285d7cb09a518ada8355a57a788_l.jpg" alt='euro header' / >
                <h5>EURO-USD Change Rate:</h5>
                <h5>{econStats.EURUSDPrice}</h5>
                <p className='small-sign'>Last Updated: {econStats.timeStamp}</p>
        </div>
    )
}