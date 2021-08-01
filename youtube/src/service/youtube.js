// 네트워크 통신을 위함
// fetch 대신 axios 라이브러리 사용
import axios from 'axios';

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: key },

        });
    }

    async mostPopular() {
        const response = await this.youtube.get('videos',  {
            params: { // fetch와 다르게 params의 가독성이 높음
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;
    }

    async search(query) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, this.getRequestOptions);
        const result_1 = await response.json();
        const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        return items;
    }
}

export default Youtube;