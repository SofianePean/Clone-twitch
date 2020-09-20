import axios from 'axios';

const api = axios.create({
  headers: {
    'Client-ID': 'plfqmjmvoci2xb9gzv3fjdf7ns8jgs',
    Authorization: 'Bearer e91sv2wz3vyopq95y6nfkpobyyud2j',
  },
});

// https://id.twitch.tv/oauth2/authorize?client_id=plfqmjmvoci2xb9gzv3fjdf7ns8jgs&redirect_uri=http://127.0.0.1/&response_type=token
export default api;
