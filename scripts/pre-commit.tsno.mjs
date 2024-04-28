#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://E:\\Vue\\byelide\\byelide0428\\byelide\\node_modules\\.pnpm\\tsno@2.0.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovL0U6XFxcXFZ1ZVxcXFxieWVsaWRlXFxcXGJ5ZWxpZGUwNDI4XFxcXGJ5ZWxpZGVcXFxcbm9kZV9tb2R1bGVzXFxcXC5wbnBtXFxcXHRzbm9AMi4wLjBcXFxcbm9kZV9tb2R1bGVzXFxcXHRzbm9cXFxcZGlzdFxcXFxjbGllbnQuanNcIik7XG5pbXBvcnQge1xuICBjb2xvcnNcbn0gZnJvbSBcIi4vY2h1bmstRkhEWFhPS1kuanNcIjtcblxuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgZmV0Y2ggPSAodXJsLCBpbml0KSA9PiBpbXBvcnQoXCIuL3NyYy00UTdRNjdDMy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KHVybCwgaW5pdCkpO1xudmFyIGF4aW9zID0gKGNvbmZpZykgPT4gaW1wb3J0KFwiLi9heGlvcy1QSVo0QzVVWi5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KGNvbmZpZykpO1xuZXhwb3J0IHtcbiAgYXhpb3MsXG4gIGNvbG9ycyxcbiAgZmV0Y2hcbn07XG4iLCAiaW1wb3J0IHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50T2JqZWN0KFxyXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQcm9jZXNzT3V0cHV0LFxyXG4gIG1ldGhvZDogJ2xvZycgfCAnd2FybicgfCAnZXJyb3InID0gJ2xvZydcclxuKSB7XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcclxuICB9XHJcbn1cclxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XHJcblxyXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eCdcclxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xyXG5pbXBvcnQgeyBwcmludE9iamVjdCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5hd2FpdCAkYHBucG0gc3BlbGxjaGVja2AuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG91dClcclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbn0pXHJcblxyXG4vLyBhd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludGBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbi8vICAgcHJpbnRPYmplY3Qob3V0KVxyXG4vLyAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG4vLyB9KVxyXG5cclxuLy8gY2hlY2sgdHlwZSBhbmQgc3RhZ2VcclxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnQ6c3RhZ2VgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xyXG4gIHByaW50T2JqZWN0KG91dClcclxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxufSlcclxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcblxuY29uc29sZS5sb2coJ1x1NUYwMFx1NTlDQlx1NjI2N1x1ODg0Q1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMC4uLlxcbicpXG5cbmF3YWl0IGltcG9ydCgnLi9jaGVjaycpLmNhdGNoKChvdXQpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCdcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzBcdTU5MzFcdThEMjUsIFx1OEJGN1x1NjhDMFx1NjdFNVx1NEVFM1x1NzgwMScpXG59KVxuXG5jb25zb2xlLmxvZygncHJpbnRmIFwiXHU2OEMwXHU2RDRCXHU5MDFBXHU4RkM3LCBcdTUyMUJcdTVFRkEgY29tbWl0IFx1NEUyRC4uLlxcbicpXG5cbmF3YWl0ICRgZ2l0IGFkZCAuYFxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQSxTQUFRLGlCQUFpQix5QkFBd0I7QUFBakQsSUFBOERBO0FBQTlEO0FBQUE7QUFBMEQsSUFBSUEsV0FBUSxrQkFBa0IscUhBQXFIO0FBQUE7QUFBQTs7O0FDRXRNLFNBQVMsWUFDZCxRQUNBLFNBQW1DLE9BQ25DO0FBQ0EsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFFakQsWUFBUSxRQUFRLEdBQUc7QUFBQSxFQUFTO0FBQUEsQ0FBUztBQUFBLEVBQ3ZDO0FBQ0Y7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUdBLFNBQVMsU0FBUztBQUhsQjtBQUFBO0FBQUE7QUFJQTtBQUVBLFVBQU0sbUJBQW1CLE1BQU0sQ0FBQyxRQUF1QjtBQUNyRCxjQUFRLElBQUksR0FBRztBQUVmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFRRCxVQUFNLFFBQVEsSUFBSSxDQUFDLG9CQUFvQixrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUF1QjtBQUN4RixrQkFBWSxHQUFHO0FBQ2YsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUFBO0FBQUE7OztBQ3JCRDtBQUVBLFNBQVMsS0FBQUMsVUFBUztBQUVsQixRQUFRLElBQUksbUVBQWlCO0FBRTdCLE1BQU0sdUNBQWtCLE1BQU0sQ0FBQyxRQUFRO0FBQ3JDLFFBQU0sSUFBSSxNQUFNLGtGQUFpQjtBQUNuQyxDQUFDO0FBRUQsUUFBUSxJQUFJLG1FQUFnQztBQUU1QyxNQUFNQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZSIsICIkIl0KfQo=
