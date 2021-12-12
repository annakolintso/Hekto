import "./../style/signup.scss";

const form = document.querySelector('.signup__form');
const inputs = form.querySelectorAll('.form-group__input');
const successText = document.querySelector('.signup__success');

const validation = () => {
    let countError = 0;
    inputs.forEach(el => {
        const formGroup = el.closest('.form-group');
        if(el.value === '') {
            formGroup.classList.add('has-error');
            countError++;
        } else {
            formGroup.classList.remove('has-error');
        }
    })
    return !countError;
}

const getFormData = () => {
    const data = {};
    inputs.forEach(el=> {
        const key = el.name;
        const value = el.value;
        data[key] = value;
    })
    return data;
}

const clearForm = () => {
    inputs.forEach(el => el.value = '');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validated = validation();
    const formData = getFormData();
    if(validated){
        document.cookie = 'formData=' + JSON.stringify(formData);
        successText.classList.add('active');
        setTimeout(() => {
            successText.classList.remove('active');
        }, 2000)
        clearForm();
    }
})

