import axios from 'axios';

const KEY = 'AIzaSyBxo4admE8ow9NhJWJIL4ApY1HGO0MvoIY';

export default axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY,
            type: 'video'
      }
});
