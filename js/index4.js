(function() {
  tinymce.PluginManager.add('my_button_script4', function( editor, url ) { // id кнопки true_mce_button должен быть везде один и тот же
    editor.addButton( 'fourth_button', { // id кнопки true_mce_button
      icon: 'perec', // мой собственный CSS класс, благодаря которому я задам иконку кнопки
      text: 'knopka',
      image: url+"/../img/1469157757_youtube.png",
      type: 'menubutton',
      title: 'Вставить элемент', // всплывающая подсказка при наведении
      menu: [ // тут начинается первый выпадающий список
        {
          text: 'Элементы форм',
          menu: [ // тут начинается второй выпадающий список внутри первого
            {
              text: 'Текстовое поле',
              onclick: function() {
                editor.windowManager.open( {
                  title: 'Задайте параметры поля',
                  body: [
                    {
                      type: 'textbox', // тип textbox = текстовое поле
                      name: 'textboxName', // ID, будет использоваться ниже
                      label: 'ID и name текстового поля', // лейбл
                      value: 'comment' // значение по умолчанию
                    },
                    {
                      type: 'textbox', // тип textbox = текстовое поле
                      name: 'multilineName',
                      label: 'Значение текстового поля по умолчанию',
                      value: 'Привет',
                      multiline: true, // большое текстовое поле - textarea
                      minWidth: 300, // минимальная ширина в пикселях
                      minHeight: 100 // минимальная высота в пикселях
                    },
                    {
                      type: 'listbox', // тип listbox = выпадающий список select
                      name: 'listboxName',
                      label: 'Заполнение',
                      'values': [ // значения выпадающего списка
                        {text: 'Обязательное', value: '1'}, // лейбл, значение
                        {text: 'Необязательное', value: '2'}
                      ]
                    }
                  ],
                  buttons: [{
                    text: 'Do Action',
                    subtype: 'primary',
                    align: 'left',
                    onclick: function() {
                      // TODO: handle primary button click
                      //отправляем данные формы
                      (this).parent().parent().submit();
                    }
                  },
                  {
                    text: 'Close',
                    onclick: function() {
                      (this).parent().parent().close();
                    }
                  },
                  {
                    text: 'link'
                  }
                  ],

                  onsubmit: function( e ) { // это будет происходить после заполнения полей и нажатии кнопки отправки
                    editor.insertContent( '[textarea id="' + e.data.textboxName + '" value="' + e.data.multilineName + '" required="' + e.data.listboxName + '"]');
                  }
                });
              }
            },
            { // второй элемент вложенного выпадающего списка, прост вставляет шорткод [button]
              text: 'Кнопка отправки',
              onclick: function() {
                editor.insertContent('[button]');
              }
            }
          ]
        },
        { // второй элемент первого выпадающего списка, просто вставляет [misha]
          text: 'Шорткод [misha]',
          onclick: function() {
            editor.insertContent('[misha]');
          }
        }
      ]
    });
  });
})();
