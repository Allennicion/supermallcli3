module.exports = {
	configureWebpack: {
		/* 配置路径相关 */
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		}
	}
}