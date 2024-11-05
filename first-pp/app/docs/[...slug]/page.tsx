"use client";
import { usePathname } from "next/navigation";
export default function CatchUpAllSegment() {
    const pathname = usePathname();

    return (
        <>Catch all {pathname}</>
    );
}
