System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var LocaleDate;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            LocaleDate = (function () {
                function LocaleDate() {
                }
                LocaleDate.prototype.transform = function (value, args) {
                    if (value !== undefined && value !== null && !Number.isNaN(value)) {
                        return value.toLocaleDateString();
                    }
                    else {
                        return;
                    }
                };
                LocaleDate = __decorate([
                    angular2_1.Pipe({ name: 'localeDate' }), 
                    __metadata('design:paramtypes', [])
                ], LocaleDate);
                return LocaleDate;
            })();
            exports_1("LocaleDate", LocaleDate);
        }
    }
});
