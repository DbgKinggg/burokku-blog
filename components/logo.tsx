"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

function Logo() {
    const { resolvedTheme } = useTheme()
    let imageSrc = resolvedTheme == 'dark' ? "/icon-full-white.svg" : "/icon-full-black.svg";

    return (
        <Link className="font-bold text-xl z-50"
            href="/"
        >
            <Image
                src={imageSrc}
                alt="Burokku"
                width={100}
                height={26}
            />
        </Link>
    );
}

export default Logo;