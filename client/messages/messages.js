//get total messages with all fields
function messages() {
  return Messages.find({}, {
    sort: {
      'time': 1
    }
  });
}

//use momentjs for dates formatting
function time(time) {
  return moment(time).format("ddd DD MMM YYYY    HH:mm:ss  a");
}

//check owner messgae
function isOwner(message) {
  return Meteor.userId() === message.owner;
}

//get message counts
function messageCount() {
  return Messages.find({}, {
    sort: {
      'time': -1
    }
  }).count();
}

Template.messages.helpers({

  time: time,
  isOwner: isOwner,
  messages: messages,
  messageCount: messageCount
});
