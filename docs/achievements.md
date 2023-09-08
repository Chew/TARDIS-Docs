---
layout: default
title: Achievements
---

Achievements
============

Players can gain rewards for TARDIS achievements. The achievement system is mostly automatic, and works in conjunction
with TARDIS [books](books). Minecraft achievement popup included :)

Players can get the following achievements.

* **tardis** — awarded when they create their TARDIS
* **travel** — awarded for travelling the configured distance in their TARDIS (Note: only distances travelled from point
  A to point B **in the same world** count towards this achievement)
* **rooms** — awarded after growing one of each enabled room type
* **farm** — awarded after farming one of each mob type
* **energy** — awarded for overcharging the Artron Energy Capacitor by the configured amount
* **friends** — awarded for adding the configured amount of companions
* **kill** — awarded for killing a charged creeper

Players can list achievements with the `/tardisbook list` command. This shows the name of the achievement/book and the
reward type and amount.

Customising achievements
------------------------

You can edit the _plugins/TARDIS/achievements.yml_ file to change the attributes of each achievement. An achievement
looks like this:

```yaml title="/plugins/TARDIS/achievements.yml"
rooms:
  # The title of the book
  name: Room freak
  # Not currently used
  description: Grow all room types
  # The amount of the goal the player needs to gain
  required: 1
  # The type of reward to give the player when they reach the achievement goal. This can be XP or an item specified by
  # the Bukkit material enum name
  reward_type: XP
  # The amount of the reward type the player gets
  reward_amount: 50
  # A true or false value determining whether the achievement is available to players
  enabled: true
  # A true or false value determining whether the achievement can be repeated
  repeatable: false
  # If true the player does not have to manually initiate the start of the achievement with the /tardisbook start command
  auto: true
  # The second line of the achievement notification
  message: Grew a truckload of rooms
  # The material icon used in the achievement notification
  icon: BOOKSHELF
```
