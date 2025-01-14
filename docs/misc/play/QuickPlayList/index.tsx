import LaunchWithBedrock from "./LaunchBedrock";
import LaunchWithLunarClient from "./LaunchLunarClient";

export default function QuickPlayList() {
   return (
      <div style={{ 
         display: 'flex', 
         gap: '1rem', 
         flexDirection: window.innerWidth <= 768 ? 'column' : 'row', 
         width: window.innerWidth <= 768 ? '100%' : 'auto' 
      }}>
         <LaunchWithLunarClient />
         <LaunchWithBedrock />
      </div>
   )
}