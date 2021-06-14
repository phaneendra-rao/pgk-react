import axios from 'axios';
const HOME_STATS_URL = "http://65.0.248.114:80/api/u/homeStats";

export const homeStatsData = () => axios.get(HOME_STATS_URL);
