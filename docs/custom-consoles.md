---
layout: default
title: Custom desktops
---

# Custom desktops

TARDIS has the ability to add your own custom desktops using TARDIS schematic files (.tschm) and the _custom\_desktops.yml_ and _artron.yml_ configuration files.

:::info

Prior to v6.3.1, custom desktops were configured in _custom\_consoles.yml_

:::

### custom\_desktops.yml

After running the plugin for the first time, a configuration file called _custom\_desktops.yml_ will be created in the _plugins/TARDIS_ folder.

By default it contains one entry called ‘CUSTOM’ which is initially disabled.

It looks like this:

```yaml title="/plugins/TARDIS/custom_desktops.yml"
# custom desktop names should preferably be a single word,
# and cannot contain spaces (use underscores)
CUSTOM:
  enabled: false
  schematic: custom
  seed: OBSIDIAN
  has_beacon: true
  has_lanterns: false
  description: Super-duper Custom Desktop
```

You can add as many custom desktops as you wish, all you need to do is duplicate the CUSTOM entry and then change it to suit as needed. The settings are explained below:

- `enabled: [true|false]` — pretty self-explanatory, whether to load this desktop when the plugin starts up
- `schematic: [sometext]` — this affects the schematic filename, the permission node and the artron upgrade cost — best shown by example — if this is set to `rani`, then the schematic filename needs to _‘rani.tschm’_, the permission to create this TARDIS will be _‘tardis.rani’_ and there needs to be a corresponding entry in _artron.yml_ in the `upgrades` section e.g. `rani: 8000` - it should be a lowercase version of the schematic name.
- `seed: [Material]` — this will determine the type of seed block this TARDIS uses — `[Material]` must be a valid Bukkit [Material](https://hub.spigotmc.org/stash/projects/SPIGOT/repos/bukkit/browse/src/main/java/org/bukkit/Material.java) enum
- `has_beacon: [true|false]` — again pretty self-explanatory, whether this TARDIS has a beacon in it
- `has_lanterns: [true|false]` — again pretty self-explanatory, whether this TARDIS has sea lanterns for lights
- `description: [some other text]` — this is the display name that appears when you hover over the block in the ARS and Desktop Theme GUIs

### artron.yml

The custom desktop schematic will NOT be enabled until an Artron Energy upgrade cost is entered into _artron.yml_. Add the schematic name (as entered into _custom\_desktops.yml_) to the `upgrades` config section along withe Artron cost.

```yaml title="/plugins/TARDIS/artron.yml"
upgrades:
  custom: 10000
  rani: 8000
```

### The schematic file

When you have created your TARDIS schematic, you will need to put it in the _plugins/TARDIS/user\_schematics_ folder, and then restart the server.

You can learn about creating custom desktop schematics on the [Schematics](schematics) page.

