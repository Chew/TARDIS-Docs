---
layout: default
title: Resource pack debug preview
---

# Resource pack debug preview

The plugin adds many custom items, blocks, mobs and GUIs to the game. In order to view them in all their awesomeness it is recommended that the the [TARDIS Resource Pack](resource-packs) is used.

The supplied resource pack is not to everyone's taste, so TARDIS community members create or modify it as they see fit.

To aid in the process of creating new textures, the plugin has an area that displays all the TARDIS items in game.

![Preview area](/images/docs/debug_preview.jpg)

## Creating the preview area

To create the preview area, use the command:

```
/tardisdev debug create
```

:::info

The plugin must be using the default TARDIS world (TARDIS\_TimeVortex) for the command to have any effect.

Players must also have the `tardis.admin` permission.

:::

## Visiting the preview area

To enter the preview area, use the command:

```
/tardisdev debug enter
```

To exit, type _done_ in chat, or use the command:

```
/tardisdev debug exit
```

## Updating the preview

If the plugin or a server admin has added new or custom items to the plugin, the preview area can be refreshed by using the command:

```
/tardisdev debug update
```

![Resource pack preview](/images/docs/resource_pack_preview.jpg)
