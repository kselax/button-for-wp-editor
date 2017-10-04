(function() {
  tinymce.create("tinymce.plugins.first_button_plugin", {

    //url argument holds the absolute url of our plugin directory
    init : function(ed, url) {
      //add new button green
      ed.addButton("green", {//название button из php 
        title : "Green Color Text",//подсказка что всплывает
        cmd : "green_command",//обработчик
        image : "https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/32x32/Circle_Green.png" //загрузка иконки из интернета
      });
      //button functionality.
      ed.addCommand("green_command", function() {
        var selected_text = ed.selection.getContent();
        var return_text = "<span style='color: green'>" + selected_text + "</span>";
        ed.execCommand("mceInsertContent", 0, return_text);
      });
      
      //add new button youtube
      ed.addButton("youtube", {//название из php
        title : "add youtube link",//подсказка что всплывает
        cmd : "youtube_command",//назначаем команду
        image : url+"/../img/1469157757_youtube.png" //загрузка иконки из нашей папки
      });
      //button functionality.
      ed.addCommand("youtube_command", function() {
        var selected_text = ed.selection.getContent();
        var return_text = "[youtube]" + selected_text + "[/youtube]";
        ed.execCommand("mceInsertContent", 0, return_text);
      });

      //add new button youtube
      ed.addButton("twitter", {//название из php
        title : "add youtube link",//подсказка что всплывает
        cmd : "twitter_command",//назначаем команду
        image : url+"/../img/1469158884_twitter.png" //загрузка иконки из нашей папки
      });
      //button functionality.
      ed.addCommand("twitter_command", function() {
        var selected_text = ed.selection.getContent();
        var return_text = "[twitter]" + selected_text + "[/twitter]";
        ed.execCommand("mceInsertContent", 0, return_text);
      });
    },

    createControl : function(n, cm) {
      return null;
    },

    getInfo : function() {
      return {
          longname : "Extra Buttons",
          author : "Narayan Prusty",
          version : "1"
      };
    }
  });
// my_button_script из php название массива
  tinymce.PluginManager.add("my_button_script", tinymce.plugins.first_button_plugin);
})();