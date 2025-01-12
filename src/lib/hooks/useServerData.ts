import { atom, useAtom, getDefaultStore } from "jotai";

const SERVER_NAME = "chillbox104";
const REFRESH_DELAY = 1000 * 20; // Update the data every 20 seconds

export type ServerStatus = "online" | "offline" | "loading";

export type ServerData = {
   online: number;
   max: number;
   status: ServerStatus;
};

const data = atom<ServerData>({
   online: 0,
   max: 0,
   status: "loading",
});

export default function useServerData() {
   return useAtom(data);
}

function update(ignoreFocusCheck = false) {
   fetch(`https://api.minehut.com/server/${SERVER_NAME}?byName=true`)
   .then((res) => res.json())
   .then((json) => {
      if (document.visibilityState !== "visible" && !ignoreFocusCheck) return;
      getDefaultStore().set(data, {
         online: json.server.playerCount,
         max: json.server.maxPlayers,
         status: json.server.online ? "online" : "offline",
      });
   });
}
update(true);
setInterval(update, REFRESH_DELAY);