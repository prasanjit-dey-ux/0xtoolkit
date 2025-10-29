
import clsx from "clsx"
import { SVGLines, SVGTree } from "./svg-lines"

export default function Page() {
    return(
        <>
            <div className={clsx(
                "bg-white h-screen max-w-4xl mx-auto flex flex-col items-center justify-center px-60",
                "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",

            )}>
                <SVGLines />
            </div>

        </>
    )
}