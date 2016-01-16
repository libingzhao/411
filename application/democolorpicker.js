<script type="text/javascript">
		$(document).ready(function()
        {
			var $box = $('#colorPicker');
            $box.tinycolorpicker();
		});
	</script>
	
	
	
	
$(document).ready(function()
{
    // Initialize a colorpicker like this.
    //
    $('#box').tinycolorpicker();

    // Try this to get access to the actual colorpicker instance.
    //
    var box = $('#box').data("plugin_tinycolorpicker");

    // Now you have access to all the methods and properties.
    //
    // box.setColor("#cccccc");
    // console.log(box.colorRGB);
    //
    // etc..

    // You can bind to the change event like this.
    //
    $box.bind("change", function()
    {
        console.log("do something whhen a new color is set");
    });
});
                	
$(document).ready(function()
{
    $('#box').tinycolorpicker();

    var box = $('#box').data("plugin_tinycolorpicker");
 box.setColor("#cccccc");
     console.log(box.colorRGB);
   
    $box.bind("change", function()
    {
        console.log("do something whhen a new color is set");
    });
});
              