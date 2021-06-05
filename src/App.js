import classes from './App.module.css';
import { ProductPreview } from './Product Preview/ProductPreview';
import { ProductDetails } from './Product Details/ProductDetails';
import { Topbar } from './Topbar/Topbar';
import React, { Component } from 'react'
import ProductData from './ProductData';

class App extends Component {
  state  = {
    productdata : ProductData,
    currentpos : 0,
    currfeature : 0
  }
  onClickImage = (pos) => {
    this.setState({currentpos : pos})
  }
  onFeature = (pos) =>{
    this.setState({currfeature: pos})
  }
  render() {  
    return (
      <div className="App">
        <Topbar />
        <div className={classes.mainContainer}>
          <div className={classes.productPreview}>
            <ProductPreview currentimg = {this.state.productdata.colorOptions[this.state.currentpos].imageUrl} 
            currfeature = {this.state.currfeature} />
          </div>
          <div className={classes.productData}>
            <ProductDetails data = {this.state.productdata} onClickImage = {this.onClickImage} 
            currentpos = {this.state.currentpos} onFeature = {this.onFeature} show = {this.state.currfeature}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

