module.exports = {
    env: {
        development: {
            presets: ['next/babel', '@zeit/next-typescript/babel'],
            plugins: [
                [
                    'styled-components',
                    {
                        ssr: true,
                        displayName: true,
                        preprocess: false
                    }
                ]
            ]
        },
        production: {
            presets: ['next/babel', '@zeit/next-typescript/babel'],
            plugins: [
                [
                    'styled-components',
                    {
                        ssr: true,
                        displayName: true,
                        preprocess: false
                    }
                ]
            ]
        },
        test: {
            presets: [
                ['next/babel', { 'preset-env': { modules: 'commonjs' } }],
                '@zeit/next-typescript/babel'
            ],
            plugins: [
                [
                    'styled-components',
                    {
                        ssr: true,
                        displayName: true,
                        preprocess: false
                    },
                    'babel-plugin-dynamic-import-node'
                ]
            ]
        }
    }
};
