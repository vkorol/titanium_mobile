var win = Titanium.UI.currentWindow;

var ind=Titanium.UI.createProgressBar({
	width:200,
	height:50,
	min:0,
	max:1,
	value:0,
	style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	top:10,
	message:'Downloading PDF File',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#888'
});

win.add(ind);
ind.show();

var c = Titanium.Network.createHTTPClient();

c.onload = function()
{
	Ti.API.info('IN ONLOAD')
};
c.ondatastream = function(e)
{
	ind.value = e.progress ;
	Ti.API.info('ONDATASTREAM - PROGRESS: ' + e.progress);
}
// open the client
c.open('GET','http://www.appcelerator.com/assets/The_iPad_App_Wave.pdf');

// send the data
c.send();


