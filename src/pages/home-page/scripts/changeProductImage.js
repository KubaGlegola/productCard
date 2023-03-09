const changeProductImage = (pickedColor, imageHandler) => {
    let imageUrl = "";
    switch (pickedColor){
        case "color2":
            imageUrl = '/images/image2.png';
            break;
        case "color3":
            imageUrl = '/images/image3.png';
            break;
        case "color4":
            imageUrl = '/images/image4.png';
            break;    
        default:
            imageUrl = '/images/image1.png';
            break;        
    }

    imageHandler.src = imageUrl;
}

export default changeProductImage;