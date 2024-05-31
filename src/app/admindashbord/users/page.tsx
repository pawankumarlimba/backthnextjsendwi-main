"use client"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
    _id: string;
    username: string;
    email: string;
}

function Page() {
    const [allUsers, setAllUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post<{ users: User[] }>('/api/admin/userlist');
                setAllUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white min-h-screen min-w-screen">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-10">
                {allUsers.map((user, index) => (
                    <div className="flex justify-center" key={index}>
                        <BackgroundGradient className="rounded-[22px] w-[80vw] sm:w-[25vw] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <div>
                                <h2 className="text-xl font-bold mb-1 truncate w-[150px]">{user.username}</h2>
                                <p className="text-gray-600 truncate w-[150px]">{user.email}</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
