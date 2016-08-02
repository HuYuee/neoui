/**
 * Module : neoui-loader
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-02 19:02:09
 */
import {makeDOM} from './sparrow/dom';

/*
 *加载loading
 */
var loadTemplate = "<div class='u-loader-container'><div class='u-loader'>{centerContent}</div>{loadDesc}</div>"; //{centerContent}为加载条中间内容
/**
 * @param  {Object} options 
 * @return {[type]}
 */
var showLoader = function(options) {
	// hasback:是否含有遮罩层，centerContent加载图标中的内容，parEle加载图标的父元素,hasDesc加载条说明
	var hasback, centerContent, template, parEle, templateDom, loadDesc;
	options = options || {};
	hasback = options["hasback"];
	centerContent = options["centerContent"] || '';
	// hasDesc=options["hasDesc"];
	template = loadTemplate.replace('{centerContent}', centerContent);
	loadDesc = options["hasDesc"] ? "<div class='u-loader-desc'>页面加载中，请稍后。。。</div>" : " ";

	template = template.replace("{loadDesc}", loadDesc);

	templateDom = makeDOM(template);
	parEle = options["parEle"] || document.body;
	if(hasback) {
		var overlayDiv = makeModal(templateDom, parEle);
	}
	if(parEle == document.body) {
		templateDom.style.position = 'fixed';
	}
	parEle.appendChild(templateDom);
};
var hideLoader = function() {
	var divs = document.querySelectorAll('.u-overlay,.u-loader-container');
	for(var i = 0; i < divs.length; i++) {
		divs[i].parentNode.removeChild(divs[i]);
	}
};


export {showLoader,hideLoader};
