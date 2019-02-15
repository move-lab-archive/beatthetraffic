import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { URL_PREFIX } = publicRuntimeConfig

export function prefixURL(url) {
    if (url.charAt(0) === '/') {
        return `${URL_PREFIX}${url}`;
    } else {
        return `${URL_PREFIX}/${url}`;
    }
}