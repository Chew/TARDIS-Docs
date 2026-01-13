---
layout: default
title: Mob Farming
keywords: [farm, farming, mob farming]
---

# Mob Farming

You can capture farm animals in the Police Box and transport them into the TARDIS.

The mobs you can collect are:

- Allay
- Axolotl
- Bee
- Camel
- Chicken
- Cow
- Fish
- Frog
- Guardian
- Happy Ghast
- Horse
- Llama
- Mooshroom
- Nautili
- Pandas
- Pig
- Polar Bear
- Rabbit
- Sheep
- Sniffer
- Strider
- Villager

You will first need to herd the mobs so that they are close to the Police Box (within 2 blocks) — using the appropriate tempt item in
hand should make them follow you — sometimes you may be lucky enough to have the Police Box materialise around an animal!

Enter the TARDIS as usual, and the following will happen:

- If you have already grown an [**allay**](/rooms/gallery#Allay) room, then allays will be teleported into the allay house
- If you have already grown an [**apiary**](/rooms/gallery#Apiary) room, then bees will be teleported into the apiary
- If you have already grown an [**aquarium**](/rooms/gallery#Aquarium) room, then fish will be teleported into the aquarium
- If you have already grown a [**bamboo**](/rooms/gallery#Bamboo) room, then pandas will be teleported into the bamboo room
- If you have already grown a [**farm**](/rooms/gallery#Farm) room, then chickens, cows, pigs, sheep and mooshrooms will be teleported 
  into the appropriate pen in the farm
- If you have already grown a [**happy**](/rooms/gallery#Happy) room, then Happy Ghasts will be teleported into the happy room - see the [Happy Ghast Room](/rooms/happy) page for more details
- If you have already grown a [**iistubil**](/rooms/gallery#Iistubil) room, then camels will be teleported into the iistubil room
- If you have already grown a [**lava**](/rooms/gallery#Lava) room, then striders will be teleported into the lava room
- If you have already grown a [**stable**](/rooms/gallery#Stable) room, then horses will be teleported into the stable
- If you have already grown a [**stall**](/rooms/gallery#Stall) room, then llamas will be teleported into the stall
- If you have already grown a [**hutch**](/rooms/gallery#Hutch) room, then rabbits will be teleported into the hutch room
- If you have already grown an [**igloo**](/rooms/gallery#Igloo) room, then polar bears will be teleported into the igloo room
- If you have already grown an [**geode**](/rooms/gallery#Geode) room, then axolotls will be teleported into the geode room
- If you have already grown an [**mangrove**](/rooms/gallery#Mangrove) room, then frogs will be teleported into the mangrove room
- If you have already grown a [**nautilus**](/rooms/gallery#Nautilus) room, then Nautili will be teleported into the nautilus room
- If you have already grown an [**pen**](/rooms/gallery#Pen) room, then sniffers will be teleported into the pen room
- If you have already grown a [**pool**](/rooms/gallery#Pool) room and the `allow.guardians` config option is set to `true`, then guardians
  will be teleported into the pool
- If you have already grown a [**village**](/rooms/gallery#Village) room, then villagers will be teleported into the village room
- If no appropriate room is available (and if allowed in the TARDIS config), then the spawn eggs for the mobs are placed
  in the player’s inventory.
  
:::note
  
In order to use the spawn eggs, you may need to remove `mob_spawning: deny` from 
the TARDIS world’s region file if you are using WorldGuard — from TARDIS v2.8 and later growing the appropriate room
automatically allows mob spawning in those rooms (but not monsters!)
  
:::

Non-op players require the permission: `tardis.farm`

![Sheep in TARDIS](/images/docs/sheeptardis1.jpg)

![Chicken pen](/images/docs/chickenpen.jpg)

![Horses in TARDIS](/images/docs/horsesinstable.jpg)

## Ejecting farmed mobs and villagers

As of TARDIS version 3.1-beta-1, you can now eject farmed mobs, villagers and companions.

To eject an entity, use the `/tardis eject` command, then click the mob/villager/companion you want to eject. They will
be teleported outside the TARDIS, what you do with them then is up to you.

Horses must still be ridden over the wood pressure plate. You can also use a pressure plate to eject any rideable mob inside the TARDIS (Camels / Llamas / Striders).

Nautili must be ridden and then the NAUTILUS room eject button used.

:::note

There are a couple of exceptions to the rule with companion ejection — if the player is an OP or the player
has `tardis.admin` permission they will **NOT** be ejected.

:::

## Farming preferences

As of TARDIS version 5.4.0b2800, you can now control which mobs are farmed into the TARDIS. To change your farming preferences:

- Open the Sonic Preferences menu
  
  ![Player prefs](/images/docs/player_prefs_custom.jpg)
  
- Make sure mob farming is turned on
- Click the Farming Preferences button

  ![Farming preferences](/images/docs/farming_menu.jpg)

- Use the wool blocks to toggle mobs/rooms on and off