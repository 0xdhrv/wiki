export default {
  github: 'https://github.com/0xdhrv/wiki',
  titleSuffix: ' – 0xdhrv\'s Wiki',
  logo: (
    <>
      <span className="text-toggle mr-2 md:inline">
        <svg height="32" width="32" viewBox="0 0 318 318" fill="none">
          <path
            d="M33 18C24.7157 18 18 24.7157 18 33V285C18 293.284 24.7157 300 33 300H233.477C232.31 299.45 231.143 298.884 229.975 298.3C210.157 288.391 190.066 273.386 174.949 250.711C159.795 227.979 150 198.075 150 159C150 119.925 159.795 90.0207 174.949 67.2889C190.066 44.6136 210.157 29.609 229.975 19.7002C231.143 19.1162 232.31 18.5497 233.477 18H33ZM300 18.5327C296.485 18.8579 292.085 19.3808 287.042 20.2213C273.569 22.4668 255.742 26.9411 238.025 35.7998C220.343 44.641 202.934 57.7614 189.926 77.2736C176.955 96.7293 168 123.075 168 159C168 194.925 176.955 221.271 189.926 240.726C202.934 260.239 220.343 273.359 238.025 282.2C255.742 291.059 273.569 295.533 287.042 297.779C292.085 298.619 296.485 299.142 300 299.467V18.5327ZM308.989 318H318V0H33C14.7746 0 0 14.7746 0 33V285C0 303.225 14.7746 318 33 318L308.975 318L308.989 318Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-toggle font-normal hidden md:inline">
        0xdhrv's Wiki
      </span>
    </>
  ),
  head: (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content="0xdhrv's Wiki" />
      <meta name="description" content="This is my digital garden where I write mostly about code, design, minimalism, psychology, philosophy, art, and music. It is an attempt to share knowledge with the world in a form of a collaborative online project that is hosted on Github. Designer, Developer, and Minimalism.~ stuck b/w develop and deploy " />
      <meta name="keywords" content="0xdhrv's Wiki, Digital Garden, Digital, Garden, Wiki, 0xdhrv, Dhruv Suthar, Dhruv, Suthar, 0x, dhrv, dhrv.pw, 0x.dhrv.pw, developer, designer, minimalism, dhruv, suthar, dhruv suthar" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="0xdhrv" />
      <meta name="twitter:image" content="https://res.cloudinary.com/dhrv/image/upload/v1602144615/resources/dhrv-Og.png" />
      <meta name="og:image" content="https://res.cloudinary.com/dhrv/image/upload/v1602144615/resources/dhrv-Og.png" />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="alternate icon" type="image/png" href="/favicons/dark.png" key="dynamic-favicon-alternate" />
      <link rel="icon" type="image/svg+xml" href="/favicons/dark.svg" key="dynamic-favicon" />
      <link rel="alternate icon" type="image/png" href="/favicons/light.png" key="dynamic-favicon-alternate" />
      <link rel="icon" type="image/svg+xml" href="/favicons/light.svg" key="dynamic-favicon" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>{new Date().getFullYear()} © <a className="text-gray-600" target="_blank" href="https://dhrv.pw/">0xdhrv</a></>
}
