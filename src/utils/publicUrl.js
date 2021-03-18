
// utils/publicUrl

let publicUrl = assetPath => {
    return assetPath.startsWith('/') ? process.env.PUBLIC_URL + assetPath : assetPath;
}

export default publicUrl;