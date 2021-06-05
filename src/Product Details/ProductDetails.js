import React from 'react'
import classes from "./ProductDetails.module.css";

export const ProductDetails = (props) => {
    const coloroption = props.data.colorOptions.map((item , pos) => {
        const classarr = [classes.productImage]
        if(pos === props.currentpos){
            classarr.push(classes.selectedProduct)
        }
        return(
            <img key ={pos} className={classarr.join(' ')} src= {item.imageUrl} alt={item.styleName} 
            onClick = {() => props.onClickImage(pos)}/>
        )
    })
    const featurelist = props.data.featureList.map((item,pos) => {
        const featarr = [classes.FeatureItem]
        if(props.show === pos){
            featarr.push(classes.selectedItem)
        }
        return (
            <button key={pos} className={featarr.join(' ')} onClick = {() => props.onFeature(pos)}>{item}</button> 
        )
    })
    return (
        <div>
            <h1 className={classes.productTitle}>{props.data.title}</h1>
            <p className={classes.productDescription}>{props.data.description}</p>

            <h3 className={classes.sectionHeading}>Select Color</h3>
            <div>
                {coloroption}
                {/* <img className={[classes.productImage, classes.selectedProduct].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Strap" />
                <img className={classes.productImage} src="https://imgur.com/PTgQlim.png" alt="Red Strap" />
                <img className={classes.productImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Strap" />
                <img className={classes.productImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Strap" /> */}
            </div>
            <h3 className={classes.sectionHeading}>Features</h3>
            <div>
                {featurelist}
                {/* <button className={[classes.FeatureItem, classes.selectedItem].join(' ')}>Time</button>
                <button className={classes.FeatureItem}>Heart Rate</button> */}
            </div>
            <button className={classes.primaryBtn}>Buy Now</button>
        </div>
    )
}
