import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    console.log('token', token)
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      localStorage.removeItem('id_token');
      return false;
    } else {
      return true;
    }
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    console.log('deleting token')
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

const authService = new AuthService();
export default authService;