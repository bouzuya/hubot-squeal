// Description
//   A Hubot script that squeals
//
// Configuration:
//   HUBOT_SQUEAL_CRON_TIME
//   HUBOT_SQUEAL_CRON_TZ
//   HUBOT_SQUEAL_MESSAGES
//   HUBOT_SQUEAL_ROOM
//
// Commands:
//   None
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var CRON_TIME, CRON_TZ, CronJob, DEFAULT_CRON_TIME, DEFAULT_CRON_TZ, DEFAULT_MESSAGES, DEFAULT_ROOM, MESSAGES, ROOM, random, _ref, _ref1, _ref2, _ref3;
  CronJob = require('cron').CronJob;
  DEFAULT_CRON_TIME = '00 00 00 * * * *';
  DEFAULT_CRON_TZ = 'Asia/Tokyo';
  DEFAULT_MESSAGES = '["ま゛ーッ","み゛ーん","らー"]';
  DEFAULT_ROOM = 'room';
  CRON_TIME = (_ref = process.env.HUBOT_SQUEAL_CRON_TIME) != null ? _ref : DEFAULT_CRON_TIME;
  CRON_TZ = (_ref1 = process.env.HUBOT_SQUEAL_CRON_TZ) != null ? _ref1 : DEFAULT_CRON_TZ;
  ROOM = (_ref2 = process.env.HUBOT_SQUEAL_ROOM) != null ? _ref2 : DEFAULT_ROOM;
  MESSAGES = JSON.parse((_ref3 = process.env.HUBOT_SQUEAL_MESSAGES) != null ? _ref3 : DEFAULT_MESSAGES);
  random = function(items) {
    return items[Math.floor(Math.random() * items.length)];
  };
  return new CronJob(CRON_TIME, function() {
    return robot.messageRoom(ROOM, random(MESSAGES));
  }, null, true, CRON_TZ);
};
