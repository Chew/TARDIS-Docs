---
layout: default
title: Custom model consoles
---

# Custom model consoles

As of version 6.3.1 you can add custom item models for the TARDIS console.

Custom model consoles are defined in _plugins/TARDIS/custom\_consoles.yml_:

```yaml title="/plugins/TARDIS/custom_models.yml"
# a list of custom console names to load into the plugin
consoles:
  # the name of the console
  netherite:
    # material used in crafting recipe and the crafted item
    # must be a placeable block
    material: NETHERITE_BLOCK
    
```

## Resource Pack requirements

You will need to create custom definition and model files for all entries added to _custom\_consoles.yml_.

There are 4 item definitions (per console) needed in _assets/tardis/items/_ - replace `xxxxx` with the name of the console from the config file entry:

- the crafted item - `console_xxxxx.json` - e.g. `console_netherite.json`
- the centre model - `console_centre_xxxxx.json` - e.g. `console_centre_netherite.json`
- the side model - `console_side_xxxxx.json` - e.g. `console_side_netherite.json`
- the division model - `console_division_xxxxx.json` - e.g. `console_division_netherite.json`

These definitions should point to models located in _assets/tardis/model/item/console/_ and _assets/tardis/model/item/console\_part/_.

```json title="assets/tardis/model/item/console_part/console_centre_netherite.json"
{
  "model": {
    "type": "minecraft:model",
    "model": "tardis:item/console_part/console_centre_netherite"
  }
}
```

The files for these examples are included in the [TARDIS Resource Pack](https://github.com/eccentricdevotion/TARDIS-Resource-Pack).

## Models

The modeled TARDIS consoles are made up of 13 parts:

- a centre
- six sides / panels
- six divisions

![Console models](/images/docs/console_models.png)

The sides and divisions are rotated 60&deg; around the centre when placed in-game, and angled downwards in the model's display options.

:::warning

Console controls are NOT customisable through _custom\_consoles.yml_ and will always be placed in the same locations and have the same look.

:::

You can change the models to anything you like, but you need to experiment to insure the controls sit properly on the panels.

## Item definiton

You will also need an item definition for the console material in _assets/minecraft/items/`xxxxx.json`_ e.g. `netherite_block.json`. The definition will look something like below, where the model is changed based on the items in-game display name:

```json title="ssets/minecraft/items/netherite_block.json"
{
  "model": {
    "type": "minecraft:select",
    "property": "component",
    "component": "minecraft:custom_name",
    "fallback": {
      "type": "minecraft:model",
      "model": "minecraft:block/netherite_block"
    },
    "cases": [
      {
        "when": {
          "color": "white",
          "text": "Netherite Console",
          "italic": false
        },
        "model": {
          "type": "minecraft:model",
          "model": "tardis:item/console/console_netherite"
        }
      }
    ]
  }
}
```