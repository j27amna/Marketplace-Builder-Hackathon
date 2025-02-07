import { Products } from "../../../types/products";

export const addToCart = (product: Products) => {
    const cart : Products[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProduct = cart.findIndex((item) => item._id === product._id);

    if (existingProduct > -1) {
        cart[existingProduct].inventory += 1;
    } else {
        cart.push({...product, inventory: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (product: Products) => {
    let cart : Products[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== product._id);

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const updateCart = (productID : string, quantity : number) => {
    const cart : Products[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item) => item._id === productID);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export const getCartItems = () : Products[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}