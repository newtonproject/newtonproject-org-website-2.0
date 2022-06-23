
# newton-website-2.0

## 1.Main technology stack

```
Gatsby.js + React + Typescript + Tailwind CSS.
Other tools included: Autoprefixer, Sass, PostCSS, ESLint, Prettier.
```

## 2.Create a Gatsby site

```
gatsby new newton-website-2.0
yarn
```

## 3.Start

```
cd newton-website-2.0/
yarn start
```

## 4.Push

```
yarn build
git push
```

## 5. Participate in building internationalization

**a.International Translation Technology**
- gatsby-plugin-intl
- npm Address: https://www.npmjs.com/package/gatsby-plugin-intl

**b.Directory of documents placed in the translated language**
- `src/static/intl`
- Create a new json file for the language type in the intl folder, paying particular attention to the fact that the value of the key must not be changed, but must be consistent with the key in the en.json folder.

**c.Html Translation of the formed catalogue**
- `src/components/language`
- Append the key value of the translated language type to the language file.

**d.Configuration files gatsby-config.js**
- gatsby-config.js
```
{
  ...
  {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/static/intl`,
        languages: [`en`], // add language code.
        defaultLanguage: `en`,
        redirect: true,
      },
    }
  ...
}
```

- Add the appropriate language to the `gatsby-config.js` configuration file.
- Add the type of languages in the options of the `gatsby-plugin-intl` configuration.
- The default language of the project is en in `defaultLanguage`, which is `en`.


