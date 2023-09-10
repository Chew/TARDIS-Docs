---
layout: default
title: creation configuration options
---

# TARDIS creation configuration options

These are the creation configuration options.

```yaml title="/plugins/TARDIS/config.yml"
creation:
  create_worlds: false
  create_worlds_with_perms: false
  default_world: true
  default_world_name: TARDIS_TimeVortex
  border_radius: 256
  inventory_group: 0
  add_perms: true
  use_clay: WOOL
  count: 0
  tips_limit: 400
  area: none
  enable_legacy: true
  check_for_home: true
  seed_block_crafting: true
```

| Option                                             | Type                                                                                                                                                                          | Default Value       |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| creation:                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;`create_worlds`            | boolean                                                                                                                                                                       | `false`             |
| &nbsp;                                             | It is **NOT recommended** setting this to true! Sets whether TARDISes are created in their own separate worlds.                                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;`create_worlds_with_perms` | boolean                                                                                                                                                                       | `false`             |
| &nbsp;                                             | Sets whether TARDISes are created in their own separate worlds for players with the appropriate permission — `tardis.create_world`.                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;`default_world`            | boolean                                                                                                                                                                       | `true`              |
| &nbsp;                                             | Sets whether TARDISes are created in a shared world. Also required to be true to enable the Junk TARDIS and the abilty to abandon TARDISes.                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;`default_world_name`       | string                                                                                                                                                                        | `TARDIS_TimeVortex` |
| &nbsp;                                             | Sets the name of the default world. This is only used if `default_world` is true.                                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;`border_radius`            | integer                                                                                                                                                                       | `256`               |
| &nbsp;                                             | Sets the distance of the WorldBorder barrier (only used if the plugin is installed on the server).                                                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;`inventory_group`          | string                                                                                                                                                                        | `'0'`               |
| &nbsp;                                             | If the Multiverse-Inventories plugin is enabled on the server, you can set the group that TARDIS worlds are added to when they are created.                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;`add_perms`                | boolean                                                                                                                                                                       | `true`              |
| &nbsp;                                             | Sets whether a TARDIS world is assigned permissions when the server uses a permissions plugin that has per-world configuration — see [Add permissions](add-permissions). |
| &nbsp;&nbsp;&nbsp;&nbsp;`use_clay`                 | string                                                                                                                                                                        | `WOOL`              |
| &nbsp;                                             | Sets whether the coloured wool in TARDIS console and room schematics is switched to stained terracotta or concrete instead. Valid options are WOOL, TERRACOTTA, and CONCRETE. |
| &nbsp;&nbsp;&nbsp;&nbsp;`count`                    | integer                                                                                                                                                                       | `0`                 |
| &nbsp;                                             | Sets the maximum number of times a player can build and destroy a TARDIS. If set to `0` there is NO maximum.                                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;`tips_limit`               | integer                                                                                                                                                                       | `400`               |
| &nbsp;                                             | Sets the number of T.I.P.S slots to use. Must be one of 400, 800, 1200 or 1600.                                                                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;`area`                     | string                                                                                                                                                                        | `none`              |
| &nbsp;                                             | If set to a pre-defined TARDIS area, it will set that area as the only place on the server that TARDISes can be created in.                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;`enable_legacy`            | boolean                                                                                                                                                                       | `true`              |
| &nbsp;                                             | Sets whether the legacy console schematics are available to build TARDIS interiors with.                                                                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;`check_for_home`           | boolean                                                                                                                                                                       | `true`              |
| &nbsp;                                             | Sets whether the TARDIS creation location is already set to another player's `home` location.                                                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;`seed_block_crafting`      | boolean                                                                                                                                                                       | `true`              |
| &nbsp;                                             | Sets whether players can craft TARDIS seed blocks.                                                                                                                            |

[Back to main configuration page](category/plugin-configuration)

