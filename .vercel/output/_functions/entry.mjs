import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BgQQeBDg.mjs';
import { manifest } from './manifest_BTOY81xS.mjs';

const serverIslandMap = new Map([
	['BuyButton', () => import('./chunks/BuyButton_BO7NfCw6.mjs')],
	['BookScore', () => import('./chunks/BookScore_C63kHW6C.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_slug_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[slug].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "53e01c75-8904-4020-bb84-8e289ea3f8ec",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
