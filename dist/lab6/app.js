"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Helpers
let showError = (inputName, errorMsg) => {
    let input = document.getElementById(`course-${inputName}`);
    input === null || input === void 0 ? void 0 : input.classList.add("is-invalid");
    let error = input === null || input === void 0 ? void 0 : input.nextElementSibling;
    error.innerHTML = errorMsg;
};
let hideError = (inputName) => {
    let input = document.getElementById(`course-${inputName}`);
    input === null || input === void 0 ? void 0 : input.classList.remove("is-invalid");
    let error = input === null || input === void 0 ? void 0 : input.nextElementSibling;
    error.innerHTML = "";
};
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["required"],
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["positive"],
    };
}
let validate = (course) => {
    let courseValidateConfig = registeredValidators[course.constructor.name];
    console.log(courseValidateConfig);
    let isValid = true;
    for (const prop in courseValidateConfig) {
        for (const validator of courseValidateConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!course[prop];
                    if (!isValid) {
                        showError(prop, "Không được để trống.");
                    }
                    else {
                        hideError(prop);
                    }
                    break;
                case "positive":
                    isValid = isValid && course[prop] > 0;
                    if (!isValid) {
                        showError(prop, "Không được để trống hoặc nhập số âm.");
                    }
                    else {
                        hideError(prop);
                    }
                    break;
            }
        }
    }
    return isValid;
};
class Course {
    constructor(title, price) {
        this.title = "";
        this.price = 0;
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
let formData = document.getElementById("form-data");
formData === null || formData === void 0 ? void 0 : formData.addEventListener("submit", (event) => {
    event.preventDefault();
    let titleInput = document.getElementById("course-title");
    let title = titleInput.value.trim();
    let priceInput = document.getElementById("course-price");
    let price = +priceInput.value.trim();
    let course = new Course(title, price);
    if (validate(course)) {
        console.log(course);
    }
});
