(this["webpackJsonppokemon-go"] = this["webpackJsonppokemon-go"] || []).push([
  [0],
  {
    24: function (e, t, i) {},
    34: function (e, t, i) {},
    38: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(2),
        c = i(1),
        a = i.n(c),
        o = i(25),
        s = i.n(o),
        r = (i(34), i(24), i(12)),
        d = i(13),
        l = i(17),
        u = i(16),
        p = i(18),
        j = i(23);
      i(39);
      j.a.initializeApp({
        apiKey: "AIzaSyBNxW81QdG-QG1cdgzwmLsV1qaB1B2tE7c",
        authDomain: "pokemon-go-site.firebaseapp.com",
        projectId: "pokemon-go-site",
        storageBucket: "pokemon-go-site.appspot.com",
        messagingSenderId: "200332795378",
        appId: "1:200332795378:web:e28e96001caae4d38c9f6b",
        measurementId: "G-WDV6TXMSG5",
      });
      var m = j.a.firestore(),
        h = (function (e) {
          Object(l.a)(i, e);
          var t = Object(u.a)(i);
          function i(e) {
            var n;
            return (
              Object(r.a)(this, i),
              ((n = t.call(this, e)).handleSubmit = function (e) {
                e &&
                  "valid" !== n.state.validity &&
                  (n.isValid(e)
                    ? (n.setState({ validity: "valid" }), n.sendToDB(e))
                    : n.setState({ validity: "invalid" }));
              }),
              (n.isValid = function (e) {
                return /(^[0-9]*$)/.test(e) && 12 === e.length;
              }),
              (n.setColorStyle = function () {
                return n.state.validity
                  ? "valid" !== n.state.validity || n.state.error
                    ? "#f34a"
                    : "#4a0a"
                  : "#0004";
              }),
              (n.sendToDB = function (e) {
                m.collection("codes")
                  .add({ code: e, timestamp: new Date() })
                  .then(function () {
                    n.setState({ error: !1 });
                  })
                  .catch(function () {
                    n.setState({ error: !0 });
                  });
              }),
              (n.state = { validity: "", error: !1 }),
              n
            );
          }
          return (
            Object(d.a)(i, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(n.jsxs)("div", {
                    className: "container inputArea",
                    style: { backgroundColor: this.setColorStyle() },
                    children: [
                      this.state.validity
                        ? "valid" === this.state.validity
                          ? !1 === this.state.error
                            ? Object(n.jsx)("p", {
                                children: "Code Submitted! Refresh to update.",
                              })
                            : Object(n.jsx)("p", {
                                children:
                                  "There was an error, please try again",
                              })
                          : Object(n.jsx)("p", {
                              children:
                                "Invalid Code, make sure you've entered 12 numbers",
                            })
                        : Object(n.jsx)("p", {
                            children: "Enter your friend code!",
                          }),
                      Object(n.jsx)(p.c, {
                        initialValues: { code: "" },
                        onSubmit: function (t) {
                          return e.handleSubmit(t.code);
                        },
                        children: Object(n.jsxs)(p.b, {
                          className: "inputForm",
                          children: [
                            Object(n.jsx)(p.a, {
                              id: "code",
                              name: "code",
                              placeholder: "Code",
                            }),
                            Object(n.jsx)("button", {
                              type: "submit",
                              children: "Add",
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(a.a.Component),
        b = i(28),
        f = (function (e) {
          Object(l.a)(i, e);
          var t = Object(u.a)(i);
          function i(e) {
            var n;
            return (
              Object(r.a)(this, i),
              ((n = t.call(this, e)).componentDidMount = function () {
                m.collection("codes")
                  .limit(10)
                  .orderBy("timestamp", "desc")
                  .get()
                  .then(function (e) {
                    e.docs.forEach(function (e) {
                      var t = e.data();
                      (t.copied = ""),
                        n.setState({
                          codeList: [].concat(Object(b.a)(n.state.codeList), [
                            t,
                          ]),
                        });
                    });
                  });
              }),
              (n.codeClicked = function (e) {
                navigator.clipboard.writeText(e.code).then(function () {
                  return n.markAsCopied(e.timestamp);
                });
              }),
              (n.markAsCopied = function (e) {
                var t = n.state.codeList.findIndex(function (t) {
                    return t.timestamp === e;
                  }),
                  i = n.state.codeList;
                (i[t].copied = "copied"), n.setState({ codeList: i });
              }),
              (n.state = { codeList: [] }),
              n
            );
          }
          return (
            Object(d.a)(i, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(n.jsxs)("div", {
                    className: "container listArea",
                    children: [
                      Object(n.jsx)("p", { children: "Other codes:" }),
                      0 === this.state.codeList.length
                        ? Object(n.jsx)("p", {
                            children: "Loading, please wait...",
                          })
                        : this.state.codeList.map(function (t) {
                            return Object(n.jsx)(
                              "p",
                              {
                                className: "code " + t.copied,
                                onClick: function () {
                                  return e.codeClicked(t);
                                },
                                children: t.code,
                              },
                              t.timestamp
                            );
                          }),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(a.a.Component),
        v = "static/media/logo.0fcdb522.png";
      var O = function () {
          return Object(n.jsxs)("div", {
            className: "App",
            children: [
              Object(n.jsxs)("div", {
                className: "heading",
                children: [
                  Object(n.jsx)("img", {
                    alt: "Pokemon GO logo",
                    src: v,
                    className: "logo",
                  }),
                  Object(n.jsx)("h1", {
                    className: "description",
                    children: "Make Some Friends",
                  }),
                ],
              }),
              Object(n.jsx)(h, {}),
              Object(n.jsx)(f, {}),
            ],
          });
        },
        g = function (e) {
          e &&
            e instanceof Function &&
            i
              .e(3)
              .then(i.bind(null, 40))
              .then(function (t) {
                var i = t.getCLS,
                  n = t.getFID,
                  c = t.getFCP,
                  a = t.getLCP,
                  o = t.getTTFB;
                i(e), n(e), c(e), a(e), o(e);
              });
        };
      s.a.render(
        Object(n.jsx)(a.a.StrictMode, { children: Object(n.jsx)(O, {}) }),
        document.getElementById("root")
      ),
        g();
    },
  },
  [[38, 1, 2]],
]);
//# sourceMappingURL=main.0d4b0ca0.chunk.js.map
