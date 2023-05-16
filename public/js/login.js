/* eslint-disable */
const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/users/login",
      data: {
        email: email,
        password: password,
      },
    });
    // console.log(res);

    if (res.data.status === "success") {
      alert("Logged in successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const signup = async (name, email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/users/signup",
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    // console.log(res);

    if (res.data.status === "success") {
      alert("Account created successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/users/logout",
    });
    if (res.data.status === "success") {
      location.reload(true);
    }
  } catch (err) {
    alert("error", "Error logging out! Try again");
  }
};

const loginForm = document.querySelector(".form--login");
const logoutBtn = document.querySelector(".nav__el--logout");
const signupForm = document.querySelector(".form--signup");

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (logoutBtn) logoutBtn.addEventListener("click", logout);

if (signupForm)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signup(name, email, password);
  });
