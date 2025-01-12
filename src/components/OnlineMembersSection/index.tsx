import useServerData from "@site/src/lib/hooks/useServerData"
import PlayButton from "../PlayButton";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Styles from "./styles.module.css";

export default function OnlineMembersSection() {
   const [data, _setData] = useServerData();
   const { siteConfig } = useDocusaurusContext();

   return (
      <section className="flex justify-center mb-10 mt-2 w-full">
         <a 
            href={`${siteConfig.baseUrl}docs/play`}
            className={"w-[93%] bg-cover bg-center relative rounded-xl h-[70vh] overflow-hidden " + Styles.bgOverlay}
         >
            <div className="absolute inset-0 flex flex-col justify-end">
               <div className="flex flex-row justify-between p-6 px-9">
                     <div className="flex items-center text-white">
                        {data.status === "online" ? (
                           <h3 className="m-0 p-0">Join {data.online} other players today:</h3>
                        ) : (
                           <h3 className="m-0 p-0">Join today!</h3>
                        )}
                     </div>

                     <PlayButton showOnlinePlayers={false} />
               </div>
            </div>
         </a>
      </section>
   )
}