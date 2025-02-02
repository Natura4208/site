import cn from "@site/src/lib/cn";
import { createElement } from "react";

export type Tags = Record<string, string | React.FC>;

export type BannerProps = {
   src: string;
   title: string;
   tags?: Tags;
   className?: string;
   imageClassName?: string;
}

export default function Banner({
   src,
   className,
   title,
   tags,
   imageClassName,
} : BannerProps) {
   return (
      <div className={cn("p-4 bg-[var(--custom-card)] flex flex-col gap-x-4 md:flex-row rounded-2xl shadow-lg", className)}>
         <div>
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            {tags && (
               <div className="flex flex-wrap">
                  <div className="flex flex-col gap-2">
                     {Object.entries(tags).map(([name, value]) => (
                        <span key={name} className="text-base">
                           <span className="text-[var(--custom-text)] font-semibold">{name}</span>: <span className="text-[var(--custom-muted)]">{typeof(value) === "string" ? <>{value}</> : createElement(value)}</span>
                        </span>
                     ))}
                  </div>
               </div>
            )}
         </div>
         <img alt="banner" src={src} className={cn("overflow-hidden rounded-2xl object-cover md:ml-auto w-[100%] mt-8 md:mt-0 md:w-[50%]", imageClassName)} />
      </div>
   );
}