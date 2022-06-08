module.exports = {
    // 关闭eslint
    lintOnSave: false,

    //代理服务器
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },




}