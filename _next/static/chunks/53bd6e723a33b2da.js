(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  41567,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: n,
      blurDataURL: i,
      objectFit: a,
    }) {
      let o = r ? 40 * r : e,
        l = n ? 40 * n : t,
        s = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        s
          ? "none"
          : "contain" === a
          ? "xMidYMid"
          : "cover" === a
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  9560,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return a;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  35070,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      e.r(45694);
    let n = e.r(75527),
      i = e.r(41567),
      a = e.r(9560),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function s(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: c = !1,
        loading: d,
        className: f,
        quality: p,
        width: g,
        height: h,
        fill: m = !1,
        style: b,
        overrideSrc: y,
        onLoad: v,
        onLoadingComplete: w,
        placeholder: _ = "empty",
        blurDataURL: x,
        fetchPriority: E,
        decoding: j = "async",
        layout: O,
        objectFit: S,
        objectPosition: R,
        lazyBoundary: C,
        lazyRoot: P,
        ...k
      },
      T
    ) {
      var M;
      let N,
        L,
        z,
        { imgConf: I, showAltText: A, blurComplete: D, defaultLoader: V } = T,
        $ = I || a.imageConfigDefault;
      if ("allSizes" in $) N = $;
      else {
        let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
          t = $.deviceSizes.sort((e, t) => e - t),
          r = $.qualities?.sort((e, t) => e - t);
        N = { ...$, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === V)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let F = k.loader || V;
      delete k.loader, delete k.srcSet;
      let U = "__next_img_default" in F;
      if (U) {
        if ("custom" === N.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (O) {
        "fill" === O && (m = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[O];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[O];
        r && !t && (t = r);
      }
      let W = "",
        H = s(g),
        B = s(h);
      if ((M = e) && "object" == typeof M && (l(M) || void 0 !== M.src)) {
        let t = l(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((L = t.blurWidth),
          (z = t.blurHeight),
          (x = x || t.blurDataURL),
          (W = t.src),
          !m)
        )
          if (H || B) {
            if (H && !B) {
              let e = H / t.width;
              B = Math.round(t.height * e);
            } else if (!H && B) {
              let e = B / t.height;
              H = Math.round(t.width * e);
            }
          } else (H = t.width), (B = t.height);
      }
      let q = !u && !c && ("lazy" === d || void 0 === d);
      (!(e = "string" == typeof e ? e : W) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (q = !1)),
        N.unoptimized && (r = !0),
        U &&
          !N.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let G = s(p),
        J = Object.assign(
          m
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: R,
              }
            : {},
          A ? {} : { color: "transparent" },
          b
        ),
        X =
          D || "empty" === _
            ? null
            : "blur" === _
            ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({
                widthInt: H,
                heightInt: B,
                blurWidth: L,
                blurHeight: z,
                blurDataURL: x || "",
                objectFit: J.objectFit,
              })}")`
            : `url("${_}")`,
        Y = o.includes(J.objectFit)
          ? "fill" === J.objectFit
            ? "100% 100%"
            : "cover"
          : J.objectFit,
        Z = X
          ? {
              backgroundSize: Y,
              backgroundPosition: J.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: X,
            }
          : {},
        K = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: a,
          sizes: o,
          loader: l,
        }) {
          if (r) {
            let e = (0, n.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//") && e) {
              let r = t.includes("?") ? "&" : "?";
              t = `${t}${r}dpl=${e}`;
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: s, kind: u } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, i, o),
            c = s.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: s
              .map(
                (r, n) =>
                  `${l({ config: e, src: t, quality: a, width: r })} ${
                    "w" === u ? r : n + 1
                  }${u}`
              )
              .join(", "),
            src: l({ config: e, src: t, quality: a, width: s[c] }),
          };
        })({
          config: N,
          src: e,
          unoptimized: r,
          width: H,
          quality: G,
          sizes: t,
          loader: F,
        }),
        Q = q ? "lazy" : d;
      return {
        props: {
          ...k,
          loading: Q,
          fetchPriority: E,
          width: H,
          height: B,
          decoding: j,
          className: f,
          style: { ...J, ...Z },
          sizes: K.sizes,
          srcSet: K.srcSet,
          src: y || K.src,
        },
        meta: { unoptimized: r, preload: c || u, placeholder: _, fill: m },
      };
    }
  },
  34038,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let n = e.r(44440),
      i = "u" < typeof window,
      a = i ? () => {} : n.useLayoutEffect,
      o = i ? () => {} : n.useEffect;
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function l() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), l()),
        a(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        a(
          () => (
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l);
            }
          )
        ),
        o(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  90080,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return h;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(81258),
      o = e.r(44066),
      l = e.r(87433),
      s = o._(e.r(44440)),
      u = a._(e.r(34038)),
      c = e.r(75648);
    function d() {
      return [
        (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, l.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === s.default.Fragment
        ? e.concat(
            s.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(45694);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function g(e) {
      let t, r, n, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let a = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (a = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (a = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (a = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !o) && n.has(t)
                        ? (a = !1)
                        : (n.add(t), (i[r] = n));
                    }
                }
            }
            return a;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return s.default.cloneElement(e, { key: r });
        });
    }
    let h = function ({ children: e }) {
      let t = (0, s.useContext)(c.HeadManagerContext);
      return (0, l.jsx)(u.default, {
        reduceComponentsToState: g,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  19335,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(81258)._(e.r(44440)),
      i = e.r(9560),
      a = n.default.createContext(i.imageConfigDefault);
  },
  96318,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(81258)._(e.r(44440)).default.createContext(null);
  },
  886,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  97689,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(886),
      i = e.r(75527);
    function a({ config: e, src: t, width: r, quality: a }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let o = (0, n.findClosestQuality)(a, e),
        l = (0, i.getDeploymentId)();
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${
        t.startsWith("/") && l ? `&dpl=${l}` : ""
      }`;
    }
    a.__next_img_default = !0;
    let o = a;
  },
  36770,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(44440);
    function i(e, t) {
      let r = (0, n.useRef)(null),
        i = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = i.current;
            t && ((i.current = null), t());
          } else e && (r.current = a(e, n)), t && (i.current = a(t, n));
        },
        [e, t]
      );
    }
    function a(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  89315,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return w;
        },
      });
    let n = e.r(81258),
      i = e.r(44066),
      a = e.r(87433),
      o = i._(e.r(44440)),
      l = n._(e.r(65596)),
      s = n._(e.r(90080)),
      u = e.r(35070),
      c = e.r(9560),
      d = e.r(19335);
    e.r(45694);
    let f = e.r(96318),
      p = n._(e.r(97689)),
      g = e.r(36770),
      h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function m(e, t, r, n, i, a, o) {
      let l = e?.src;
      e &&
        e["data-loaded-src"] !== l &&
        ((e["data-loaded-src"] = l),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (i = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function b(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, o.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: i,
          decoding: l,
          className: s,
          style: u,
          fetchPriority: c,
          placeholder: d,
          loading: f,
          unoptimized: p,
          fill: h,
          onLoadRef: y,
          onLoadingCompleteRef: v,
          setBlurComplete: w,
          setShowAltText: _,
          sizesInput: x,
          onLoad: E,
          onError: j,
          ...O
        },
        S
      ) => {
        let R = (0, o.useCallback)(
            (e) => {
              e && (j && (e.src = e.src), e.complete && m(e, d, y, v, w, p, x));
            },
            [e, d, y, v, w, j, p, x]
          ),
          C = (0, g.useMergedRef)(S, R);
        return (0, a.jsx)("img", {
          ...O,
          ...b(c),
          loading: f,
          width: i,
          height: n,
          decoding: l,
          "data-nimg": h ? "fill" : "1",
          className: s,
          style: u,
          sizes: r,
          srcSet: t,
          src: e,
          ref: C,
          onLoad: (e) => {
            m(e.currentTarget, d, y, v, w, p, x);
          },
          onError: (e) => {
            _(!0), "empty" !== d && w(!0), j && j(e);
          },
        });
      }
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...b(t.fetchPriority),
      };
      return e && l.default.preload
        ? (l.default.preload(t.src, r), null)
        : (0, a.jsx)(s.default, {
            children: (0, a.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let w = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(f.RouterContext),
        n = (0, o.useContext)(d.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = h || n || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: l, onLoadingComplete: s } = e,
        g = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        g.current = l;
      }, [l]);
      let m = (0, o.useRef)(s);
      (0, o.useEffect)(() => {
        m.current = s;
      }, [s]);
      let [b, w] = (0, o.useState)(!1),
        [_, x] = (0, o.useState)(!1),
        { props: E, meta: j } = (0, u.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: b,
          showAltText: _,
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(y, {
            ...E,
            unoptimized: j.unoptimized,
            placeholder: j.placeholder,
            fill: j.fill,
            onLoadRef: g,
            onLoadingCompleteRef: m,
            setBlurComplete: w,
            setShowAltText: x,
            sizesInput: e.sizes,
            ref: t,
          }),
          j.preload
            ? (0, a.jsx)(v, { isAppRouter: !r, imgAttributes: E })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  32419,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(81258),
      o = e.r(35070),
      l = e.r(89315),
      s = a._(e.r(97689));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: s.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = l.Image;
  },
  96027,
  (e, t, r) => {
    t.exports = e.r(32419);
  },
  25661,
  (e, t, r) => {
    "use strict";
    var n = e.r(44440),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      a = n.useState,
      o = n.useEffect,
      l = n.useLayoutEffect,
      s = n.useDebugValue;
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !i(e, r);
      } catch (e) {
        return !0;
      }
    }
    var c =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              n = a({ inst: { value: r, getSnapshot: t } }),
              i = n[0].inst,
              c = n[1];
            return (
              l(
                function () {
                  (i.value = r), (i.getSnapshot = t), u(i) && c({ inst: i });
                },
                [e, r, t]
              ),
              o(
                function () {
                  return (
                    u(i) && c({ inst: i }),
                    e(function () {
                      u(i) && c({ inst: i });
                    })
                  );
                },
                [e]
              ),
              s(r),
              r
            );
          };
    r.useSyncExternalStore =
      void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
  },
  56032,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(25661);
  },
  31713,
  (e) => {
    "use strict";
    let t;
    var r = e.i(87433),
      n = e.i(44440),
      i = e.i(96027),
      a = e.i(56032);
    e.s(
      [
        "ERROR_REVALIDATE_EVENT",
        () => 3,
        "FOCUS_EVENT",
        () => 0,
        "MUTATE_EVENT",
        () => 2,
        "RECONNECT_EVENT",
        () => 1,
      ],
      67005
    );
    var o = Object.prototype.hasOwnProperty;
    let l = new WeakMap(),
      s = () => {},
      u = s(),
      c = Object,
      d = (e) => e === u,
      f = (e, t) => ({ ...e, ...t }),
      p = {},
      g = {},
      h = "undefined",
      m = typeof window != h,
      b = typeof document != h,
      y = m && "Deno" in window,
      v = (e, t) => {
        let r = l.get(e);
        return [
          () => (!d(t) && e.get(t)) || p,
          (n) => {
            if (!d(t)) {
              let i = e.get(t);
              t in g || (g[t] = i), r[5](t, f(i, n), i || p);
            }
          },
          r[6],
          () => (!d(t) && t in g ? g[t] : (!d(t) && e.get(t)) || p),
        ];
      },
      w = !0,
      [_, x] =
        m && window.addEventListener
          ? [
              window.addEventListener.bind(window),
              window.removeEventListener.bind(window),
            ]
          : [s, s],
      E = {
        initFocus: (e) => (
          b && document.addEventListener("visibilitychange", e),
          _("focus", e),
          () => {
            b && document.removeEventListener("visibilitychange", e),
              x("focus", e);
          }
        ),
        initReconnect: (e) => {
          let t = () => {
              (w = !0), e();
            },
            r = () => {
              w = !1;
            };
          return (
            _("online", t),
            _("offline", r),
            () => {
              x("online", t), x("offline", r);
            }
          );
        },
      },
      j = !n.default.useId,
      O = !m || y,
      S = O ? n.useEffect : n.useLayoutEffect,
      R = "u" > typeof navigator && navigator.connection,
      C =
        !O && R && (["slow-2g", "2g"].includes(R.effectiveType) || R.saveData),
      P = new WeakMap(),
      k = (e, t) => e === `[object ${t}]`,
      T = 0,
      M = (e) => {
        let t,
          r,
          n = typeof e,
          i = c.prototype.toString.call(e),
          a = k(i, "Date"),
          o = k(i, "RegExp"),
          l = k(i, "Object");
        if (c(e) !== e || a || o)
          t = a
            ? e.toJSON()
            : "symbol" == n
            ? e.toString()
            : "string" == n
            ? JSON.stringify(e)
            : "" + e;
        else {
          if ((t = P.get(e))) return t;
          if (((t = ++T + "~"), P.set(e, t), Array.isArray(e))) {
            for (r = 0, t = "@"; r < e.length; r++) t += M(e[r]) + ",";
            P.set(e, t);
          }
          if (l) {
            t = "#";
            let n = c.keys(e).sort();
            for (; !d((r = n.pop())); )
              d(e[r]) || (t += r + ":" + M(e[r]) + ",");
            P.set(e, t);
          }
        }
        return t;
      },
      N = (e) => {
        if ("function" == typeof e)
          try {
            e = e();
          } catch (t) {
            e = "";
          }
        let t = e;
        return [
          (e =
            "string" == typeof e
              ? e
              : (Array.isArray(e) ? e.length : e)
              ? M(e)
              : ""),
          t,
        ];
      },
      L = 0,
      z = () => ++L;
    async function I(...e) {
      let [t, r, n, i] = e,
        a = f(
          { populateCache: !0, throwOnError: !0 },
          "boolean" == typeof i ? { revalidate: i } : i || {}
        ),
        o = a.populateCache,
        s = a.rollbackOnError,
        c = a.optimisticData,
        p = a.throwOnError;
      if ("function" == typeof r) {
        let e = [];
        for (let n of t.keys())
          !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
        return Promise.all(e.map(g));
      }
      return g(r);
      async function g(r) {
        let i,
          [f] = N(r);
        if (!f) return;
        let [g, h] = v(t, f),
          [m, b, y, w] = l.get(t),
          _ = () => {
            let e = m[f];
            return ("function" == typeof a.revalidate
              ? a.revalidate(g().data, r)
              : !1 !== a.revalidate) && (delete y[f], delete w[f], e && e[0])
              ? e[0](2).then(() => g().data)
              : g().data;
          };
        if (e.length < 3) return _();
        let x = n,
          E = !1,
          j = z();
        b[f] = [j, 0];
        let O = !d(c),
          S = g(),
          R = S.data,
          C = S._c,
          P = d(C) ? R : C;
        if (
          (O && h({ data: (c = "function" == typeof c ? c(P, R) : c), _c: P }),
          "function" == typeof x)
        )
          try {
            x = x(P);
          } catch (e) {
            (i = e), (E = !0);
          }
        if (x && "function" == typeof x.then) {
          let e;
          if (
            ((x = await x.catch((e) => {
              (i = e), (E = !0);
            })),
            j !== b[f][0])
          ) {
            if (E) throw i;
            return x;
          }
          E &&
            O &&
            ((e = i), "function" == typeof s ? s(e) : !1 !== s) &&
            ((o = !0), h({ data: P, _c: u }));
        }
        if (
          (o &&
            !E &&
            ("function" == typeof o
              ? h({ data: o(x, P), error: u, _c: u })
              : h({ data: x, error: u, _c: u })),
          (b[f][1] = z()),
          Promise.resolve(_()).then(() => {
            h({ _c: u });
          }),
          E)
        ) {
          if (p) throw i;
          return;
        }
        return x;
      }
    }
    let A = (e, t) => {
        for (let r in e) e[r][0] && e[r][0](t);
      },
      D = (e, t) => {
        if (!l.has(e)) {
          let r = f(E, t),
            n = Object.create(null),
            i = I.bind(u, e),
            a = s,
            o = Object.create(null),
            c = (e, t) => {
              let r = o[e] || [];
              return (o[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
            },
            d = (t, r, n) => {
              e.set(t, r);
              let i = o[t];
              if (i) for (let e of i) e(r, n);
            },
            p = () => {
              if (
                !l.has(e) &&
                (l.set(e, [
                  n,
                  Object.create(null),
                  Object.create(null),
                  Object.create(null),
                  i,
                  d,
                  c,
                ]),
                !O)
              ) {
                let t = r.initFocus(setTimeout.bind(u, A.bind(u, n, 0))),
                  i = r.initReconnect(setTimeout.bind(u, A.bind(u, n, 1)));
                a = () => {
                  t && t(), i && i(), l.delete(e);
                };
              }
            };
          return p(), [e, i, p, a];
        }
        return [e, l.get(e)[4]];
      },
      [V, $] = D(new Map()),
      F = f(
        {
          onLoadingSlow: s,
          onSuccess: s,
          onError: s,
          onErrorRetry: (e, t, r, n, i) => {
            let a = r.errorRetryCount,
              o = i.retryCount,
              l =
                ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) *
                r.errorRetryInterval;
            (d(a) || !(o > a)) && setTimeout(n, l, i);
          },
          onDiscarded: s,
          revalidateOnFocus: !0,
          revalidateOnReconnect: !0,
          revalidateIfStale: !0,
          shouldRetryOnError: !0,
          errorRetryInterval: C ? 1e4 : 5e3,
          focusThrottleInterval: 5e3,
          dedupingInterval: 2e3,
          loadingTimeout: C ? 5e3 : 3e3,
          compare: function e(t, r) {
            var n, i;
            if (t === r) return !0;
            if (t && r && (n = t.constructor) === r.constructor) {
              if (n === Date) return t.getTime() === r.getTime();
              if (n === RegExp) return t.toString() === r.toString();
              if (n === Array) {
                if ((i = t.length) === r.length) for (; i-- && e(t[i], r[i]); );
                return -1 === i;
              }
              if (!n || "object" == typeof t) {
                for (n in ((i = 0), t))
                  if (
                    (o.call(t, n) && ++i && !o.call(r, n)) ||
                    !(n in r) ||
                    !e(t[n], r[n])
                  )
                    return !1;
                return Object.keys(r).length === i;
              }
            }
            return t != t && r != r;
          },
          isPaused: () => !1,
          cache: V,
          mutate: $,
          fallback: {},
        },
        {
          isOnline: () => w,
          isVisible: () => {
            let e = b && document.visibilityState;
            return d(e) || "hidden" !== e;
          },
        }
      ),
      U = (e, t) => {
        let r = f(e, t);
        if (t) {
          let { use: n, fallback: i } = e,
            { use: a, fallback: o } = t;
          n && a && (r.use = n.concat(a)), i && o && (r.fallback = f(i, o));
        }
        return r;
      },
      W = (0, n.createContext)({});
    var H = e.i(67005);
    let B = m && window.__SWR_DEVTOOLS_USE__,
      q = (B ? window.__SWR_DEVTOOLS_USE__ : []).concat((e) => (t, r, n) => {
        let i =
          r &&
          ((...e) => {
            let [n] = N(t),
              [, , , i] = l.get(V);
            if (n.startsWith("$inf$")) return r(...e);
            let a = i[n];
            return d(a) ? r(...e) : (delete i[n], a);
          });
        return e(t, i, n);
      });
    B && (window.__SWR_DEVTOOLS_REACT__ = n.default);
    let G = () => {},
      J = G(),
      X =
        (new WeakMap(),
        n.default.use ||
          ((e) => {
            switch (e.status) {
              case "pending":
                throw e;
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw (
                  ((e.status = "pending"),
                  e.then(
                    (t) => {
                      (e.status = "fulfilled"), (e.value = t);
                    },
                    (t) => {
                      (e.status = "rejected"), (e.reason = t);
                    }
                  ),
                  e)
                );
            }
          })),
      Y = { dedupe: !0 },
      Z = Promise.resolve(u),
      K = () => s;
    c.defineProperty(
      (e) => {
        let { value: t } = e,
          r = (0, n.useContext)(W),
          i = "function" == typeof t,
          a = (0, n.useMemo)(() => (i ? t(r) : t), [i, r, t]),
          o = (0, n.useMemo)(() => (i ? a : U(r, a)), [i, r, a]),
          l = a && a.provider,
          s = (0, n.useRef)(u);
        l && !s.current && (s.current = D(l(o.cache || V), a));
        let c = s.current;
        return (
          c && ((o.cache = c[0]), (o.mutate = c[1])),
          S(() => {
            if (c) return c[2] && c[2](), c[3];
          }, []),
          (0, n.createElement)(W.Provider, f(e, { value: o }))
        );
      },
      "defaultValue",
      { value: F }
    );
    let Q =
        ((t = (e, t, r) => {
          let {
              cache: i,
              compare: o,
              suspense: s,
              fallbackData: c,
              revalidateOnMount: p,
              revalidateIfStale: g,
              refreshInterval: b,
              refreshWhenHidden: y,
              refreshWhenOffline: w,
              keepPreviousData: _,
              strictServerPrefetchWarning: x,
            } = r,
            [E, R, C, P] = l.get(i),
            [k, T] = N(e),
            M = (0, n.useRef)(!1),
            L = (0, n.useRef)(!1),
            A = (0, n.useRef)(k),
            D = (0, n.useRef)(t),
            V = (0, n.useRef)(r),
            $ = () => V.current.isVisible() && V.current.isOnline(),
            [F, U, W, B] = v(i, k),
            q = (0, n.useRef)({}).current,
            G = d(c) ? (d(r.fallback) ? u : r.fallback[k]) : c,
            J = (e, t) => {
              for (let r in q)
                if ("data" === r) {
                  if (!o(e[r], t[r]) && (!d(e[r]) || !o(el, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            Q = !M.current,
            ee = (0, n.useMemo)(() => {
              let e = F(),
                r = B(),
                n = (e) => {
                  let r = f(e);
                  return (delete r._k,
                  (() => {
                    if (!k || !t || V.current.isPaused()) return !1;
                    if (Q && !d(p)) return p;
                    let e = d(G) ? r.data : G;
                    return d(e) || g;
                  })())
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                i = n(e),
                a = e === r ? i : n(r),
                o = i;
              return [
                () => {
                  let e = n(F());
                  return J(e, o)
                    ? ((o.data = e.data),
                      (o.isLoading = e.isLoading),
                      (o.isValidating = e.isValidating),
                      (o.error = e.error),
                      o)
                    : ((o = e), e);
                },
                () => a,
              ];
            }, [i, k]),
            et = (0, a.useSyncExternalStore)(
              (0, n.useCallback)(
                (e) =>
                  W(k, (t, r) => {
                    J(r, t) || e();
                  }),
                [i, k]
              ),
              ee[0],
              ee[1]
            ),
            er = E[k] && E[k].length > 0,
            en = et.data,
            ei = d(en) ? (G && "function" == typeof G.then ? X(G) : G) : en,
            ea = et.error,
            eo = (0, n.useRef)(ei),
            el = _ ? (d(en) ? (d(eo.current) ? ei : eo.current) : en) : ei,
            es = k && d(ei),
            eu = (0, n.useRef)(null);
          O ||
            (0, a.useSyncExternalStore)(
              K,
              () => ((eu.current = !1), eu),
              () => ((eu.current = !0), eu)
            );
          let ec = eu.current;
          x &&
            ec &&
            !s &&
            es &&
            console.warn(
              `Missing pre-initiated data for serialized key "${k}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`
            );
          let ed =
              !(!k || !t || V.current.isPaused()) &&
              (!er || !!d(ea)) &&
              (Q && !d(p) ? p : s ? !d(ei) && g : d(ei) || g),
            ef = Q && ed,
            ep = d(et.isValidating) ? ef : et.isValidating,
            eg = d(et.isLoading) ? ef : et.isLoading,
            eh = (0, n.useCallback)(
              async (e) => {
                let t,
                  n,
                  i = D.current;
                if (!k || !i || L.current || V.current.isPaused()) return !1;
                let a = !0,
                  l = e || {},
                  s = !C[k] || !l.dedupe,
                  c = () =>
                    j
                      ? !L.current && k === A.current && M.current
                      : k === A.current,
                  f = { isValidating: !1, isLoading: !1 },
                  p = () => {
                    U(f);
                  },
                  g = () => {
                    let e = C[k];
                    e && e[1] === n && delete C[k];
                  },
                  h = { isValidating: !0 };
                d(F().data) && (h.isLoading = !0);
                try {
                  if (
                    (s &&
                      (U(h),
                      r.loadingTimeout &&
                        d(F().data) &&
                        setTimeout(() => {
                          a && c() && V.current.onLoadingSlow(k, r);
                        }, r.loadingTimeout),
                      (C[k] = [i(T), z()])),
                    ([t, n] = C[k]),
                    (t = await t),
                    s && setTimeout(g, r.dedupingInterval),
                    !C[k] || C[k][1] !== n)
                  )
                    return s && c() && V.current.onDiscarded(k), !1;
                  f.error = u;
                  let e = R[k];
                  if (!d(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return p(), s && c() && V.current.onDiscarded(k), !1;
                  let l = F().data;
                  (f.data = o(l, t) ? l : t),
                    s && c() && V.current.onSuccess(t, k, r);
                } catch (r) {
                  g();
                  let e = V.current,
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((f.error = r), s && c()) &&
                    (e.onError(r, k, e),
                    (!0 === t || ("function" == typeof t && t(r))) &&
                      (!V.current.revalidateOnFocus ||
                        !V.current.revalidateOnReconnect ||
                        $()) &&
                      e.onErrorRetry(
                        r,
                        k,
                        e,
                        (e) => {
                          let t = E[k];
                          t && t[0] && t[0](H.ERROR_REVALIDATE_EVENT, e);
                        },
                        { retryCount: (l.retryCount || 0) + 1, dedupe: !0 }
                      ));
                }
                return (a = !1), p(), !0;
              },
              [k, i]
            ),
            em = (0, n.useCallback)((...e) => I(i, A.current, ...e), []);
          if (
            (S(() => {
              (D.current = t), (V.current = r), d(en) || (eo.current = en);
            }),
            S(() => {
              var e;
              let t;
              if (!k) return;
              let r = eh.bind(u, Y),
                n = 0;
              V.current.revalidateOnFocus &&
                (n = Date.now() + V.current.focusThrottleInterval);
              let i =
                ((e = (e, t = {}) => {
                  if (e == H.FOCUS_EVENT) {
                    let e = Date.now();
                    V.current.revalidateOnFocus &&
                      e > n &&
                      $() &&
                      ((n = e + V.current.focusThrottleInterval), r());
                  } else if (e == H.RECONNECT_EVENT)
                    V.current.revalidateOnReconnect && $() && r();
                  else if (e == H.MUTATE_EVENT) return eh();
                  else if (e == H.ERROR_REVALIDATE_EVENT) return eh(t);
                }),
                (t = E[k] || (E[k] = [])).push(e),
                () => {
                  let r = t.indexOf(e);
                  r >= 0 && ((t[r] = t[t.length - 1]), t.pop());
                });
              if (
                ((L.current = !1),
                (A.current = k),
                (M.current = !0),
                U({ _k: T }),
                ed && !C[k])
              )
                if (d(ei) || O) r();
                else
                  m && typeof window.requestAnimationFrame != h
                    ? window.requestAnimationFrame(r)
                    : setTimeout(r, 1);
              return () => {
                (L.current = !0), i();
              };
            }, [k]),
            S(() => {
              let e;
              function t() {
                let t = "function" == typeof b ? b(F().data) : b;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !F().error &&
                (y || V.current.isVisible()) &&
                (w || V.current.isOnline())
                  ? eh(Y).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [b, y, w, k]),
            (0, n.useDebugValue)(el),
            s)
          ) {
            if (!j && O && es)
              throw Error(
                "Fallback data is required when using Suspense in SSR."
              );
            es && ((D.current = t), (V.current = r), (L.current = !1));
            let e = P[k];
            if ((X(!d(e) && es ? em(e) : Z), !d(ea) && es)) throw ea;
            let n = es ? eh(Y) : Z;
            !d(el) && es && ((n.status = "fulfilled"), (n.value = !0)), X(n);
          }
          return {
            mutate: em,
            get data() {
              return (q.data = !0), el;
            },
            get error() {
              return (q.error = !0), ea;
            },
            get isValidating() {
              return (q.isValidating = !0), ep;
            },
            get isLoading() {
              return (q.isLoading = !0), eg;
            },
          };
        }),
        function (...e) {
          let r,
            i =
              ((r = (0, n.useContext)(W)), (0, n.useMemo)(() => f(F, r), [r])),
            [a, o, l] =
              "function" == typeof e[1]
                ? [e[0], e[1], e[2] || {}]
                : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
            s = U(i, l),
            u = t,
            { use: c } = s,
            d = (c || []).concat(q);
          for (let e = d.length; e--; ) u = d[e](u);
          return u(a, o || s.fetcher || null, s);
        }),
      ee = (e) => fetch(e).then((e) => e.json()),
      et = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2h1j7s-t1sIgAJMTJsgmOkFjGHEKiOEItftgK.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2485580a2ee1008f9eab02092db03a8-NawJ86yTc3gQ56wTMDh1cwlHdOQ8ha.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9c838a97fb5f253bb3f6af178528dcfa-WGE7gYhrbUplgLoLmw0FRFYTnbntok.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raf%2C360x360%2C075%2Ct%2Cfafafa_ca443f4786-yXJs5CVZjAGFaZ340xPzELZ60boco6.jpg",
      ];
    function er() {
      let [e, t] = (0, n.useState)(0),
        [a, o] = (0, n.useState)(!1),
        [l, s] = (0, n.useState)(null),
        [u, c] = (0, n.useState)(!1),
        d = (0, n.useRef)(null),
        f = (0, n.useRef)(null),
        { data: p, mutate: g } = Q("/api/clicks", ee, { refreshInterval: 3e3 });
      (0, n.useEffect)(() => {
        let e = localStorage.getItem("myClicks");
        e && t(parseInt(e, 10));
      }, []);
      let h = (0, n.useCallback)(async () => {
        d.current &&
          ((d.current.currentTime = 0),
          (d.current.playbackRate = 4),
          d.current.play()),
          o(!0),
          setTimeout(() => o(!1), 150),
          s(et[Math.floor(Math.random() * et.length)]),
          c(!0),
          f.current && clearTimeout(f.current),
          (f.current = setTimeout(() => {
            c(!1);
          }, 900));
        let r = e + 1;
        t(r), localStorage.setItem("myClicks", r.toString());
        let n = await fetch("/api/clicks", { method: "POST" });
        g({ clicks: (await n.json()).clicks }, !1);
      }, [e, g]);
      return (0, r.jsxs)("main", {
        className:
          "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black",
        children: [
          (0, r.jsx)("audio", {
            ref: d,
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUGHHHH%20sound%20effect%20tiktok%20snoring%20meme-ljZigDsT2i45oU7jnADXWsMRVtu0zQ.mp3",
            preload: "auto",
          }),
          l &&
            (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-20 pointer-events-none transition-opacity duration-150",
              style: { opacity: +!!u },
              children: (0, r.jsx)("img", {
                src: l,
                alt: "",
                className: "w-full h-full object-cover",
                style: { opacity: 0.55 },
              }),
            }),
          (0, r.jsx)("div", {
            className: "fixed top-4 left-1/2 -translate-x-1/2 z-50",
            children: (0, r.jsxs)("div", {
              className:
                "flex items-center gap-3 p-1.5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
              children: [
                (0, r.jsxs)("a", {
                  href: "https://x.com/i/communities/2031119771106754583",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:from-white/40 hover:to-white/20 transition-all duration-200 active:scale-95",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-60",
                    }),
                    (0, r.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className:
                        "w-6 h-6 text-white relative z-10 drop-shadow-sm",
                      fill: "currentColor",
                      children: (0, r.jsx)("path", {
                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("a", {
                  href: "https://dexscreener.com/ethereum/0xCF93653f0AEb07EC6EcAffa3585728E09f3CF177",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:from-white/40 hover:to-white/20 transition-all duration-200 active:scale-95",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-60",
                    }),
                    (0, r.jsx)("img", {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20flock%20birds%20-%202026-03-10T002026.652-yCg1BtCKrNfnVgYSddftoPyHRn1yYN.png",
                      alt: "Dexscreener",
                      className: "w-7 h-7 relative z-10 drop-shadow-sm",
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, r.jsxs)("div", {
            className:
              "fixed top-24 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg shadow-lg",
                children: ["Your clicks: ", e.toLocaleString()],
              }),
              (0, r.jsxs)("div", {
                className:
                  "px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg shadow-lg",
                children: [
                  "Global clicks: ",
                  (p?.clicks || 0).toLocaleString(),
                ],
              }),
            ],
          }),
          (0, r.jsx)("button", {
            onClick: h,
            className: `relative z-30 cursor-pointer select-none transition-transform duration-150 hover:scale-105 active:scale-95 ${
              a ? "scale-110" : ""
            }`,
            children: (0, r.jsx)(i.default, {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20flock%20birds%20-%202026-03-10T000633.722-nyrKy3EN9sb1iOxFbPACTpH9HyBOqV.png",
              alt: "Flushed emoji",
              width: 350,
              height: 350,
              priority: !0,
              className: "drop-shadow-[0_0_60px_rgba(255,200,0,0.4)]",
            }),
          }),
          (0, r.jsx)("div", {
            className:
              "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md",
            children: (0, r.jsxs)("button", {
              onClick: () => {
                navigator.clipboard.writeText(
                  "0xCF93653f0AEb07EC6EcAffa3585728E09f3CF177"
                );
              },
              className:
                "group relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:from-white/40 hover:to-white/20 transition-all duration-200 active:scale-[0.98]",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-60",
                }),
                (0, r.jsx)("span", {
                  className: "relative z-10 text-white/70 text-sm font-medium",
                  children: "CA:",
                }),
                (0, r.jsx)("span", {
                  className:
                    "relative z-10 text-white font-mono font-bold tracking-wider text-sm truncate",
                  children: "0xCF93653f0AEb07EC6EcAffa3585728E09f3CF177",
                }),
                (0, r.jsx)("svg", {
                  className:
                    "relative z-10 w-5 h-5 text-white/70 group-hover:text-white transition-colors",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, r.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["default", () => er], 31713);
  },
]);
