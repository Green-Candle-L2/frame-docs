import React from "react";
import { useConfig, DocsThemeConfig } from "nextra-theme-docs";
const config: DocsThemeConfig = {
  logo: (
    <svg width="128" viewBox="0 0 3214 478" fill="none">
      <path
        d="M2433.01 136.4C2512.21 136.4 2572.31 194.906 2572.31 274.506C2572.31 354.902 2512.21 415 2433.01 415H2341.47V136.4H2433.01ZM2436.2 370.424C2486.74 370.424 2524.55 329.43 2524.55 274.506C2524.55 219.98 2487.14 180.976 2436.2 180.976H2388.04V370.424H2436.2Z"
        fill="currentColor"
      />
      <path
        d="M2702.78 216.398C2759.69 216.398 2803.87 260.178 2803.87 317.888C2803.87 375.598 2759.69 418.98 2702.78 418.98C2645.86 418.98 2602.08 375.598 2602.08 317.888C2602.08 260.178 2645.86 216.398 2702.78 216.398ZM2702.78 258.984C2670.54 258.984 2645.86 284.456 2645.86 317.888C2645.86 350.922 2670.54 376.394 2702.78 376.394C2735.02 376.394 2760.09 350.922 2760.09 317.888C2760.09 284.456 2735.02 258.984 2702.78 258.984Z"
        fill="currentColor"
      />
      <path
        d="M2931.8 418.98C2874.89 418.98 2831.11 375.598 2831.11 317.888C2831.11 260.178 2874.89 216.398 2931.8 216.398C2978.76 216.398 3018.96 247.84 3024.93 290.028H2979.56C2974.78 272.118 2954.88 258.984 2931.8 258.984C2899.56 258.984 2874.89 284.456 2874.89 317.888C2874.89 350.922 2899.56 376.394 2931.8 376.394C2954.88 376.394 2975.18 363.26 2979.96 343.758H3025.33C3020.16 387.936 2979.16 418.98 2931.8 418.98Z"
        fill="currentColor"
      />
      <path
        d="M3138.63 418.98C3090.87 418.98 3057.43 394.304 3053.45 352.514H3096.04C3097.63 369.628 3114.35 380.772 3136.24 380.772C3157.73 380.772 3170.47 371.618 3170.47 358.086C3170.47 316.296 3057.83 350.126 3057.83 276.098C3057.83 242.268 3086.09 216.398 3131.46 216.398C3171.66 216.398 3206.68 237.89 3211.06 277.292H3166.49C3164.5 264.158 3150.96 253.412 3130.67 253.412C3113.15 253.412 3100.82 260.974 3100.82 273.312C3100.82 312.714 3213.85 276.496 3213.85 357.688C3213.85 392.712 3181.61 418.98 3138.63 418.98Z"
        fill="currentColor"
      />
      <path
        d="M658.882 139.99V159.964H724.389V214.253H658.882V410.409H602.075V214.253H553.968V159.964H602.075V137.429C602.075 75.4581 640.97 40.6314 696.241 40.6314C706.989 40.6314 718.759 42.68 726.948 46.2651L723.877 96.9687C719.271 95.4322 710.571 93.8957 704.43 93.8957C679.353 93.8957 658.882 111.309 658.882 139.99Z"
        fill="currentColor"
      />
      <path
        d="M874.995 154.842C886.766 154.842 896.49 156.379 903.654 158.94L900.072 212.716C891.372 209.643 880.113 207.595 870.389 207.595C851.453 207.595 824.329 222.959 811.023 250.616V410.409H754.216V159.964H811.023V194.278C823.817 170.207 851.965 154.842 874.995 154.842Z"
        fill="currentColor"
      />
      <path
        d="M1171.35 159.964V410.409H1114.03V366.363C1096.12 397.605 1065.41 415.53 1025.49 415.53C958.45 415.53 905.737 357.144 905.737 284.93C905.737 212.716 958.45 154.842 1025.49 154.842C1065.41 154.842 1096.12 172.768 1114.03 204.009V159.964H1171.35ZM962.033 284.93C962.033 327.439 995.298 361.242 1037.78 361.242C1081.28 361.242 1114.03 328.464 1114.03 284.93C1114.03 241.909 1081.28 209.131 1037.78 209.131C995.298 209.131 962.033 242.933 962.033 284.93Z"
        fill="currentColor"
      />
      <path
        d="M1505.67 154.842C1566.06 154.842 1608.03 195.303 1608.03 257.274V410.409H1550.19V268.029C1550.19 230.642 1529.21 207.595 1495.43 207.595C1472.92 207.595 1449.89 222.959 1438.63 241.909L1440.16 250.616V410.409H1382.84V268.029C1382.84 230.642 1360.84 207.595 1329.11 207.595C1303.52 207.595 1282.54 222.447 1272.3 242.421V410.409H1215.49V159.964H1272.3V192.742C1284.58 175.841 1309.66 154.842 1348.56 154.842C1382.84 154.842 1407.92 167.646 1423.79 195.303C1440.67 175.329 1469.33 154.842 1505.67 154.842Z"
        fill="currentColor"
      />
      <path
        d="M1894 274.175C1894 280.833 1893.49 291.076 1891.95 298.758H1701.57C1707.71 339.219 1735.35 363.802 1775.78 363.802C1803.93 363.802 1829.52 351.511 1841.29 332.049L1886.84 361.242C1868.41 395.044 1826.45 415.53 1774.76 415.53C1702.6 415.53 1644.77 358.681 1644.77 283.906C1644.77 211.18 1701.57 154.842 1773.73 154.842C1841.29 154.842 1894 207.082 1894 274.175ZM1703.62 255.225H1834.12C1831.05 223.984 1804.95 201.961 1770.66 201.961C1736.37 201.961 1712.32 222.447 1703.62 255.225Z"
        fill="currentColor"
      />
      <path
        d="M233.054 213.777C233.054 213.777 236.063 85.8562 283.333 38.5511C321.366 0.490009 380.139 -2.40261 414.606 32.0903C449.073 66.5832 446.183 125.4 408.15 163.461C360.88 210.766 233.054 213.777 233.054 213.777Z"
        fill="#FAE630"
      />
      <path
        d="M233.054 213.777C233.054 213.777 236.063 85.8562 283.333 38.5511C321.366 0.490009 380.139 -2.40261 414.606 32.0903C449.073 66.5832 446.183 125.4 408.15 163.461C360.88 210.766 233.054 213.777 233.054 213.777Z"
        fill="url(#paint0_angular_1794_516)"
      />
      <path
        d="M205.631 213.777C205.631 213.777 202.622 85.8563 155.352 38.5512C117.319 0.490078 58.5463 -2.40254 24.0791 32.0904C-10.3881 66.5833 -7.49765 125.4 30.5351 163.461C77.805 210.766 205.631 213.777 205.631 213.777Z"
        fill="#FAE630"
      />
      <path
        d="M205.631 213.777C205.631 213.777 202.622 85.8563 155.352 38.5512C117.319 0.490078 58.5463 -2.40254 24.0791 32.0904C-10.3881 66.5833 -7.49765 125.4 30.5351 163.461C77.805 210.766 205.631 213.777 205.631 213.777Z"
        fill="url(#paint1_angular_1794_516)"
      />
      <path
        d="M155.345 416.449C202.615 369.144 205.624 241.223 205.624 241.223C205.624 241.223 77.7983 244.234 30.5284 291.539C-7.50437 329.6 -10.3949 388.417 24.0724 422.91C58.5396 457.403 117.312 454.51 155.345 416.449Z"
        fill="#FAE630"
      />
      <path
        d="M155.345 416.449C202.615 369.144 205.624 241.223 205.624 241.223C205.624 241.223 77.7983 244.234 30.5284 291.539C-7.50437 329.6 -10.3949 388.417 24.0724 422.91C58.5396 457.403 117.312 454.51 155.345 416.449Z"
        fill="url(#paint2_angular_1794_516)"
      />
      <path
        d="M233.067 241.223C233.067 241.223 236.076 369.144 283.346 416.449C321.379 454.51 380.152 457.403 414.619 422.91C449.086 388.417 446.196 329.6 408.163 291.539C360.893 244.234 233.067 241.223 233.067 241.223Z"
        fill="#FAE630"
      />
      <path
        d="M233.067 241.223C233.067 241.223 236.076 369.144 283.346 416.449C321.379 454.51 380.152 457.403 414.619 422.91C449.086 388.417 446.196 329.6 408.163 291.539C360.893 244.234 233.067 241.223 233.067 241.223Z"
        fill="url(#paint3_angular_1794_516)"
      />
      <path
        d="M2076.43 0.599976H2123.76V477.864H2076.43V0.599976Z"
        fill="currentColor"
      />
      <defs>
        <radialGradient
          id="paint0_angular_1794_516"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(372.187 239.227) rotate(32.6667) scale(428.29 389.228)"
        >
          <stop stop-color="#FF541E" />
          <stop offset="1" stop-color="#FF541E" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_angular_1794_516"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(372.187 239.227) rotate(32.6667) scale(428.29 389.228)"
        >
          <stop stop-color="#FF541E" />
          <stop offset="1" stop-color="#FF541E" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_angular_1794_516"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(372.187 239.227) rotate(32.6667) scale(428.29 389.228)"
        >
          <stop stop-color="#FF541E" />
          <stop offset="1" stop-color="#FF541E" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_angular_1794_516"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(372.187 239.227) rotate(32.6667) scale(428.29 389.228)"
        >
          <stop stop-color="#FF541E" />
          <stop offset="1" stop-color="#FF541E" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  ),
  project: {
    link: "https://github.com/frame-network",
  },
  chat: {
    link: "https://discord.gg/framexyz",
  },
  docsRepositoryBase: "https://github.com/frame-network/frame-docs",
  footer: {
    text: "Frame Docs © 2023",
  },
  primaryHue: {
    // orange
    light: 0xfcbf1a,
    dark: 0xfcbf1a,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Frame Docs",
      description: "Documentation for Frame Network",
      openGraph: {
        type: "website",
        locale: "en_IE",
        siteName: "Frame Docs",
        description: "Documentation for Frame Network",
        // images:
      },
      twitter: {
        site: "@frame_xyz",
      },
      additionalLinkTags: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          href: "/favicon-96x96.png",
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
        },
        {
          href: "/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
      ],
    };
  },
};

export default config;
