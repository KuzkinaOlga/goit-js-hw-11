import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '16085264-71307d3f0a6fd2ec26a379ecb';
export default class ApiService{
    constructor() {
        this.searchQuerry = '';
        this.page = 1;

    }
    async fetchImg() {
        try {
            const response = await axios.get(`?image_type=photo&orientation=horizontal&safesearch=true&q=${this.searchQuerry}&page=${this.page}&per_page=40&key=${apiKey}`)
            const data = await response?.data
            
            this.incrementPage()
        
            return data
        } catch (error) {
            console.log(error);
        }
    }
    incrementPage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1
        console.log(this.page);
    }
};