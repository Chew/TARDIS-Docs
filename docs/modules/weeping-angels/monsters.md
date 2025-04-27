---
layout: default
title: Monsters
description: List of monsters in the Weeping Angels module
---

# Weeping Angels Monsters

The plugin offers 32 monsters. See the table of contents on the side to navigate to the monster you want to know more about.

## Weeping Angels

Weeping Angels only spawn at night in loaded chunks. They may also spawn when mentioned in chat (if configured) or by
building them with blocks.

To build an angel, place four cobblestone walls in a ‘T’ shape, then place a skeleton skull on the top. If the builder
has the permission `tardisweepingangels.build.angel` an angel will spawn.

![Angel building](/images/docs/build_angel.jpg)

Weeping Angels can only be killed with the configured weapon - by default a DIAMOND_PICKAXE - hitting them with anything
else has no effect. When they die they drop a random (1-3) amount of STONE.

The angels move pretty fast, but you can freeze them in place by looking at them and quickly pressing the sneak key.
Better arm yourself or flee quickly though, as they’ll be after you again in a snap - and if they touch you, you’ll be
teleported away to a random location. If the TARDIS plugin is also installed, your TARDIS Key will be stolen.

![Weeping Angel](/images/docs/weeping_angel.jpg)

Random teleport locations can be specified by world, or you can set specific locations to teleport players to.

* Random teleports are set in the `angels.teleport_worlds` section in _monsters.yml_.
  Add all the worlds you want to allow teleports to. A random location will be generated from loaded chunks in a
  randomly selected world.
* Specific teleport locations require `angels.teleport_to_location` to be set to `true`. You can then use
  the `/twa teleport [replace|true|false]` command.
    * You can list multiple locations to teleport to in the `angels.teleport_locations` section in _monsters.yml_.
    * By default, one location exists - the spawn location of the server’s main world.
    * To add a location, stand in the place you want to add and use the `/twa teleport` command.
    * To replace all previously stored locations, repeat the above step, but use the `/twa teleport replace` command.
    * To toggle between random world and specific location teleporting use the command `/twa teleport [true|false]` -
      where `true` is for specific locations.

## Angel of Liberty

She’s big. She’s dangerous!

![Angel of Liberty](/images/docs/angel_of_liberty.jpg)

## Clockwork Droids

Tick tock.

![Clockwork Droid](/images/docs/clockwork_droid.jpg)

![Clockwork Droid](/images/docs/clockwork_droid_female.jpg)

## Cybermen

Cybermen can spawn at anytime. If configured, Cybermen will upgrade villagers and players when they have killed them (a
new Cyberman) spawns in their place. If the upgraded entity was a player, the new Cyberman displays the player’s name
above its head.

There are 10 Cyberman variants.

![Cyberman](/images/docs/cyberman.jpg)

![Cyberman Rise](/images/docs/cyberman_rise.jpg)

![Cyber Lord](/images/docs/cyber_lord.jpg)

![Black Cyberman](/images/docs/black_cyberman.jpg)

![Cyberman Earthshock](/images/docs/cyberman_earthshock.jpg)

![Cyberman Invasion](/images/docs/cyberman_invasion.jpg)

![Cyberman Moonbase](/images/docs/cyberman_moonbase.jpg)

![Cyberman Tenth Planet](/images/docs/cyberman_tenth_planet.jpg)

![Wood Cyberman](/images/docs/wood_cyberman.jpg)

![Cybershade](/images/docs/cybershade.jpg)

## Ice Warriors

Ice Warriors are really angry. They can spawn at anytime, but only spawn in snowy, icy or cold biomes. They carry an ice
dagger. Did I mention they’re angry!

![Ice Warrior](/images/docs/ice_warrior.jpg)

## Daleks

Daleks come in different colours, but mostly spawn in their typical bronze colour. Exterminate!
When a Dalek spawns there is a configurable chance that either Dalek Sec or Davros will spawn instead.

![Dalek](/images/docs/dalek.jpg)

## Dalek Sec

Dalek Sec just looks fabulous! He’s passive unless you annoy him.

![Dalek](/images/docs/dalek_sec.jpg)

## Davros

Davros doesn’t do much yet, but probably best not to get in his way.

![Dalek](/images/docs/davros.jpg)

## Empty Children

Empty Children spawn anytime, and are of course child size. If you are killed by an Empty Child you get a gas mask
applied to your head when you respawn that you can’t remove for 30 seconds.

![Empty child](/images/docs/empty_child.jpg)

## Hath

Hath don’t do much yet, but they look pretty cool.

![Hath](/images/docs/hath.jpg)

## Headless Monk

Headless Monks fire energy blasts from their hands as well as channelling that energy into their swords.

![Headless Monk](/images/docs/headless_monk.jpg)

