import "./../style/signup.scss";

const form = document.querySelector('.signup__form');
const inputs = form.querySelectorAll('.form-group__input');
const successText = document.querySelector('.signup__success');


const validationField = (el) => {
    const formGroup = el.closest('.form-group');
    let result = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const invalidEmail = el.getAttribute('name') === 'email' && el.value && !re.test(el.value);

    formGroup.classList.remove('has-error');
    formGroup.classList.remove("required");
    formGroup.classList.remove("pattern");

    if (el.value === '' || invalidEmail) {
        formGroup.classList.add('has-error');
        formGroup.classList.add(invalidEmail ? "pattern" : "required");
        result = false;
    }
    return result;
}

const validation = () => {
    let countError = 0;
    inputs.forEach(el => {
        let validateField = validationField(el);
        !validateField && countError++;
    })
    return !countError;
}

const getFormData = () => {
    const data = {};
    inputs.forEach(el => {
        const key = el.name;
        const value = el.value;
        data[key] = value;
    })
    return data;
}

const clearForm = () => {
    inputs.forEach(el => el.value = '');
}

inputs.forEach(el => {
    el.addEventListener('blur', () => {
        validationField(el);
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validated = validation();
    const formData = getFormData();
    if (validated) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData)
          })
          .then(() => {
            document.cookie = 'formData=' + JSON.stringify(formData);
            successText.classList.add('active');
            setTimeout(() => {
                successText.classList.remove('active');
            }, 2000)
            clearForm();
          })
          .catch(err => {
              console.error(err);
          })
    }
})