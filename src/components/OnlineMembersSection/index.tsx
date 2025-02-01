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
            <div className="absolute flex flex-row text-white top-4 left-4 md:top-5 md:left-6 items-center gap-3">
               <img src={siteConfig.favicon} className="rounded-lg h-14" />
               <div className="flex flex-col w-full gap-0">
                  <p className="text-lg font-bold mb-0">
                     {siteConfig.title}
                  </p>

                  {data.status === "online" && (
                     <p className="text-[var(--custom-muted)] mb-0">
                        {data.online} players online
                     </p>
                  )}
               </div>
            </div>
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