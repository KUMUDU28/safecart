import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

import { productListReducer,productDetailsReducer } from './reducers/productReducers.js'
import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer,
    userUpdateProfileReducer,
} from './reducers/userReducers.js'



import { cartReducer } from './reducers/cartReducers'

import { orderCreateReducer } from './reducers/orderReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,

    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    
    
    cart:cartReducer,

    orderCreate: orderCreateReducer,

})
const cartItemsFromStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
:[]


const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
: {}

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    cart: {
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage,
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store