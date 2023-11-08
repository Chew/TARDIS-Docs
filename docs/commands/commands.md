---
layout: default
title: Commands
slug: /commands
---

# Commands

You can view descriptions, usage and permissions for all commands in-game using the TARDIS help system.
Type `/tardis help` to list all the commands, then use `/tardis? [command]` to view all the relevant subcommands.
Use `/tardis? [command] [subcommand]` when necessary to view the command information.

You can also see a big list of `/tardis` commands here: [Big list of TARDIS sub commands](/commands/tardis-commands-table)
and a big list of other miscellaneous utility commands here: [Miscellaneous commands](/commands/misc).

### There are lots of commands:

`/tardis` - [Do stuff with your TARDIS](commands/tardis)

`/tardistravel` - [Go somewhere in your TARDIS](commands/travel)

`/tardisprefs` - [Change your TARDIS preferences](commands/player-preferences)

`/tardisbind` - [Bind destinations to buttons](commands/bind)

`/tardisbook` - [Get TARDIS timelore books and start achievements](books)

`/tardisgravity` - [Create TARDIS gravity wells in any direction](/rooms/gravity-wells)

`/tardisrecipe` - [View recipes for TARDIS items](commands/recipe)

`/tardisadmin` - [Perform TARDIS administration tasks](commands/admin)

`/tardisconfig` - [Change the TARDIS plugin configuration](commands/config)

`/tardisgive` - [Give TARDIS items to players](commands/give)

`/tardissudo` - [Admin super user commands](commands/sudo)

`/tardisarea` - [Set up predefined TARDIS travel areas](commands/area)

`/tardisroom` - [Add custom rooms and view room costs](/rooms/custom) or [Room Command](/commands/room)

`/tardistexture` - [Switch texture packs when entering/exiting the TARDIS](commands/texture)

`/tardisremote` - [Remotely control any TARDIS](commands/remote)

`/tardisschematic` - [Make TARDIS schematics](commands/schematic)

`/tardisnetherportal` - [Get coordinates for linking Nether Portals](commands/netherportal)

`/tardisjunk` - [Junk TARDIS related commands](junk-tardis) or [Junk Commands](commands/junk)

`/handles` - [Handles related commands](handles)

There are multiple command arguments for each command.

## Basic travel commands:

:::note

Some of these commands do not work in `hard` difficulty mode. See
the [Advanced Console](advanced-console) page for more information.

:::

### Returning home

To return home simply use the command:

```
/tardistravel home
```

### Setting a new home

To move your TARDIS home location, simply look at the block you wish to make the new home location, and use the command:

```
/tardis home
```

### Saving destinations

To save the destination where your TARDIS currently is, use the command:

```
/tardis save [name]
```

To save the location your player is looking at for future TARDIS travel use the command:

```
/tardis setdest [name]
```

### Travelling to destinations & areas

To travel to a saved destination use the command:

```
/tardistravel dest [name]
```

To travel to a saved area (such as a recharging point) use the command:

```
/tardistravel area [name]
```

### Calling your TARDIS

:::note

In `hard` difficulty mode you must use the Stattenheim Remote.

:::

To call your TARDIS to you, simply use the command:

```
/tardis comehere
```
