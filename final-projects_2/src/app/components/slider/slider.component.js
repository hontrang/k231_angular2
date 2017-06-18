"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SliderComponent = (function () {
    function SliderComponent() {
        this.listSlider = [
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
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadjQuery();
        });
    };
    SliderComponent.prototype.loadjQuery = function () {
        if ($('#bxslider-home4').length > 0) {
            var slider = $('#bxslider-home4').bxSlider({
                nextText: '<i class="fa fa-angle-right"></i>',
                prevText: '<i class="fa fa-angle-left"></i>',
                auto: true,
                onSliderLoad: function (currentIndex) {
                    $('#bxslider-home4 li').find('.caption').each(function (i, index) {
                        $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('fadeInRight animated');
                        });
                    });
                },
                onSlideBefore: function (slideElement, oldIndex, newIndex) {
                    //slideElement.find('.sl-description').hide();
                    slideElement.find('.caption').each(function () {
                        $(this).hide().removeClass('animated fadeInRight');
                    });
                },
                onSlideAfter: function (slideElement, oldIndex, newIndex) {
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
        }
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    core_1.Component({
        selector: 'slider',
        templateUrl: './slider.component.html'
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map