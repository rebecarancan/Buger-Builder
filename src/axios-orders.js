import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://react-burger-builder-20792.firebaseio.com/'
});

export default instance;