function validateForm() {
    var form = document.getElementById("registrationForm");
    var email = form.querySelector("[name='Email']").value;
    var password = form.querySelector("[name='Haslo']").value;
    var confirmPassword = form.querySelector("[name='PotwierdzenieHasla']").value;

    var emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Podaj poprawny adres email";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Hasło musi zawierać co najmniej jedną cyfrę, jedną dużą i małą literę oraz mieć co najmniej 8 znaków.";
        return false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Hasło i jego potwierdzenie nie są takie same";
        return false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    return true;
}

console.log(validateForm);

