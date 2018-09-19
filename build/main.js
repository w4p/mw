webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_place__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myplace_myplacelist__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__place_place__["a" /* PlacePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__myplace_myplacelist__["a" /* MyPlaceListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!--<ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>-->\n  <!--<ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>-->\n  <!--<ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>-->\n  <ion-tab [root]="tab5Root" tabTitle="Мои участки" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Участки" tabIcon="home"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_placeservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_form_place_form__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacePage = /** @class */ (function () {
    function PlacePage(navCtrl, placeService) {
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.places = [];
    }
    PlacePage.prototype.ionViewWillEnter = function () {
        this.refreshPlaceList();
    };
    PlacePage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__place_form_place_form__["a" /* PlaceFormPage */], {
            id: 0
        });
    };
    PlacePage.prototype.open = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__place_form_place_form__["a" /* PlaceFormPage */], {
            id: id
        });
    };
    PlacePage.prototype.remove = function (id) {
        var _this = this;
        this.placeService.remove(id).then(function () {
            _this.refreshPlaceList();
        });
    };
    PlacePage.prototype.refreshPlaceList = function () {
        var _this = this;
        this.placeService.getPlaces().then(function (placeList) {
            _this.places = placeList || [];
        });
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-page',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/place/place.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Участки</ion-title>\n\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="create()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let place of places">\n      <ion-item (click)="open(place.num)">\n        <span class="place-title-num">№{{place.num}}</span> <span class="place-title">{{place.title}}</span>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="remove(place.num)">\n          <ion-icon name="trash"></ion-icon>\n          Удалить\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/place/place.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__service_placeservice__["a" /* PlaceService */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* unused harmony export StorageItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
        console.log("INIT StorageService");
    }
    StorageService.prototype.set = function (key, val) {
        return this.storage.set(key, new StorageItem(val));
    };
    StorageService.prototype.get = function (key) {
        return this.storage.get(key)
            .then(function (storageItem) {
            return (storageItem) ? storageItem.value : null;
        });
    };
    StorageService.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

var StorageItem = /** @class */ (function () {
    function StorageItem(val) {
        this.synced = false;
        this.value = val;
    }
    return StorageItem;
}());

//# sourceMappingURL=storageservice.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceFloorModel; });
var PlaceFloorModel = /** @class */ (function () {
    function PlaceFloorModel(num, flatList) {
        this.num = num;
        this.flatList = flatList;
    }
    return PlaceFloorModel;
}());

//# sourceMappingURL=placefloor.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceModel; });
var PlaceModel = /** @class */ (function () {
    function PlaceModel(num, title) {
        this.totalFlats = 0;
        this.floors = 0;
        this.dangerFloors = 0;
        this.floorPlan = [];
        this.num = num;
        this.title = title;
    }
    return PlaceModel;
}());

