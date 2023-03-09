const getPickedColor = () => {
    const pickedColor = document.querySelector('input[name="colorPick"]:checked').value;

    return pickedColor;
}

export default getPickedColor;