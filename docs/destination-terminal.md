---
layout: default
title: Destination Terminal
keywords: [terminal, destination, destination terminal]
---

# Destination Terminal

The Destination Terminal is an alternative way to set a time travel location. You can place a sign inside the TARDIS and use the `/tardis update terminal` command to add a Destination Terminal, or use the button in the TARDIS [Control Menu](control-menu).

To use the Destination Terminal, right-click it to open an inventory based GUI or Minecraft dialog (see below). You will see a screen like the one
below. The basic functions of the GUI are the same as when using the repeaters on the TARDIS console — you can set
the `x` and `z` coordinates, a distance multiplier, and a world type. The Destination Terminal also lets you select the
TARDIS submarine mode for travelling under water.

![Destination Terminal](/images/docs/destination-terminal.jpg)

## Key to the blocks

First row: **Step levels** — these control how much the x, z and multiplier values change.

- <span class="rc-item rc-minecraft_white_wool"></span> Step 10
- <span class="rc-item rc-minecraft_light_gray_wool"></span> Step 25
- <span class="rc-item rc-minecraft_gray_wool"></span> Step 50
- <span class="rc-item rc-minecraft_black_wool"></span> Step 100

Second row: **x coordinate**.

- <span class="rc-item rc-minecraft_red_wool"></span> Make x move towards negative
- <span class="rc-item rc-minecraft_light_blue_wool"></span> x coordinate value
- <span class="rc-item rc-minecraft_lime_wool"></span> Make x move towards positive

Third row: **z coordinate**.

- <span class="rc-item rc-minecraft_red_wool"></span> Make z move towards negative
- <span class="rc-item rc-minecraft_yellow_wool"></span> z coordinate value
- <span class="rc-item rc-minecraft_lime_wool"></span> Make z move towards positive

Fourth row: **distance multiplier**.

- <span class="rc-item rc-minecraft_red_wool"></span> Make multiplier less
- <span class="rc-item rc-minecraft_purple_wool"></span> Multiplier value
- <span class="rc-item rc-minecraft_lime_wool"></span> Make multiplier bigger

Fifth row: **world/environment type**.

- <span class="rc-item rc-minecraft_oak_leaves"></span> Use current world
- <span class="rc-item rc-minecraft_dirt"></span> Random overworld
- <span class="rc-item rc-minecraft_netherrack"></span> A Nether world
- <span class="rc-item rc-minecraft_end_stone"></span> An End world
- <span class="rc-item rc-minecraft_water_bucket"></span> Submarine mode

Bottom row: **check/set destination**.

- <span class="rc-item rc-minecraft_piston"></span> Check destination
- <span class="rc-item rc-minecraft_bookshelf"></span> Set destination
- <span class="rc-item rc-minecraft_tnt"></span> Cancel

## Dialog interface

You can set your TARDIS player preference to open a Minecraft dialog instead of an inventory GUI. Use the sonic preferences GUI, or the command `/tardisprefs dialogs [on|off]`.

The dialog functions much like the GUI detailed above.

- Use the sliders to set the distance multiplier, x coordinate and z coordinate
- Set a world environment type with the _Environment_ button
- Set the _Submarine_ mode
- Click the _Set Destination_ button to find a a location with the current settings

![Destination Terminal dialog](/images/docs/destination_terminal_dialog.jpg)

## Video

Slightly outdated, but you’ll get the idea...

<iframe src="https://player.vimeo.com/video/68899459" width="600" height="366" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