//# sourceMappingURL=placemodel.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceFormPage; });
/* unused harmony export PlaceFormInput */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_placeservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_placefloor__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_placeflat__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceFormPage = /** @class */ (function () {
    function PlaceFormPage(navParams, navCtrl, placeService) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.skip = 0;
        this.input = new PlaceFormInput();
        this.floorPlan = [];
        this.title = "Создать";
        this.isSaving = false;
        this.isUpdate = false;
        var id = navParams.get("id");
        if (id > 0) {
            this.placeService.getPlace(id).then(function (place) {
                console.log("pl", place);
                _this.place = place;
                _this.input.fillFromPlace(place);
                _this.floorPlan = place.floorPlan;
                _this.title = "№" + place.num + " " + place.title;
                _this.isUpdate = true;
                _this.skip = place.floorPlan[0].flatList.filter(function (value) { return value.type == __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["a" /* FlatType */].SKIP; }).length;
            });
        }
        else {
            this.floorPlan = this.genPlan();
        }
    }
    PlaceFormPage.prototype.moveLeft = function () {
        this.skip--;
        this.refreshPlan();
    };
    PlaceFormPage.prototype.moveRight = function () {
        this.skip++;
        this.refreshPlan();
    };
    PlaceFormPage.prototype.refreshPlan = function () {
        this.floorPlan = this.genPlan();
    };
    PlaceFormPage.prototype.genPlan = function () {
        var res = [];
        var cnt = 0;
        var dangerList = this.getDangerList();
        for (var floor = this.input.fromFloor - 1; floor < this.input.toFloor; floor++) {
            var floorModel = new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](floor + 1, []);
            for (var i = 0; i < this.input.perFloor; i++) {
                var flatNum = floor * +this.input.perFloor + +this.input.fromFlat + i - this.skip;
                if (cnt < this.skip) {
                    floorModel.flatList.push(new __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["b" /* PlaceFlatModel */](0, 0, __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["a" /* FlatType */].SKIP, floor + 1));
                }
                else {
                    floorModel.flatList.push(new __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["b" /* PlaceFlatModel */](0, flatNum, (dangerList.indexOf(flatNum) != -1 ? __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["a" /* FlatType */].DANGER : __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["a" /* FlatType */].DEFAULT), floor + 1));
                }
                cnt++;
            }
            res.push(floorModel);
        }
        return res;
    };
    PlaceFormPage.prototype.getDangerList = function () {
        var list = [];
        if (this.floorPlan) {
            this.floorPlan.forEach(function (floor) {
                if (floor.flatList) {
                    floor.flatList.forEach(function (flat) {
                        if (flat.type == __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["a" /* FlatType */].DANGER) {
                            list.push(flat.num);
                        }
                    });
                }
            });
        }
        return list;
    };
    PlaceFormPage.prototype.save = function () {
        var _this = this;
        console.log("Save btn");
        this.isSaving = true;
        // this.input.dangetFloors = this.getDangerList().length;
        this.placeService.addPlace(this.input, this.floorPlan).then(function () {
            _this.navCtrl.pop();
        });
    };
    PlaceFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-form',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/place-form/place-form.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n      <ion-label>Номер</ion-label>\n      <ion-input required type="number" placeholder="123" [(ngModel)]="input.num" [readonly]="isUpdate"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Адрес</ion-label>\n      <ion-input required type="text" placeholder="ул.Иванова 1, п.3" [(ngModel)]="input.address"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>c этажа</ion-label>\n          <ion-input required type="number" placeholder="1" [(ngModel)]="input.fromFloor" (change)="refreshPlan()"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>по этаж</ion-label>\n          <ion-input required type="number" placeholder="9" [(ngModel)]="input.toFloor" (change)="refreshPlan()"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>на этаже</ion-label>\n          <ion-input required type="number" placeholder="4" [(ngModel)]="input.perFloor" (change)="refreshPlan()"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>с номера</ion-label>\n          <ion-input required type="number" placeholder="1" [(ngModel)]="input.fromFlat" (change)="refreshPlan()"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div padding>\n      <div class="place-detail-title">План</div>\n      <div padding class="plan-actions">\n        <button ion-button small color="secondary"\n                [disabled]="skip <= 0"\n                (click)="moveLeft()">\n          Сдвиг влево\n        </button>\n        <button ion-button small end color="secondary"\n                (click)="moveRight()">\n          Сдвиг вправо\n        </button>\n      </div>\n\n      <ion-row class="floor-block" *ngFor="let floor of floorPlan">\n        <ion-col col-2>\n          <div class="floor">{{ floor.num }} этаж</div>\n        </ion-col>\n        <ion-col col *ngFor="let flat of floor.flatList">\n          <place-flatblock [flat]="flat"></place-flatblock>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  <div padding class="suggestion">\n    <p>Не забудьте отметить квартиры/дома в которые  не заходить. Это можно сделать прямо сейчас.</p>\n  </div>\n\n  <div padding>\n    <button ion-button block [disabled]="isSaving" (click)="save()">Сохранить</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/place-form/place-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_placeservice__["a" /* PlaceService */]])
    ], PlaceFormPage);
    return PlaceFormPage;
}());

var PlaceFormInput = /** @class */ (function () {
    function PlaceFormInput() {
        this.num = null;
        this.address = "";
        this.perFloor = 4;
        this.fromFloor = 1;
        this.toFloor = 9;
        this.fromFlat = 1;
        this.dangetFloors = 0;
    }
    PlaceFormInput.prototype.fillFromPlace = function (model) {
        this.num = model.num;
        this.address = model.title;
        this.perFloor = model.floorPlan[0].flatList.length;
        this.fromFloor = model.floorPlan[0].num;
        this.toFloor = model.floorPlan[model.floorPlan.length - 1].num;
        this.fromFlat = model.floorPlan[0].flatList.filter(function (value) { return value.type != __WEBPACK_IMPORTED_MODULE_4__models_placeflat__["a" /* FlatType */].SKIP; }).shift().num;
    };
    return PlaceFormInput;
}());

