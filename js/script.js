$(document).ready(function() {
	//По нажатию на кнопку Добавить, в списке появляется заметка
	$("input[name='add']")
		.click(function () {
			var $name = $("input[name='name']").val();
			var $body = $("input[name='body']").val();
			$(".todo-list").append("<div class='todo-item'>"+"<p class='item-head' >" + $name + "</p>" + "<p class='item-body'>" +$body+ "</p>"+ "<input type='checkbox' name='todo-check' value=''>" +"</div>");
			$("input[name='name'], input[name='body']").val('');
		});

//Функция для добавления заметки по нажатию на Enter
function addItem () {
	var $name = $("input[name='name']").val();
	var $body = $("input[name='body']").val();
		$(".todo-list").append("<div class='todo-item'>"+"<p class='item-head' >" + $name + "</p>" + "<p class='item-body'>" +$body+ "</p>"+ "<input type='checkbox' name='todo-check' value=''>" +"</div>")
	$("input[name='name'], input[name='body']").val('');
}

//Если чекбокс отмечен - удаляем
$("#del-check").click(function() {
	var $delCheck = $(".todo-item input:checked").length;
	if ($delCheck != 0) {
		$(".todo-item").has("input:checked").remove();
		}
	})

//Двойной ЛКМ по заголовку или "телу" заметки, чтобы сделать поля редактируемыми
$(".item-head, .item-body").dblclick(function() {
	if($(this).focus()) {
		$(this).attr("contenteditable", "true");
	} else if ($(this).blur()){
		$(this).attr("contenteditable", "false");
	}
});

//Отметка всех заметок или наоборот
$("#check-all").click(function() {
	var $kol = $(".todo-item input:checked").length;//Количество отмеченных чекбоксов
	var $kol2 = $(".todo-item input").length;//Количество всех чекбоксов
	//Если кол-во "сделанных" чеков не равно общему количество, то отмечаются все не отмеченные
	if($kol != $kol2) {
		$(".todo-item input:not(:checked)").click();
	}
	//Если выделены все заметки,"Отметить все заметки".prop(checked) == false, то сначала выделится общий чек, а затем снимутся чеки со всех заметок
	if($kol == $kol2 && $(this).prop("checked") == false)	{
		$(".todo-item input:checked").click();
	}
		});

//Сама обработка нажатия для добавления заметки по Enter
$("input[name='name'], input[name='body']").keypress(function(e) {
	if (e.which == 13) {
		addItem();
	}
});

//Удаление заметки по кнопке Удалить
	$("input[name='del']").click(function() {
		$(".todo-item:last").remove();
			});
});