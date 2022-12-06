import { toRefs as a, openBlock as l, createElementBlock as s, toDisplayString as c, unref as r } from "vue";
const m = {
  name: "SayHelloName"
}, o = /* @__PURE__ */ Object.assign(m, {
  props: {
    userName: {
      type: String,
      default: "12\u6708"
    }
  },
  setup(e) {
    const t = e, { userName: n } = a(t);
    return (u, f) => (l(), s("header", null, " hello," + c(r(n)), 1));
  }
}), p = [o], i = {
  install(e) {
    p.forEach((t) => {
      e.component(t.name, o);
    });
  }
};
export {
  o as HelloName,
  i as default
};
