/*global  jQuery */
/* Contents
// ------------------------------------------------>
	1.  LOADING SCREEN
	2.  MODULE Click
	3.  SEARCH CLICK
	4.  SIDE NAV CLICK
	5.  MOBILE NAV 
	6.  BACKGROUND
	7.  COUNTDOWN DATE
	8.  COUNTER UP
	9.  SLIDER RANGE
	10. PORTFOLIO FLITER 
	11. MAGNIFIC POPUP
	12. OWL CAROUSEL
	13. AJAX MAILCHIMP
	14. AJAX CAMPAIGN MONITOR
	15. GOOGLE MAP 
	16. WOW
*/
$(document).ready(
  (function($) {
    var wrap = {
      init: function() {
        this.locaIndex();
        this.initHtml();
        this.scroll();
        // this.addCls();
      },
      locaIndex:function(){
        var pathName=this.getPathName();
        if(pathName==''){
           window.location.href='index.html';
           return ;
        }
      },
      initHtml: function() {
        var imgs = this.getImgs();
        var $myContainer = $('.my-container-fluid');
        var imgSection = [];
        $.each(imgs, function(index, val) {
          imgSection.push(
            '<div class="all-section"><img src="' + val + '" alt="Background" /></div>'
          );
        });
        var result = imgSection.join('');
        console.log(result, 'result');
        $myContainer.html(result);
      },
      getPathName: function() {
        var path = location.pathname.split('/');
        var pathName = path[path.length - 1].split('.')[0];
        console.log(pathName, 'pathName');
        return pathName;
      },
      getImgs: function() {
        var pathName = this.getPathName();
        var obj = {
          index: 4,
          workExperience: 4,
          caseIntroductiononToB: 21,
          caseIntroductiononToC: 15
        };
        var base = 'imgs/' + pathName + '/';
        var imgs = [];
        for (var i = 1; i <= obj[pathName]; i++) {
          imgs.push(base + [i] + '.jpg');
        }
        console.log(imgs, 'imgs');
        return imgs;
      },

      scroll: function() {
        var winHeight = $(document).scrollTop();
        console.log(winHeight, 'winHeight');
        $(window).scroll(function() {
          var scrollY = $(document).scrollTop(); // 获取垂直滚动的距离，即滚动了多少
          console.log(scrollY, 'scrollY');

          if (scrollY > 0) {
            //如果滚动距离大于550px则隐藏，否则删除隐藏类
            $('.header').addClass('hiddened');
          } else {
            $('.header').removeClass('hiddened');
          }

          if (scrollY > winHeight) {
            //如果没滚动到顶部，删除显示类，否则添加显示类
            $('.header').removeClass('showed');
          } else {
            $('.header').addClass('showed');
          }
        });
      },

      addCls:function(){
          var  pathName=this.getPathName();
          var pathName = this.getPathName();
          var obj = {
            index: 0,
            workExperience: 1,
            caseIntroductiononToB: 2,
            caseIntroductiononToC: 2
          };
          $('.has-dropdown').find('a').removeClass('blure');
           var result=$('.has-dropdown')[obj[pathName]];
           $(result).find('a').addClass('blure');
     
      }
    };
    wrap.init();
  })(jQuery)
);
