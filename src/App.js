import React from 'react'
import Product from './components/Product';
import Cart from './components/Cart';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:[],
      allCategories :[],
      productsToShow :[],
      cart: [],
      cartToShow: [],
      sortedProducts: [],
      sortValue: "",
    }
  }
  componentDidMount(){
    this.callApi()
  }

  
  componentDidUpdate(prevProps, prevState){
   
    // console.log(this.state.cart.length + "cart")
    // console.log(this.state.cartToShow.length + "toshow")
    // console.log(this.state.products)
  }

  callApi = () => {
    const URL ="https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json"

    fetch(URL)
    .then(res=> res.json())
    .then(data=>{
      const allCategories = [];
      for(let i= 0 ; i < data.length ; i++){
        if(!allCategories.includes(data[i].category)){
          allCategories.push(data[i].category)
        }
      }
      this.setState({products: [...data],allCategories:allCategories, productsToShow: [...data],})
      

    })
    .catch(err=> this.handleError(err, err.message))

  }

  generateID = () => {
    const id = Math.floor(Math.random() * 100000000);
    return id;
    
  }

  mealfilter = (category) => {
    const filteredArray = this.state.products.filter(el => {  
      return el.category === category
    });
    this.setState({productsToShow: filteredArray})
  }



  allProducts = () => {
    this.setState({productsToShow: this.state.products})
  }

  addToCart = (product) =>{
    this.setState({cart: [...this.state.cart, product]})
    if(this.state.cart.indexOf(product) < 0){
      this.setState({cartToShow: [...this.state.cartToShow, product]})
    }
  }

  searchInput = (value) => {
    const filteredArray = this.state.products.filter(el => {  
      return el.title.includes(value)
    });
    this.setState({productsToShow: filteredArray})
    

  }

  sort = (value) => {
    this.setState({sortValue: value});
    if (this.state.sortValue === "priceHighToLow"){
      const sortedLowToHigh = this.state.products.sort((a, b) => a.price - b.price)
      this.setState({productsToShow: sortedLowToHigh})
    }else if (this.state.sortValue === "priceLowToHigh"){
      const sortedHighToLow = this.state.products.sort((a, b) => b.price - a.price)
      this.setState({productsToShow: sortedHighToLow})

    }else if(this.state.sortValue === ""){
      this.setState({productsToShow: this.state.products})

    }
  
  
}

removeAllFromCart = () =>{
  this.setState({cartToShow: [] })
  this.setState({cart: [] })
}

removeSingleFromCart = (id) =>{
  const filteredArray1 = this.state.cartToShow.filter(el => {  
    return el.id !== id
  });
  const filteredArray2 = this.state.cart.filter(el => {  
    return el.id !== id
  });
  this.setState({cartToShow: filteredArray1})
  this.setState({cart: filteredArray2})
}


minusOne = (product) => {
const indexOfProductCart = this.state.cart.indexOf(product)
const indexOfProductCartToShow = this.state.cartToShow.indexOf(product)
const splicedArr1 = [...this.state.cart.slice(indexOfProductCart, 1)]
const splicedArr2 = [...this.state.cartToShow.slice(indexOfProductCartToShow, 1)]
console.log(splicedArr1)
console.log(splicedArr2)
// this.setState({cart: splicedArr1})
// this.setState({cartToShow: splicedArr2})



}
  

  render() {
    return (
      <>
      <h2>Menu</h2>
      
        <button onClick={() => this.allProducts()}>All</button> 
        {
        this.state.allCategories.map(category => <button onClick={() => this.mealfilter(category)} key={category}>{category}</button>)
        }
            <input placeholder='search some dish' onKeyDown={(e) =>this.searchInput(e.target.value) }/>
              <select value={this.state.sortValue} onChange={(e)=> this.sort(e.target.value)}>
                <option value="none">None</option>
                <option value="priceHighToLow">Price High to Low</option>
                <option value="priceLowToHigh">Price Low To High</option>
             </select>
        
        <div className='menu'>
          {
            this.state.productsToShow.map(product => <Product key={product.id} data={product} addToCart={this.addToCart}/>)

          }
       </div>

       <Cart 
       cart={this.state.cart}
       cartToShow={this.state.cartToShow}
       removeAll={this.removeAllFromCart}
       removeSingle={this.removeSingleFromCart}
       addToCart={this.addToCart}
       minusOne={this.minusOne}
       />
      </>
    )
  }
}

export default App