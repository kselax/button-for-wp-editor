(function() {
  tinymce.create("tinymce.plugins.true_mce_button", {

    //url argument holds the absolute url of our plugin directory
    init : function(ed, url) {
      
      //add new button youtube
      ed.addButton("twitter1", {//название из php
        title : "add twitter-2 link",//подсказка что всплывает
        cmd : "twitter1_command",//назначаем команду
        image : url+"/../img/1469158884_twitter.png" //загрузка иконки из нашей папки
      });
      //button functionality.
      ed.addCommand("twitter1_command", function() {
        var selected_text = ed.selection.getContent();
        var return_text = "[twitterkk]" + selected_text + "[/twitter]";
        ed.execCommand("mceInsertContent", 0, return_text);
      });

      //add new button url
      ed.addButton("url1", {//название из php
        title : "add url link",//подсказка что всплывает
        cmd : "url_command",//назначаем команду
        text: "[url]",
        image : url+"/../img/1469158884_twitter.png" //загрузка иконки из нашей папки
      });
      //button functionality.
      ed.addCommand("url_command", function() {
        ed.windowManager.open( {
          title: 'Задайте параметры url',
          body: [
            {
              type: 'textbox', // тип textbox = текстовое поле
              name: 'textboxName', // ID, будет использоваться ниже
              label: 'url ссылки', // лейбл
              value: '', // значение по умолчанию
              minWidth: 300, // максимальная ширина в пикселях
            },
            {
              type: 'textbox', // тип textbox = текстовое поле
              name: 'multilineName',
              label: 'uncore',
              //считываем из поля выделенный текст
              value: function(){
                return (ed.selection.getContent()).trim();
              }(),
              minWidth: 300, // максимальная ширина в пикселях
            },  
          ],
          
          onsubmit: function( e ) { // это будет происходить после заполнения полей и нажатии кнопки отправки
            if(e.data.textboxName.trim()=='')
              return;
            if(e.data.multilineName.trim()=='')
              e.data.multilineName=e.data.textboxName;
            var return_text='[url href="' + e.data.textboxName+'"]'+ e.data.multilineName+'[/url]';
            ed.execCommand("mceInsertContent", 0, return_text);

          }
        });
        // var selected_text = ed.selection.getContent();
        // var return_text = "[twitterkk]" + selected_text + "[/twitter]";
        // ed.execCommand("mceInsertContent", 0, return_text);
      });

      //add new button youtube
      ed.addButton("youtube1", {//название из php
        title : "add url link",//подсказка что всплывает
        cmd : "youtube_command",//назначаем команду
        text: "[youtube]",
        image : url+"/../img/1469158884_twitter.png" //загрузка иконки из нашей папки
      });
      //button functionality.
      ed.addCommand("youtube_command", function() {
        ed.windowManager.open( {
          title: 'Задайте параметры youtube',
          body: [
            {
              type: 'textbox', // тип textbox = текстовое поле
              name: 'url', // ID, будет использоваться ниже
              label: 'url ссылки:', // лейбл
              value: function(){
                return (ed.selection.getContent()).trim();
              }(), // значение по умолчанию
              minWidth: 300, // минимальная ширина в пикселях
              // minHeight: 100 // минимальная высота в
            },
            {
              type: 'textbox', // тип textbox = текстовое поле
              name: 'width',
              label: 'width:',
              value: '',
              maxWidth: 100, // максимальная ширина в пикселях
            }, 
            {
              type: 'textbox', // тип textbox = текстовое поле
              name: 'height',
              label: 'height:',
              value: '',
              maxWidth: 100, // максимальная ширина в пикселях
            },  
          ],
          
          onsubmit: function( e ) { // это будет происходить после заполнения полей и нажатии кнопки отправки
            if(e.data.width.trim()==''||e.data.height=='')
              var return_text='[youtube]'+e.data.url+'[/youtube]';
            else
              var return_text='[youtube width="' + e.data.width+'" height="'+e.data.height+'"]'+ e.data.url+'[/youtube]';

            ed.execCommand("mceInsertContent", 0, return_text);

          }
        });
        // var selected_text = ed.selection.getContent();
        // var return_text = "[twitterkk]" + selected_text + "[/twitter]";
        // ed.execCommand("mceInsertContent", 0, return_text);
      });


    },

    createControl : function(n, cm) {
      return null;
    },

    getInfo : function() {
      return {
          longname : "Extra Buttons",
          author : "Narayan Prusty",
          version : "2"
      };
    }
  });

  tinymce.PluginManager.add("my_button_script2", tinymce.plugins.true_mce_button);
})();