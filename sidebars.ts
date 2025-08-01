/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  //  */
  docs: [
    {
      type: 'html',
      value: '<a href="/"><span id="sidebar-tardis"></span></a>',
      defaultStyle: true,
    },
    'index',
    {
      type: 'doc',
      id: 'faqs',
      label: "FAQs"
    },
    {
      type: 'category',
      label: 'First Things First',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation-v5',
        'updating-to-unified-plugin',
        'v6',
        'creating-a-tardis',
        'companions',
        {
          type: 'category',
          label: "Artron Energy",
          link: {
            type: 'doc',
            id: 'artron-energy'
          },
          items: [
            'condenser',
            'artron-capacitor',
            'artron-capacitor-storage',
            'rooms/eye',
            'artron-cells',
            'condensables',
          ]
        },
        'enter-and-exit',
        'removing-a-tardis',
        'player-prefs-menu',
        'tis',
      ],
    },
    {
      type: 'category',
      label: 'Time Travelling',
      link: {
        type: 'generated-index',
      },
      items: [
        'time-travel',
        'advanced-console',
        'crafting-disks',
        'keyboard',
        'malfunction',
        'destination-terminal',
        'randomiser-circuit',
        'flight-modes',
        'flying',
        'throttle',
        'console',
      ],
    },
    {
      type: 'category',
      label: "Customize Your TARDIS!",
      items: [
        'modifying-the-tardis-interior',
        'ars',
        'desktop-theme',
        'interiors',
        'panoramic-gallery',
        'walls',
        'hum',
        'item_displays',
        'custom-doors',
        'custom-rotors',
        {
          type: 'category',
          label: "Rooms",
          link: {
            type: 'doc',
            id: 'rooms'
          },
          items: [
            'rooms/gallery',
            'rooms/custom',
            'rooms/eye',
            'rooms/garden',
            'rooms/gravity-wells',
            'rooms/happy',
            'rooms/rail',
            'rooms/smelter',
            'rooms/vault',
            'rooms/library',
            'rooms/zero',
          ]
        },
        {
            type: 'category',
            label: 'Chamemelon Circuit',
            items: [
        'chameleon-circuit',
                'presets',
                'rooms/shell',
                'chameleon-construction',
                'custom-preset',
                'custom-model-presets',
                'adaptive-presets'
            ]
        },
        'materialisation-particles',
        'sensors'
      ],
    },
    {
      type: 'category',
      label: "Manage Your TARDIS",
      link: {
        type: 'generated-index',
      },
      items: [
        'system-upgrades',
        'control-menu',
        'save-sign',
        'chameleon-circuit',
        'invisibility',
        'telepathic-circuit',
        'temporal-locator',
        'monitor',
        'circuit-use',
        'writing-disks',
        'bedrock'
      ],
    },
    {
      type: 'category',
      label: 'Cool Stuff To Do & Use',
      link: {
        type: 'generated-index',
      },
      items: [
        'tardis-items',
        {
          type: 'category',
          label: 'Appearance',
          items: [
            'resource-packs',
            'lazarus',
            'skins',
            'perception-filter',
            'chameleon-arch',
            'emergency-program-one',
          ]
        },
        {
          type: 'category',
          label: 'Sonic Screwdriver',
          items: [
            'sonic-screwdriver',
            'sonic-configurator',
            'sonic-generator',
            'sonic-dock',
          ]
        },
        'siege-mode',
        'junk-tardis',
        'food',
        'accessories',
        {
          type: 'category',
          label: "Blocks",
          items: [
            'artron-furnace',
            'artron-capacitor-storage',
            'rift-manipulator',
            'time-rotor',
            'television'
          ]
        },
        {
          type: 'category',
          label: "Utility",
          items: [
            'scanner',
            'display',
            'map',
            'transmat',
            'backdoors',
            'view-interior',
            'translator',
          ]
          },
        'farming',
        'hads',
        'abandon',
        'autonomous',
        'remote-key',
        'achievements',
        'books',
        'schematics',
        'archive',
        'handles'
      ],
    },
    {
      type: 'category',
      label: "Commands",
      link: {
        type: "generated-index"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'commands',
        },
      ]
    },
    {
      type: 'category',
      label: 'TARDIS Crafting Recipes',
      link: {
        type: "doc",
        id: "crafting"
      },
      items: [
        {
          type: 'category',
          label: 'Accessories',
          items: [
            'recipes/accessories/bow-tie',
            'recipes/accessories/tardis-communicator',
            'recipes/accessories/fob-watch',
            'recipes/accessories/handles',
            'recipes/planets/rift-manipulator',
            'recipes/accessories/sonic-blaster',
            'recipes/accessories/vortex-manipulator',
            'recipes/accessories/three-d-glasses',
          ]
        },
        {
          type: 'category',
          label: 'Chemistry',
          items: [
            'recipes/chemistry/atomic-elements',
            'recipes/chemistry/element-constructor',
            'recipes/chemistry/material-reducer',
            'recipes/chemistry/chemical-compounds',
            'recipes/chemistry/product-crafting',
            'recipes/chemistry/lab-table',
            'recipes/chemistry/lamps',
            'recipes/chemistry/balloons',
            'recipes/chemistry/glow-sticks',
            'recipes/chemistry/sparklers',
            'recipes/chemistry/heat-block',
            'recipes/chemistry/ice-bomb',
            'recipes/chemistry/bleach',
            'recipes/chemistry/super-fertiliser',
            'recipes/chemistry/microscope',
            'recipes/chemistry/slide-rack',
            'recipes/chemistry/electron-microscope',
            'recipes/chemistry/filing-cabinet',
            'recipes/chemistry/telescope',
            'recipes/chemistry/computer-monitor',
          ]
        },
        {
          type: 'category',
          label: 'Console Circuits',
          items: [
            'recipes/console-circuits/tardis-ars-circuit',
            'recipes/console-circuits/tardis-chameleon-circuit',
            'recipes/console-circuits/tardis-input-circuit',
            'recipes/console-circuits/tardis-invisibility-circuit',
            'recipes/console-circuits/tardis-materialisation-circuit',
            'recipes/console-circuits/tardis-memory-circuit',
            'recipes/console-circuits/tardis-randomiser-circuit',
            'recipes/console-circuits/tardis-scanner-circuit',
            'recipes/console-circuits/tardis-telepathic-circuit',
            'recipes/console-circuits/tardis-temporal-circuit',
          ]
        },
        {
          type: 'category',
          label: 'Custom Blocks',
          items: [
            'recipes/custom-blocks/console',
            'recipes/custom-blocks/grow',
            'recipes/custom-blocks/blue-box',
            'recipes/custom-blocks/cog',
            'recipes/custom-blocks/hexagon',
            'recipes/custom-blocks/roundel',
            'recipes/custom-blocks/roundel-offset',
            'recipes/custom-blocks/the-moment',
            'recipes/custom-blocks/door',
            'recipes/custom-blocks/classic-door',
            'recipes/custom-blocks/untempered-schism',
            'recipes/custom-blocks/light-classic',
            'recipes/custom-blocks/light-classic-offset',
            'recipes/custom-blocks/light-tenth',
            'recipes/custom-blocks/light-eleventh',
            'recipes/custom-blocks/light-twelfth',
            'recipes/custom-blocks/light-thirteenth',
          ]
        },
        {
          type: 'category',
          label: 'Food',
          items: [
            'recipes/food/bowl-of-custard',
            'recipes/food/custard-cream',
            'recipes/food/fish-finger',
            'recipes/food/jammy-dodger',
            'recipes/food/jelly-baby',
            'recipes/food/paper-bag',
          ]
        },
        {
          type: 'category',
          label: 'Item Circuits',
          items: [
            'recipes/item-circuits/tardis-locator-circuit',
            'recipes/item-circuits/perception-circuit',
            'recipes/planets/rift-circuit',
            'recipes/item-circuits/sonic-generator',
            'recipes/item-circuits/sonic-oscillator',
            'recipes/item-circuits/tardis-stattenheim-circuit',
          ]
        },
        {
          type: 'category',
          label: 'Items',
          items: [
            'recipes/items/tardis-artron-furnace',
            'recipes/items/artron-capacitor',
            'recipes/items/artron-capacitor-storage',
            'recipes/items/artron-storage-cell',
            'recipes/items/tardis-biome-reader',
            'recipes/items/tardis-key',
            'recipes/items/tardis-locator',
            'recipes/items/perception-filter',
            'recipes/items/tardis-remote-key',
            'recipes/items/sonic-screwdriver',
            'recipes/items/stattenheim-remote',
            'recipes/items/tardis-television',
          ]
        },
        {
          type: 'category',
          label: 'Misc',
          items: [
            'recipes/planets/acid-battery',
            'recipes/misc/blaster-battery',
            'recipes/misc/exterior-lamp-level-switch',
            'recipes/misc/interior-light-level-switch',
            'recipes/misc/tardis-monitor',
            'recipes/misc/monitor-frame',
            'recipes/planets/rust-plague-sword',
            'recipes/misc/tardis-schematic-wand',
            'recipes/misc/sonic-dock',
          ]
        },
        {
          type: 'category',
          label: 'Sonic Circuits',
          items: [
            'recipes/sonic-circuits/bio-scanner-circuit',
            'recipes/sonic-circuits/brush-circuit',
            'recipes/sonic-circuits/conversion-circuit',
            'recipes/sonic-circuits/emerald-environment-circuit',
            'recipes/sonic-circuits/diamond-disruptor-circuit',
            'recipes/sonic-circuits/ignite-circuit',
            'recipes/sonic-circuits/knockback-circuit',
            'recipes/sonic-circuits/painter-circuit',
            'recipes/sonic-circuits/pickup-arrows-circuit',
            'recipes/sonic-circuits/redstone-activator-circuit',
            'recipes/sonic-circuits/server-admin-circuit',
          ]
        },
        {
          type: 'category',
          label: 'Sonic Upgrades',
          items: [
            'recipes/sonic-upgrades/admin-upgrade',
            'recipes/sonic-upgrades/bio-scanner-upgrade',
            'recipes/sonic-upgrades/brush-upgrade',
            'recipes/sonic-upgrades/conversion-upgrade',
            'recipes/sonic-upgrades/diamond-upgrade',
            'recipes/sonic-upgrades/emerald-upgrade',
            'recipes/sonic-upgrades/knockback-upgrade',
            'recipes/sonic-upgrades/ignite-upgrade',
            'recipes/sonic-upgrades/painter-upgrade',
            'recipes/sonic-upgrades/pickup-arrows-upgrade',
            'recipes/sonic-upgrades/redstone-upgrade',
          ]
        },
        {
          type: 'category',
          label: 'Storage Disks',
          items: [
            'recipes/storage-disks/authorised-control-disk',
            'recipes/storage-disks/biome-storage-disk',
            'recipes/storage-disks/blank-storage-disk',
            'recipes/storage-disks/player-storage-disk',
            'recipes/storage-disks/preset-storage-disk',
            'recipes/storage-disks/save-storage-disk',
          ]
        },
        {
          type: 'category',
          label: 'Time Rotors',
          items: [
            'recipes/rotors/time-engine',
            'recipes/rotors/time-rotor-delta',
            'recipes/rotors/time-rotor-early',
            'recipes/rotors/time-rotor-eleventh',
            'recipes/rotors/time-rotor-engine',
            'recipes/rotors/time-rotor-hospital',
            'recipes/rotors/time-rotor-tenth',
            'recipes/rotors/time-rotor-twelfth',
          ]
        },
        {
          type: 'category',
              label: 'Seed Blocks',
          items: [
            'recipes/seeds/ancient',
            'recipes/seeds/ars',
            'recipes/seeds/bigger',
            'recipes/seeds/budget',
            'recipes/seeds/cave',
            'recipes/seeds/copper',
            'recipes/seeds/coral',
            'recipes/seeds/cursed',
            'recipes/seeds/delta',
            'recipes/seeds/deluxe',
            'recipes/seeds/division',
            'recipes/seeds/eleventh',
            'recipes/seeds/ender',
            'recipes/seeds/factory',
            'recipes/seeds/fifteenth',
            'recipes/seeds/fugitive',
            'recipes/seeds/hospital',
            'recipes/seeds/legacy-bigger',
            'recipes/seeds/legacy-deluxe',
            'recipes/seeds/legacy-eleventh',
            'recipes/seeds/legacy-redstone',
            'recipes/seeds/master',
            'recipes/seeds/mechanical',
            'recipes/seeds/original',
            'recipes/seeds/plank',
            'recipes/seeds/pyramid',
            'recipes/seeds/redstone',
            'recipes/seeds/rotor',
            'recipes/seeds/steampunk',
            'recipes/seeds/thirteenth',
            'recipes/seeds/tom',
            'recipes/seeds/twelfth',
            'recipes/seeds/war',
            'recipes/seeds/weathered',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: "Plugin Modules",
      link: {
        type: "doc",
        id: "modules"
      },
      items: [
        'modules/blueprints',
        {
          type: 'category',
          label: "Chemistry Lab",
          link: {
            type: "doc",
            id: "chemistry-lab/index"
          },
          items: [
            'chemistry-lab/products',
            'chemistry-lab/compounds',
            'chemistry-lab/elements',
            'chemistry-lab/material-reductions',
            'chemistry-lab/microscope',
            'chemistry-lab/electron-microscope',
            'chemistry-lab/telescope',
          ]
        },
        'modules/generators',
        {
          type: 'category',
           label: 'Mapping',
           link: {
             type: "doc",
             id: "modules/mapping"
            },
          items: [
          'modules/dynmap',
          'modules/bluemap',
          'modules/squaremap',
          ]
        },
        'modules/regeneration',
        'modules/sonic-blaster',
        'modules/tardis-shop',
        'modules/vortex-manipulator',
        'modules/weeping-angels',
      ]
    },
    {
      type: 'category',
      label: 'Admin Stuff',
      link: {
        type: 'generated-index',
      },
      items: [
        'bug-reports',
        'planets',
        'world-management',
        'custom-consoles',
        'localisation',
        'database',
        'placeholders',
        'tips',
        'permissions-plugin',
        'permissions',
        'permissions-table',
        'weeping-angel-permissions',
        'kits',
        'recipes',
        'add-permissions',
        'tardis-areas',
        'rooms-and-economies',
        'time-vortex',
        'wiki-sign',
        'debug-preview',
        'prune',
        'plots',
        'api',
        'update-blocks',
        'build-tools',
        'sqlite-mysql-tool',
        'change-log'
      ],
    },
    {
      type: 'category',
      label: "Plugin Configuration",
      link: {
        type: "doc",
        id: "configuration"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'configuration',
        },
        {
          type: 'link',
          href: '/editor',
          label: "Configuration Editor"
        }
      ]
    }
  ],
};

export default sidebars;
