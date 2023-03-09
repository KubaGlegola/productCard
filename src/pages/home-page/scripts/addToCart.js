const addToCart = (pickedColor) => {
    let color = '';
    switch (pickedColor){
        case "color2":
            color = "różowym";
            break;
        case "color3":
            color = "żółym";
            break;
        case "color4":
            color = "szarym";
            break;    
        default:
            color = "łososiowym";
            break;        
    }

    alert(`Portfel w kolorze ${color} został dodany do koszyka`);
}

export default addToCart;