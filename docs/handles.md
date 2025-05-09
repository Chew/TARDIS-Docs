---
layout: default
title: Handles
---

# Handles

Handles is the name given by the Eleventh Doctor to a Cyberman head that he obtained from the Maldovarium Market, and
subsequently repaired.

You can craft and place Handles so that he can interact with you and the TARDIS.

![Handles](/images/docs/handles.jpg)

To see the Handles crafting recipe, use the command `/tardisrecipe handles`. Alternatively, you can give yourself or
other players a Handles with the command `/tardisgive [player] handles 1`

![Handles recipe](/images/docs/handles_recipe.jpg)

Handles can only be placed inside the TARDIS, and must be placed in an item frame.

### Communicator

Outside the TARDIS you can only communicate with Handles if he is in your inventory, or you have a communicator (and
Handles is placed in the TARDIS) — use the `/tardisrecipe communicator` to view the recipe, or give a communicator with
the `/tardisgive [player] communicator 1` command.

![Communicator](/images/docs/communicator.jpg)

### Talking to Handles

Use chat to talk to Handles. All communication must be proceeded by a prefix — by default this is: “Hey Handles” —
followed by one or more keywords.

Keywords for chat processing are: _“takeoff”, “land”, “scan, “lock”, “unlock”, “remind”, “say”, “name”, “time”,
“handbrake”_ — or _“brake”_ or _“park”_ , _“travel”_ — travel can be to _“home”, “save” [name], “player” [name],
“area” [name]_, _“biome” [name]_ — normal TARDIS permissions apply.

### Examples

```
hey handles takeoff
hey handles land
hey handles handbrake on
hey handles scan the exterior
hey handles lock the door
hey handles unlock the door
hey handles remind me to get some wood in 5
hey handles say something funny
hey handles what is my name
hey handles what time is it
```

Reminders need to have the number of minutes (until the reminder) as the last part of the handles request
e.g. `hey handles remind me to [do something] in 5 `(reminder times will not be 100% accurate, because the plugin only
checks for reminders every minute — can be changed in the config)

### Commands

Name a Handles Program Disk

```
/handles disk [name]
```

Remove the Handles record from the TARDIS database. Use this if Handles is destroyed accidentally.

```
/handles remove
```

Update a placed Handles' rotation.

```
/tardis update handles rotate
```

Lock a placed Handles' rotation.

```
/tardis update handles lock
```

### Config Options

Handles comes with several configuration options, which can be edited in `handles.yml`.

:::caution

Most Handles options (except `enabled` and `reminders`) require regular expressions (_regex_) to properly fine tune the possible commands to listen to.

