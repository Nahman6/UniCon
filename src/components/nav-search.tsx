import React from "react";
import { Input } from "./ui/input";
import { CommandIcon } from "lucide-react";

export default function NavSearch() {
    return (
        <div className="w-full relative drop-shadow-xl">
            <Input
                type="text"
                placeholder="Search"
                className="w-full px-5 py-3 pr-11 border rounded-2xl placeholder:text-md bg-main text-text "
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <CommandIcon
                    width={16}
                    height={16}
                    className="dark:stroke-black"
                />
                <span className="text-md">K</span>{" "}
            </div>
        </div>
    );
}
