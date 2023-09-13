---
layout: default
title: Storage configuration options
---

# Storage configuration options

These are the plugin storage configuration options.

```yaml title="/plugins/TARDIS/config.yml"
storage:
  database: sqlite
  mysql:
    host: localhost
    port: 3306
    database: TARDIS
    user: bukkit
    password: mysecurepassword
    prefix: ""
    useSSL: false
```

| Option                                         | Type                                                                                                                                                                                                                                     | Default Value      |
|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| storage:                                       |                                                                                                                                                                                                                                          |                    |
| &nbsp;&nbsp;`database`                         | string                                                                                                                                                                                                                                   | `sqlite`           |
|                                                | Sets the database type the plugin uses. Valid values are `sqlite` and `mysql`                                                                                                                                                            |
| &nbsp;&nbsp;`mysql:`                           |                                                                                                                                                                                                                                          |                    |
|                                                | Only applicable if `database` is set to `mysql`, otherwise this section can be ignored                                                                                                                                                   |                    |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`host`     | string                                                                                                                                                                                                                                   | `localhost`        |
|                                                | Sets the host of the mysql database, where:<br />`localhost` = the ip address or hostname of the MySQL server (if the MySQL server is on the same server as the Spigot server, you can usually use `localhost`                           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`port`     | integer                                                                                                                                                                                                                                  | `3306`             |
|                                                | Sets the mysql server port, where:<br />`3306` = the port on which the MySQL server is running (usually 3306)                                                                                                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`database` | string                                                                                                                                                                                                                                   | `TARDIS`           |
|                                                | Sets the name of the database to connect to, where:<br />`TARDIS` = the name of the database where the TARDIS data will be stored                                                                                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`user`     | string                                                                                                                                                                                                                                   | `bukkit`           |
|                                                | Sets the user that connects to the mysql database                                                                                                                                                                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`password` | string                                                                                                                                                                                                                                   | `mysecurepassword` |
|                                                | Sets the password to connect to the mysql database                                                                                                                                                                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`prefix`   | string                                                                                                                                                                                                                                   | `''`               |
|                                                | Sets the prefix added to the table names used in the mysql database. Spigot servers will generally only use one database, so to distinguish the TARDIS tables from other plugins this should probably be set to something like `tardis_` |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`use_SSL`  | boolean                                                                                                                                                                                                                                  | `false`            |
|                                                | Sets whether to use an SSL connection to the MySQL database                                                                                                                                                                              |

[Back to main configuration page](category/plugin-configuration)
