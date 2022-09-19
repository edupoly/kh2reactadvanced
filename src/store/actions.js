export function addProductToCart(product){
    return {type:'ADDTOCART',payload:product}
}

export function getAllProducts(){
    return  (dispatch)=>{
        dispatch({type:'TOGGLE_LOADER'})
        fetch("http://localhost:4000/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            dispatch({type:'TOGGLE_LOADER'})
            dispatch({type:'UPDATE_PRODUCTS',payload:data})
        })
    }
}