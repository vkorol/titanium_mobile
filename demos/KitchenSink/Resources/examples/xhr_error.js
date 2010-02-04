var win=Titanium.UI.currentWindow;

var l1 = Titanium.UI.createLabel({
	text:'UTF-8 GET',
	font:{fontSize:16,fontWeight:'bold'},
	top:10,
	width:300,
	left:10
});
win.add(l1);

var l2 = Titanium.UI.createLabel({
	text:'Waiting for response...',
	font:{fontSize:13},
	top:40,
	left:10,
	width:300,
	color:'#888'
});
win.add(l2);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	l2.text = this.responseText;
	Titanium.UI.currentWindow.repaint();
};

xhr.onerror = function(e)
{
	l2.text = e.error;
};

// open the client
xhr.open('GET','http://www.fre100.com');

// send the data
xhr.send();
