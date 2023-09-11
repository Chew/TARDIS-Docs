---
layout: default
title: Give Commands
---

# TARDIS Give Commands

TARDIS admins (players with the permission `tardis.admin`) can use this command to give items and energy to players.

## Artron

This will alter the specified player’s TARDIS Artron Energy level.

    /tardisgive [player] artron [full|empty|amount]

- `full` will set the level to the amount specified by `full_charge` in the Artron config file.
- `empty` will set the level to `0`.
- `amount` can be either positive or negative, but the final level will never be less than `0` or higher
than `full_charge`.

## Kits

This will give the player the specified TARDIS item kit. Kits can be configured in [kits.yml](/kits)

    /tardisgive [player] kit [kit]

## Items

    /tardisgive [player] [item] [amount]

`item` is any valid TARDIS item available in [recipes.yml](/recipes).

`amount` determines how many of the item to give the player.

## Seed Blocks

This will give the player a TARDIS seed block.

    /tardisgive [player] seed [tardis type] [wall black] [floor block]


- `tardis type` You can find a list here: [List of interiors](/creating-a-tardis#tardis-types)
- `wall block` and `floor block` can be any valid [wall or floor material](/walls) 
