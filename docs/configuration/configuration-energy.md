---
layout: default
title: Artron Energy configuration option
---

# Artron Energy configuration option

For Artron Energy room growing costs see the [Room configuration](configuration-rooms) page.

These are the Artron Energy configuration options.

```yaml title="/plugins/TARDIS/artron.yml"
# artron energy
player: 25
# travel costs
random: 75
random_circuit: 150
travel: 100
comehere: 400
hide: 500
autonomous: 100
# inter-dimensional travel minimum charge levels
nether_min: 4250
the_end_min: 5500
# recharging
recharge_distance: 20
lightning_recharge: 300
creeper_recharge: 150
full_charge: 5000
full_charge_item: NETHER_STAR
# siege mode
siege_transfer: 10
siege_deplete: 100
siege_creeper: 150
siege_ticks: 1500
# standby
standby: 5
standby_time: 6000
# jettison is a percentage of original room cost
jettison: 75
jettison_seed: TNT
# room charges
render: 250
zero: 250
# upgrades
upgrades:
  ancient: 5000
  ars: 5000
  bigger: 7500
  budget: 5000
  cave: 5000
  copper: 20000
  coral: 8000
  delta: 7500
  deluxe: 10000
  division: 7500
  eleventh: 10000
  ender: 5000
  factory: 7500
  fugitive: 7500
  hospital: 5000
  master: 10000
  mechanical: 7500
  original: 5000
  plank: 5000
  pyramid: 5000
  redstone: 7500
  rotor: 5000
  steampunk: 5000
  thirteenth: 8000
  tom: 5000
  twelfth: 7500
  war: 5000
  weathered: 5000
  legacy_bigger: 7500
  legacy_deluxe: 10000
  legacy_eleventh: 10000
  legacy_redstone: 8000
  custom: 10000
  archive:
    small: 5000
    medium: 7500
    tall: 10000
    massive: 20000
  template:
    small: 1666
    medium: 2500
    tall: 3333
just_wall_floor: 50
# artron furnace
artron_furnace:
  burn_limit: 100000
  burn_time: 0.5
  cook_time: 0.5
  particles: true
# Sonic Generator costs (as a percentage of full charge)
sonic_generator:
  standard: 10
  bio: 10
  diamond: 10
  emerald: 10
  redstone: 10
  painter: 10
  ignite: 10
  arrow: 10
  knockback: 10
  brush: 10
# other charges
shell: 500
custard_cream: 25
backdoor: 100
```

