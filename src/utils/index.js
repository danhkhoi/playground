const getParamsFromURL = (query) => {

    const beginOfQuery = query.indexOf('?');
    if(beginOfQuery < 0) {
        return undefined;
    } else {
        const parametersRawList = query.substring(beginOfQuery + 1).split('&');
    if (parametersRawList[0]) {
        const parameters = parametersRawList.reduce((prev, curr) => {
            const parts = curr.split('=');
            prev[parts[0]] = parts[1];
            return prev;
        }, {});
        return parameters;
    }
    }
};


export default { getParamsFromURL };

export { getParamsFromURL };