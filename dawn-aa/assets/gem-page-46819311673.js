

        jQuery(function() {
            var $module = jQuery('#m-1576076865410').children('.module');
            var single   = $module.attr('data-single');
            var openDefault  = $module.attr('data-openDefault');
            var openTab  = $module.attr('data-openTab');
            var mode     = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            if(openDefault == 0 || openDefault == '0') {
                openTab = '0';
            }

            $module.gfAccordion({
                single: single,
                openTab: openTab,
                mode: mode
            });

            var borderColor = $module.attr('data-borderColor');
            var borderSize = $module.attr('data-borderSize');

            $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
            $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
        });
    jQuery(function() {
  var $module = jQuery('#m-1588348605096').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588348605096-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588348605096-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588348605096-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588348605096-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588348644609').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588348644609-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588348644609-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588348644609-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588348644609-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});