parcelRequire = (function(e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;
    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function(r) {
                return e[n][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[n] = new u.Module(n));
            e[n][0].call(l.exports, p, l, l.exports, this);
        }
        return r[n].exports;
        function p(e) {
            return u(p.resolve(e));
        }
    }
    (u.isParcelRequire = !0),
        (u.Module = function(e) {
            (this.id = e), (this.bundle = u), (this.exports = {});
        }),
        (u.modules = e),
        (u.cache = r),
        (u.parent = i),
        (u.register = function(r, n) {
            e[r] = [
                function(e, r) {
                    r.exports = n;
                },
                {},
            ];
        });
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = c)
            : "function" == typeof define && define.amd
            ? define(function() {
                  return c;
              })
            : t && (this[t] = c);
    }
    return u;
})(
    {
        Cd7Y: [
            function(require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                import React from 'react'
                var t = React
                    e = s(require("prop-types"));
                function s(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function i(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var s = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(s);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(s).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(s, t).enumerable;
                                })
                            )),
                            i.forEach(function(e) {
                                r(t, e, s[e]);
                            });
                    }
                    return t;
                }
                function r(t, e, s) {
                    return e in t ? Object.defineProperty(t, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = s), t;
                }
                class n extends t.default.Component {
                    constructor(t) {
                        super(t), (this.state = { canvas: null }), (this.draw = this.draw.bind(this)), (this.updateDimensions = this.updateDimensions.bind(this));
                    }
                    componentDidMount() {
                        this.setState({ canvas: this.refs.canvas }, () => {
                            let t = [],
                                e = this.state.canvas.getContext("2d"),
                                s = this.props.colSize,
                                i = this.props.fullscreen ? window.innerWidth : this.props.width,
                                r = this.props.fullscreen ? window.innerHeight : this.props.height,
                                n = this.state.canvas;
                            (n.width = i), (n.height = r);
                            let o = Math.floor((i / s) * 3);
                            (this.initialDraw = !0),
                                this.setState({ canvas: n, columns: t, context: e, size: s, source: "0 0 1 1", numberOfColumns: o }, () => {
                                    for (let s = 0; s < o; s++) t.push(1e3);
                                    this.draw();
                                    let e = setInterval(this.draw, 50 / this.props.speed);
                                    this.setState({ interval: e }), this.props.fullscreen && window.addEventListener("resize", this.updateDimensions);
                                }),
                                (this.initialDraw = !1);
                        });
                    }
                    draw() {
                        let t = this.state.context,
                            e = this.state.columns,
                            s = this.state.numberOfColumns;
                        (t.globalCompositeOperation = "destination-out"), (t.fillStyle = `rgba(255, 255, 255, ${this.props.fadeRate})`), t.fillRect(0, 0, this.state.canvas.width, this.state.canvas.width), (t.globalCompositeOperation = "source-over"), (t.fillStyle = this.props.color), (t.font = "700 " + this.props.fontSize + "px Consolas,monaco,monospace");
                        for (let i = 0; i < s; i++) {
                            let s = Math.floor(Math.random() * this.state.source.length),
                                r = this.state.source[s],
                                n = i * this.state.size,
                                o = e[i] * this.state.size;
                            t.fillText(r, n, o), o >= this.state.canvas.height && Math.random() > 1 - this.props.frequency && (e[i] = 0), e[i]++;
                        }
                        this.setState({ context: t, columns: e });
                    }
                    updateDimensions() {
                        let t = this.state.canvas;
                        (t.width = window.innerWidth), (t.height = window.innerHeight);
                    }
                    render() {
                        let e = this.props.style ? this.props.style : {};
                        return t.default.createElement("div", { style: i({}, e, { width: this.props.fullscreen ? "100vw" : this.props.width + "px", height: this.props.fullscreen ? "100vh" : this.props.height + "px", overflow: "hidden", zIndex: this.props.zIndex, backgroundColor: this.props.backgroundColor }) }, t.default.createElement("canvas", { ref: "canvas" }));
                    }
                }
                (exports.default = n), r(n, "propTypes", { width: e.default.number, height: e.default.number, fullscreen: e.default.bool, colSize: e.default.number, fontSize: e.default.number, interval: e.default.number, color: e.default.string, frequency: e.default.number, speed: e.default.number, style: e.default.object, zIndex: e.default.number, fadeRate: e.default.number, backgroundColor: e.default.string }), r(n, "defaultProps", { width: 640, height: 480, fullscreen: !1, colSize: 11, fontSize: 13.5, interval: 30, color: "#00cc33", frequency: 0.005, speed: 1.6, fadeRate: 0.05, backgroundColor: "black" });
            },
            {},
        ],
        bKYD: [
            function(require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = exports.classes = void 0);
                var e,
                    t,
                    r = n(require("react")),
                    a = require("@material-ui/styles"),
                    o = n(require("./matrix"));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function i() {
                    return (i =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                            }
                            return e;
                        }).apply(this, arguments);
                }
                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(r).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            a.forEach(function(t) {
                                l(e, t, r[t]);
                            });
                    }
                    return e;
                }
                function l(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                }
                const c = { fullWindow: { width: "100vw", height: "100vh", justifyContent: "center", justifyItems: "center" }, matrix: { position: "fixed", zIndex: "-1", transform: "scale(1.2)", transition: "margin 500ms cubic-bezier(.19,1,.06,.99) 0s" }, moveableChildren: { flexDirection: "column", backgroundColor: "transparent", zIndex: "2", transition: "margin 500ms cubic-bezier(.19,1,.06,.99) 0s", color: "rgba(122, 229, 114, 0.87)", fontFamily: "monospace" } };
                exports.classes = c;
                var u = (0, a.withStyles)(c)(
                    ((t = e = class extends r.default.Component {
                        constructor(e) {
                            super(e),
                                (this.state = { boxMarginTop: window.innerHeight / 2, boxMarginLeft: window.innerWidth / 2 }),
                                (this.forgroundMatrixParalaxFactor = this.props.parallaxRate),
                                (this.boxChildrenParallaxRate = 2 * this.props.parallaxRate),
                                (this.backgroundParallaxRate = 4 * this.props.parallaxRate),
                                (this.bodyListener = document.body.addEventListener("mousemove", e => {
                                    let t = window.innerWidth / 2,
                                        r = window.innerHeight / 2,
                                        a = e.pageY - r,
                                        o = e.pageX - t;
                                    this.setState({ boxMarginTop: a, boxMarginLeft: o });
                                }));
                        }
                        componentWillUnmount() {
                            document.body.removeEventListener("mousemove", this.bodyListener);
                        }
                        render() {
                            return r.default.createElement("div", { className: this.props.classes.fullWindow }, r.default.createElement(o.default, i({ style: s({}, c.matrix, { top: -this.state.boxMarginTop / this.backgroundParallaxRate, left: -this.state.boxMarginLeft / this.backgroundParallaxRate }), backgroundColor: this.props.backgroundColor, fontSize: 11, frequency: 0.001, fullscreen: !0 }, this.props.backMatrixProps)), r.default.createElement("div", { className: this.props.classes.moveableChildren, style: { marginLeft: this.state.boxMarginLeft / this.boxChildrenParallaxRate, marginTop: this.state.boxMarginTop / this.boxChildrenParallaxRate } }, this.props.children), r.default.createElement(o.default, i({ style: s({}, c.matrix, { top: -this.state.boxMarginTop / this.forgroundMatrixParalaxFactor, left: -this.state.boxMarginLeft / this.forgroundMatrixParalaxFactor }), backgroundColor: "rgba(0,0,0,0)", fontSize: 11, frequency: 0.001, fullscreen: !0, zIndex: 3 }, this.props.frontMatrixProps)));
                        }
                    }),
                    l(e, "defaultProps", { parallaxRate: 2, backgroundColor: "rgba(0 ,0 ,0 , 1)", frontMatrixProps: {}, backMatrixProps: {} }),
                    t)
                );
                exports.default = u;
            },
            { "./matrix": "Cd7Y" },
        ],
    },
    {},
    ["bKYD"],
    null
);
//# sourceMappingURL=/matrix-parallax.map
