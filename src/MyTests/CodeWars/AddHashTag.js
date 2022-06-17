
function generateHashtag(str) {
    return str.split(' ').join('').length>=140||str.trim() === ""
        ?
        false
        :
        `#${str.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`
}