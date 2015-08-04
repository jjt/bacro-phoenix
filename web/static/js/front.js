import 'css/front.css';
import xr from 'xr';

const qs = document.querySelector.bind(document);

const front = {
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
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            /* eslint-disable no-console */
            console.log(err);
            /* eslint-enable no-console */
          });
      });
    }
  },
};

front.init();

export default front;
