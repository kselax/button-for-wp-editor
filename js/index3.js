(function() {
  tinymce.PluginManager.add('true_mce_button', 
    function( editor, url ) { // true_mce_button - ID кнопки
    editor.addButton('true_mce_button', {  // true_mce_button - ID кнопки, везде должен быть одинаковым
      text: '[misha]', // текст кнопки, если вы хотите, чтобы ваша кнопка содержала только иконку, удалите эту строку
      title: 'Вставить шорткод [misha]', // всплывающая подсказка
      icon: false, // тут можно указать любую из существующих векторных иконок в TinyMCE либо собственный CSS-класс
      onclick: function() {
        // var selected_text = editor.selection.getContent();
        // var return_text = "[misha]" + selected_text + "[/misha]";
        // editor.execCommand("mceInsertContent", 0, return_text);

        editor.insertContent('[misha]selected_text[misha]'); // вставляем шорткод [misha] в редактор, также можно задать любое действие jQuery
      }
    });
  });
})();