---
layout: default
title: Room configuration
---

# Room configuration

These config options are found in the file: `rooms.yml`

The rooms configuration sets the seed block and Artron Energy costs for growing rooms. Each room type has its own
sub-section with two keys: the room `cost`, and the room `seed`.

The format is:

```yaml title="/plugins/TARDIS/rooms.yml"
rooms:
   [ROOMTYPE]:
    enabled: [true|false]
    cost: [amount]
    offset: [negative amount]
    seed: [MATERIAL]
    user: [true|false]
```

All rooms are enabled by default, the rest of the settings are:

| ROOMTYPE      | cost | offset | seed block                 |
|---------------|------|--------|----------------------------|
| ALLAY         | 1225 | -4     | LIGHT_BLUE_CONCRETE        |
| ANTIGRAVITY   | 1725 | -4     | SANDSTONE                  |
| APIARY        | 700  | -4     | BEE_NEST                   |
| AQUARIUM      | 875  | -4     | TUBE_CORAL_BLOCK           |
| ARBORETUM     | 850  | -4     | OAK_LEAVES                 |
| ARCHITECTURAL | 775  | -4     | WAXED_COPPER_GRATE         |
| BAKER         | 750  | -4     | END_STONE                  |
| BAMBOO        | 700  | -4     | BAMBOO                     |
| BEDROOM       | 875  | -4     | GLOWSTONE                  |
| BIRDCAGE      | 825  | -4     | YELLOW_GLAZED_TERRACOTTA   |
| CHEMISTRY     | 700  | -4     | BLAST_FURNACE              |
| CLOISTER      | 400  | -4     | PALE_MOSS_BLOCK            |
| EMPTY         | 825  | -4     | GLASS                      |
| EYE           | 625  | -4     | SHROOMLIGHT                |
| FARM          | 725  | -4     | DIRT                       |
| GALLERY       | 1275 | -4     | CHISELED_QUARTZ_BLOCK      |
| GAMES         | 725  | -4     | DARK_OAK_PLANKS            |
| GARDEN        | 625  | -4     | CHERRY_LEAVES              |
| GEODE         | 675  | -4     | AMETHYST_BLOCK             |
| GOLEM         | 975  | -4     | TUFF                       |
| GRAVITY       | 1525 | -20    | MOSSY_COBBLESTONE          |
| GREENHOUSE    | 750  | -4     | MELON                      |
| HAPPY         | 950  | -4     | STRIPPED_OAK_LOG           |
| HARMONY       | 925  | -4     | STONE_BRICK_STAIRS         |
| HUTCH         | 750  | -4     | ACACIA_LOG                 |
| IGLOO         | 1600 | -4     | PACKED_ICE                 |
| IISTUBIL      | 425  | -4     | WHITE_GLAZED_TERRACOTTA    |
| KITCHEN       | 1525 | -4     | PUMPKIN                    |
| LAUNDRY       | 975  | -4     | VERDANT_FROGLIGHT          |
| LAVA          | 425  | -4     | MAGMA_BLOCK                |
| LAZARUS       | 850  | -4     | FURNACE                    |
| LIBRARY       | 1850 | -4     | ENCHANTING_TABLE           |
| MANGROVE      | 525  | -4     | MUDDY_MANGROVE_ROOTS       |
| MAZE          | 675  | -4     | LODESTONE                  |
| MUSHROOM      | 500  | -4     | GRAVEL                     |
| NAUTILUS      | 925  | -4     | DEAD_HORN_CORAL_BLOCK      |
| NETHER        | 275  | -4     | BLACKSTONE                 |
| OBSERVATORY   | 3950 | -4     | POLISHED_BLACKSTONE_BRICKS |
| PASSAGE       | 500  | -4     | CLAY                       |
| PEN           | 725  | -4     | MOSS_BLOCK                 |
| POOL          | 875  | -4     | SNOW_BLOCK                 |
| RAIL          | 1100 | -4     | HOPPER                     |
| RENDERER      | 1650 | -4     | TERRACOTTA                 |
| SHELL         | 1025 | -4     | DEAD_BRAIN_CORAL_BLOCK     |
| SMELTER       | 1025 | -4     | CHEST                      |
| STABLE        | 825  | -4     | HAY_BLOCK                  |
| STAIRCASE     | 775  | -5     | PURPLE_TERRACOTTA          |
| STALL         | 1000 | -4     | BROWN_GLAZED_TERRACOTTA    |
| SURGERY       | 1400 | -4     | RED_CONCRETE               |
| TRENZALORE    | 775  | -4     | BRICKS                     |
| VAULT         | 850  | -4     | DISPENSER                  |
| VILLAGE       | 650  | -4     | OAK_LOG                    |
| WARDROBE      | 750  | -4     | BIRCH_LOG                  |
| WOOD          | 450  | -4     | OAK_PLANKS                 |
| WORKSHOP      | 1175 | -4     | CRAFTING_TABLE             |
| ZERO          | 750  | -4     | OAK_BUTTON                 |


## Room jettisons

**NB:** These config options are found in the file: `artron.yml`

Set the percentage of energy the TARDIS gets back when a room is jettisoned.

```
jettison: [percentage]
```

The default is `75`.

Set the seed block for room jettisons.

```
jettison_seed: [material]
```

The default is `TNT`.

[Back to main configuration page](/configuration)

