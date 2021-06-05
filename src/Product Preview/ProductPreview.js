import React from 'react'
import classes from "./ProductPreview.module.css";

export const ProductPreview = (props) => {
    const hours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
    const minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
    return (
        <div className={classes.productPreview}>
            <img src={props.currentimg} alt="Product 1" />

            {
                props.currfeature === 1 ?
                    <div className={classes.heart}>
                        <i className="fas fa-heartbeat"></i>
                        <p>{78}</p>
                    </div>
                    :
                    <div>
                        <p className={classes.feature}>{hours}:{minutes}</p>
                    </div>
            }
        </div>
    )
}
