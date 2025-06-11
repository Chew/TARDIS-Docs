---
layout: default
title: TARDIS database
---

# TARDIS database

The TARDIS plugin stores extensive records in a database. This page has details of how you might interact with the database.

## Which database type to use?

By default TARDIS uses a file-based SQLite database - this is the recommended type to use for optimal performance:

- Reading from a local file is 99% of the time going to be faster than reading from a separate database server.
- Back ups are easy - just backup TARDIS.db file with the rest of the server. This ensures all player, world save, and TARDIS data is in sync with each other.

The other option is to use a server-based MySQL database - _we don't recommend this for various reasons_:

- It’s slower.
- It’s more complex.
- The data is never needed across multiple servers at once because TARDISes cannot travel between servers.
- It makes backup recovery much more challenging. If you roll back the server for whatever reason, you will also need to roll back the tables on the MySQL server to a dump taken at the same exact time as my server backup, otherwise the server’s save state may not agree with whatever data is in the TARDIS database.

## Editing the database

Sometimes things can go wrong with the plugin. Whether due to a bug or player error (did you check the Wiki before doing that?) you may sometimes need to alter or delete TARDIS records.

To open the SQLite TARDIS.db file you will need an editor. We use [DB Browser for SQLite](https://sqlitebrowser.org/). Check out their wiki for more infomation - https://github.com/sqlitebrowser/sqlitebrowser/wiki

![DB Browser for SQLite](/images/docs/db_sqlitebrowser.svg)

### Editing basics

1. Locate a player's Minecraft `UUID` for the TARDIS you want to edit.
2. Stop the server.
3. Download and open up the `plugins/TARDIS/TARDIS.db` file.
4. Go into the **Browse DATA** view, and look up the `tardis` table, using the UUID from step 1, note down the `tardis_id` that mateches it.
5. Now go to the database table you want to edit, and sort it by `tardis_id`.
6. Find the record(s) you want to edit / remove:
   - Make changes, by clicking on the field that you want to edit, then alter the value in the _Edit Database Cell_ pane on the right. Click the _Apply_ button ( ![Apply](/images/docs/db_apply.png) ) to finalise changes.
   - Delete it by selecting the row (click anywhere in the row), then clicking the _Delete the current record_ button ( ![Delete](/images/docs/db_delete.png) ) in the _Table_ toolbar.
7. Click the _Write Changes_ button ( ![Write](/images/docs/db_write.png) ) in the DB toolbar.
8. Re-upload to your server and restart.

![DB Browser for SQLite](/images/docs/db_browser.png)