//# sourceMappingURL=place-form.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlaceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_placeservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_myplaceform__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_detail_place_detail__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPlaceListPage = /** @class */ (function () {
    function MyPlaceListPage(navCtrl, placeService) {
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.places = {};
        this.myplaces = [];
        this.refreshList();
    }
    MyPlaceListPage.prototype.ionViewWillEnter = function () {
        this.refreshList();
    };
    MyPlaceListPage.prototype.refreshList = function () {
        var _this = this;
        this.placeService.getPlaces().then(function (placeList) {
            if (placeList) {
                placeList.forEach(function (pl) {
                    _this.places[pl.num] = pl;
                });
                _this.placeService.getMyPlaces().then(function (mylist) {
                    console.log("my place list", mylist);
                    _this.myplaces = mylist;
                });
            }
        });
    };
    MyPlaceListPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__form_myplaceform__["a" /* MyPlaceFormPage */], {
            id: 0
        });
    };
    MyPlaceListPage.prototype.remove = function (id) {
        var _this = this;
        this.placeService.removeFromMyPlaceList(id).then(function () {
            _this.refreshList();
        });
    };
    MyPlaceListPage.prototype.open = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__place_detail_place_detail__["a" /* PlaceDetailPage */], {
            id: id
        });
    };
    MyPlaceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/myplace/myplacelist.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Мои участки</ion-title>\n\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="create()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let placeinfo of myplaces">\n      <ion-item (click)="open(places[placeinfo.id].num)">\n        <span class="place-title-num">№{{places[placeinfo.id].num}}</span> <span class="place-title">{{places[placeinfo.id].title}}</span>\n        <div class="grey">\n          <small>\n            Осталось: <b class="unvisited">{{ places[placeinfo.id].totalFlats - placeinfo.visited - places[placeinfo.id].dangerFloors }}</b>,\n            посещено: <b class="visited">{{ placeinfo.visited }}</b>,\n            грубых: <b class="danger">{{ places[placeinfo.id].dangerFloors + placeinfo.dangerNew }}</b>\n            <div class="lastvisit">в работе с: {{ placeinfo.addTime / 1000 | amFromUnix | amDateFormat: \'DD.MM.YYYY\' }}</div>\n          </small>\n        </div>\n\n        <ion-avatar item-end>\n          <span class="percentile"\n                [class.bad]="((placeinfo.visited + placeinfo.dangerNew) / (places[placeinfo.id].totalFlats - places[placeinfo.id].dangerFloors)) * 100 < 30"\n                [class.good]="((placeinfo.visited + placeinfo.dangerNew) / (places[placeinfo.id].totalFlats - places[placeinfo.id].dangerFloors)) * 100 > 70">\n            {{((placeinfo.visited + placeinfo.dangerNew) / (places[placeinfo.id].totalFlats - places[placeinfo.id].dangerFloors)) * 100 | number: \'1.0-0\' }}%\n          </span>\n        </ion-avatar>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="remove(placeinfo.id)">\n          <ion-icon name="trash"></ion-icon>\n          Удалить\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/myplace/myplacelist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__service_placeservice__["a" /* PlaceService */]])
    ], MyPlaceListPage);
    return MyPlaceListPage;
}());

//# sourceMappingURL=myplacelist.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlaceFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_placeservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceInfoModel__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPlaceFormPage = /** @class */ (function () {
    function MyPlaceFormPage(navParams, navCtrl, placeService) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.places = {};
        this.placeList = [];
        this.isSaving = false;
        this.info = navParams.get("id");
        this.placeService.getPlaces().then(function (placeList) {
            if (placeList) {
                _this.placeList = placeList;
                placeList.forEach(function (pl) {
                    _this.places[pl.num] = pl;
                });
            }
        });
    }
    MyPlaceFormPage.prototype.save = function () {
        var _this = this;
        console.log("save", this.info);
        if (this.info && this.info > 0) {
            this.isSaving = true;
            var myplace = new __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceInfoModel__["a" /* MyPlaceInfoModel */](this.info);
            this.placeService.addToMyPlaceList(myplace).then(function () {
                _this.isSaving = false;
                _this.navCtrl.pop();
            });
        }
    };
    MyPlaceFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/myplace/form/myplaceform.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Редактировать</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Участок</ion-label>\n\n    <ion-select [(ngModel)]="info">\n      <ion-option *ngFor="let place of placeList"\n        [value]="place.num">\n        №{{ place.num }} {{ place.title }}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <div padding>\n    <button ion-button block [disabled]="isSaving" (click)="save()">Сохранить</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/myplace/form/myplaceform.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_placeservice__["a" /* PlaceService */]])
    ], MyPlaceFormPage);
    return MyPlaceFormPage;
}());

