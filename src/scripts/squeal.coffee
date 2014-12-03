# Description
#   A Hubot script that squeals
#
# Configuration:
#   HUBOT_SQUEAL_CRON_TIME
#   HUBOT_SQUEAL_CRON_TZ
#   HUBOT_SQUEAL_MESSAGES
#   HUBOT_SQUEAL_ROOM
#
# Commands:
#   None
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  {CronJob} = require 'cron'

  DEFAULT_CRON_TIME = '00 00 00 * * * *' # 00:00:00
  DEFAULT_CRON_TZ = 'Asia/Tokyo'
  DEFAULT_MESSAGES = '["ま゛ーッ","み゛ーん","らー"]'
  DEFAULT_ROOM = 'room'
  CRON_TIME = process.env.HUBOT_SQUEAL_CRON_TIME ? DEFAULT_CRON_TIME
  CRON_TZ = process.env.HUBOT_SQUEAL_CRON_TZ ? DEFAULT_CRON_TZ
  ROOM = process.env.HUBOT_SQUEAL_ROOM ? DEFAULT_ROOM
  MESSAGES = JSON.parse(process.env.HUBOT_SQUEAL_MESSAGES ? DEFAULT_MESSAGES)

  random = (items) ->
    items[Math.floor(Math.random() * items.length)]

  new CronJob(CRON_TIME, ->
    robot.messageRoom(ROOM, random(MESSAGES))
  , null, true, CRON_TZ)
