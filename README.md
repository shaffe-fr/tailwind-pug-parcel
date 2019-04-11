# Tailwind CSS Pug Parcel Starter Project

This is an example of a super simple Parcel setup for using [Tailwind CSS](https://tailwindcss.com) and [Pug](https://pugjs.org/).

To get started, clone the project and install the dependencies:

```
# Using npm
npm install

# Using Yarn
yarn
```

After that, if you have Parcel installed globally, run

```
parcel index.pug
```

If you don't, install parcel as a local dev dependency

```
yarn add -D parcel
./node_modules/.bin/parcel index.pug
```

If you change the `tailwind.js` config file, delete the `.cache` folder and restart parcel.

You can also run parcel with no cache and restart parcel when the config file changes:

```
parcel --no-cache index.pug
```
