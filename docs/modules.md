---
layout: default
title: Modules
---

# Modules

Version 5 of the TARDIS plugin combines all the separate TARDIS plugins (_TARDISChunkGenerator, TARDISVortexManipulator,
TARDISWeepingAngels, TARDISShop_ and _TARDISSonicBlaster_) into a modularised all-in-one plugin. The relevant
configuration section is shown below:

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

:::info

The Chunk Generator module is always enabled, but generators other than the [`void`](/modules/generators#void) generator are only used if they are specified in _planets.yml_ or the Whovian planets (Gallifrey, Siluria, Skaro) are enabled.

:::

You can enable modules with the `/tardisconfig` command:

```
/tardisconfig weeping_angels [true|false]
/tardisconfig vortex_manipulator [true|false]
/tardisconfig mapping [true|false]
/tardisconfig shop [true|false]
/tardisconfig sonic_blaster [true|false]
/tardisconfig blueprints [true|false]
/tardisconfig chemistry [true|false]
```

To see what each module does, visit the appropriate page:

- [Blueprints](/modules/blueprints)
- [Chunk Generator](/modules/generators)
- [Weeping Angels](/modules/weeping-angels)
- [Vortex Manipulator](/modules/vortex-manipulator)
- Mapping - with [Dynmap](/modules/dynmap) or [Bluemap](/modules/bluemap) or [squaremap](/modules/squaremap)
- [Shop](/modules/tardis-shop)
- [Sonic Blaster](/modules/sonic-blaster)
- [Chemistry Lab](/chemistry-lab)
