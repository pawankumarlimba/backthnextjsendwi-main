"use client"
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar2 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem("isLoggedIn");
            if (storedValue) {
                setIsLoggedIn(JSON.parse(storedValue));
            }
        }
    }, []);

    const handleChangeState = useCallback((newValue: boolean) => {
        setIsLoggedIn(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem("isLoggedIn", JSON.stringify(newValue));
        }
    }, []);

    const handleLogout = async () => {
        try {
            const response = await axios.get('/api/user/logout');
            if (response.data.success === true) {
                handleChangeState(false);
                toast.success("Logged out successfully");
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            toast.error("Internal error");
            console.error(error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Button className="bg-black/[0.85] text-1.5xl ml-[5vw] border-none pl-[5vw]" variant="outline">=</Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {!isLoggedIn && (
                        <>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <Link href={"/signup"}>
                                    <span>Signup</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <Link href={"/login"}>
                                    <span>Login</span>
                                </Link>
                            </DropdownMenuItem>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <Link href={"/orders"}>
                                    <span>Order</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <button onClick={handleLogout}><span>Logout</span></button>
                            </DropdownMenuItem>
                        </>
                    )}
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href={"/about"}>
                            <span>About</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Navbar2;
