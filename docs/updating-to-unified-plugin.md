---
layout: default
title: Updating from v4.x.x to v5/v6.x.x
---

# Updating from v4.x.x to v5/v6.x.x

Version 5 of the TARDIS plugin combines all the separate TARDIS plugins (_TARDISChunkGenerator, TARDISVortexManipulator,
TARDISWeepingAngels, TARDISShop_ and _TARDISSonicBlaster_) into a [modularised](/modules) all-in-one plugin. 

The relevant configuration section is shown below:

```yaml title=/plugins/TARDIS/config.yml
# modules
# are disabled by default
modules:
  weeping_angels: false
  vortex_manipulator: false
  mapping: false
  shop: false
  sonic_blaster: false
  blueprints: false
  chemistry: false # May be true if allow.chemistry was true
```

If you are updating from a previous version and have been using any of the other separate plugins,
you will need to transfer configuration settings and database records to the unified plugin.

To do this:

1. Uninstall the separate standalone plugins, but leave their data folders in the _plugins_ folder.
2. Install and run TARDIS v5.x.x once, to allow the plugin to generate the necessary config files and database entries.
3. Stop the server.
4. Edit the TARDIS config file - enable the modules that you require.
5. Restart the server, TARDIS will automatically transfer configuration settings and database records.

You can learn more about modules [here](/modules).

## Updating mushroom blocks and lamps

The new plugin no longer uses unused mushroom block states to display custom TARDIS blocks. If you want to 
convert your console and rooms to use custom Item Display entities, you can use the command `/tardis update display_items`.

To convert lamps to custom display lights you have two options:

* use light switch to toggle the lights off and back on again, or 
* repair the console using the Desktop Theme GUI

:::info

* The `/tardis lamps` command now only works for LIGHT blocks.
* There is the potential to walk/fall through light blocks - if you are placing your own lights, make sure they have 
  a block behind or under them so you don't fall into the time vortex.

:::

## Version 6.x.x

Also check out the [changes in TARDIS version 6.x.x](/v6) page.
