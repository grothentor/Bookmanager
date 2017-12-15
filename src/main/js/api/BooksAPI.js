import Base from './BaseAPI';

export default class UserAPI extends Base {

    create(data) {
        return this.apiClient.post('books',data);
    }
}

