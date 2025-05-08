---
layout: default
title: TARDIS Status Sensors
---

TARDIS status sensors
===================

You can add five TARDIS Status blocks that are linked to the status of certain TARDIS systems. These blocks will alternate between a redstone block, and stone depending on their status.

This allows players to make additional redstone circuits activate when the TARDIS is doing certain things, allowing for extra lighting effects, or other red stone mechanisms.

## The sensors

| Sensor | Function/State | Update name |
| ------ | -------------- | ----------- |
| Charging | Governed by if the TARDIS is charging at a recharge point | `charging-sensor` |
| Flight | Governed by if the TARDIS is in flight or not (activating for as long as the travel bar is on) | `flight-sensor` |
| Handbrake | Toggles depending on the handbrake position | `handbrake-sensor` |
| Malfunction | Governed by if the TARDIS is malfunctioning | `malfunction-sensor` |
| Power | Changes depending if the TARDIS is powered on or off, similar to the beacon block | `power-sensor` |

## Status

The status of the block is either a `REDSTONE_BLOCK` when the sensor state evaluates to `true`, or a `STONE` block when the sensor state evaluates to `false` - e.g. powered on = true/redstone, powered off = false/stone

## Adding the sensors

To add a status block to the TARDIS, place a redstone block and update it with `/tardis update [block name]`, where `block name` is one of those from the table above.