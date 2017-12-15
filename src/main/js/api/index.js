import ApiClient    from './ApiClient';
import BooksAPI      from './BooksAPI';

export const apiClient = new ApiClient();

const combinedAPI = {
    books: new BooksAPI(apiClient),
};

export default combinedAPI;
