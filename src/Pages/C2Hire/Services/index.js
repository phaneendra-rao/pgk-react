import axios from 'axios';
import { HOME_STATS_URL } from '../constants';

export const homeStatsData = () => axios.get(HOME_STATS_URL);
