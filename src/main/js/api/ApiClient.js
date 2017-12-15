import queryString from 'query-string';

export default class ApiClient {
    constructor(prefix = '/api') {
        this.prefix = prefix;
    }

    get(requestUrl, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'patch',
            body: payload
        });
    }

    post(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload,
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }

    async request({url, method, params = {}, body}) {
        const urlWithQuery = `${url}?${queryString.stringify(params)}`;

        const init = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        };


        if (method !== 'get' && method !== 'head') {
            if (process.env.BROWSER) body._csrf = document.head.querySelector('[name="_csrf"]').content;
            init.body = JSON.stringify(body);
        }

        let res = await fetch(`${this.prefix}/${urlWithQuery}`, init);
        if (res.status >= 500) {
            throw new Error('Bad response from server');
        }
        res = await res.json();
        if (!res.error) {
            return res;
        } else {
            throw new Error(res.error);
        }
    }
}
