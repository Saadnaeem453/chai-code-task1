import React from 'react'
import { Outlet } from 'react-router-dom'
import Icon from "../src/assets/ChaiAurIcon.svg"
const Layout: React.FC = () => {
    return (
        <div className='relative min-h-screen'>
            <Outlet />
            <div className='fixed bottom-8 right-8'>
                <img src={Icon} alt="Icon" />
            </div>

        </div>
    )
}

export default Layout
