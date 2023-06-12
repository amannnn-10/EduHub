const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = ReactRouterDOM.useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/dashboard'); // Redirect to the dashboard after successful login
    } catch (error) {
      console.log(error);
    }
  };

  return React.createElement('div', null, [
    React.createElement('h3', { key: 'title' }, 'Login'),
    React.createElement('input', { key: 'email', type: 'email', placeholder: 'Email', value: email, onChange: handleEmailChange }),
    React.createElement('input', { key: 'password', type: 'password', placeholder: 'Password', value: password, onChange: handlePasswordChange }),
    React.createElement('button', { key: 'login', onClick: handleLogin }, 'Log in')
  ]);
};

const scriptTag = document.createElement('script');
scriptTag.src = 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js';
scriptTag.async = false;
document.head.appendChild(scriptTag);

const scriptTag2 = document.createElement('script');
scriptTag2.src = 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js';
scriptTag2.async = false;
document.head.appendChild(scriptTag2);

const scriptTag3 = document.createElement('script');
scriptTag3.src = 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
scriptTag3.async = false;
document.head.appendChild(scriptTag3);

const scriptTag4 = document.createElement('script');
scriptTag4.src = 'https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js';
scriptTag4.async = false;
scriptTag4.onload = function () {
  ReactDOM.render(
    React.createElement(LoginPage),
    document.getElementById('login-container')
  );
};
document.head.appendChild(scriptTag4);
