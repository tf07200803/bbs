/**
 * 配置页面引入plugin js
 */

const baseSrc = './phpcms/templates/default/content/nft_vue3/tommy/plugin/';
// 所有插件名
const allPlugin = {
	'1': 'bootstrap.bundle.min.js',
	'2': 'tiny-slider.js',
	'3': 'feather.min.js',
	'4': 'choices.min.js',
	'5': 'plugins.init.js',
	'6': 'app.js',
	'7': 'shuffle.min.js',
	'8': 'styleswitcher.js'
}

// 页面对应插件
const pluginConfig = {
	allMin: ['1'],
	header: ['1'],
	styleswitcher: ['1']
}
// 添加一个插件标签dom的容器
const addContainer = () => {
	if (!document.getElementById('PluginDom')) {
		const pluginDom = document.createElement("div")
		pluginDom.id = 'PluginDom'
		document.body.appendChild(pluginDom)
	}
}
// 清空插件标签dom的容器 即删除添加的插件脚本
const clearContainer = () => {
	if (document.getElementById('PluginDom')) {
		document.getElementById('PluginDom').innerHTML = ''
		// window.dele
	}
}
// 添加插件脚本
const addPlugin = (url) => {
	const scriptDom = document.createElement("script")
	scriptDom.type = "text/javascript"
	scriptDom.src = url
	if (!document.getElementById('PluginDom')) {
		addContainer()
	}
	document.getElementById('PluginDom').appendChild(scriptDom)
}

export const loadAPlugin = (page, isAdd) => {
	try{
		if (isAdd) {
			const jsArr = []
			pluginConfig[page].map(idx => jsArr.push(allPlugin[idx]))
			clearContainer()
			jsArr.map(item => addPlugin(baseSrc + item))
		} else {
			clearContainer()
		}
	}catch(e){
		throw new Error('load plugin failed');
	}
}
// 添加插件脚本
const addPluginBody = (url) => {
	const scriptDom = document.createElement("script")
	scriptDom.type = "text/javascript"
	scriptDom.src = url
	document.body.appendChild(scriptDom)
}
export const loadPluginMin = (page) => {
	try{
		const jsArr = []
		pluginConfig[page].map(idx => jsArr.push(allPlugin[idx]))
		jsArr.map(item => addPluginBody(baseSrc + item))
	}catch(e){
		throw new Error('load plugin failed');
	}
}
export const loadAPluginBody = (page) => {
	try{
		const jsArr = []
		pluginConfig[page].map(idx => jsArr.push(allPlugin[idx]))
		jsArr.map(item => addPluginBody(baseSrc + item))
	}catch(e){
		throw new Error('load plugin failed');
	}
}
