(function() {
    //RaffaMoreira  based on https://github.com/Fortyseven/nCage
    var main = function($) { 
        
        var self = $. raffaMoreira = new function(){};
        
        $.extend(self, {
            raffaImgs : [
            'https://upload.wikimedia.org/wikipedia/commons/8/84/RaffaBro.png',
            'http://images.virgula.com.br/2018/01/IMG-20171129-WA0002.jpg',
            'https://portalrapmais.com/wp-content/uploads/2018/04/raffa-moreira-plot-twist.jpg',
            'https://3.bp.blogspot.com/-5zP2-ZilzbQ/WmqoZDwgKLI/AAAAAAAAeo0/A5uFaDoon0MyFBEy_k4xid2cPAPN04VnwCLcBGAs/s1600/mrmrmrdd.png',
            'https://pbs.twimg.com/profile_images/992232089511657474/atpJZ5y9_400x400.jpg',       
            ],
            handleImages : function (lstImgs, time)
            {
                $.each($('img'), function(i,item) { 
                    //Skip if image is already replaced
                    if($.inArray($(item).attr('src'), lstImgs) == -1)
                    {
                        var h = $(item).height();
                        var w = $(item).width();
                        
                        //If image loaded
                        if(h > 0 && w > 0)
                        {
                            //Replace
                            $(item).css('width', w + 'px').css('height', h + 'px');
                            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                        }
                        else
                        {
                            //Replace when loaded
                            $(item).load(function(){
                                //Prevent 'infinite' loop
                                    if($.inArray($(item).attr('src'), lstImgs) == -1)
                                    {
                                        var h = $(item).height();
                                        var w = $(item).width();
                                        $(item).css('width', w + 'px').css('height', h + 'px');
                                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                                    }
                                });
                            }
                        }
                    });
                    
                    //Keep replacing
                    if(time > 0)
                        setTimeout(function(){self.handleImages(lstImgs, time);},time);
                }
            });

        //Run on jQuery ready
        $(function(){
            self.handleImages(self.raffaImgs, 3000);
        });
    };

    //Method to load jQuery
    function loadJS(src, callback) {
        var s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
            var state = s.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                callback.done = true;
                callback();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(s);
    }
    
    //Add jQuery if not present, then run main
    if(typeof jQuery == 'undefined') {
        loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
            jQuery.noConflict();
            main(jQuery);
        });
    }else {
        main(jQuery);
    }
 })();
 
 
