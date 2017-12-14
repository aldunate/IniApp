
export function uriApiFun(apiDir: string){
    const mockBackend = true;
    const uriApi = 'http://localhost:57989/api/';
    const uriJson = '../jsonApi/';

    if (mockBackend) {
        return uriJson + apiDir + '.json';
    }
    return uriApi + apiDir;
}

export const GlobalVar = Object.freeze({
    mockBackend : true,
    // uriApi: 'http://localhost:57989/api/',
    uriApi: 'file:///home/computadora/JoinderNote/src/app/util/jsonApi/',
    jsonApi: 'file:///home/computadora/JoinderNote/src/app/util/jsonApi/'
});

