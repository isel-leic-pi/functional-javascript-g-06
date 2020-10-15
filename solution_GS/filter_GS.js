function getShortMessages(messages) {
    return messages.filter(item => item.message.length < 50)
        .map(item => item.message);
}

module.exports = getShortMessages;