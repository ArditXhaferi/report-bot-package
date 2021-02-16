# Discord Report Bot

![totalDownloads](https://img.shields.io/npm/dt/report-bot?style=for-the-badge)
![weeklyDownloads](https://img.shields.io/npm/dw/report-bot?style=for-the-badge)
![version](https://img.shields.io/npm/v/report-bot?style=for-the-badge)
![license](https://img.shields.io/npm/l/report-bot?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/barbarbar338/report-bot?style=for-the-badge)

# What is this?

**ReportBot** is a module that allows you to create Discord Daily Reports easily!

You can add which role of users can report and in the end of the day the bot will display which users finished their reports which not.

You can choose the schedule for the reports and the resets for new reports.

You also don't need to write any bot code if you want! You can also use this module alone. You just need a Discord Bot Token!

# Installation

`npm i report-bot --save`

# IMPORTANT NOTE

You have to turn on "Server Members Intent" option to use this package properly.

![ReactionRoleWarningImage](https://raw.githubusercontent.com/barbarbar338/lib/master/personal_page/images/reaction-role-warning.png)

## [Usage](#)

See [documentation](#) for detailed information!

```js
const { ReportBot } = require("report-bot");

const RB = new ReportBot;

RB.init("TOKEN", "GUILD", "KEYWORD");

RB.getUsers("ROLE", "CRONJOB");

RB.scheduledMessage("CHANNEL", "CRONJOB");

RB.changeCard("COLOR", "TITLE", "URL", "AUTHOR", "ICON", "DESCRIPTION", "FOOTER", "FOOTER_ICON");

```

## Useful Links

-   LinkedIn: https://www.linkedin.com/in/ardit-xhaferi/
-   Github: https://github.com/ArditXhaferi/report-bot-package
-   NPM: https://www.npmjs.com/package/report-bot
-   Docs: 

## [Contact Me For More Help](mailto:ardit@starlabspro.com)

づ｡ ◕‿‿◕｡) づ
