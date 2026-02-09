---
layout: default
title: Time Rotor
keywords: [rotor, time rotor]
---

# Time Rotor

If you are using the [TARDIS-Resource-Pack](/resource-packs) you can add an animated time rotor to your console (or grow a DELTA, HOSPITAL, MECHANICAL, ROTOR, or TOM console from a TARDIS seed block).

## Rotor Types

There are 7 time rotor types.

### Early era

![Early era time rotor](/images/docs/early_time_rotor.gif)

### Ninth / tenth era

![Time rotor](/images/docs/time_rotor.gif)

### Eleventh era

![Eleventh era time rotor](/images/docs/copper_time_rotor.gif)

### Twelfth era (not animated)

![Twelfth era time rotor](/images/docs/round_time_rotor.jpg)

### Delta

![Delta time rotor](/images/docs/delta_time_rotor.gif)

### Engine

![Engine time rotor](/images/docs/engine_time_rotor.gif)

### Hospital

![Hospital time rotor](/images/docs/hospital_time_rotor.gif)

## Adding a Time Rotor

To add a time rotor to an existing console:

1. Craft a TARDIS Time Rotor &mdash; see recipes below
2. Place an item frame in the desired location on the TARDIS console
3. Place the crafted time rotor into the item frame
4. Run the command `/tardis update rotor`
5. Click the time rotor item frame

## Changing a Time Rotor

Time rotors are locked (and the item frame made invisible) when you update them. In order to make changes to the time rotor you need to unlock it.

1. Run the command `/tardis update rotor unlock`
2. Make changes to the item frame and rotor
3. Re-update the rotor with the command `/tardis update rotor`

## Recipes

The crafting recipes for the six time rotors are:

![Time Rotor Recipes](/images/docs/time_rotor_recipes.gif)

```
DYE       | REDSTONE | DYE
GLASSPANE | CLOCK    | GLASSPANE
GLASSPANE | REDSTONE | GLASSPANE
```

Change the dye colours for each rotor:

* Early &mdash; Gray ![#666](https://placehold.co/15x15/666666/666666.png)
* Tenth &mdash; Cyan ![#0099cc](https://placehold.co/15x15/0099cc/0099cc.png)
* Eleventh &mdash; Brown ![#663300](https://placehold.co/15x15/663300/663300.png)
* Twelfth &mdash; Orange ![#ff9900](https://placehold.co/15x15/ff9900/ff9900.png)
* Delta &mdash; Purple ![#9900cc](https://placehold.co/15x15/9900cc/9900cc.png)
* Engine &mdash; Blue ![#0000ff](https://placehold.co/15x15/0000ff/0000ff.png)
* Hospital &mdash; White ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png)

Use this command to see the recipes in game:

```
/tardisrecipe time-rotor-[early|tenth|eleventh|twelfth|delta|engine|hospital]
```

There is also a Rotor Engine (as seen in the Mechanical console) - `/tardisrecipe time-engine`.

![Time engine](/images/docs/time_engine.jpg)

```
LIGHT_BLUE_DYE | REDSTONE | LIGHT_BLUE_DYE
GLASSPANE      | ANVIL    | GLASSPANE
GLASSPANE      | REDSTONE | GLASSPANE
```

![Time engine recipe](/images/docs/time_engine_recipe.png)

## Custom time rotors

From TARDIS v5.5.0 you can add your own custom time rotors to the plugin - for more information, see the [Custom Time Rotors](custom-rotors) page.
