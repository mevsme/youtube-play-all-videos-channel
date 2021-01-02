var hr = new Array();
var hrefs = new Array();
var str;
var st2;
var st3 = 'https://www.youtube.com/watch_videos?feature=c4-overview&type=0&video_ids=';
var st4 = '';
hrefs = $('[id="thumbnail"][rel="null"]').each(function(){
  
  str = $(this).attr('href');
  st2 =  str.replace('/watch?v=', '');
  hr.push(st2);
})
hr.shift();
for (var i in hr) {
	st3 = st3 + hr[i] + ',';
}
