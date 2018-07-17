const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function createConfig(projectPath, entryPoint) {

    return Object.assign({
        entry: entryPoint,
        output: {
            path: path.resolve(__dirname, '../../dist/demo'),
            filename: projectPath + '.js'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: 'app.json' }
            ])
        ]
    });
}

module.exports = [
    createConfig('app', './app.ts')
];
