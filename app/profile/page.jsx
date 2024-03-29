'use client';

import {useRouter} from 'next/navigation';
import Profile from "@components/Profile";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";

const MyProfile = () => {
    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPosts(data);
        }

        if(session?.user.id) fetchPosts();
    }, [session]);
    const handleEdit = () => {

    }
    const handleDelete = async () => {

    }
    return (
        <Profile
            name='My'
            desc='Welcome to your personalized profile page'
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default MyProfile;