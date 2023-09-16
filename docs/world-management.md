---
layout: default
title: World management
---

# World management

From TARDIS v4.1.0 the plugin can now manage any worlds on the server and no longer relies on a separate multi-world
plugin such as Multiverse.

Configuration for world management is handled by [planets.yml](configuration/planets).

## Commands

The main world management command is `/tardisworld`>

| `/tardisworld`                                              |                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Aliases:                                                    | `tardisw`, `tw`                                                                                                                                                                                                                                                                                                |
| Permission:                                                 | `tardis.admin`                                                                                                                                                                                                                                                                                                 |
| **Argument(s)**                                             | **Description**                                                                                                                                                                                                                                                                                                |
| **`load `** `[world] [worldType] [environment] [generator]` | Loads a world for TARDIS to manage. `world` should be the name of the world folder. `worldType` should be one of: NORMAL, FLAT, or BUFFET.`environment` should be one of: NORMAL, NETHER, or THE\_END.`generator` should be the name of the plugin that will generate the world terrain e.g. `TARDIS:void`. |
| **`unload`** `[world]`                                      | Unloads a world from the server. `world` should be the name of the world folder.                                                                                                                                                                                                                               |
| **`gm `** `[world] [gamemode]`                              | Sets the gamemode for a world. `world` should be the name of the world folder. `gamemode` should be one of: SURVIVAL, CREATIVE, ADVENTURE, or SPECTATOR.                                                                                                                                                       |
| **`rename `** `[old name] [new name]`                       | Renames the world folder and the record in the level.dat file.                                                                                                                                                                                                                                                 |

Teleporting between worlds is handled by the `/tardisteleport` command.

| `/tardisteleport` |                                                                                |
| ----------------- | ------------------------------------------------------------------------------ |
| Aliases:          | `tardistp`, `ttp`                                                              |
| Permission:       | `tardis.admin`                                                                 |
| **Argument(s)**   | **Description**                                                                |
| `[world]`         | Teleports the player running the command to the specified world’s spawn point. |