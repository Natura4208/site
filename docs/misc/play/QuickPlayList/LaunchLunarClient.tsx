import { FaMoon } from 'react-icons/fa';
import Styles from './LaunchLunarClient.module.css';

export default function LaunchWithLunarClient() {
   return (
      <a 
         className={Styles.launchButton} 
         href="lunarclient://play?forceRecommendedVersion=1.21.4&serverAddress=chillbox104.minehut.gg&serverPort=25565"
      >
         <FaMoon />
         Launch In Lunar Client
      </a>
   )
}