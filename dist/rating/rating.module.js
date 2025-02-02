"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const movie_module_1 = require("../movie/movie.module");
const rating_controller_1 = require("./rating.controller");
const rating_model_1 = require("./rating.model");
const rating_service_1 = require("./rating.service");
let RatingModule = class RatingModule {
};
exports.RatingModule = RatingModule;
exports.RatingModule = RatingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: rating_model_1.RatingModel,
                    schemaOptions: {
                        collection: 'Rating',
                    },
                },
            ]),
            movie_module_1.MovieModule,
        ],
        controllers: [rating_controller_1.RatingController],
        providers: [rating_service_1.RatingService],
        exports: [rating_service_1.RatingService]
    })
], RatingModule);
//# sourceMappingURL=rating.module.js.map