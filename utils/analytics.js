export function initAnalytics(id = '') {
  window.dataLayer = window.dataLayer || []

  const script = document.createElement('script')

  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  script.async = true

  document.head.appendChild(script)
}

export function gtag() {
  window.dataLayer.push(arguments)
}

export function callback(data) {
  console.info('callback triggered for: ', data)
}
