class Bluetooth {
  start() {
    console.log("ble");
  }
  requestDevice() {
    console.log('navigator.bluetooth', navigator.bluetooth)
    navigator.bluetooth
      .requestDevice({ filters: [{ services: ["battery_service"] }] })
      .then((device) => {
        console.log("device", device.name);
      })
      .catch((error) => console.log("error", error));
  }
}

export default Bluetooth;
