
app.directive('fina', function ($timeout,$http) {
    return {
        restrict: 'EA',
        templateUrl: 'App/view/finance.html',
        link: function (scope, ele, attr) {
            $timeout(function () {
                var swiper = new Swiper('.container',{
                    loop: true,
                    autoplay:2000,
                    pagination: '.swiper-pagination',
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    paginationClickable :true,
                    effect : 'coverflow',
                    coverflow: {
                         slideShadows : true
                    }
                });
                $http({
                    method:'get',
                    url: 'Data/data.json',
                }).then(function (result) {
                   obj = result.data;
                    var str ='';
                    $(".little p").on("click", function () {
                       for(var i in obj) {
                           str += '<dl><dt><img src="'+obj[i].src+'"></dt><dd><h2>"'+obj[i].car+'"</h2><p>"'+obj[i].year+'"</p><a href="javascript:;"><i>"'+obj[i].price+'"</i><s>"'+obj[i].yuan+'"</s></a></dd></dl>'
                       }
                        $("#dorHead").append(str);
                    });
                });
                if ($(".wl-tool>dl").length > 2) {
                    $('.wl-tool').width($('.wl-tool>dl').width() * $('.wl-tool>dl').length                       + 200);
                    var mySwipers = new IScroll('#tool',{
                        mouseWheel: true,
                        scrollX:true,
                        click:true
                    })
                }
                if ($(".wl-tool>dl").length > 2) {
                    $('.wl-tool').width($('.wl-tool>dl').width() * $('.wl-tool>dl').length                       + 200);
                    var mySwipers = new IScroll('#tool',{
                        mouseWheel: true,
                        scrollX:true,
                        click:true
                    })
                }
            },100);

        }
    }
});