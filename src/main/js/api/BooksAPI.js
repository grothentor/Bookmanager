import Base from './BaseAPI';

export default class BooksAPI extends Base {

    create(data) {
        return this.apiClient.post('books', data);
    }

    delete(data) {
        return this.apiClient.delete('books', data);
    }

    update(data) {
        return this.apiClient.put('books', data);
    }

    get(data) {
        return this.apiClient.get('books', data);
    }

}

