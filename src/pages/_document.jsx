import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

const audioEyeScript = `
  !(function () {
    var b = function () {
      window.__AudioEyeSiteHash = '2105ede915b1a1fbef1672abc0f6487e';
      var a = document.createElement('script');
      a.src = 'https://wsmcdn.audioeye.com/aem.js';
      a.type = 'text/javascript';
      a.setAttribute('async', '');
      document.getElementsByTagName('body')[0].appendChild(a);
    };

    'complete' !== document.readyState
      ? window.addEventListener
        ? window.addEventListener('load', b)
        : window.attachEvent && window.attachEvent('onload', b)
      : b();
  })();
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/1db83cf1cb6ba899587f161f/script.js"></script>
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
      <script dangerouslySetInnerHTML={{ __html: audioEyeScript }} />
    </Html>
  )
}
