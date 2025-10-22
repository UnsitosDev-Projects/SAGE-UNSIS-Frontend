import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ()=>{
    return(
        <>
        <main>
            {/* Outlet renderizara los Link */}
            <Outlet/>
        </main>
        </>
    );
}

export default Layout;