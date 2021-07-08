export default function economicSocket() {


    var ws = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

    ws.onmessage = function (event) {
        try {
            if (event.topic && event.topic === 'keepalive') {
                return
            }
            const aux = JSON.parse(event.data)
            const {price, dt} = aux
            const obj = {
                EURUSDPrice: price,
                timeStamp: dt,
            }
        } catch (err) {
            console.log(err);
        }
    };

    ws.onopen = function () {
        console.log('Socket is Open!');
        //subscripe to a topic:
        var topic = 'calendar';
        ws.send('{"topic": "subscribe", "to": "' + topic + '"}');
        ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
    };
}