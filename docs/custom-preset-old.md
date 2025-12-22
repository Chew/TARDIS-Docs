---
layout: default
title: The Custom Chameleon preset
---

# The Custom Chameleon preset

:::info

These instructions are for TARDIS versions prior to `v6.3.2`.

:::

The TARDIS Chameleon Circuit GUI has one preset slot set up so that server admins can add a custom preset.

Once you have constructed your new design, you need to create a preset file for the TARDIS plugin to use. The easiest way to do this is to use the `/tardisadmin make_preset [name]` command.

To use the command:

- Face the front of the preset (you should be facing EAST)
- If the bottom left corner block is empty (AIR), place a sponge block there instead
- Run the `/tardisadmin make_preset [name]` command
- Give the preset a name
- Click the bottom left corner block

The plugin creates a text file in the _plugins/TARDIS_ folder called `custom_preset_[name].txt`

#### Final steps

If your custom preset contained a sign, you can change the text that is displayed on the second and third lines (the first line is reserved for the player’ name).

- Open the text file that was created and find the section starting with `##sign text`
- Change the lines that don't start with a `#` to what you want the sign to say
- Save the file, and then rename it to _custom\_preset.txt_ (you may have to remove/rename the old custom preset file first)
- Start up the server and select the custom preset in the Chameleon GUI
- Test the preset by rebuilding the TARDIS in each direction
