const Discord = require('discord.js');
const cron = require('cron');
const d = new Date();
const { Intents } = require('discord.js');
const myIntents = new Intents();
myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS');

// const bot = new Discord.Client();

class ReportBot extends Discord.Client{

    init(token, guild, keyword){
        
        this.login(token);
        
        this.employees = {};
        
        this.on('ready', () => {
            this.guild = this.guilds.cache.get(guild);
        })

        this.on('message', async(message) => {
            let rep = message.content.toLowerCase();
            if (rep.includes(keyword)) {
                delete this.employees[message.author.id];
            }
        })

        this.card = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Daily Reports')
        .setURL('https://discord.js.org/')
        .setAuthor('Report Bot', 'https://i.imgur.com/UJ0ULF0.png')
        .setDescription('The list of people who forgot their daily reports.')
        .setFooter('Daily Report Bot', 'https://i.imgur.com/wSTFkRM.png');
    }

    changeCard(color, title, url, author, icon, description, footer, footer_icon){
        this.card = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setURL(url)
        .setAuthor(author, icon)
        .setDescription(description)
        .setFooter(footer, footer_icon);
    }

    getUsers(role, cronjob){
        this.on('ready', () => {

            let scheduledGetUsers = new cron.CronJob(cronjob, () => {
                let users = this.guild.roles.cache.get(role).members;
                users.forEach(user => {
                    this.employees[user['user']['id']] = user['user']['username'];
                })
            });

            scheduledGetUsers.start();

        })
    }

    scheduledMessage(channel, cronjob){
        let scheduledMessage = new cron.CronJob(cronjob, () => {
            this.makeMessage(channel, this.employees);
        });

        scheduledMessage.start();
    }

    makeMessage(channel, data) {
        channel = this.guild.channels.cache.get(channel);
        var missingReports = Object.values(data);
        var missingReportsIds = Object.keys(data);
        let index = 0;
        let card = this.card;
        missingReports.forEach(user => {
            card.addFields({
                name: user,
                value: '<@' + missingReportsIds[index] + '>',
                inline: true
            }, );
            index++;
        });
        channel.send(card);
        card.fields = [];
    }

    alertUsers(cronjob, message){

        let alertUsers = new cron.CronJob(cronjob, () => {
            let missingReportsIds = Object.keys(this.employees);
            missingReportsIds.forEach(id => {
                this.users.cache.get(id).send(message).catch(err => console.log());
            });
        });

        alertUsers.start();

    }
}

RB = new ReportBot;
RB.init("Njk5MDE4NDE2MjIwMTQzNjc3.XpORoQ.Hu-0Qo2byeJ1xjy8E9ABYeuQX1s", "676058051530326016", "report");
RB.getUsers("679833392539500568", "* * * * *");
RB.changeCard('#0099ff', 'test Reports');
RB.scheduledMessage("676058051530326019", "*/2 * * * *");

exports.ReportBot = ReportBot;
