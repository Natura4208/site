import useServerData from "@site/src/lib/hooks/useServerData";
import GameIcon from "../OnlineMembersSection/GameIcon";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export type PlayButtonProps = {
   showOnlinePlayers?: boolean
};

export default function PlayButton({
   showOnlinePlayers = true
} : PlayButtonProps) {
   const [data, _setData] = useServerData();
   const { siteConfig } = useDocusaurusContext()
   const statusString = data.status === "online" ? `(${data.online}/${data.max})` : `(${data.status})`;

   return (
      <a href={`${siteConfig.baseUrl}docs/play`} className="button p-0">
         <button className="px-4 py-2 button button--secondary button--lg bg-yellow-500 border-none flex items-center gap-2 justify-center">
            <GameIcon className="w-6 h-6" />
            Play {showOnlinePlayers && statusString}
         </button>
      </a>
   )
}