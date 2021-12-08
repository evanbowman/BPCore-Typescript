# Introduction

A typescript project template for
[BPCoreEngine](https://github.com/evanbowman/BPCore-Engine). Uses
TypeScriptToLua to transpile TypeScript to Lua, bundling all files into a
main.lua script. Includes a manifest.lua script that bundles main.lua along with
the engine.


# Building

First, install node, npm, and Lua 5.3

Next, within this directory, run `npm install -D typescript-to-lua`.

To convert the typescript sources into a Lua bundle, run `npm run build`.

Finally, run `./build.lua` to bundle the output of TSTL along with the other files in manifest.lua.

# Limitations

I have not bothered to include typescript bindings for everything in the Lua standard libraries. You can find bindings here:
https://github.com/TypeScriptToLua/lua-types.

# Disclaimer

I do not know typescript, and I threw this template together for fun in like half an
hour. I cannot guarantee that I got all the type annotations correct for the
stuff in bpcore.ts. If, unlike me, you know TypeScript, and find an issue with
one of the type annotations for one of the BPCore API functions, please create a
PR with the fixes.
