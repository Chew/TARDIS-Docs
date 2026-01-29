---
layout: default
title: Desktop console upgrade costs
---

# Desktop console upgrade costs

From TARDIS version 6.3.11, Artron Energy costs for upgrading/changing your desktop are calculated by the plugin at
startup.

The values are determined by a combination of the condensed costs of the desktop's blocks scaled to a ratio of the most
expensive console for that size. The values are then remapped once again to a maximum value for each desktop console
size.

For more information see [the formula](#the-formula) below.

## Configuration

There are two values found in _artron.yml_ that affect the final Artron Energy cost:

- `full_charge` - previously the default was `5000`, for fresh plugin installs it is now `10000`
- `upgrades.cost_factor` - default `42.5`

To make upgrades more expensive _increase_ `upgrades.cost_factor`.

If you increase `full_charge` and you want to keep the upgrades costs low, then _decrease_ `upgrades.cost_factor`.

## Mapped values

These values are for the default configuration values: `full_charge: 10000`, `upgrades.cost_factor: 42.5`

| Desktop           | Condensed Artron | Old cost | Mapped cost | Size    |
|-------------------|------------------|----------|-------------|---------|
| `Ancient`         | 4676             | 5000     | 2625        | SMALL   |
| `Ars`             | 19215            | 5000     | 3025        | SMALL   |
| `Bigger`          | 29727            | 7500     | 6050        | MEDIUM  |
| `Bone`            | 19062            | 5000     | 3025        | SMALL   |
| `Budget`          | 9448             | 5000     | 2750        | SMALL   |
| `Cave`            | 4898             | 5000     | 2625        | SMALL   |
| `Copper`          | 207826           | 20000    | 19800       | MASSIVE |
| `Coral`           | 21606            | 8000     | 8750        | TALL    |
| `Cursed`          | 91469            | 20000    | 15700       | MASSIVE |
| `Delta`           | 8415             | 7500     | 5275        | MEDIUM  |
| `Deluxe`          | 67512            | 10000    | 11425       | TALL    |
| `Division`        | 32853            | 7500     | 6150        | MEDIUM  |
| `Eighth`          | 201957           | 17500    | 19600       | MASSIVE |
| `Eleventh`        | 60568            | 10000    | 11025       | TALL    |
| `Ender`           | 23219            | 5000     | 3150        | SMALL   |
| `Factory`         | 44983            | 7500     | 6575        | MEDIUM  |
| `Fifteenth`       | 248756           | 20000    | 21250       | MASSIVE |
| `Fugitive`        | 61276            | 7500     | 7175        | MEDIUM  |
| `Hospital`        | 8881             | 5000     | 2750        | SMALL   |
| `Legacy Bigger`   | 32368            | 7500     | 6150        | MEDIUM  |
| `Legacy Deluxe`   | 41555            | 10000    | 9900        | TALL    |
| `Legacy Eleventh` | 58664            | 10000    | 10900       | TALL    |
| `Legacy Redstone` | 50439            | 8000     | 10425       | TALL    |
| `Master`          | 89992            | 10000    | 12750       | TALL    |
| `Mechanical`      | 45235            | 7500     | 6600        | MEDIUM  |
| `Original`        | 7353             | 5000     | 2700        | SMALL   |
| `Plank`           | 5281             | 5000     | 2625        | SMALL   |
| `Pyramid`         | 5669             | 5000     | 2650        | SMALL   |
| `Redstone`        | 34179            | 7500     | 6200        | MEDIUM  |
| `Rotor`           | 9118             | 5000     | 2750        | SMALL   |
| `Rustic`          | 98485            | 8000     | 8500        | MEDIUM  |
| `SIDRAT`          | 5460             | 7500     | 5175        | MEDIUM  |
| `Steampunk`       | 8347             | 5000     | 2725        | SMALL   |
| `Thirteenth`      | 14690            | 8000     | 5500        | MEDIUM  |
| `Tom`             | 8011             | 5000     | 2725        | SMALL   |
| `Twelfth`         | 42192            | 7500     | 6475        | MEDIUM  |
| `War`             | 9473             | 5000     | 2750        | SMALL   |
| `Weathered`       | 62037            | 5000     | 4250        | SMALL   |

### The formula

```
(condensed_artron / most_expensive_for_size) * size_scale -> remapped to between (full * size_scale / 2), (full * size_scale * scale)
```

- `condensed_artron` see table above
- `most_expensive_for_size` see table below
- `size_scale` the maximum cost for each console size - determined by `size * full_charge`
- `scale` a percentage to reduce the maximum value to avoid depleting the Artron Capacitor

### Most expensive consoles by size

| Size      | Desktop   | Condensed | Size factor | Min value | Max value |
|-----------|-----------|-----------|-------------|-----------|-----------|
| `SMALL`   | weathered | 62037     | 1           | 2500      |           |
| `MEDIUM`  | rustic    | 98485     | 2           | 5000      |           |
| `TALL`    | master    | 89992     | 3           | 7500      |           |
| `WIDE`    | - ‡       | - ‡       | 4           | 10000     |           | 
| `MASSIVE` | fifteenth | 248756    | 5           | 12500     |           |

_‡ the plugin doesn't currently have any WIDE desktops by default_