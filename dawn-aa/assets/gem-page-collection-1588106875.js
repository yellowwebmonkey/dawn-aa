
jQuery(function() {
    var $module = jQuery('#m-1588107032631').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});jQuery(function() {
  var $module = jQuery('#m-1588107032631-child1').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588107032631-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588107032631-child1-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588107032631-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588107032631-child2').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588107032631-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588107032631-child2-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588107032631-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588107032631-child3').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588107032631-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588107032631-child3-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588107032631-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588107032631-child4').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588107032631-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588107032631-child4-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588107032631-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
    var $hero = jQuery('#m-1588106881071');
    var $module = jQuery('#m-1588106881071').children('.module');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    
    $hero.removeAttr('style');

    var collectionImg = $module.attr('data-collection-image');
    if (collectionImg != undefined && collectionImg != "") {
        $hero.css('background-image', 'url(' + collectionImg + ')');
    } else {
        var defaultImg = $module.attr('data-image');
        $hero.css('background-image', 'url(' + defaultImg + ')');
    }

    var effect = $module.attr('data-effect');
    var transition = $module.attr('data-transition');

    $hero.removeClass('effect-zoom').removeClass('effect-parallax');
    if (effect != 'none') {
        $hero.addClass(effect);
    }
    
    if (effect == 'effect-zoom') {   
        $hero.css('background-attachment', 'initial');  

        setTimeout(function() {
            var backgroundImage = $hero.css('background-image');
            var backgroundSize = $hero.css('background-size');
            var backgroundPosition = $hero.css('background-position');
            $module.siblings('.gf_hero-bg-wrap').css({
                'background-image'      : 'inherit',
                'background-size'       : 'inherit',
                'background-position'   : 'inherit',
                '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                'transition'            : 'transform ' + transition + 's ease-in-out'
            })
            $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                'background-image'      : 'inherit',
                'background-size'       : 'inherit',
                'background-position'   : 'inherit',
                '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                'transition'            : 'transform ' + transition + 's ease-in-out'
            });
        }, 300);
    } else if (effect == 'effect-parallax') {
        $hero.css('background-attachment', 'fixed');
    } else {
        $hero.css('background-attachment', 'initial');
    }
});jQuery(function() {
    var $module = jQuery('#m-1588106881071-0');
    
});jQuery(function() {
    var $module = jQuery('#m-1588106880694').children('.module');
    var $collectionFilter = $module.find('.gf_collection-filter');
    var $sortCollection = $module.find('.gf_sort-collection');
    
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    var resizeSelect = function() {
        var $collectionFilterRuler = jQuery('<select><option></option></select>');
        var $sortCollectionRuler = jQuery('<select><option></option></select>');

        if ($collectionFilter.find('option:selected').length > 0) {
            $collectionFilterRuler.find('option').html($collectionFilter.find('option:selected').text());
        } else {
            $collectionFilterRuler.find('option').html($collectionFilter.find('option:first').text());
        }
        
        $collectionFilterRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_collection-filter-wrapper'));
        
        if ($sortCollection.find('option:selected').length > 0) {
            $sortCollectionRuler.find('option').html($sortCollection.find('option:selected').text());
        } else {
            $sortCollectionRuler.find('option').html($sortCollection.find('option:first').text());
        }
        $sortCollectionRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_sort-collection-wrapper'));
        var collectionFilterWidth = $collectionFilterRuler.width() + $collectionFilter.outerWidth() - $collectionFilter.width();
        var sortCollectionWidth = $sortCollectionRuler.width() + $sortCollection.outerWidth() - $sortCollection.width();
        
        if (collectionFilterWidth > sortCollectionWidth) {
            $collectionFilter.css('width', collectionFilterWidth);
            $sortCollection.css('width', collectionFilterWidth);
        } else {
            $collectionFilter.css('width', sortCollectionWidth);
            $sortCollection.css('width', sortCollectionWidth);
        }

        $collectionFilterRuler.remove();
        $sortCollectionRuler.remove(); 
    }

    resizeSelect();

    // Collection Filter
    $collectionFilter.bind('change', function(e) {
        if (mode == 'dev') {
            resizeSelect();
        } else {
            var tag = jQuery(this).val();
            
            var currentLocation = window.location.href;
            
            var baseUrl = currentLocation.slice(0, currentLocation.indexOf('/collections/'));
            var tailUrl = currentLocation.slice(currentLocation.indexOf('/collections/') + '/collections/'.length);
            var collectionName = tailUrl.slice(0, tailUrl.indexOf('?') == -1 ? undefined : tailUrl.indexOf('?'));
            var collectionName = collectionName.slice(0, collectionName.indexOf('/') == -1 ? undefined : collectionName.indexOf('/'));
            var query = location.search;
            query = query.replace(/page=\d*/ig ,'').replace('?&', '?').replace('&&', '&')

            window.location.href = baseUrl + '/collections/' + collectionName + ((tag == undefined || tag == '') ? '' : ('/' + tag)) + query;
            
        }
    });

    // Sort Collection
    $sortCollection.bind('change', function(e) {
        if (mode == 'dev') {
            resizeSelect();
        } else {
            var newSortBy = e.target.value;
            var currentSearch = location.search;
            var sortRegex = /sort_by=[\w-]+/ig;

            if (sortRegex.test(currentSearch)) {
                if (newSortBy != '') {
                    currentSearch = currentSearch.replace(sortRegex, 'sort_by=' + newSortBy);
                } else {
                    currentSearch = currentSearch.replace(sortRegex, '');
                    while (currentSearch.indexOf('&&') != -1) {
                        currentSearch.replace('&&', '&');
                    }
                }
            } else if (currentSearch == '' || currentSearch == '?') {
                currentSearch = '?sort_by=' + newSortBy;
            } else {
                currentSearch += ('&sort_by=' + newSortBy);
            }

            location.search = currentSearch;
        }
    });
});jQuery(function() {
    var $module = jQuery('#m-1588106880780').children('.module');

    var sameHeightTitle = $module.data('sameheightitle'),
        spacing = $module.data('spacing');
        collg = $module.data('collg'),
        colmd = $module.data('colmd'),
        colsm = $module.data('colsm'),
        colxs = $module.data('colxs');

    var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
    var col = collg;


    jQuery(window).resize(function() {
        setTimeout(function() {
            for(var i = 0; i < $clearfixes.length; i++) {
                if($clearfixes.eq(i).css('display') == 'block') {
                    if($clearfixes.eq(i).hasClass('visible-lg')) {
                        col = collg;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-md')) {
                        col = colmd;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-sm')) {
                        col = colsm;
                        break;
                    }
                    if($clearfixes.eq(i).hasClass('visible-xs')) {
                        col = colxs;
                        break;
                    }
                }
            }
        }, 1000);
    });

    if(sameHeightTitle == '1') {
        var minHeight = 0;

        $module.find('.product-single__title').each(function() {
        });
    } else {
    }

    jQuery($module).css('padding', spacing);
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child1').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child1-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child1-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child1-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child1-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child2').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child2-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child2-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child2-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child2-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child3').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child3-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child3-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child3-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child3-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child4').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child4-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child4-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child4-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child4-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child5').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child5-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child5-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child5-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child5-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child6').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child6-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child6-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child6-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child6-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child7').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child7-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child7-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child7-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child7-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child8').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child8-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child8-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child8-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child8-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child9').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child9-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child9-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child9-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child9-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child10').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child10-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child10-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child10-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child10-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child11').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child11-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child11-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child11-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child11-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child12').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1588106880780-child12-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1588106880780-child12-1').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1588106880780-child12-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
  var $module = jQuery('#m-1588106880780-child12-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
    var $module = jQuery('#m-1588106880765').children('.module');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    
    if (mode == 'dev') {
        var $paginator = $module.find('.gf_collection-paginator-wrapper');
        if ($paginator.length > 0) {
            var productCount = $paginator.attr('data-product-count');
            var previousText = $module.attr('data-previous');
            var nextText = $module.attr('data-next');
            var activeColor = $module.attr('data-active-color');      

            var applyEvents = function() {
                $paginator.children('span:not(.deco)').off('click').on('click', function() {
                    var currentPage = parseInt($paginator.children('.current').text()) - 1;
                
                    if (jQuery(this).hasClass('prev')) {
                        currentPage--;
                    } else if (jQuery(this).hasClass('next')) {
                        currentPage++;
                    } else {
                        currentPage = parseInt(jQuery(this).text()) - 1;
                    }
                    render(currentPage);
                })
            }

            var render = function(currentPage) {
                $paginator.html('');

                if (currentPage != 0) {
                    $paginator.append('<span class="prev">' + previousText + '</span>')
                }
                
                if (currentPage - 2 > 0) {
                    $paginator.append('<span class="page">1</span>');
                }

                if (currentPage -2 > 1) {
                    $paginator.append('<span class="deco">...</span>');
                }

                for (var i = Math.max(0, currentPage - 2); i <= Math.min(currentPage + 2, productCount - 1); i++) {
                    $paginator.append('<span class="page' + (currentPage == i ? ' current' : '') + '">' + (i + 1) + '</span>');
                }

                if (currentPage + 2 < productCount - 2) {
                    $paginator.append('<span class="deco">...</span>');
                }

                if (currentPage + 2 < productCount - 1) {
                    $paginator.append('<span class="page">' + productCount + '</span>');
                }

                if (currentPage != productCount - 1 && productCount != 0) {
                    $paginator.append('<span class="next">' + nextText + '</span>')
                }

                applyEvents();
            }

            render(0);
        }
    }
});