//# sourceMappingURL=myplaceform.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_placeservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_placeflat__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(navCtrl, navParams, placeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.dangerList = [];
        this.id = navParams.get("id");
        this.refreshPlan();
    }
    PlaceDetailPage.prototype.ionViewWillEnter = function () {
        this.refreshPlan();
    };
    PlaceDetailPage.prototype.refreshPlan = function () {
        var _this = this;
        Promise.all([this.placeService.getPlace(this.id), this.placeService.getMyPlaceDetail(this.id)])
            .then(function (results) {
            var pl = results[0];
            var myhistory = results[1];
            console.log("pl", pl, "his", myhistory);
            _this.place = pl;
            if (myhistory) {
                pl.floorPlan.forEach(function (floor) {
                    floor.flatList.forEach(function (flat) {
                        var fhis = myhistory.flatHistoryMap[flat.num];
                        if (fhis) {
                            if (flat.type != __WEBPACK_IMPORTED_MODULE_3__models_placeflat__["a" /* FlatType */].DANGER && flat.type != __WEBPACK_IMPORTED_MODULE_3__models_placeflat__["a" /* FlatType */].SKIP
                                && fhis.type != __WEBPACK_IMPORTED_MODULE_3__models_placeflat__["a" /* FlatType */].DEFAULT) {
                                flat.type = fhis.type;
                            }
                            flat.noRing = fhis.noRing;
                            flat.noDmf = fhis.noDmf;
                        }
                    });
                });
            }
            _this.floorList = pl.floorPlan;
            _this.dangerList = _this.placeService.getDangerList(_this.floorList);
        });
    };
    PlaceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-detail-page',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/place-detail/place-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Описание</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="place">\n    <div class="place-detail-title">№{{ place.num}} {{ place.title }}</div>\n\n    <ion-grid>\n\n      <div *ngFor="let floor of floorList">\n        <div class="floor-num">{{ floor.num }} этаж</div>\n        <ion-row>\n          <ion-col *ngFor="let flat of floor.flatList" class="flat-col">\n            <place-flat [flat]="flat" [place]="place"></place-flat>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-row *ngIf="dangerList.length > 0">\n        <div class="floor-num red">Не заходить</div>\n        <div class="danger-list">\n          <span *ngFor="let d of dangerList">{{ d }}</span>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/place-detail/place-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_placeservice__["a" /* PlaceService */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=place-detail.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storageservice__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_placeflat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_placefloor__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_placemodel__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceService = /** @class */ (function () {
    function PlaceService(storageService) {
        this.storageService = storageService;
        this.MYPLACELISTKEY = "MYPLACELISTKEY";
        this.PLACEKEY = "PLACES";
        this.PLACE_ID_KEY_PREFIX = "PLACE_";
        console.log("INIT PlaceService");
    }
    PlaceService.prototype.getPlaces = function () {
        return this.storageService.get(this.PLACEKEY)
            .then(function (places) {
            console.log("Load my place list", places);
            if (!places) {
                return [];
            }
            return places;
        });
    };
    PlaceService.prototype.getPlace = function (idplace) {
        return this.getPlaces().then(function (placeList) {
            var result = null;
            if (placeList) {
                placeList.forEach(function (pm, i) {
                    if (pm.num == idplace) {
                        console.log("FOUND", pm);
                        result = pm;
                    }
                });
            }
            return result;
        });
    };
    PlaceService.prototype.savePlace = function (toSavePlace) {
        var _this = this;
        console.log("save place", toSavePlace);
        return this.getPlaces().then(function (placeList) {
            var toSaveN = -1, lastN = 0;
            placeList.forEach(function (place, n) {
                if (place.num == toSavePlace.num) {
                    console.log("Already exist place", n);
                    toSaveN = n;
                }
                if (place.num < toSavePlace.num) {
                    lastN = n;
                }
            });
            if (toSaveN >= 0) {
                placeList[toSaveN] = toSavePlace;
            }
            else {
                placeList.splice(lastN, 0, toSavePlace);
            }
            console.log("to save placelist", placeList);
            _this.savePlaceList(placeList);
            return placeList;
        });
    };
    PlaceService.prototype.savePlaceList = function (placeList) {
        placeList.sort(function (a, b) {
            return a.num - b.num;
        });
        return this.storageService.set(this.PLACEKEY, placeList);
    };
    PlaceService.prototype.remove = function (id) {
        var _this = this;
        return this.getPlaces().then(function (placeList) {
            return _this.savePlaceList(placeList.filter((function (p) { return p.num != id; })));
        });
    };
    PlaceService.prototype.addPlace = function (input, floorPlan) {
        var _this = this;
        console.log("addPlace", input, floorPlan);
        if (input.num > 0) {
            return this.getPlace(input.num).then(function (place) {
                if (!place) {
                    place = new __WEBPACK_IMPORTED_MODULE_4__models_placemodel__["a" /* PlaceModel */](input.num, input.address);
                }
                place.floorPlan = floorPlan;
                place.floors = floorPlan.length;
                var flatCount = 0, dangerCount = 0;
                floorPlan.forEach(function (floor) {
                    floor.flatList.forEach(function (flat) {
                        if (flat.type != __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].SKIP) {
                            flatCount++;
                        }
                        if (flat.type.valueOf() == __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].DANGER.valueOf()) {
                            dangerCount++;
                        }
                    });
                });
                place.title = input.address;
                place.totalFlats = flatCount;
                place.dangerFloors = dangerCount;
                console.log("save place", place);
                return _this.savePlace(place);
            });
        }
        return Promise.resolve([]);
    };
    PlaceService.prototype.getMyPlaces = function () {
        return this.storageService.get(this.MYPLACELISTKEY).then(function (myplaces) {
            return myplaces || [];
        });
    };
    PlaceService.prototype.getMyPlaceInfo = function (id) {
        return this.getMyPlaces().then(function (myplaces) {
            return myplaces.filter(function (mypl) { return mypl.id == id; }).shift();
        });
    };
    PlaceService.prototype.setMyPlaceInfo = function (myplace) {
        var _this = this;
        return this.getMyPlaces().then(function (myplaces) {
            var n = -1;
            myplaces.forEach(function (pl, i) {
                if (pl.id == myplace.id) {
                    n = i;
                }
            });
            if (n >= 0) {
                myplaces[n] = myplace;
            }
            return _this.storageService.set(_this.MYPLACELISTKEY, myplaces);
        });
    };
    PlaceService.prototype.getMyPlaceDetail = function (id) {
        return this.storageService.get(this.PLACE_ID_KEY_PREFIX + id);
    };
    PlaceService.prototype.saveMyPlaceDetail = function (id, myplace) {
        return this.storageService.set(this.PLACE_ID_KEY_PREFIX + id, myplace);
    };
    PlaceService.prototype.addToMyPlaceList = function (info) {
        var _this = this;
        console.log("Add to my place list", info);
        return this.getMyPlaces().then(function (mylist) {
            info.addTime = new Date().getTime();
            if (!mylist) {
                mylist = [];
            }
            var exist = mylist.filter(function (value) { return value.id == info.id; }).shift();
            if (!exist) {
                mylist.push(info);
            }
            return _this.storageService.set(_this.MYPLACELISTKEY, mylist);
        });
    };
    PlaceService.prototype.removeFromMyPlaceList = function (id) {
        var _this = this;
        return this.getMyPlaces().then(function (mylist) {
            mylist = mylist.filter(function (value) { return value.id != id; });
            _this.storageService.set(_this.MYPLACELISTKEY, mylist);
            _this.storageService.remove(_this.PLACE_ID_KEY_PREFIX + id);
            return mylist;
        });
    };
    PlaceService.prototype.getDangerList = function (floorPlan) {
        var list = [];
        if (floorPlan) {
            floorPlan.forEach(function (floor) {
                if (floor.flatList) {
                    floor.flatList.forEach(function (flat) {
                        if (flat.type == __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].DANGER || flat.type == __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].NEWDANGER) {
                            list.push(flat.num);
                        }
                    });
                }
            });
        }
        return list;
    };
    PlaceService.prototype.getFlatList = function (idplace) {
        return Promise.resolve([
            new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](1, [new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 1, 0, 1),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 2, 0, 1),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 3, 0, 1),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 4, 0, 1)]),
            new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](2, [new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 5, 0, 2),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 6, 0, 2),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 7, 0, 2),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 8, 0, 2)]),
            new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](3, [new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 9, 0, 3),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 10, 0, 3),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 11, 0, 3),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 12, 0, 3)]),
            new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](4, [new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 13, 0, 4),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 14, 0, 4),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 15, 0, 4),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 16, 0, 4)]),
            new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](5, [new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 17, 0, 5),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 18, 0, 5),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 19, 0, 5),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 20, 0, 5)]),
            new __WEBPACK_IMPORTED_MODULE_3__models_placefloor__["a" /* PlaceFloorModel */](6, [new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 21, 0, 6),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 22, 0, 6),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 23, 0, 6),
                new __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */](idplace, 24, 0, 6)])
        ]);
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__storageservice__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__storageservice__["a" /* StorageService */]) === "function" && _a || Object])
    ], PlaceService);
    return PlaceService;
    var _a;
}());

