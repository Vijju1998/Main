import { apiClient } from '../../service';
export default {
  userLoginApi() {
    return apiClient.get('/User');
  },
};
