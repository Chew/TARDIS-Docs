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
- `upgrades.cost_factor` - default `0.425`

To make upgrades more expensive _increase_ `upgrades.cost_factor`.

If you increase `full_charge` and you want to keep the upgrade costs low, then _decrease_ `upgrades.cost_factor`.

## Mapped values

These values are for the default configuration values: `full_charge: 10000`, `upgrades.cost_factor: 0.425`.

| Desktop           | Condensed Artron | Old cost | Mapped cost | Size    |
|-------------------|------------------|----------|-------------|---------|
| `Ancient`         | 4676             | 5000     | 4925        | SMALL   |
| `Ars`             | 19215            | 5000     | 4750        | SMALL   |
| `Bigger`          | 29727            | 7500     | 9525        | MEDIUM  |
| `Bone`            | 19062            | 5000     | 4750        | SMALL   |
| `Budget`          | 9448             | 5000     | 4875        | SMALL   |
| `Cave`            | 4898             | 5000     | 4925        | SMALL   |
| `Copper`          | 207826           | 20000    | 21850       | MASSIVE |
| `Coral`           | 21607            | 8000     | 14450       | TALL    |
| `Cursed`          | 91470            | 20000    | 23600       | MASSIVE |
| `Delta`           | 8415             | 7500     | 9850        | MEDIUM  |
| `Deluxe`          | 67513            | 10000    | 13300       | TALL    |
| `Diner`           | 77906            | 17500    | 17000       | WIDE    |
| `Division`        | 32853            | 7500     | 9475        | MEDIUM  |
| `Eighth`          | 201957           | 17500    | 21950       | MASSIVE |
| `Eleventh`        | 60568            | 10000    | 13475       | TALL    |
| `Ender`           | 23219            | 5000     | 4700        | SMALL   |
| `Factory`         | 44983            | 7500     | 9300        | MEDIUM  |
| `Fifteenth`       | 248757           | 20000    | 21250       | MASSIVE |
| `Fugitive`        | 61276            | 7500     | 9050        | MEDIUM  |
| `Hell Bent`       | 15975            | 5000     | 4800        | SMALL   |
| `Hospital`        | 8881             | 5000     | 4875        | SMALL   |
| `Legacy Bigger`   | 32369            | 7500     | 9500        | MEDIUM  |
| `Legacy Deluxe`   | 41555            | 10000    | 13950       | TALL    |
| `Legacy Eleventh` | 58665            | 10000    | 13525       | TALL    |
| `Legacy Redstone` | 50439            | 8000     | 13725       | TALL    |
| `Master`          | 89992            | 10000    | 12750       | TALL    |
| `Mechanical`      | 45236            | 7500     | 9300        | MEDIUM  |
| `Original`        | 7354             | 5000     | 4900        | SMALL   |
| `Plank`           | 5282             | 5000     | 4925        | SMALL   |
| `Pyramid`         | 5670             | 5000     | 4925        | SMALL   |
| `Redstone`        | 34180            | 7500     | 9475        | MEDIUM  |
| `Rotor`           | 9118             | 5000     | 4875        | SMALL   |
| `Rustic`          | 98486            | 8000     | 8500        | MEDIUM  |
| `SIDRAT`          | 5460             | 7500     | 9900        | MEDIUM  |
| `Steampunk`       | 8347             | 5000     | 4875        | SMALL   |
| `Thirteenth`      | 14691            | 8000     | 9775        | MEDIUM  |
| `Tom`             | 8011             | 5000     | 4900        | SMALL   |
| `Twelfth`         | 42192            | 7500     | 9350        | MEDIUM  |
| `War`             | 9474             | 5000     | 4875        | SMALL   |
| `Weathered`       | 62037            | 5000     | 4250        | SMALL   |

### The formula

```
(condensed_artron / most_expensive_for_size) * size_scale 
   -> remapped to between
(full * size_scale / 2), (full * size_scale * scale)
```

- `condensed_artron` see table above
- `most_expensive_for_size` see table below
- `size_scale` the maximum cost for each console size - determined by `size * full_charge`
- `scale` a decimal fraction to reduce the maximum value to avoid depleting the Artron Capacitor

### Most expensive consoles by size

Min and max values are based on `full_charge: 10000`, `upgrades.cost_factor: 0.425`.

| Size      | Desktop   | Condensed | Size factor | Min value | Max value     |
|-----------|-----------|-----------|-------------|-----------|---------------|
| `SMALL`   | weathered | 62037     | 1           | 5000      | 10000 * scale |
| `MEDIUM`  | rustic    | 98485     | 2           | 10000     | 20000 * scale |
| `TALL`    | master    | 89992     | 3           | 15000     | 30000 * scale |
| `WIDE`    | diner     | 77906     | 4           | 20000     | 40000 * scale | 
| `MASSIVE` | fifteenth | 248756    | 5           | 25000     | 50000 * scale |
