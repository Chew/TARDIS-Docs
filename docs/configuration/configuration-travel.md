---
layout: default
title: Travel Configuration Options
---

# Travel configuration options

These are the travel configuration options.

A sample file for `travel.yml` looks like this:

```yaml
travel:
  include_default_world: false
  tp_radius: 500
  max_distance: 29999983
  give_key: false
  the_end: false
  allow_end_after_visit: false
  nether: false
  allow_nether_after_visit: false
  terminal:
    redefine: false
    nether: world
    the_end: world
  land_on_water: true
  timeout: 5
  timeout_height: 135
  random_attempts: 30
  exile: false
  per_world_perms: false
  terminal_step: 1
  manual_flight_delay: 60
  grace_period: 10
  random_circuit:
    x: 5000
    z: 5000
  no_destination_malfunctions: true
```

See the headings below for more detailed information.



| Option                           | Type                                                                                                                                                                                                                                                                                | Default Value |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| travel:                          |
| ---                              |
| `include_default_world`          | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | Sets whether the default world is included in time travel destinations.                                                                                                                                                                                                             |
| `tp_radius`                      | integer                                                                                                                                                                                                                                                                             | `500`         |
|                                  | Sets the maximum distance (in blocks) you can randomly time travel in the TARDIS. **Note** The actual values is about 4 times this (due to the multiplier repeater).                                                                                                                |
| `max_distance`                   | integer                                                                                                                                                                                                                                                                             | `29999983`    |
|                                  | Sets the maximum distance (in blocks) that can be used with the `/tardistravel` command. If the (vanilla) World Border distance is smaller this will be used instead.                                                                                                               |
| `chameleon`                      | boolean                                                                                                                                                                                                                                                                             | `true`        |
|                                  | Sets whether the TARDIS police box can change its appearance to match its surroundings.                                                                                                                                                                                             |
| `give_key`                       | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | Sets whether the TARDIS key is given when changing worlds (and using a multi-world inventory plugin).                                                                                                                                                                               |
| `the_end`                        | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | Sets whether the TARDIS is allowed to travel to The End worlds.                                                                                                                                                                                                                     |
| `allow_end_after_visit`          | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | If enabled, players may only fly to The End in the TARDIS if they've already been there once without it (i.e. End Portal) **Note:** End travel must be enabled (`the_end: true`) for this to take effect.                                                                           |
| `nether`                         | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | Sets whether the TARDIS is allowed to travel to Nether worlds.                                                                                                                                                                                                                      |
| `allow_nether_after_visit`       | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | If enabled, players may only fly to the Nether in the TARDIS if they've already been there once without it (i.e. Nether Portal). **Note:** Nether travel must be enabled (`nether: true`) for this to take effect.                                                                  |
| `land_on_water`                  | boolean                                                                                                                                                                                                                                                                             | `true`        |
|                                  | Sets whether the TARDIS will land on water in the Overworld.                                                                                                                                                                                                                        |
| `timeout`                        | integer                                                                                                                                                                                                                                                                             | `5`           |
| `timeout_height`                 | integer                                                                                                                                                                                                                                                                             | `135`         |
|                                  | Sets the maximum time in seconds a random location task can take. If the task times out then the Police Box location is set at the `timeout_height` value. This prevents the plugin crashing when using skyblock type worlds.                                                       |
| `random_attempts`                | integer                                                                                                                                                                                                                                                                             | `30`          |
|                                  | Sets the maximum number of attempts to find a random location. This prevents the plugin crashing under certain circumstances.                                                                                                                                                       |
| `exile`                          | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | Sets whether the TARDIS exile feature is enabled.                                                                                                                                                                                                                                   |
| `per_world_perms`                | boolean                                                                                                                                                                                                                                                                             | `false`       |
|                                  | Sets whether players require the `tardis.travel.[world]` permission to travel to a world.                                                                                                                                                                                           |
| `terminal_step`                  | integer                                                                                                                                                                                                                                                                             | `1`           |
|                                  | Sets the 4 step values that the TARDIS Destination Terminal GUI uses, where the steps are `10 * step` and `25 * step` etc.                                                                                                                                                          |
| `terminal`                       |
| `redefine`                       | boolean                                                                                                                                                                                                                                                                             | `false`       |
| `the_end`                        | string                                                                                                                                                                                                                                                                              | `world`       |
| `nether`                         | string                                                                                                                                                                                                                                                                              | `world`       |
|                                  | Allows you to redefine the End and Nether buttons in the Destination Terminal to specific worlds when travel to those environments is disabled.                                                                                                                                     |
| `manual_flight_delay`            | integer                                                                                                                                                                                                                                                                             | `60`          |
|                                  | Sets the server tick delay between having to click the repeaters in [manual flight mode](flight-modes).                                                                                                                                                                             |
| <a id="grace"></a>`grace_period` | integer                                                                                                                                                                                                                                                                             | `10`          |
|                                  | Sets the number of times players can use easy controls when the server is set to `hard` difficulty mode.                                                                                                                                                                            |
| `random_circuit`                 |
| `x`                              | integer                                                                                                                                                                                                                                                                             | `5000`        |
| `y`                              | integer                                                                                                                                                                                                                                                                             | `5000`        |
|                                  | Maximum +/- number of blocks the random location search will look between in x and z directions, so default will be -5000 to 5000 in both x and z directions. If the WorldBorder plugin is installed or a vaniila world border is in use, then those settings will be used instead. |
| `no_destination_malfunctions`    | boolean                                                                                                                                                                                                                                                                             | `true`        |
|                                  | Sets whether the TARDIS will malfunction if no valid random destination can be found with the current console settings.                                                                                                                                                             |

[Back to main configuration page](configuration)

