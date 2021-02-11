# Discord ReactionRole client

![totalDownloads](https://img.shields.io/npm/dt/reaction-role?style=for-the-badge)
![weeklyDownloads](https://img.shields.io/npm/dw/reaction-role?style=for-the-badge)
![version](https://img.shields.io/npm/v/reaction-role?style=for-the-badge)
![license](https://img.shields.io/npm/l/reaction-role?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/barbarbar338/reaction-role?style=for-the-badge)

# What is this?

ReportBot is a module that allows you to create Discord reports easily!

You can add which role of users can report and in the end of the day the bot will display which users finished their reports which not.

You can choose the schedule for the reports and the resets for new reports.

You also don't need to write any bot code if you want! You can also use this module alone. You just need a Discord Bot Token!

# Installation

`npm i reportbot --save`


# IMPORTANT NOTE

You have to turn on "Server Members Intent" option to use this package properly.

![ReactionRoleWarningImage](https://raw.githubusercontent.com/barbarbar338/lib/master/personal_page/images/reaction-role-warning.png)

## [Usage](https://reactionrole.bariscodes.me/)

See [documentation](https://reactionrole.bariscodes.me/) for detailed information!

```js
const { ReportBot } = require("reportbot");

const RB = new ReportBot;

RB.init("TOKEN", "GUILD", "KEYWORD");

RB.getUsers("ROLE", "CRONJOB");

RB.scheduledMessage("CHANNEL", "CRONJOB");

RB.changeCard("COLOR", "TITLE", "URL", "AUTHOR", "ICON", "DESCRIPTION", "FOOTER", "FOOTER_ICON");

```

## Useful Links

-   LinkedIn: https://www.linkedin.com/in/ardit-xhaferi/
-   Github: https://github.com/barbarbar338/reaction-role/
-   NPM: https://www.npmjs.com/package/reaction-role
-   Docs: https://reactionrole.bariscodes.me/

## [Contact Me For More Help](https://bariscodes.me/discord)

\ ゜ o ゜)ノ
