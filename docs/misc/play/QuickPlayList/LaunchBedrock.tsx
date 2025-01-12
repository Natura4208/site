import { FaCube } from 'react-icons/fa';
import Styles from './LaunchBedrock.module.css';

export default function LaunchWithBedrock() {
   return (
      <a 
         className={Styles.launchButton} 
         href="minecraft:?addExternalServer=ChillBox 104|chillbox104.bedrock.minehut.gg:19132"
      >
         <FaCube />
         Save server in Bedrock Edition
      </a>
   )
}