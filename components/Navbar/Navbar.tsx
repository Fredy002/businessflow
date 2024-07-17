import { Input } from "@/components/ui/input"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { UserButton } from "@clerk/nextjs"
import { Menu, Search } from "lucide-react"

export function Navbar() {
    return (
        <div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">

            {/* Mobile */}
            <div className="block md:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <p>
                            Sidebar Routes
                        </p>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="relative w-[300px]">
                <Input placeholder="Search" className="rounded-lg" />
                <Search className="absolute top-2 right-2" strokeWidth={1} />
            </div>

            <div className="flex gap-x-2 items-center">
                <p>Toogle Theme</p>
                <UserButton />
            </div>
        </div>
    )
}