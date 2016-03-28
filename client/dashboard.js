Template.dashboard.helpers({
	'field1' : function() {
		var field1 = Session.get('field1');
		//console.log(field1);
		return field1;
	},
	'field2' : function() {
		var field1 = Session.get('field2');
		//console.log(field1);
		return field1;
	},
	'field3' : function() {
		var field1 = Session.get('field3');
		//console.log(field1);
		return field1;
	}
});

Template.dashboard.events({
	'click button' : function() {
		Meteor.http.call("GET", "https://api.thingspeak.com/channels/103532/feeds.json?results=1", {}, function(error, response) {
			if(error)
			{
				console.log("error");
			}
			else
			{
				var feeds = response.data.feeds;
				for(var key in feeds)
				{
					Session.set('field1', feeds[key].field1);
					Session.set('field2', feeds[key].field2);
					Session.set('field3', feeds[key].field3);
				}
			}
		});
	}
});

