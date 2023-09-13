---
layout: default
title: Police Box and preset configuration options
---

# Police Box and preset configuration options

These are the Police Box and preset configuration options.

```yaml title="/plugins/TARDIS/config.yml"
police_box:
  default_preset: FACTORY
  name_tardis: false
  use_nick: false
  view_interior: false
  view_interior_uses_console_size: false
  materialise: true
  sign_colour: WHITE
  rebuild_cooldown: 10000
  load_shells: false
  keep_chunk_force_loaded: true
```

| Option                                | Type                                                                                                                                                  | Default Value |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| police\_box:                          |                                                                                                                                                       |               |
| `default\_preset`                     | string                                                                                                                                                | `FACTORY`     |
|                                       | Sets the default preset that appears when the TARDIS is first created. See the [Chameleon Presets](presets) page for values that can be set.          |
| `name_tardis`                         | boolean                                                                                                                                               | `false`       |
|                                       | Sets whether to put the player&rsquo;s name on the Police Box sign.                                                                                   |
| `use_nick`                            | boolean                                                                                                                                               | `false`       |
|                                       | Sets whether to use the player’s nick name on the Police Box sign.                                                                                    |
| `view_interior`                       | boolean                                                                                                                                               | `false`       |
|                                       | Sets whether player’s can view the TARDIS interior when open in ghte exterior TARDIS door.                                                            |
| `view\_interior\_uses\_console\_size` | boolean                                                                                                                                               | `false`       |
|                                       | Sets whether the the interior view distance uses the interior console size or a deafult 16 blocks.                                                    |
| `materialise`                         | boolean                                                                                                                                               | `true`        |
|                                       | Sets whether the TARDIS runs the materialising animation when it takes off and lands.                                                                 |
| `sign_colour`                         | string                                                                                                                                                | `WHITE`       |
|                                       | Sets the colour of the text on a TARDIS sign. Must be a valid ChatColor value, see https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html |
| `rebuild_cooldown`                    | integer                                                                                                                                               | `10000`       |
|                                       | Sets the minimum time (in server ticks) required between TARDIS rebuilds.                                                                             |               |
| `load_shells`                         | boolean                                                                                                                                               | `true`        |
|                                       | Sets whether player’s can load Chameleon preset shells in to the Shell room.                                                                          |
| `keep\_chunk\_force\_loaded`          | boolean                                                                                                                                               | `true`        |
|                                       | Sets whether to keep the current location chunk of player’s Police Boxes force loaded.                                                                |

[Back to main configuration page](category/plugin-configuration)
