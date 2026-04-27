---
layout: default
title: Travelling time lord
---

# Travelling time lord

Similar to a wandering trader, a travelling time lord appears near to players and offers blueprint trades for TARDIS rooms. The time lord will spawn inside a Type 40 TARDIS with the door open.

Travelling time lords have some random rooms and some related to the area they spawn. If they spawn in the nether they have the lava and nether rooms, if in a river biome the aquarium room and so on.

The time lord's TARDIS will dematerialise and leave if:
- the time lord takes any damage
- the time lord's trade limit is reached

![Travelling time lord](/images/docs/travelling-time-lord.jpg)

![Time lord trades](/images/docs/time-lord-trades.jpg)

:::info

Travelling time lords will only spawn if the `blueprints` module is enabled, for more information see the [Blueprints](/modules/blueprints)
 page.
 
:::

:::tip[Configuration]

You can restrict which worlds travelling time lords will spawn in by blacklisting them in _trades.yml_. By default, travelling time lords will not spawn in **the_end**. To prevemt spawning in other worlds, add them to the list.

:::

```yaml title="/plugins/TARDIS/trades.yml"
# blacklist of dimensions time lord traders cannot spawn in
no_spawn:
  - the_end
```