//# sourceMappingURL=placeservice.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlaceFlatModel; });
/* unused harmony export PlaceFlatVisit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatType; });
var PlaceFlatModel = /** @class */ (function () {
    function PlaceFlatModel(placeid, num, type, floor) {
        this.placeid = 0;
        this.num = 0;
        this.type = FlatType.DEFAULT; // 0 - default, 1 - good, 2 - visited, 3 - danger, 4 - new danger
        this.floor = 0;
        this.noRing = false;
        this.noDmf = false;
        this.placeid = placeid;
        this.num = num;
        this.type = type;
        this.floor = floor;
    }
    PlaceFlatModel.prototype.getId = function () {
        return this.placeid + "_" + this.num;
    };
    return PlaceFlatModel;
}());

var PlaceFlatVisit = /** @class */ (function () {
    function PlaceFlatVisit() {
    }
    return PlaceFlatVisit;
}());

var FlatType;
(function (FlatType) {
    FlatType[FlatType["DEFAULT"] = 0] = "DEFAULT";
    FlatType[FlatType["GOOD"] = 1] = "GOOD";
    FlatType[FlatType["VISITED"] = 2] = "VISITED";
    FlatType[FlatType["DANGER"] = 3] = "DANGER";
    FlatType[FlatType["NEWDANGER"] = 4] = "NEWDANGER";
    FlatType[FlatType["SKIP"] = 5] = "SKIP";
})(FlatType || (FlatType = {}));
//# sourceMappingURL=placeflat.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceFlatDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_placeflat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceModel__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_placeservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceFlatDetailPage = /** @class */ (function () {
    function PlaceFlatDetailPage(navCtrl, navParams, placeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.history = new __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceModel__["a" /* FlatHistory */]();
        this.flatType = __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */];
        this.flatid = navParams.get("id");
        this.placeid = navParams.get("placeid");
        console.log("Show details for", this.flatid, this.placeid);
        Promise.all([this.placeService.getPlace(this.placeid), this.placeService.getMyPlaceDetail(this.placeid)])
            .then(function (results) {
            console.log("results", results);
            var pl = results[0];
            var myhistory = results[1];
            _this.place = pl;
            _this.myplace = myhistory || new __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceModel__["b" /* MyPlaceModel */](_this.placeid);
            if (myhistory) {
                _this.history = myhistory.flatHistoryMap[_this.flatid] || new __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceModel__["a" /* FlatHistory */]();
            }
        });
    }
    PlaceFlatDetailPage.prototype.setType = function (type) {
        var _this = this;
        this.history.type = type;
        this.history.lastVisit = new Date().getTime();
        this.saveHistory().then(function () {
            _this.navCtrl.pop();
        });
    };
    PlaceFlatDetailPage.prototype.saveHistory = function () {
        var _this = this;
        this.myplace.flatHistoryMap[this.flatid] = this.history;
        __WEBPACK_IMPORTED_MODULE_3__models_MyPlaceModel__["b" /* MyPlaceModel */].refreshCounters(this.myplace);
        this.placeService.saveMyPlaceDetail(this.placeid, this.myplace);
        console.log("Save history", this.history);
        return this.placeService.getMyPlaceInfo(this.placeid).then(function (info) {
            info.visited = _this.myplace.visited;
            info.unvisited = _this.myplace.unvisited;
            info.dangerNew = _this.myplace.dangerNew;
            _this.placeService.setMyPlaceInfo(info);
        });
    };
    PlaceFlatDetailPage.prototype.setNoRing = function (flag) {
        var _this = this;
        this.history.noRing = flag;
        this.saveHistory();
        this.saveHistory().then(function () {
            _this.navCtrl.pop();
        });
    };
    PlaceFlatDetailPage.prototype.setNoDmf = function (flag) {
        var _this = this;
        this.history.noDmf = flag;
        this.saveHistory().then(function () {
            _this.navCtrl.pop();
        });
        this.navCtrl.pop();
    };
    PlaceFlatDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-flat-detail',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/place-flat-detail/placeflat-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Описание к</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="place">\n    <h3 class="text-center">{{ place.num }} {{ place.title }}</h3>\n\n    <div class="quick-actions">\n      <ion-row>\n        <ion-col padding>\n          <button ion-button block color="light" (click)="setType(flatType.VISITED)">Отказ</button>\n        </ion-col>\n        <ion-col padding>\n          <button ion-button block color="secondary" (click)="setType(flatType.GOOD)">Повтор</button>\n        </ion-col>\n        <ion-col padding>\n          <button ion-button block color="danger" (click)="setType(flatType.NEWDANGER)">Грубый</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col padding>\n          <button ion-button block (click)="setNoRing(!history.noRing)"\n                  [color]="history.noRing ? \'dark\' : \'primary\'">Нет звонка</button>\n        </ion-col>\n        <ion-col padding>\n          <button ion-button block (click)="setNoDmf(!history.noDmf)"\n                  [color]="history.noDmf ? \'dark\' : \'primary\'">Нет домофона</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-list *ngIf="history">\n      <ion-item *ngFor="let comment of history.comments">\n        {{ comment.text }}\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/place-flat-detail/placeflat-detail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_placeservice__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_placeservice__["a" /* PlaceService */]) === "function" && _c || Object])
    ], PlaceFlatDetailPage);
    return PlaceFlatDetailPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=placeflat-detail.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_place_place__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_place_form_place_form__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_place_detail_place_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_place_flat_detail_placeflat_detail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_myplace_myplacelist__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_myplace_form_myplaceform__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_storageservice__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_placeservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_place_detail_flat_placeflat__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_place_form_flat_block_placeflat_block__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//PAGES






