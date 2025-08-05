---
layout: default
title: Custom item model presets
---

# Custom item model presets

As of version 5.0.0 you can add custom item model presets for the TARDIS exterior.

Custom model presets are defined in _plugins/TARDIS/custom\_models.yml_:

```yaml title="/plugins/TARDIS/custom_models.yml"
# a list of the custom models you want to use
models:
  # model name
  Type 40:
    # the item that is placed on the armour stand
    item: CLAY_BALL
  Bad Wolf:
    item: WOLF_SPAWN_EGG
    
```

## For TARDIS v6.x.x and Minecraft 1.21.4+

The files for these examples are included in the [TARDIS Resource Pack](https://github.com/eccentricdevotion/TARDIS-Resource-Pack).

### Model definitions

Custom preset models are defined in model definition files with specific suffixes:

| State                | Filename suffix | Use             |
| -------------------- | --------------- | --------------- |
| door closed          | `_closed`       | Appearance      |
| door open            | `_open`         | Appearance      |
| transparent coloured | `_stained`      | Materialisation |
| transparent clear    | `_glass`        | Materialisation |
| camera               | `_camera`       | [External camera](/monitor#tardis-external-camera) |

Using the suffixes above, the _Bad Wolf_ preset files would be named:

```text title="assets/tardis/items/..."
bad_wolf_closed.json
bad_wolf_open.json
bad_wolf_stained.json
bad_wolf_glass.json
bad_wolf_camera.json
```

These files are located in the `assets/tardis/items` folder.

![Custom model states](/images/docs/custom_model_states.jpg)

The model definition in these files then points to the actual item model found somewhere in `assets/tardis/models/item/`, for example:

```json title="assets/tardis/items/bad_wolf_closed.json"
{
  "model": {
    "type": "minecraft:model",
    "model": "tardis:item/police_box/bad_wolf_closed"
  }
}
```

:::tip

Once set up this way and the resource pack reloaded, you can use the `minecraft:give` command to test the models are working:

`/give @s wolf_spawn_egg[item_model="tardis:bad_wolf_open"]`

Or alternatively, use the [resource pack debug preview feature](/debug-preview).

:::

## Prior to TARDIS v6.x.x

### Custom model data values

The plugin uses standardised values for each state of the TARDIS visuals - open/closed door + 2 stages of materialisation (coloured/clear). You must use these values when setting up your resource pack entries! See the examples below (these are also included in the [TARDIS-Resource-Pack](https://github.com/eccentricdevotion/TARDIS-Resource-Pack/tree/4ab020a7fb6a2e44abed17044f4106198010c304), and as comments in _custom\_models.yml_).

| State                | Custom model data |
| -------------------- | ----------------- |
| door closed          | `1001`            |
| door open            | `1002`            |
| transparent coloured | `1003`            |
| transparent clear    | `1004`            |

![Custom model states](/images/docs/custom_model_states.jpg)

### Example model overrides

This would go in _assets/minecraft/models/item/**clay\_ball.json**_:

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "minecraft:item/clay_ball"
  },
  "overrides": [
    {"predicate": {"custom_model_data": 1001}, "model": "tardis:block/police_box/type_40_closed"},
    {"predicate": {"custom_model_data": 1002}, "model": "tardis:block/police_box/type_40_open"},
    {"predicate": {"custom_model_data": 1003}, "model": "tardis:block/police_box/type_40_stained"},
    {"predicate": {"custom_model_data": 1004}, "model": "tardis:block/police_box/type_40_glass"}
  ]
}
```

This would go in _assets/minecraft/models/item/**wolf\_spawn\_egg.json**_:

```json
{
  "parent": "minecraft:item/template_spawn_egg",
  "overrides": [
    {"predicate": {"custom_model_data": 1001}, "model": "tardis:block/police_box/bad_wolf_closed"},
    {"predicate": {"custom_model_data": 1002}, "model": "tardis:block/police_box/bad_wolf_open"},
    {"predicate": {"custom_model_data": 1003}, "model": "tardis:block/police_box/bad_wolf_stained"},
    {"predicate": {"custom_model_data": 1004}, "model": "tardis:block/police_box/bad_wolf_glass"}
  ]
}
```
