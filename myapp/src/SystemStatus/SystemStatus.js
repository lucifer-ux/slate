import {React, useState, useEffect} from 'react'
import { BatteryIcon, WifiIcon } from 'lucide-react';

const SystemStatus = () => {
    const [batteryInfo, setBatteryInfo] = useState(null);

    useEffect(() => {
      const fetchBatteryInfo = async () => {
        try {
          const info = await window.batteryAPI.getBatteryInfo();
          console.log(info)
          setBatteryInfo(info);
        } catch (error) {
          console.error("Error fetching battery info:", error);
        }
      };
  
      fetchBatteryInfo();
    }, []);
  
    return (
      <div>
        {batteryInfo ? (
          <div>
            <p>Battery Level: {batteryInfo.percent}%</p>
            <p>Charging: {batteryInfo.isCharging ? "Yes" : "No"}</p>
            <p>Time Remaining: {batteryInfo.timeRemaining} minutes</p>
          </div>
        ) : (
          <p>Loading battery info...</p>
        )}
      </div>
    );
}

export default SystemStatus