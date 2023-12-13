function isImageFileExtension(fileName) {
    if (fileName === null || fileName === undefined) {
        return false
    }
    let fileDot = ['png','jpg','jpeg','gif','svg']
    let lastThreeChild = fileDot.map(fileDot => fileDot.slice(-3)) 
    return isImageFileExtension.includes(lastThreeChild.toLowerCase())
}