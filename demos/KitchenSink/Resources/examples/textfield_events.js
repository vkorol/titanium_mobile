var win = Titanium.UI.currentWindow;

var tf1 = Titanium.UI.createTextField({
	color:'#336699',
	height:35,
	top:10,
	left:10,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

//
// TEXT FIELD EVENTS (return, focus, blur, change)
//
tf1.addEventListener('return',function(e)
{
	l.text = 'return received, val = ' + e.value;
	tf1.blur();
});
tf1.addEventListener('focus',function(e)
{
	l.text = 'focus received, val = ' + e.value;
});
tf1.addEventListener('blur',function(e)
{
	l.text = 'blur received, val = ' + e.value;	
});
tf1.addEventListener('change', function(e)
{
	l.text = 'change received, val = ' + e.value;	
})

win.add(tf1);


var l = Titanium.UI.createLabel({
	top:50,
	left:10,
	width:300,
	color:'#777',
	font:{fontSize:13},
	text:'do something...'
});
win.add(l);

var focus = Titanium.UI.createButton({
	top:70,
	height:40,
	width:300,
	title:'Focus'
});
win.add(focus);
focus.addEventListener('click', function()
{
	tf1.focus();
});

var blur = Titanium.UI.createButton({
	top:120,
	height:40,
	width:300,
	title:'Blur'
});
win.add(blur);
blur.addEventListener('click', function()
{
	tf1.blur();
});