//SERVICES


//COMPONENTS




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_place_form_place_form__["a" /* PlaceFormPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_flat_detail_placeflat_detail__["a" /* PlaceFlatDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myplace_myplacelist__["a" /* MyPlaceListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_myplace_form_myplaceform__["a" /* MyPlaceFormPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_place_detail_flat_placeflat__["a" /* PlaceFlatComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_place_form_flat_block_placeflat_block__["a" /* PlaceFlatBlockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__myjw',
                }),
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_place_place__["a" /* PlacePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_place_form_place_form__["a" /* PlaceFormPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_flat_detail_placeflat_detail__["a" /* PlaceFlatDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myplace_myplacelist__["a" /* MyPlaceListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_myplace_form_myplaceform__["a" /* MyPlaceFormPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__service_storageservice__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_17__service_placeservice__["a" /* PlaceService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlaceInfoModel; });
var MyPlaceInfoModel = /** @class */ (function () {
    function MyPlaceInfoModel(id) {
        this.visited = 0;
        this.unvisited = 0;
        this.dangerNew = 0;
        this.id = id;
    }
    return MyPlaceInfoModel;
}());

//# sourceMappingURL=MyPlaceInfoModel.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 210,
	"./af.js": 210,
	"./ar": 211,
	"./ar-dz": 212,
	"./ar-dz.js": 212,
	"./ar-kw": 213,
	"./ar-kw.js": 213,
	"./ar-ly": 214,
	"./ar-ly.js": 214,
	"./ar-ma": 215,
	"./ar-ma.js": 215,
	"./ar-sa": 216,
	"./ar-sa.js": 216,
	"./ar-tn": 217,
	"./ar-tn.js": 217,
	"./ar.js": 211,
	"./az": 218,
	"./az.js": 218,
	"./be": 219,
	"./be.js": 219,
	"./bg": 220,
	"./bg.js": 220,
	"./bm": 221,
	"./bm.js": 221,
	"./bn": 222,
	"./bn.js": 222,
	"./bo": 223,
	"./bo.js": 223,
	"./br": 224,
	"./br.js": 224,
	"./bs": 225,
	"./bs.js": 225,
	"./ca": 226,
	"./ca.js": 226,
	"./cs": 227,
	"./cs.js": 227,
	"./cv": 228,
	"./cv.js": 228,
	"./cy": 229,
	"./cy.js": 229,
	"./da": 230,
	"./da.js": 230,
	"./de": 231,
	"./de-at": 232,
	"./de-at.js": 232,
	"./de-ch": 233,
	"./de-ch.js": 233,
	"./de.js": 231,
	"./dv": 234,
	"./dv.js": 234,
	"./el": 235,
	"./el.js": 235,
	"./en-au": 236,
	"./en-au.js": 236,
	"./en-ca": 237,
	"./en-ca.js": 237,
	"./en-gb": 238,
	"./en-gb.js": 238,
	"./en-ie": 239,
	"./en-ie.js": 239,
	"./en-il": 240,
	"./en-il.js": 240,
	"./en-nz": 241,
	"./en-nz.js": 241,
	"./eo": 242,
	"./eo.js": 242,
	"./es": 243,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es-us": 245,
	"./es-us.js": 245,
	"./es.js": 243,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 251,
	"./fr-ca": 252,
	"./fr-ca.js": 252,
	"./fr-ch": 253,
	"./fr-ch.js": 253,
	"./fr.js": 251,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./gu": 258,
	"./gu.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it.js": 266,
	"./ja": 267,
	"./ja.js": 267,
	"./jv": 268,
	"./jv.js": 268,
	"./ka": 269,
	"./ka.js": 269,
	"./kk": 270,
	"./kk.js": 270,
	"./km": 271,
	"./km.js": 271,
	"./kn": 272,
	"./kn.js": 272,
	"./ko": 273,
	"./ko.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mn": 283,
	"./mn.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./mt": 287,
	"./mt.js": 287,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./tg": 314,
	"./tg.js": 314,
	"./th": 315,
	"./th.js": 315,
	"./tl-ph": 316,
	"./tl-ph.js": 316,
	"./tlh": 317,
	"./tlh.js": 317,
	"./tr": 318,
	"./tr.js": 318,
	"./tzl": 319,
	"./tzl.js": 319,
	"./tzm": 320,
	"./tzm-latn": 321,
	"./tzm-latn.js": 321,
	"./tzm.js": 320,
	"./ug-cn": 322,
	"./ug-cn.js": 322,
	"./uk": 323,
	"./uk.js": 323,
	"./ur": 324,
	"./ur.js": 324,
	"./uz": 325,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 325,
	"./vi": 327,
	"./vi.js": 327,
	"./x-pseudo": 328,
	"./x-pseudo.js": 328,
	"./yo": 329,
	"./yo.js": 329,
	"./zh-cn": 330,
	"./zh-cn.js": 330,
	"./zh-hk": 331,
	"./zh-hk.js": 331,
	"./zh-tw": 332,
	"./zh-tw.js": 332
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 426;

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyPlaceModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatHistory; });
/* unused harmony export PlaceComment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placeflat__ = __webpack_require__(30);

var MyPlaceModel = /** @class */ (function () {
    function MyPlaceModel(id) {
        this.flatHistoryMap = {};
        this.unvisited = 0;
        this.visited = 0;
        this.dangerNew = 0;
        this.id = id;
    }
    MyPlaceModel.refreshCounters = function (model) {
        var visited = 0, dangernew = 0;
        for (var flnum in model.flatHistoryMap) {
            if (model.flatHistoryMap[flnum] &&
                (model.flatHistoryMap[flnum].type == __WEBPACK_IMPORTED_MODULE_0__placeflat__["a" /* FlatType */].VISITED
                    || model.flatHistoryMap[flnum].type == __WEBPACK_IMPORTED_MODULE_0__placeflat__["a" /* FlatType */].NEWDANGER
                    || model.flatHistoryMap[flnum].type == __WEBPACK_IMPORTED_MODULE_0__placeflat__["a" /* FlatType */].GOOD)) {
                visited++;
            }
            if (model.flatHistoryMap[flnum] && model.flatHistoryMap[flnum].type == __WEBPACK_IMPORTED_MODULE_0__placeflat__["a" /* FlatType */].NEWDANGER) {
                dangernew++;
            }
        }
        model.visited = visited;
        model.dangerNew = dangernew;
    };
    return MyPlaceModel;
}());