![Headless Monk](/images/docs/headless_monk_2.jpg)

## Judoon

Judoon are the police force of the Whoniverse. Left-click a Judoon to claim it as your own.

If players have the permission `tardisweepingangels.judoon` they can equip Judoon with
ammunition (craft with arrows and gunpowder and put into a shulker box, then **left**-click the Judoon with the box).
Judoon can then be toggled to be in guard mode (left-click them with out a shulker box in hand) and will shoot any hostile
mobs nearby.

Use the `/twa follow` command or **right**-click the Judoon to make the Judoon follow you around.

Judoon can be built by players if they have the permission `tardisweepingangels.build.judoon` - place two obsidian
blocks one on top of the other. Place red nether brick walls on either side to form a ‘T’, then place an iron trapdoor
on the top.

![Judoon](/images/docs/judoon.jpg)

![Judoon building](/images/docs/build_judoon.jpg)

## K-9

You can either craft a K-9 or tame a wolf to get a K-9! Clicking a K-9 will toggle whether he will follow you or stay
put. The crafting recipe is 3 iron ingots, 3 redstone, and 3 bones in the crafting grid:

```
III
RRR
BBB
```

![K9](/images/docs/k9.jpg)

You can also build K-9 with blocks if you have the permission `tardisweepingangels.build.k9`. Place an iron block, with
a lever and a tripwire hook on each side, finish with a dayight detector on top.

![K-9 building](/images/docs/build_k9.jpg)

## Mire

The Mire will distill you down to your essential nectar.

![The Mire](/images/docs/mire.jpg)

![The Mire](/images/docs/mire_helmetless.jpg)

## Omega

Omega.

![Omega](/images/docs/omega.jpg)

## Ood

Ood spawn randomly around villagers. Left-click an Ood to claim it as your own (requires `tardisweepingangels.ood` permission). Use the `/twa follow` command or
**right**-click the Ood to make the Ood follow you around. **Left**-click a claimed Ood to change the Ood’s eyes to red.

![Ood](/images/docs/ood.jpg)

## Ossified Time Zombies

These appear if you die in the Eye of Harmony room.

![Ossified Time Zombie](/images/docs/ossified.jpg)

## Racnoss

Racnoss spawn randomly in the Nether.

![Racnoss](/images/docs/racnoss.jpg)

## Scarecrows

The Family of Blood’s animated henchmen.

![Scarecrow](/images/docs/scarecrow.jpg)

## Sea Devils

Found in the sea and on land, best if they don’t find you!

![Sea Devil](/images/docs/sea_devil.jpg)

## Silent

Silent spawn anywhere. Beware their deadly energy discharges!

![Silent](/images/docs/silent.jpg)

## Silurians

Only spawn underground in caves. Watch out for their Silurian guns!

![Silurian](/images/docs/silurian.jpg)

## Slitheen

A nasty flatulent surprise, best avoided if you want to survive.

![Slitheen](/images/docs/slitheen.jpg)

![Slitheen](/images/docs/slitheen_suit.jpg)

## Smilers

Keep them smiling, you don’t want to see their angry face!

![Smilers](/images/docs/smiler.jpg)

## Sontarans

Sontarans will try to kill you (as any good Sontaran should). If you manage to right-click a Sontaran with a Weakness
Potion before he kills you, he will transform into Strax.

![Sontaran](/images/docs/sontaran.jpg)

## Strax

If you right-click Strax he’ll talk to you, and if you right-click him with an empty bucket, you’ll be able to milk him.
Yum, yum Sontaran lactic fluid :) Be careful not to anger him though as he’ll go rabid on you and let his killer
Sontaran instincts get the better of him!

![Strax](/images/docs/strax.jpg)

## Sutekh

Here to deliver you with the certainty of death!

![Sutekh](/images/docs/sutekh.jpg)

## Sycorax

Snarling space gangsters who smell like herrings!

![Sea Devil](/images/docs/sycorax.jpg)

## The Beast

The horned terror!

![The Beast](/images/docs/the_beast.jpg)

## Toclafane

Toclafane fly around passively until you hit them, then watch out as they get angry with you. They explode when they
die.

![Toclafane](/images/docs/toclafane.jpg)

## Vampires of Venice

Saturnyn’s fleeing from a crack in time.

![Vampire of Venice](/images/docs/vampire_of_venice.jpg)

## Vashta Nerada

Vashta Nerada have a random (configurable) chance of spawning when a bookshelf is broken, say “Hey, who turned out the
lights?” and of course try to eat you!

![Vashta Nerada](/images/docs/vashta_nerada.jpg)

## Zygons

Zygons don’t do much yet (except try to kill you), but they look pretty cool.

![Zygon](/images/docs/zygon.jpg)
