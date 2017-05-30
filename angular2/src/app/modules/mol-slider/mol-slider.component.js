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
var MolSliderComponent = (function () {
    function MolSliderComponent() {
    }
    MolSliderComponent.prototype.ngOnInit = function () {
        this.loadjQuery();
    };
    MolSliderComponent.prototype.loadjQuery = function () {
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
    return MolSliderComponent;
}());
MolSliderComponent = __decorate([
    core_1.Component({
        selector: 'mol-slider',
        templateUrl: './mol-slider.component.html'
    }),
    __metadata("design:paramtypes", [])
], MolSliderComponent);
exports.MolSliderComponent = MolSliderComponent;
//# sourceMappingURL=mol-slider.component.js.map