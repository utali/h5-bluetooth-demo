import { useEffect } from "react";
// import Bluetooth from "@/utils/bluetooth";
import { Button } from "antd-mobile";

// const ble = new Bluetooth();

export default function HomePage() {

  const start = () => {
    uni.navigateTo('/pages/ble/index');
    postMessage('5678');
  }

  return (
    <div>
      <Button onClick={start}>θηθΏζ₯</Button>
    </div>
  );
}
