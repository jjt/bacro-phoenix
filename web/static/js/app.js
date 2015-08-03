import xr from 'xr';

const qs = document.querySelector.bind(document);
const qsa = document.querySelectorAll.bind(document);

const app = {
  init() {
    const $loginForm = qs('#login');
    if ($loginForm) {
      $loginForm.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const url = $loginForm.action;
        const email = qs('#login-email').value;
        const password = qs('#login-password').value;
        const csrf = qs('[name="_csrf_token"]').value;

        const postData = {
          email: email,
          password: password,
          _csrf_token: csrf,
        };

        xr.post(url, postData)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      });
    }
  },
};

app.init();

export default app;
