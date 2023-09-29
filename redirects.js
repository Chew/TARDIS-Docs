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

    /// COMMANDS ///
    '/admin-commands': '/commands/admin',
    '/area-commands': '/commands/area',
    '/bind-commands': '/commands/bind',
    '/config-commands': '/commands/config',
    '/dev-commands': '/commands/dev',
    '/give-commands': '/commands/give',
    '/misc-commands': '/commands/misc',
    '/recipe-commands': '/commands/recipe',
    '/remote-commands': '/commands/remote',
    '/player-preferences': '/commands/player-preferences',
    '/schematic-commands': '/commands/schematic',
    '/tardis-commands': '/commands/tardis',
    '/texture-commands': '/commands/texture',
    '/travel-commands': '/commands/travel',

    /// CONFIG ///
    '/configuration-allow': '/configuration/allow',
    '/configuration-creation': '/configuration/creation',
    '/configuration-energy': '/configuration/energy',
    '/configuration-growth': '/configuration/growth',
    '/configuration-monsters': '/configuration/monsters',
    '/configuration-planets': '/configuration/planets',
    '/configuration-prefs': '/configuration/prefs',
    '/configuration-preset': '/configuration/preset',
    '/configuration-rooms': '/configuration/rooms',
    '/configuration-storage': '/configuration/storage',
    '/configuration-travel': '/configuration/travel',

    /// ROOMS ///
    '/custom-rooms': '/rooms/custom',
    '/room-gallery': '/rooms/gallery',
    '/gravity-wells': '/rooms/gravity-wells',
    '/rail-room': '/rooms/rail',
    '/smelter': '/rooms/smelter',
    '/vault': '/rooms/vault',
    '/zero-room': '/rooms/zero',
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
