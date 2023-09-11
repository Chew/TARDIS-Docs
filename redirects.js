const redirects = {
    // Use this file to make redirects from old wiki pages!
    // Do NOT make one for .html, as that is already handled by this script.
    // Side note, these do NOT work locally in develop, and must be tested on the live site or with a build (/build folder)
    // For example, we moved /chemistry-lab-products to /chemistry-lab/products, we can do that as follows:
    // '/chemistry-lab-products': '/chemistry-lab/products',

    /// CHEMISTRY LAB ///
    '/chemistry-lab-products': '/chemistry-lab/products',
    '/chemistry-lab-compounds': '/chemistry-lab/compounds',
    '/chemistry-lab-elements': '/chemistry-lab/elements',
    '/material-reductions': '/chemistry-lab/material-reductions',

    /// HANDLES ///
    '/handles-programming': '/handles',

    /// MODULES ///
    '/blueprints': '/modules/blueprints',
    '/dynmap-tardis': '/modules/dynmap-tardis',
    '/generators': '/modules/generators',
    '/tardis-shop': '/modules/tardis-shop',
    '/vortex-manipulator': '/modules/vortex-manipulator',
    '/weeping-angels': '/modules/weeping-angels',
};

/// DO NOT TOUCH ///
function buildRedirects() {
    // turn the above redirects into an array
    const redirectArray = [];
    for (const [key, value] of Object.entries(redirects)) {
        redirectArray.push({
            from: [key, key + '.html'],
            to: value
        });
    }
    return redirectArray;
}

module.exports = {
    buildRedirects
}
