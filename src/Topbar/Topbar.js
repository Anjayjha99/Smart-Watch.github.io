import React from 'react'
import classes from "./Topbar.module.css";

export const Topbar = (props) => {
    return (
        <div>
            <nav className={classes.topbar}>
                <img src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="Amazon Logo" />
            </nav>
        </div>
    )
}
