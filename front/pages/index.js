import React from 'react';
import Link from 'next/link';
import AppLayout from "../components/AppLayout";
const Home = () =>{
    return (
        <>
            <AppLayout>
                <Link href="/about">about</Link>
                <div>Hello, jkyang</div>
            </AppLayout>
        </>
    )
}

export default Home;