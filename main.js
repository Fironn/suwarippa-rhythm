// This is a JavaScript file

SERVICE_UUID="00002a00-0000-1000-8000-00805f9b34fb";
CHARACTERISTIC_UUID="00002a01-0000-1000-8000-00805f9b34fb";

  // １．BLEデバイスをスキャンする
// scanBle()=function(){
    navigator.bluetooth.requestDevice({
        acceptAllDevices: false,
        filters:[
            {services:[SERVICE_UUID]},
            {namePrefix:"BLE113 Brick"}
        ],
        optionalServices: [SERVICE_UUID]

    }).then(device => {
        // ２．デバイスに接続
        console.log(device)
        console.log("DEVICE!")
        return device.gatt.connect()

    }).then(server =>{
        // ３-1．「Service」を指定
        console.log(server)
        console.log("SERVER!")
        return server.getPrimaryService(SERVICE_UUID)
        
    }) .then(service => {
        // Characteristic取得
        console.log(service)
        console.log("SERVICE!")
        return service.getCharacteristic(CHARACTERISTIC_UUID)
    
    }).then(characteristic  => {
        if (characteristic === null) {
            console.log("Unknown sensor location.")
            return Promise.resolve()
        }

        console.log(characteristic)
        // characteristic.writeValue('OK,OK!');
        //４．受信準備を行う
        return characteristic.readValue()
    }).then(value => {
        console.log(value.getUint8(0))
    }).catch(error => {
        console.log(error)
        console.log(error.name)
        console.log(error.massage)
    });
// };