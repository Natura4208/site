import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import './ServerOfflineWarning.css';
import useServerData from "@site/src/lib/hooks/useServerData";

export default function ServerOfflineWarning() {
   const [data, _setData] = useServerData();
   if (data.status !== "offline") return;

   return (
      <div className="server-offline-warning">
         <ExclamationTriangleIcon className="icon" />
         <p className="text">
            The server is offline right now! Follow <a href="#the-server-is-offline-what-do-i-do">this instructions</a> to start it up.
         </p>
      </div>
   );
}