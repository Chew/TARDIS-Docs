---
layout: default
title: Geyser
---

# Geyser

The Geyser plugin for Paper servers allows [Bedrock](bedrock) players to connect to Java servers.

## Bedrock Resource Pack

![Example items](/images/geyser/chest_items.jpg)

The TARDIS plugin can install custom item mappings and a Bedrock resource pack to Geyser so that Bedrock players can see TARDIS items and monsters, and hear TARDIS sound effects. Geyser will automatically serve the pack to Bedrock players when they connect to the server.

To install the mappings and pack, use the command:

```
/tardisadmin install_geyser
```

## Updating the resource pack on Minecraft Bedrock devices

Bedrock clients cache downloaded server resource packs. If the [TARDIS Bedrock Resource Pack](https://github.com/eccentricdevotion/TARDISBedrockResourcePack) receives updates, the new pack will need to be re-downloaded. To force a re-download you will need to remove the cached pack first.

:::info

The following screenshots show Minecraft on an iOS device, but the steps should be similar for other devices.

:::

- Save and exit from the server / level
- Open **Settings**  
    
  ![Settings](/images/geyser/settings.jpg)
- Find the **Storage** setting
- Scroll down to **Cached Data**  
    
  ![Settings](/images/geyser/storage.jpg)
- Select the TARDISBedrockResourcePack  
    
  ![Settings](/images/geyser/cached_data.jpg)
- Delete the pack  
    
  ![Settings](/images/geyser/delete.jpg)
- Reconnect to the TARDIS plugin server again, the updated resource pack will download  
    
  ![Settings](/images/geyser/pack_download.jpg)
