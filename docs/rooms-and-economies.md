---
layout: default
title: Rooms and server economies
---

# Rooms and server economies

TARDIS has the potential to disturb the fragile balance of a server’s economy, by allowing the cheap growing of rooms
which can potentially be harvested for their blocks.

TARDIS has a configuration option — `rooms_require_blocks` — that enables server owners to balance the cost of a room
against their server economies. When set to true, it only allows a room to be grown if the player has collected and
condensed the blocks needed to grow it.

The following table illustrates the actual cost of the default TARDIS room based on the lookup tables currently used to
convert blocks to Artron Energy if you were to put them in the TARDIS energy condenser chest.

| Room          | Actual cost to grow | Default cost in config |
|---------------|---------------------|------------------------|
| Allay         | 12469               | 1225                   |
| Antigravity   | 17330               | 1725                   |
| Apiary        | 7130                | 700                    |
| Aquarium      | 8928                | 875                    |
| Arboretum     | 8639                | 850                    |
| Architectural | 7794                | 775                    |
| Baker         | 7624                | 750                    |
| Bamboo        | 7086                | 700                    |
| Bedroom       | 8853                | 875                    |
| Birdcage      | 8489                | 825                    |
| Chemistry     | 7102                | 700                    |
| Cloister      | 4020                | 400                    |
| Empty         | 8456                | 825                    |
| Eye           | 6332                | 625                    |
| Farm          | 7487                | 725                    |
| Gallery       | 12807               | 1275                   |
| Games         | 7275                | 725                    |
| Garden        | 6315                | 625                    |
| Geode         | 6974                | 675                    |
| Golem         | 9876                | 975                    |
| Gravity       | 15485               | 1525                   |
| Greenhouse    | 7738                | 750                    |
| Happy         | 9749                | 950                    |
| Harmony       | 9452                | 925                    |
| Hutch         | 7685                | 750                    |
| Igloo         | 16245               | 1600                   |
| Iistubil      | 4362                | 425                    |
| Kitchen       | 15291               | 1525                   |
| Laundry       | 9957                | 975                    |
| Lava          | 4304                | 425                    |
| Lazarus       | 8590                | 850                    |
| Library       | 18710               | 1850                   |
| Mangrove      | 5489                | 525                    |
| Maze          | 6850                | 675                    |
| Mushroom      | 5196                | 500                    |
| Nautilus      | 9494                | 925                    |
| Nether        | 2903                | 275                    |
| Observatory   | 39653               | 3950                   |
| Passage       | 5126                | 500                    |
| Pen           | 7430                | 725                    |
| Pool          | 8849                | 875                    |
| Rail          | 11211               | 1100                   |
| Renderer      | 16572               | 1650                   |
| Shell         | 10435               | 1025                   |
| Smelter       | 10441               | 1025                   |
| Stable        | 8284                | 825                    |
| Staircase     | 7767                | 775                    |
| Stall         | 10047               | 1000                   |
| Surgery       | 14150               | 1400                   |
| Trenzalore    | 7975                | 775                    |
| Vault         | 8643                | 850                    |
| Village       | 6732                | 650                    |
| Wardrobe      | 7640                | 750                    |
| Wood          | 4523                | 450                    |
| Workshop      | 11826               | 1175                   |
| Zero          | 7556                | 750                    |

## A choice

Server admins can either adjust, the config values for room costs, based on the table above (or by using the
`/tardisroom blocks save` command to generate per room text files that list the required blocks and the actual room cost
— good if you have [custom rooms](/rooms/custom)). This makes things better, but Artron Energy can still be gained
for free using a recharge beacon.

## A better choice

On SURVIVAL servers, the better choice is to use the `rooms_require_blocks: true` option. Rather than using just the
Artron Energy cost, this makes sure that players have gathered the resources they need first. This can be balanced with
the `rooms_condenser_percent` option. Setting this to less than 100% means that players need only gather a portion of
the required blocks, and the rest can be made up of Artron Energy. There is plenty of flexibility to get the balance
just right :)

