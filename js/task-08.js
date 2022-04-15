const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();

    const dataEl = ev.currentTarget.elements;
    const email = dataEl.email.value;
    const password = dataEl.password.value;
    const data = { email, password };
    
    if (email === "" || password === "") {
        return alert('Пожалуйста, заполните все поля!');
    }

    console.log(data);

    ev.currentTarget.reset();
}


