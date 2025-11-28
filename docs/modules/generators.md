---
layout: default
title: World Generators
---

# World Generators

The Chunk Generator module includes world generators for more than just the TARDIS void worlds (TARDIS_TimeVortex, TARDIS_Zero_Room).

You can use the generators for any world, just specify the `generator` setting in _planets.yml_.

## Void

`TARDIS:void`

An empty world.

![Void world](/images/docs/void_world.jpg)

## Gallifrey

`TARDIS:gallifrey`

Badlands biomes with custom sky colour, trees and Time Lord structures.

![Gallifrey world](/images/docs/gallifrey.jpg)

## Siluria

`TARDIS:siluria`

Bamboo & sparse jungle biomes with custom Silurian structures.

![Siluria world](/images/docs/siluria.jpg)

## Skaro

`TARDIS:skaro`

Desert biome with custom sky colour, trees and Dalek structures.

![Skaro world](/images/docs/skaro.jpg)

## Telos

`TARDIS:telos`

Cold and snowy biomes with Cyber cryogenic chamber structures.

![Telos world](/images/docs/telos.jpg)

![Cryogenic chamber](/images/docs/telos_cryo_1.jpg)

![Cryogenic chamber](/images/docs/telos_cryo_2.jpg)

## Configurable flat world

`TARDIS:flat`

Block layer types are configurable:

```yaml title="/plugins/TARDIS/generator.yml"
# Use Spigot Material names
# materials to use in the Flat World Generator
flat:
  # bottom has 1 layer
  bottom: BEDROCK
  # rock has ~60 layers
  rock: STONE
  # middle has 3 layers
  middle: DIRT
  # surface has 1 layer
  surface: GRASS_BLOCK
```

![Flat world](/images/docs/flat_world.jpg)

## Configurable plots world

`TARDIS:plot`

Block layer types are configurable:

```yaml title="/plugins/TARDIS/generator.yml"
# Use Spigot Material names
# materials to use in the Plot Generator
plot:
  rock: STONE
  middle: DIRT
  surface: GRASS_BLOCK
  # wall block - must be a valid Wall - https://minecraft.wiki/w/Wall#Variants
  wall: RESIN_BRICK_WALL
  # gate block - must be a valid Fence Gate - https://minecraft.wiki/w/Fence_Gate#ID
  gate: BAMBOO_FENCE_GATE
  # sign block - must be a valid Sign - https://minecraft.wiki/w/Sign#ID
  sign: BAMBOO_SIGN
  road_side: GRAY_CONCRETE
  road_line: WHITE_CONCRETE
  # size of the plot in chunks
  size: 3
  # the maximum number of plots a player can claim
  claim_max: 3
  # whether to create a TARDIS area when the world is first generated
  create_area: true
```

For more information on claiming and managing plots see the [Plot World Generator](/plots) page.

![Plot world](/images/docs/plot_world.jpg)

## Water world

`TARDIS:water`

Ocean biomes and a small island at spawn, plus a 1/1000 chance an island will generate in a chunk.

![Water world](/images/docs/water_world_1.jpg)

![Water world](/images/docs/water_world_2.jpg)

## TARDIS rooms world

`TARDIS:rooms`

Random rooms that go on forever. Wall and floor blocks are also randomised.

![Rooms world](/images/docs/rooms_world.jpg)