| Option                                                   | Type                                                                                                                                                                                                   | Default Value  |
|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| `player`                                                 | integer                                                                                                                                                                                                | `25`           |
|                                                          | Sets the amount of time lord energy a player absorbs from the time vortex each time they time travel.                                                                                                  |                |
| `random`                                                 | integer                                                                                                                                                                                                | `75`           |
| `travel`                                                 | integer                                                                                                                                                                                                | `100`          |
| `comehere`                                               | integer                                                                                                                                                                                                | `400`          |
| `hide`                                                   | integer                                                                                                                                                                                                | `500`          |
| `autonomous`                                             | integer                                                                                                                                                                                                | `100`          |
|                                                          | Sets the amount of energy the different forms of time travel consume. The options are: random locations, any `/tardistravel`, `/tardis comehere`, `/tardis hide` commands, and autonomous homing.      |                |
| `nether_min `                                            | integer                                                                                                                                                                                                | `4250`         |
| `the_end_min `                                           | integer                                                                                                                                                                                                | `5500`         |
|                                                          | Sets the minimum amount of energy the TARDIS Artron Energy Capacitor must have before players can time travel to the Nether or The End.                                                                |                |
| `recharge_distance `                                     | integer                                                                                                                                                                                                | `20`           |
|                                                          | Sets the maximum distance in blocks, a Police Box can be from a recharge beacon in order to start recharging.                                                                                          |                |
| `lightning_recharge `                                    | integer                                                                                                                                                                                                | `300`          |
|                                                          | Sets the amount of energy TARDISes receive if they are within the `recharge_distance` of a natural lightning strike.                                                                                   |                |
| `creeper_recharge `                                      | integer                                                                                                                                                                                                | `150`          |
|                                                          | Sets the amount of energy players receive if they kill a charged creeper.                                                                                                                              |                |
| `full_charge `                                           | integer                                                                                                                                                                                                | `5000`         |
|                                                          | Sets the amount of energy a fully charged TARDIS Artron Energy Capacitor holds.                                                                                                                        |                |
| `full_charge_item `                                      | Material                                                                                                                                                                                               | `NETHER_STAR ` |
|                                                          | Sets the item that fully charges the Energy Capacitor when you right-click the Artron button with it.                                                                                                  |                |
| `siege_transfer `                                        | integer                                                                                                                                                                                                | `10`           |
|                                                          | Sets the minimum amount of Time Lord energy needed to transfer to the Siege block. This is a percentage of `full_charge`. Default is 10% (500).                                                        |                |
| `siege_deplete `                                         | integer                                                                                                                                                                                                | `100`          |
|                                                          | Sets the amount of energy Siege mode uses every cycle. Default is `100`.                                                                                                                               |                |
| `siege_creeper `                                         | integer                                                                                                                                                                                                | `150`          |
|                                                          | Sets the amount of energy gained when the Artron Creeper is sacrificed. The default is `150`. Only relevant if the main config option `siege.creeper` is set to true.                                  |                |
| `siege_ticks `                                           | integer                                                                                                                                                                                                | `1500`         |
|                                                          | Sets the amount of time in server ticks that the energy depletion / siege mode healing cycle takes. The default is `1500` (or every 1.25 minutes).                                                     |                |
| `standby `                                               | integer                                                                                                                                                                                                | `5`            |
|                                                          | Sets how much energy is used per cycle when the TARDIS is in standby power mode.                                                                                                                       |                |
| `standby_time `                                          | integer                                                                                                                                                                                                | `6000`         |
|                                                          | Sets how often energy is removed when the TARDIS is in standby mode. If `standby_time` is set to `0`, then no energy is removed.                                                                       |                |
| `jettison`                                               | integer                                                                                                                                                                                                | `75`           |
|                                                          | Sets the percentage of energy the TARDIS gets back when a room is jettisoned.                                                                                                                          |                |
| `jettison_seed`                                          | Material                                                                                                                                                                                               | `TNT`          |
|                                                          | Sets the block required to manually jettison a room.                                                                                                                                                   |                |
| `renderer`                                               | integer                                                                                                                                                                                                | `250`          |
|                                                          | Sets the cost to use the Renderer room.                                                                                                                                                                |                |
| `zero`                                                   | integer                                                                                                                                                                                                | `250`          |
|                                                          | Sets the cost to transmat to the TARDIS Zero room.                                                                                                                                                     |                |
| `upgrades`                                               |                                                                                                                                                                                                        |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`ancient`                        | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`ars`                            | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`bigger`                         | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`budget`                         | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`cave`                           | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`copper`                         | integer                                                                                                                                                                                                | `20000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;`coral`                          | integer                                                                                                                                                                                                | `8000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`delta`                          | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`deluxe`                         | integer                                                                                                                                                                                                | `10000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;`division`                       | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`eleventh`                       | integer                                                                                                                                                                                                | `10000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;`ender`                          | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`factory`                        | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`fugitive`                       | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`hospital`                       | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`master`                         | integer                                                                                                                                                                                                | `10000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;`mechanical`                     | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`original`                       | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`plank`                          | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`pyramid`                        | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`redstone`                       | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`rotor`                          | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`steampunk`                      | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`thirteenth`                     | integer                                                                                                                                                                                                | `8000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`tom`                            | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`twelfth`                        | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`war`                            | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`weathered`                      | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`custom`                         | integer                                                                                                                                                                                                | `10000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;`legacy_deluxe`                  | integer                                                                                                                                                                                                | `10000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;`legacy_redstone`                | integer                                                                                                                                                                                                | `8000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`legacy_bigger`                  | integer                                                                                                                                                                                                | `7500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;`legacy_eleventh`                | integer                                                                                                                                                                                                | `10000`        |
|                                                          | Set the energy cost to upgrade / crossgrade to a different console when using the Desktop Theme changer.                                                                                               |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`archive`                        |                                                                                                                                                                                                        |                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`tall`   | integer                                                                                                                                                                                                | `10000`        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`small`  | integer                                                                                                                                                                                                | `5000`         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`medium` | integer                                                                                                                                                                                                | `7500`         |
|                                                          | Set the energy cost to use different archive console sizes when using the Desktop Theme changer.                                                                                                       |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`template`                       |                                                                                                                                                                                                        |                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`medium` | integer                                                                                                                                                                                                | `2500`         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`small`  | integer                                                                                                                                                                                                | `1666`         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`tall`   | integer                                                                                                                                                                                                | `3333`         |
|                                                          | Set the energy cost to use a console template when using the Desktop Theme changer.                                                                                                                    |                |
| `just_wall_floor`                                        | integer                                                                                                                                                                                                | `50`           |
|                                                          | If a player is just changing the walls and floor, then `just_wall_floor` sets the percentage the cost is reduced.                                                                                      |                |
| `artron_furnace`                                         |                                                                                                                                                                                                        |                |
|                                                          | Sets the options for Artron Furnaces. See further explanation on the [Artron Furnace](artron-furnace) page.                                                                                            |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`cook_time`                      | float                                                                                                                                                                                                  | `0.5`          |
|                                                          | Sets the cook time for items smelted with Artron Storage Cells — `0.5` is half the normal time, `2.0` would be twice normal speed (longer), `1.0` = normal cook time (same as coal)                    |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`burn_time`                      | float                                                                                                                                                                                                  | `0.5`          |
|                                                          | Sets the length of time an Artron Storage Cell will burn for — as above fractions (`0.5`) will give shorter life to the cells, \> 1 will extend the burn time, `1.0` = normal burn time (same as coal) |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`burn_limit`                     | integer                                                                                                                                                                                                | `100000`       |
|                                                          | Sets the maximum amount of burn time a fully charged Artron Storage Cell can have.                                                                                                                     |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`particles`                      | boolean                                                                                                                                                                                                | `true`         |
|                                                          | Sets whether the Artron Furnace block displays particles.                                                                                                                                              |                |
| `sonic_generator `                                       |                                                                                                                                                                                                        |                |
| &nbsp;&nbsp;&nbsp;&nbsp;`standard`                       | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`bio`                            | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`diamond`                        | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`emerald`                        | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`redstone`                       | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`painter`                        | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`ignite`                         | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`arrow`                          | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`knockback`                      | integer                                                                                                                                                                                                | `10`           |
| &nbsp;&nbsp;&nbsp;&nbsp;`brush`                          | integer                                                                                                                                                                                                | `10`           |
|                                                          | Sets the energy costs for the [sonic generator](sonic-generator) as a percentage of the `full_charge` option.                                                                                          |                |
| `shell`                                                  | integer                                                                                                                                                                                                | `500`          |
|                                                          | Sets the cost to use the Shell room constructor.                                                                                                                                                       |                |
| `custard_cream`                                          | integer                                                                                                                                                                                                | `25`           |
|                                                          | Sets the cost to dispense a custard cream.                                                                                                                                                             |                |
| `backdoor`                                               | integer                                                                                                                                                                                                | `100`          |
|                                                          | Sets the cost to use the TARDIS back door.                                                                                                                                                             |                |

# Rechargers configuration section

**NB:** The rechargers configuration section is found in the file: `config.yml`

The rechargers section holds the locations of the TARDIS recharge beacons.

The format is:

    rechargers:
       [name]:
          world: [world]
          x: [co-ordinate]
          y: [co-ordinate]
          z: [co-ordinate]

Entries are added automatically by the `/tardisadmin recharger [name]` command, you should only need to edit this
section if you want to remove a recharge point.

[Back to main configuration page](category/plugin-configuration)

