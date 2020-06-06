import axios from 'axios';

const instance = axios.create({
    baseURL: 'gs://report-generate-system.appspot.com'
});

export default instance;    