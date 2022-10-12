import React from "react";
import { Dialog } from 'antd-mobile';

const Scanner = () => {
  const scan = () => {
    if (window.ehopenapi) {
      window.ehopenapi.qrParse({
        scanFromAlbumEnable: false, // 是否支持扫描相册二维码，不传该参数统一按true处理
        success: function(res) {
            //扫描成功回调函数
            var qrData = res.qrData; //获取返回的二维码数据字符串
            var type = res.type; //1:条形码  2:二维码
            Dialog.alert({
              title: '扫描结果',
              content: qrData
            })
        },
        fail: function(res) {
            //扫描失败回调函数
            Dialog.alert({
              title: '扫描失败',
              content: JSON.stringify(res)
            })
        }
      })
    } else {
      Dialog.alert({
        title: '扫描失败',
        content: '当前环境非左邻APP，暂不支持该功能'
      })
    }
  }

  return <div>
    <br />
    <br />
    <a onClick={scan} style={{fontSize: 20}}>扫描二维码</a>
  </div>
}

export default Scanner;