var FlatHistory = /** @class */ (function () {
    function FlatHistory() {
        this.type = __WEBPACK_IMPORTED_MODULE_0__placeflat__["a" /* FlatType */].DEFAULT;
        this.people = "";
        this.noRing = false;
        this.noDmf = false;
        this.comments = [];
        this.lastVisit = 0;
    }
    return FlatHistory;
}());

var PlaceComment = /** @class */ (function () {
    function PlaceComment() {
        this.text = "";
        this.time = new Date().getTime();
    }
    return PlaceComment;
}());

//# sourceMappingURL=MyPlaceModel.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceFlatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_placeflat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_flat_detail_placeflat_detail__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_placemodel__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceFlatComponent = /** @class */ (function () {
    function PlaceFlatComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.flatType = __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */];
        // console.log("flat: " + this.type);
    }
    PlaceFlatComponent.prototype.showDetail = function () {
        console.log("Show details", this.place.num, this.flat.num);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__place_flat_detail_placeflat_detail__["a" /* PlaceFlatDetailPage */], {
            placeid: this.place.num,
            id: this.flat.num
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("flat"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */])
    ], PlaceFlatComponent.prototype, "flat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("place"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_placemodel__["a" /* PlaceModel */])
    ], PlaceFlatComponent.prototype, "place", void 0);
    PlaceFlatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-flat',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/place-detail/flat/placeflat.html"*/'<div\n  [class.good]="flat.type == flatType.GOOD"\n  [class.dismiss]="flat.type == flatType.VISITED"\n  [class.danger]="flat.type == flatType.DANGER"\n  [class.new-danger]="flat.type == flatType.NEWDANGER"\n  [class.skipped]="flat.type == flatType.SKIP"\n  (click)="showDetail()">\n  <div class="place-flat">\n    <ion-row>\n    <ion-col col-7>\n      <div class="flat-num">\n        {{ flat.num}}\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class="flag-item"\n        [class.selected]="flat.noRing">\n        <div class="tip">нзв</div>\n      </div>\n      <div class="flag-item"\n           [class.selected]="flat.noDmf">\n        <div class="tip">ндф</div>\n      </div>\n    </ion-col>\n    </ion-row>\n  </div>\n</div>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/place-detail/flat/placeflat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PlaceFlatComponent);
    return PlaceFlatComponent;
}());

//# sourceMappingURL=placeflat.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceFlatBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_placeflat__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceFlatBlockComponent = /** @class */ (function () {
    function PlaceFlatBlockComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.flatType = __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */];
    }
    PlaceFlatBlockComponent.prototype.toggle = function () {
        if (this.flat.type == __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].DANGER) {
            this.flat.type = __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].DEFAULT;
        }
        else {
            this.flat.type = __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["a" /* FlatType */].DANGER;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("flat"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_placeflat__["b" /* PlaceFlatModel */])
    ], PlaceFlatBlockComponent.prototype, "flat", void 0);
    PlaceFlatBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-flatblock',template:/*ion-inline-start:"/home/vadim/develop/ionic2/myjw/src/pages/place-form/flat-block/placeflat-block.html"*/'<div class="flat"\n     [class.skipped]="flat.type == flatType.SKIP"\n     [class.danger]="flat.type == flatType.DANGER"\n     (click)="toggle()">\n  {{ flat.num }}\n</div>\n'/*ion-inline-end:"/home/vadim/develop/ionic2/myjw/src/pages/place-form/flat-block/placeflat-block.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PlaceFlatBlockComponent);
    return PlaceFlatBlockComponent;
}());

//# sourceMappingURL=placeflat-block.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map