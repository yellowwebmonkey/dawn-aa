

    
    jQuery(function() {
        var $module = jQuery('#m-1575671074199').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1575671074199-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1575671074199-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1575671074199-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1575671074199-3').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    