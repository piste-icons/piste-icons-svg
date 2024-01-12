module.exports = {
  expandProps: false,
  indexTemplate: require('./templates/index-template.cjs'),
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['svg'],
            attributes: [
              {
                name: 'width',
                value: 'size',
                literal: true,
                position: 'end',
              },
              {
                name: 'height',
                value: 'size',
                literal: true,
                position: 'end',
              },
            ],
          },
          'add width and height',
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['path'],
            attributes: [
              {
                name: 'fill',
                value: 'COLORS[color]',
                literal: true,
                position: 'start',
              },
            ],
          },
          'add fill',
        ],
      ],
    },
  },
  outDir: './src',
  silent: true,
  template: require('./templates/template.cjs'),
  typescript: true,
};
