---
layout: default
title: Bug Reports and Feature Requests
---

# Bug Reports &amp; Feature Requests

Please post a GitHub [issue](https://github.com/eccentricdevotion/TARDIS/issues) for TARDIS plugin requests and bugs, thank you :)

* Use the **New issue** button on the top right of the issues page
* Select the type of issue you want create
  
  ![New Issue](/images/docs/new_issue.png)

:::tip

Make sure you have read the [FAQs](faqs) first, as your question may already be answered there.

You can also search for a previous issue with the same/similar problem. Use the **Closed** link, then type in the search field to enter your query.

![Closed issues](/images/docs/closed_issues.png)

:::

## Bug reports

If you are going to create a BUG ticket you need to supply relevant information &mdash; as a minimum you need:

* Exact Spigot/Paper version i.e. NOT _the latest_ &mdash; use the `/tardis version` command if possible, and copy from server log
* Exact TARDIS version i.e. NOT _the latest_ &mdash; use the `/tardis version` command if possible, and copy from server log
* The server log showing the entire error (as a [Pastebin](https://pastebin.com/) or similar, or upload the actual log file &mdash; _please DO NOT upload a screenshot_) &mdash; this should be the log from when the server starts up right through to when the error occurs

:::tip

The TARDIS plugin has a configuration option to turn on extra debug messages. Use the command `/tardisconfig debug true` to enable this. When `debug` is `true` the plugin will also extract all TARDIS related messages and write them to _/plugins/TARDIS/filtered.log_. If this file is available, please upload it to the issue.

:::

* If there is no error in the log, try the tip above first, otherwise a video of the bug happening or written step by step description; explain every step you took in a clear and unambiguous way. Numbering your steps really helps when communicating about the problem you encountered.. 
* Attach your plugins/TARDIS/config.yml file or other configuration file if relevant
* Attach your plugins/TARDIS/TARDIS.db file if relevant
* List of other plugins on server