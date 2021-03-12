
// utils/publicUrl
// this is used in react production apparently?

let publicUrl = assetPath => {
    return process.env.PUBLIC_URL+assetPath;
}

export default publicUrl;