import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { URL_PREFIX, ROOT_URL } = publicRuntimeConfig

export function prefixURL(url) {
    if (url.charAt(0) === '/') {
        return `${URL_PREFIX}${url}`;
    } else {
        return `${URL_PREFIX}/${url}`;
    }
}

export function prefixURLRoot(url) {
    if (url.charAt(0) === '/') {
        return `https://${ROOT_URL}${URL_PREFIX}${url}`;
    } else {
        return `https://${ROOT_URL}${URL_PREFIX}/${url}`;
    }
}

export const COMPLETE_ROOT_URL = `https://${ROOT_URL}`;