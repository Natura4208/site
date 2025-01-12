import LaunchWithBedrock from "./LaunchBedrock";
import LaunchWithLunarClient from "./LaunchLunarClient";

export default function QuickPlayList() {
   return (
      <div style={{ display: 'flex', gap: '1rem' }}>
         <LaunchWithLunarClient />
         <LaunchWithBedrock />
      </div>
   )
}