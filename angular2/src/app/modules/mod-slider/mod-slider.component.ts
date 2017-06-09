import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'mod-slider',
    templateUrl: './mod-slider.component.html'
})

export class ModSliderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        setTimeout(()=>{
            this.loadjQuery();
        }), 50);
     }
    loadjQuery() {
        if ($('#bxslider-home4').length > 0) {
            var slider = $('#bxslider-home4').bxSlider({
                nextText: '<i class="fa fa-angle-right"></i>',
                prevText: '<i class="fa fa-angle-left"></i>',
                auto: true,
                onSliderLoad: function (currentIndex: any) {
                    $('#bxslider-home4 li').find('.caption').each(function (i: any, index: any) {
                        $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('fadeInRight animated');
                        });
                    })
                },
                onSlideBefore: function (slideElement: any, oldIndex: any, newIndex: any) {
                    //slideElement.find('.sl-description').hide();
                    slideElement.find('.caption').each(function () {
                        $(this).hide().removeClass('animated fadeInRight');
                    });
                },
                onSlideAfter: function (slideElement: any, oldIndex: any, newIndex: any) {
                    //slideElement.find('.sl-description').show();
                    setTimeout(function () {
                        slideElement.find('.caption').each(function () {
                            $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).removeClass('fadeInRight animated');
                            });
                        });
                    }, 500);
                }
            });
            //slider.reloadSlider();
        }
    }
}