// Helpers
let showError = (inputName: string, errorMsg: string) => {
  let input = document.getElementById(`course-${inputName}`);
  input?.classList.add("is-invalid");

  let error = input?.nextElementSibling as Element;
  error.innerHTML = errorMsg;
};

let hideError = (inputName: string) => {
  let input = document.getElementById(`course-${inputName}`);
  input?.classList.remove("is-invalid");

  let error = input?.nextElementSibling as Element;
  error.innerHTML = "";
};

// Decorator
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

let validate = (course: any) => {
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
          } else {
            hideError(prop);
          }
          break;
        case "positive":
          isValid = isValid && course[prop] > 0;
          if (!isValid) {
            showError(prop, "Không được để trống hoặc nhập số âm.");
          } else {
            hideError(prop);
          }
          break;
      }
    }
  }

  return isValid;
};

class Course {
  @Required
  title: string = "";

  @PositiveNumber
  price: number = 0;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

let formData = document.getElementById("form-data") as HTMLButtonElement;

formData?.addEventListener("submit", (event) => {
  event.preventDefault();

  let titleInput = document.getElementById("course-title") as HTMLInputElement;
  let title = titleInput.value.trim();

  let priceInput = document.getElementById("course-price") as HTMLInputElement;
  let price = +priceInput.value.trim();

  let course = new Course(title, price);

  if (validate(course)) {
    console.log(course);
  }
});
