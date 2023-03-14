const changeProductImage = (pickedColor, imageHandler) => {
    let imageName = "";
    switch (pickedColor){
        case "color2":
            imageName = 'image2.png';
            break;
        case "color3":
            imageName = 'image3.png';
            break;
        case "color4":
            imageName = 'image4.png';
            break;    
        default:
            imageName = 'image1.png';
            break;        
    }

    if(window.innerWidth < 600){
        imageHandler.src = "/images/mobile-" + imageName;
    }else{
        imageHandler.src = '/images/' + imageName;
    }
    
    
}

export default changeProductImage;