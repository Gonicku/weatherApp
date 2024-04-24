import React from 'react'
import { Link } from 'react-router-dom'

function TopMenu() {
    const pages = [
        {
            id: 0,
            title: 'LOGO'
        },
        {
            id: 1,
            title: 'Weather'
        },
        {
            id: 2,
            title: 'Mapping'
        }
    ]
    return (
        <div className="flex items-center justify-around my-6">
            <div className='w-10'>
                <Link id="Logo" className="font-medium" to="/">
                    <img src={require("../logo.jpg")} alt="WEAT"></img>
                </Link>
            </div>
            <Link id="Weather" className="font-medium" to='/'>Weather</Link>
            <Link id="Mapping" className="font-medium" to='/Mapping'>Mapping</Link>
        </div>
    )
}

export default TopMenu