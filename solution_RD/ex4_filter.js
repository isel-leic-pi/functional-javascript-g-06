'use strict'

function getShortMessages(messages) {
      return messages
        .filter(x => x.message.length < 50)
        .map(x => x.message);
    }

module.exports = getShortMessages