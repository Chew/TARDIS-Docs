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

The Chunk Generator module is always enabled.

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
- [Vortex Maipulator](/modules/vortex-manipulator)
- [Mapping (with Dynmap)](/modules/dynmap-tardis)
- [Shop](/modules/tardis-shop)
- [Sonic Blaster](/modules/sonic-blaster)
- [Chemistry Lab](/chemistry-lab)
