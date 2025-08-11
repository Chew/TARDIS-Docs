---
layout: default
title: Using a permissions plugin
---

# Using a permissions plugin

A permission plugin is a tool for server software like Spigot or Paper, that lets server owners and admins control what players can and can't do on the server.

_While it is possible to run the TARDIS plugin without using a permissions plugin, this would mean that all players that want a TARDIS would need to be opped!_

## What a permissions plugin does

- **Manages player and group permissions:** You can assign different abilities (called “permissions”) to individual players or groups.
- **Restricts or allows commands:** For example, only admins might be allowed to use `/gamemode` or `/ban`, while regular players can't.
- **Organizes roles or ranks:** You can create ranks like “Admin”, “Moderator”, “Member”, “Guest”, etc., each with its own set of permissions.
- **Supports plugins:** Many other plugins (such as TARDIS) depend on a permission plugin to control access to their features.

## Which permissions plugin should you use?

:::tip

We recommend using the [LuckPerms](https://luckperms.net/download) plugin for Bukkit servers.

:::

Below is a step-by-step guide to setting up LuckPerms and integrating it with TARDIS:

### Step 1: Install LuckPerms

1. Download LuckPerms:
   - Go to: https://luckperms.net/download  
   - Choose the Bukkit version.
2. Add to server:
   - Place the `.jar` file into your server’s _plugins_ directory.
3. Start the server:
   - LuckPerms will generate the necessary config files.

### Step 2: Install the TARDIS Plugin

1. Download TARDIS:
   - From the [Downloads](/downloads) page or [GitHub releases](https://github.com/eccentricdevotion/TARDIS/releases) page.  
   - Select the version that corresponds to your server version.
2. Add to server:
   - Drop it into the _plugins_ folder.  
   - Restart the server and check that TARDIS loads without errors.

### Step 3: Add TARDIS Permissions Using LuckPerms

1. Find the TARDIS permissions:
   - Full list: [TARDIS Permissions](/permissions-table)
2. Decide roles/groups:
   - Example: You may want only certain players (like **“Time Lords”**) to use full TARDIS features.
3. Create a group:
   - Run this in the server console or as an OP:

```
lp creategroup timelord
```

- Assign TARDIS permissions:
Example (basic permissions for the timelord group):

```
lp group timelord permission set tardis.use true
```

- Add players to the group:

```
lp user <playername> parent add timelord
```

### Step 4: Use the LuckPerms web editor

:::info

LuckPerms has a [**web editor**](https://luckperms.net/wiki/Web-Editor) to manage permissions more easily.

:::

To use the editor run the command:

```
lp editor
```

You’ll get a link in chat.


- Open the link.
- Add/edit permissions through the UI.
- Click **"Save"**.
- Run the command it gives you in console or in-game.