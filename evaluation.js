javascript:void(function(){
a_list = document.getElementsByTagName('a');
for (var i = 0; i < a_list.length; i++) {
if (a_list[i].innerHTML == "评教") {
frame = document.getElementsByTagName('iframe')[0];
frame.src = a_list[i].href;
frame_document = frame.contentDocument;
console.log(frame_document.getElementsByName('jxnr').length);
if (frame_document.getElementsByName('jxnr').length == 0) {
continue;
}
frame_document.getElementsByName('jxnr')[0].setAttribute('checked', true);
frame_document.getElementsByName('jxff')[0].setAttribute('checked', true);
frame_document.getElementsByName('jxtd')[0].setAttribute('checked', true);
frame_document.getElementsByName('jxxg')[0].setAttribute('checked', true);
frame_document.getElementsByName('ztpj')[0].setAttribute('checked', true);
frame_document.getElementsByName('jssj')[0].setAttribute('checked', true);
frame_document.getElementsByName('jssk')[0].setAttribute('checked', true);
frame_document.getElementsByName('jszd')[0].setAttribute('checked', true);
frame_document.getElementsByName('kfswt')[0].value = "非常好！";
frame_document.getElementsByName('Submit')[0].click();
break;
}
}
}());