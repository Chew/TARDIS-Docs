---
layout: default
title: Texture Command
---

# The Texture command

In order to use this feature, _Server Resource Packs_ must be accepted on the Minecraft client when connecting to the server.
Enable `Server Resource Packs: Prompt` or `Server Resource Packs: Enabled` in the **Edit Server Info** settings.

![TARDIS](/images/docs/servertextureson.jpg)

## Setting texture packs

You can set a texture pack for the TARDIS interior, and one for the regular world outside:

    /tardistexture in [url]
    /tardistexture out [url]

`[url]` must be a valid link to a texture pack file,
e.g.: https://dl.dropboxusercontent.com/s/utka3zxmer7f19g/Default.zip

To reset the outside texture pack back to the Minecraft default:

    /tardistexture out default

## Enabling and disabling

To turn resource pack switching on and off use the command:

    /tardistexture [on|off]

## Video

<iframe src="https://player.vimeo.com/video/66056277" width="600" height="366" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
