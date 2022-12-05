<script>
	//uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。
	export default {
		onLaunch: function() {
			console.log('uni-news Launch')
				// #ifdef APP-NVUE
						plus.screen.lockOrientation('portrait-primary');
			
						let appid = plus.runtime.appid;
						if (appid && appid.toLocaleLowerCase() != "hbuilder") {
							uni.request({
								url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
								data: {
									appid: plus.runtime.appid,
									version: plus.runtime.version
								},
								success: (res) => {
									console.log('success', res);
									if (res.statusCode == 200 && res.data.isUpdate) {
										let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
										// 提醒用户更新
										uni.showModal({
											title: '更新提示',
											content: res.data.note ? res.data.note : '是否选择更新',
											success: (showResult) => {
												if (showResult.confirm) {
													plus.runtime.openURL(openUrl);
												}
											}
										})
									}
								}
							})
						}
			
						var domModule = weex.requireModule('dom');
						domModule.addRule('fontFace', {
							'fontFamily': "texticons",
							'src': "url('./static/text-icon.ttf')"
						});
						// #endif
		},
		onShow: function() {
			console.log('uni-news Show')
		},
		onHide: function() {
			console.log('uni-news Hide')
		},
		onError() {
			console.error("uni-app Error")
		},
		onPageNotFound() {
			console.log("页面不存在")
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
