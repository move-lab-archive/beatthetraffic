import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { URL_PREFIX } = publicRuntimeConfig

export function prefixURL(url) {
    return `${URL_PREFIX}${url}`;
}