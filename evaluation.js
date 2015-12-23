javascript:void(function(){

function evaluate_single(a_list, index, callback) {
	while (index < a_list.length && a_list[index].innerHTML != "评教") {
		index++;
	}
	if (index == a_list.length) {
		alert("Evaluate Successfully!");
		window.location.reload();
		return;
	}
	frame = document.getElementsByTagName('iframe')[0];
	frame.src = a_list[index].href;
	frame.onload = function() {
		frame_document = frame.contentDocument;
		if (frame_document.getElementsByName('jxnr').length > 0) {
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
		}
		_callback = callback;
		_index = index + 1;
		setTimeout("_callback(a_list, _index, _callback)", 100);
	}
}

a_list = document.getElementsByTagName('a');
evaluate_single(a_list, 0, evaluate_single);

}());