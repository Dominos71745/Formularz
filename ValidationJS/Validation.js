function validateForm() {
    var form = document.getElementById("registrationForm");
    var email = form.querySelector("[name='Email']").value;
    var password = form.querySelector("[name='Haslo']").value;
    var confirmPassword = form.querySelector("[name='PotwierdzenieHasla']").value;

    var emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
        alert("Podaj poprawny adres email");
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Hasło musi zawierać co najmniej jedną cyfrę, jedną dużą i małą literę oraz mieć co najmniej 8 znaków.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Hasło i jego potwierdzenie nie są takie same");
        return false;
    }

    return true;
}