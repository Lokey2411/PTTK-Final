export const isManager = JSON.parse(localStorage.getItem("isManager"));
export const isLogin = JSON.parse(localStorage.getItem("isLogin"));
export const isEmployee = !isManager && isLogin;
