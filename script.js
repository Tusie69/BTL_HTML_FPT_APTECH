

const form = document.getElementById("userForm");
const btnBack = document.getElementById("btnBack");

function setError(id, message) {
    const el = document.getElementById(id);
    el.innerText = message || "";
}

function clearErrors() {
    setError("nameError", "");
    setError("emailError", "");
    setError("phoneError", "");
    setError("genderError", "");
}

function isValidEmail(value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(value);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const about = document.getElementById("about").value.trim();

    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');

    clearErrors();

    let isValid = true;

    if (name.length === 0) {
        setError("nameError", "Họ và tên: bắt buộc nhập.");
        isValid = false;
    } else if (name.length > 50) {
        setError("nameError", "Họ và tên: tối đa 50 ký tự.");
        isValid = false;
    }

    if (email.length === 0) {
        setError("emailError", "Email: bắt buộc nhập.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        setError("emailError", "Email: không đúng định dạng.");
        isValid = false;
    }

    if (phone.length === 0) {
        setError("phoneError", "Phone: bắt buộc nhập.");
        isValid = false;
    }

    if (!gender) {
        setError("genderError", "Giới tính: vui lòng chọn Nam hoặc Nữ.");
        isValid = false;
    }

    if (!isValid) return;

    document.getElementById("rName").innerText = name;
    document.getElementById("rEmail").innerText = email;
    document.getElementById("rPhone").innerText = phone;
    document.getElementById("rGender").innerText = gender.value;

    const hobbyList = Array.from(hobbies).map(h => h.value);
    document.getElementById("rHobby").innerText = hobbyList.length ? hobbyList.join(", ") : "Không chọn";

    document.getElementById("rAbout").innerText = about.length ? about : "Không có";

    form.style.display = "none";
    document.getElementById("result").style.display = "block";
});

btnBack.addEventListener("click", function () {
    document.getElementById("result").style.display = "none";
    form.style.display = "block";
});