https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/
https://www.netlify.com/blog/2019/06/06/very-good-security-add-on-collect-data-securely/
https://github.com/aekiti/superchat
[ ] Run cargo fmt to ensure your Rust code is correctly formatted.
[ ] Ensure cargo clippy --workspace --features bundled passes without warnings.
[ ] Ensure cargo clippy --workspace --features "bundled-full session buildtime_bindgen" passes without warnings.
[ ] Ensure cargo test --workspace --features bundled reports no failures.
[ ] Ensure cargo test --workspace --features "bundled-full session buildtime_bindgen" reports no failures.

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

records(
  books: { url: 'http://www.google.com/books' }
)

# using a file path
records(
  books: { file: 'data/books.json' }
)

# using JSON data
records(
  books: { data: [{ title: 'Wow', author: 'Doge' }] }
)