You should familiarise yourself with regex and test your responses with sites like [RegExr](https://regexr.com/).

:::

:::info

All your regexes must be in single quotes!

:::

The default configuration is listed below.

```yaml title=/plugin/TARDIS/handles.yml
# must use single quotes to wrap regular expressions
enabled: true
prefix: '^(?:hey,?\s+)?handles(?:[,!:\s]|\.\.\.+)'
reminders:
  enabled: true
  schedule: 1200
core-commands:
  craft: '\b(?:craft|build|make|create)\b.*\b(\w+)\s+(tardis\b)?(\b.*\b)'
  remind: '\bremind\s*(?:me\s+to)?\s+(.+)\s+.+(\d+)'
  say: '\bsay\s+(.+)'
  name: '\bname\b'
  time: '\btime\b'
  call: '\bcall\b'
  takeoff: '\btake\s*off\b'
  land: '\bland\b'
  hide: '\bhide\b'
  rebuild: '\brebuild\b'
  direction: '\b(?:fac(?:ing|e)|direction)\s+(\w+)'
  lights: '\b(?:lights\b.*\b(off|on)|(off|on)\b.*\blights)\b'
  power: '\b(?:power\b.*\b(off|on)|(off|on)\b.*\bpower)\b'
  brake: '\b(?:(?:hand)*brake|park)\b'
  travel:
    save: '\b(?:travel|go)\s+(?:to\s+)?.*?(?:saved?(?:\s+(?:location|destination|place|point))?|destination)\s+(\w+)'
    home: '\b(?:travel|go)\s+(?:to\s+)?.*?home\b'
    random: '\b(?:(?:travel|go)\s+(?:to\s+)?.*?|find\b.+)\brandom\b'
    player: '\b(?:travel|go)\s+(?:to\s+)?.*?player\s+(\w+)'
    area: '\b(?:travel|go)\s+(?:to\s+)?.*?(?:\b(\w+)\s+area|area\s+(\w+))\s*?$'
    biome: '\b(?:(?:travel|go)\s+(?:to\s+)?.*?|find\b.+)(?:\b([\w:]+)\s+biome|biome\s+(\w+))\s*?$'
    cave: '\b(?:(?:travel|go)\s+(?:to\s+)?.*?|find\b.+)\bcave\b'
    village: '\b(?:(?:travel|go)\s+(?:to\s+)?.*?|find\b.+)\bvillage\b'
  door:
    open: '\b(?:open\b.*\bdoor|door\b.*\bopen(?:ed)?)\b'
    close: '\b(?:close\b.*\bdoor|door\b.*\bclosed?)\b'
    lock: '\b(?:lock\b.*\bdoor|door\b.*\block(?:ed)?)\b'
    unlock: '\b(?:unlock\b.*\bdoor|door\b.*\bunlock(?:ed)?)\b'
  scan: '\bscan\b'
  teleport: '\bteleport\b'
  transmat: '\btransmat\s+(?:(?:me\s+)?to\s+(?:the\s+)?)?(.+)'
custom-commands:
  weird:
    regex: '\bblah\b'
    permission: tardis.handles.use
    commands:
      - handles tell %player_name% I'm sorry %player_displayname%, I'm afraid I can't do that
      - handles weird
  console:
    regex: '\bconsole\s+(\w+)'
    permission: tardis.admin
    commands:
      - ^tadmin list $1
```

Breakdown of some options:
- `enabled` - boolean true/false, whether Handles is enabled, requires a server restart to change
- `reminders.enabled` - boolean true/false, whether Handles can remind you of things
- `reminders.schedule` - integer, how often Handles should check for reminders, in ticks

## Interaction

Clicking on a placed handles plays a Handles voice
snippet ([TARDIS-SoundResourcePack](https://github.com/eccentricdevotion/TARDIS-SoundResourcePack/) required)

The [TARDIS-Resource-Pack](https://github.com/eccentricdevotion/TARDIS-Resource-Pack) has been updated with the Handles
model and textures — the Handles block is a BIRCH\_BUTTON.

Clicking on Handles while sneaking opens the [Handles Programming GUI](#programming-handles) where you can create
program disks, _documentation yet to come_, disks can be renamed with a `/handles disk [name]` command). More on this
later, but it should extend Handles’ functionality a bit with events and more actions and will work with Advanced
Console Disks.

## Permissions

There is one parent permission, with three children for finer control that allow players to use the Handles companion.

```
tardis.handles
```

And the children:

```
tardis.handles.use
tardis.handles.communicator
tardis.handles.program
```

## Programming Handles

:::caution

The programming feature is not fully tested and you may run into bugs! Please report them to
[the issues tab on GitHub](https://github.com/eccentricdevotion/TARDIS/issues) if you do.

:::

Clicking on Handles while sneaking opens the Handles Programming GUI where you can create program disks, allowing you to
extend Handles’ functionality with events, actions, and Advanced Console Disks.

The Handles programming is block based &mdash; instructions are represented as blocks that you add in a particular order
to create a program that Handles can run.

## Video

<iframe width="600" height="366" src="https://www.youtube.com/embed/pyJQHvxqpA8?rel=0" frameborder="0" allowfullscreen></iframe>
