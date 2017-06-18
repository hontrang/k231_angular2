import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html'
})

export class SliderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.loadjQuery();
        });
    }
    listSlider:any[] = [
                          {
                            "id": 1,
                            "caption_title": "iPhone <span class='primary'>6 <strong>Plus</strong></span>",
                            "caption_subtitle": "Dual SIM",
                            "image": "h4-slide.png"
                          },
                          {
                            "id": 2,
                            "caption_title": "by one, get one <span class='primary'>50% <strong>off</strong></span>",
                            "caption_subtitle": "school supplies & backpacks.*",
                            "image": "h4-slide2.png"
                          },
                          {
                            "id": 3,
                            "caption_title": "Apple <span class='primary'>Store <strong>Ipod</strong></span>",
                            "caption_subtitle": "Select Item",
                            "image": "h4-slide3.png"
                          },
                          {
                            "id": 4,
                            "caption_title": "Apple <span class='primary'>Store <strong>Ipod</strong></span>",
                            "caption_subtitle": "& Phone",
                            "image": "h4-slide4.png"
                          }
                        ];


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