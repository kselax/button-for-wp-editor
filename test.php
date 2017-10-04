<?php
namespace robido; 

/*
Plugin Name: Test
Description: Test
*/

class Test{
	var $page_title;
	var $menu_title;
	var $short_description;
	var $add_to_page;
	var $access_level;

	function __construct(){
		$this->page_title='test-title';
		$this->menu_title='test-menu';
		$this->short_description='description';
		$this->add_to_page=1;//page
		$this->access_level=5;//access

		add_action('admin_menu', array($this, 'add_admin_page'));
		//добавляем свою кнопку для вставки видео ютуб
		// if($_GET['page']==='test/test.php'){
			//добавляет к Tine mce Javascript
		// add_action('admin_init', 'ididi' );

		// function ididi(){
			add_filter("mce_external_plugins", array($this, "enqueue_plugin_scripts"));
			//добавляет кнопку к редактору
			add_filter("mce_buttons", array($this, "register_buttons_editor"));

			//добавляет в 2 поле кнопки
			add_filter("mce_buttons_2", array($this, "register_buttons_editor_2"));
			//добавление в 3 поле кнопоки
			add_filter("mce_buttons_3", array($this, "register_buttons_editor_3"));
			//добавление в 4 поле кнопоки
			add_filter("mce_buttons_4", array($this, "register_buttons_editor_4"));
		// }
	}
	function add_admin_page(){
		if($this->add_to_page==1)
			add_menu_page( $this->page_title, 
				$this->menu_title, $this->access_level,
				__FILE__, array($this, 'admin_page') );
	}
	function admin_page(){
		echo "this is my page<br>";
		$settings=array(
			'wpautop' => 1,//применять функцию wpautop
			'media_buttons' => 1,//включить медиакнопку
			'textarea_name' => 'description', //нужно указывать!
			'textarea_rows' => 7,
			'tabindex'      => null,
			'editor_css'    => '',
			'editor_class'  => '',
			'teeny'         => 0,
			'dfw'           => 0,
			'tinymce'       => 1,
			'quicktags'     => 1,
			'drag_drop_upload' => false
		);
		wp_editor($_POST['description'], 'content', $settings );
	}

	//добавляем скрипт для кнопки редактора
	public static function enqueue_plugin_scripts($plugin_array)
	{
		// echo plugin_dir_url(__FILE__) . "/js/index.js";
	    //enqueue TinyMCE plugin script with its ID.
	    $plugin_array["my_button_script"] =  plugin_dir_url(__FILE__) . "js/index.js";
	    //подключаем второй файл
	    $plugin_array["my_button_script2"] =  plugin_dir_url(__FILE__) . "js/index2.js";
	    //
	    $plugin_array["true_mce_button"] =  plugin_dir_url(__FILE__) . "js/index3.js";

	    $plugin_array["my_button_script4"] =  plugin_dir_url(__FILE__) . "js/index4.js";
	    return $plugin_array;
	}
	//добавляем кнопку в сам вордпресс
	public static function register_buttons_editor($buttons)
	{
	    //register buttons with their id.
	    array_push($buttons, "green");
	    array_push($buttons, "youtube");
	    array_push($buttons, "twitter");
	    array_push($buttons, "url");

	    // array_push($buttons, "twitter1");
	    
	    return $buttons;
	}
	//добавляем кнопку в сам вордпресс
	public static function register_buttons_editor_2($buttons)
	{
	    //register buttons with their id.
	    array_push($buttons, "twitter1");
	    array_push($buttons, "url1");
	    array_push($buttons, "youtube1");
	    
	    return $buttons;
	}
	//добавляем кнопку в сам вордпресс
	public static function register_buttons_editor_3($buttons)
	{
	    //register buttons with their id.
	    array_push( $buttons, 'true_mce_button' ); // true_mce_button - идентификатор кнопки
	    
	    return $buttons;
	}
	//добавляем кнопку в сам вордпресс
	public static function register_buttons_editor_4($buttons)
	{
	    //register buttons with their id.
	    array_push( $buttons, 'fourth_button' ); // true_mce_button - идентификатор кнопки
	    
	    return $buttons;
	}

}

$obj=new Test();

// if it below incomment all will work good


// function Penqueue_plugin_scripts($plugin_array)
// {
// 	// echo plugin_dir_url(__FILE__) . "/js/index.js";
//     //enqueue TinyMCE plugin script with its ID.
//     $plugin_array["green_button_plugin"] =  plugin_dir_url(__FILE__) . "/js/index.js";
//     return $plugin_array;
// }

// add_filter("mce_external_plugins", "Penqueue_plugin_scripts");

// function Pregister_buttons_editor($buttons)
// {
//     //register buttons with their id.
//     array_push($buttons, "green");
//     return $buttons;
// }

// add_filter("mce_buttons", "Pregister_buttons_editor");