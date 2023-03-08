var webpack = require('webpack');
const path = require('path');

module.exports={
    mode: 'development',
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
      ],
      externals: {
        jquery: 'jQuery'
      },
      plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })
      ],
//     entry: [
//     'script-loader!jquery/dist/jquery.min.js',
//     'script-loader!foundation-sites/dist/foundation.min.js',
//     './app/app.jsx'
//   ],
//   externals: {
//     jquery: 'jQuery'
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       '$': 'jquery',
//       'jQuery': 'jquery'
//     })
//   ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    // resolve: {
    //     modules: [__dirname, 'public/components'],
    //     alias: {
    //       Greeter: 'Greeter.jsx',
    //       GreeterMessage: 'GreeterMessage.jsx',
    //       GreeterForm: 'GreeterForm.jsx'
    //     },

    resolve: {
        alias: {
            Main: path.resolve(__dirname, 'app/components/Main.jsx'),
            Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
            Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
            WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
            WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
            About: path.resolve(__dirname, 'app/components/About.jsx'),
            Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
            openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
            ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
            applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
        },
        modules: [
          path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.jsx']
      },
      
    // resolve:{
    //     root: __dirname,
    //     alias:{
    //         Greeter: 'public/components/Greeter.jsx',
    //         GreeterMessage: 'public/components/GreeterMessage.jsx',
    //         GreeterForm: 'public/components/GreeterForm.jsx'
    //     },
    //     extensions: ['', '.js', '.jsx']
    // },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-react', '@babel/preset-env']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'eval-source-map'
    // devtool: 'cheap-module-eval-source-map'
};







//     module:{
//         loaders:[
//             {loader: 'babel-loader',
//             query:{
//                 presets: ['@babel/preset-react', '@babel/preset-env']
//             },
//             test: /\.jsx?$/,
//             exclude: /(node_modules|bower_components)/
//         }
//     ]
// }
// };
    // resolve:{
    //     root: __dirname,
    //     // alias:{
    //     //     Greeter: 'public/components/Greeter.jsx',
    //     //     GreeterMessage: 'public/components/GreeterMessage.jsx',
    //     //     GreeterForm: 'public/components/GreeterForm.jsx'
    //     // },
    //     extensions:['', '.js', '.jsx']
    // }
    // module:{
    //     loaders:[
    //         {
    //             loader: 'babel-loader',
    //             query:{
    //                 presets:['react', 'es2015']
    //             },
    //             test: /\.jsx?$/,
    //             exclude: /(node_modules|bower_components)/
    //         }
    //     ]
    // }
