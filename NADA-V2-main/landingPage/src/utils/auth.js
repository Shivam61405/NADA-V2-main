export const setAuth = (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
};

export const getAuth = () => ({
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
});

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};
