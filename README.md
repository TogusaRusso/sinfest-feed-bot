# sinfest-feed-bot
Simple Telegram bot for posting Sinfest webcomic updates

Created with Heroku platform (free accont) in mind, so it needs this Heroku addons to work

Heroku Scheduler
It must run 'node bot.js' every hour. 

mLab MongoDB
Way to store already published links.

Also bot uses this enviroment variables to setup

TOKEN - token of your bot.
CHANNEL - name of channel where to post. (Without @)
