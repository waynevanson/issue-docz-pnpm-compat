# Issue

The following code was ran to create this repo

```sh
mkdir issue
cd issue
echo {} > package.json
pnpm add -D docz
pnpm add react{,-dom}@^17
```

There is no entry point for gatsby.
Expected behaviour is that it should be there, but it looks like it's trying to run it from the root project's node\_modules file instead of docz's node\_modules.

```
pnpm exec docz dev
```
