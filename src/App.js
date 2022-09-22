import React from 'react'
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';
import './Navbar.css';
import Navbar from './components/Navbar';



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
      sortValue: "priceHighToLow",
      isCartOpen: false,
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
    this.setState({cart: [...this.state.cart, product]});
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
      const sortedLowToHigh = this.state.products.slice(0).sort((a, b) => a.price - b.price)
      this.setState({productsToShow: sortedLowToHigh})
    }else if (this.state.sortValue === "priceLowToHigh"){
      const sortedHighToLow = this.state.products.slice(0).sort((a, b) => b.price - a.price)
      this.setState({productsToShow: sortedHighToLow})

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


// const uniqueProducts = [...new Set(this.state.cart)];
const indexOfProductCart = this.state.cart.indexOf(product)
this.state.cart.splice(indexOfProductCart, 1)
this.setState({cart: this.state.cart})

const uniqueProducts = [...new Set(this.state.cart)];

this.setState({cartToShow: uniqueProducts})


}

cartOpener = () => {
  this.setState({ isCartOpen: !this.state.isCartOpen })
// console.log("clocked")
}
  

  render() {
    return (
      <>
      <Navbar 
      cart={this.state.cart}
      cartOpener={()=> this.cartOpener()}
      />
      <h5 id='menu'>/</h5>
      <h2 className='title' >Menu</h2>
      <div className='container'>
         <div className='btn-left'>
         <button className='filter-btn' onClick={() => this.allProducts()}>All</button> 
        {
        this.state.allCategories.map(category => <button className='filter-btn' onClick={() => this.mealfilter(category)} key={category}>{category}</button>)
        }
        </div>
        <div className="btn-right">
             <input placeholder='search some dish' onKeyDown={(e) =>this.searchInput(e.target.value) }/>
              <select value={this.state.sortValue} onChange={(e)=> this.sort(e.target.value)}>
                {/* <option value="none">None</option> */}
                <option value="priceHighToLow">Price High to Low</option>
                <option value="priceLowToHigh">Price Low To High</option>
             </select>
        </div>

      </div>
    

            

      
       
        
        <div className='menu'>
          {
            this.state.productsToShow.map(product => <Product key={product.id} data={product} addToCart={this.addToCart}/>)

          }
       </div>


          {this.state.isCartOpen &&

            <Cart 
            cart={this.state.cart}
            cartToShow={this.state.cartToShow}
            removeAll={this.removeAllFromCart}
            removeSingle={this.removeSingleFromCart}
            addToCart={this.addToCart}
            minusOne={this.minusOne}
            isCartOpen={this.state.isCartOpen}
            
     
            />

          
          }
     
      </>
    )
  }
}

export default App