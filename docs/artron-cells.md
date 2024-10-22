---
layout: default
title: Artron Storage Cells
---

# Artron Storage Cells

You can store Artron Energy in a specially crafted bucket so that you can have
energy in reserve, or transfer energy to another TARDIS.

Storing Artron Energy requires a player to have the `tardis.store` permission.

## Crafting the Artron Storage Cell

To see the crafting recipe for Artron Storage Cells use the command:

```
/tardisrecipe artron-storage-cell
```

## Artron Storage command

The crafting recipe provides you with an _empty_ Artron Storage Cell. You can
transfer energy either from your TARDIS, or using your own Time Lord energy. To
do this you hold the Artron Storage Cell in your hand and use the `/tardisartron` command:

```
/tardisartron [tardis|timelord] [amount]
```

The maximum amount you can transfer is the configured `full_charge` value as
specified in artron.yml (default is 5000). To store more energy, you will need
to craft more cells.

```
/tardisartron combine
```

Use this command to combine the artron levels of two cells that are less than full capacity. Hold one cell in your main hand, and one cell in your off hand when running the command.

## Giving Artron Storage Cells

You can give _empty_ Artron storage cells to players with the command:

```
/tardisgive [player] artron-energy-cell [amount]
```

You can give _full_ Artron storage cells to players with the command:

```
/tardisgive [player] artron-energy-cell [amount] full
```
