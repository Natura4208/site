import cn from "@site/src/lib/cn";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";

export type CopyButtonProps = {
   text: string,
   className?: string,
}

export default function CopyButton({
   text,
   className
} : CopyButtonProps) {
   const [success, setSuccess] = useState<boolean>(false);

   const onClick = () => {
      navigator.clipboard.writeText(text);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1500);
   };

   return (
      <button className={cn("p-3 rounded-lg m-0 items-center text-center bg-transparent hover:bg-white/20 border-none cursor-pointer", className)} onClick={() => onClick()}>
         {success ? (
            <FaCheck />
         ) : (
            <FaCopy />
         )}
      </button>
   );
}