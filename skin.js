// Garden Gnome Software - Skin
// Pano2VR 6.0.2/17253
// Filename: simplex_vSanLorenzo.ggsk
// Generated mar. dic. 14 09:50:16 2021

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_info', 2, false);
	player.addVariable('opt_thumbnail', 2, true);
	player.addVariable('opt_thumbnail_tooltip', 2, true);
	player.addVariable('opt_projection', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_autohide', 2, false);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, true);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_close_buton', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_thumbnail_menu_show', 2, true);
	player.addVariable('vis_thumbnail_menu_mobile', 2, false);
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true);
	player.addVariable('vis_360image_once', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('pos_zoom_in', 1, 0);
	player.addVariable('pos_zoom_out', 1, 0);
	player.addVariable('pos_autorotate', 1, 0);
	player.addVariable('pos_information', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_gyro', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('pos_360image', 1, 0);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenodeid', function() { me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2FyZGVuIEdub21lIFNvZnR3YXJlIC0gU2tpbiBCdXR0b25zIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiBbDQoJPCFFTlRJVFkgbnNfZmxvd3MgImh0dHA6Ly9ucy5hZG9iZS5jb20vRmxvd3MvMS4wLyI+DQoJPCFFTlRJVFkgbnNfZXh0ZW5kICJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyI+DQoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS'+
			'5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+DQoJPCFFTlRJVFkgbnNfZ3JhcGhzICJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eD0iJm5zX2V4dGVuZDsiIHhtbG5zOmk9IiZuc19haTsiIHhtbG5zOmdyYXBoPSImbnNfZ3JhcGhzOyINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdp'+
			'ZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9Ii0zNTY2IC0yNjA2IDMyIDMyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0zNTY2IC0yNjA2IDMyIDMyIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjxnIGlkPSJFYmVuZV8xIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPGc+DQoNCgkJCQk8Y2lyY2xlIG9wYWNpdHk9IjAuNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIGN4PSItMzU1OS4zMzMiIGN5PSItMjU5MC4zNz'+
			'YiIHI9IjIuNzYiLz4NCgkJCTxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0zNTU5LjMzMyIgY3k9Ii0yNTkwLjM3NiIgcj0iMi43NiIvPg0KCQkJPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBjeD0iLTM1NTkuMzMzIiBjeT0iLTI1OTAuMzc2IiByPSIyLjc2Ii8+DQoJCTwvZz4NCgkJPGc+DQoNCgkJCQk8Y2lyY2xlIG9wYWNpdHk9IjAuNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIGN4PSItMzU0MC42NjciIGN5PSItMjU5MC4zNzYi'+
			'IHI9IjIuNzYiLz4NCgkJCTxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0zNTQwLjY2NyIgY3k9Ii0yNTkwLjM3NiIgcj0iMi43NiIvPg0KCQkJPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBjeD0iLTM1NDAuNjY3IiBjeT0iLTI1OTAuMzc2IiByPSIyLjc2Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoNCgkJCTxjaXJjbGUgb3BhY2l0eT0iMC40IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgY3g9Ii0zNTUwIiBjeT0iLTI1OTAuMzc2Ii'+
			'ByPSIyLjc2Ii8+DQoJCTxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0zNTUwIiBjeT0iLTI1OTAuMzc2IiByPSIyLjc2Ii8+DQoJCTxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgY3g9Ii0zNTUwIiBjeT0iLTI1OTAuMzc2IiByPSIyLjc2Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._show_controller_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;show_controller_button;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2FyZGVuIEdub21lIFNvZnR3YXJlIC0gU2tpbiBCdXR0b25zIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY2'+
			'9tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRo'+
			'PSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9Ii0zNTY2IC0yNTcxLjMzMyAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzU2NiAtMjU3MS4zMzMgMzIgMzIiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KPC9nPg0KPGcgaWQ9IkViZW5lXzEiPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxnPg0KCQk8Zz4NCgoJCQkJPGNpcmNsZSBvcGFjaXR5PSIwLjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBjeD0iLTM1NjAuMjY2IiBjeT0iLTI1NT'+
			'UuNzA5IiByPSIzLjAzNiIvPg0KCQkJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iLTM1NjAuMjY2IiBjeT0iLTI1NTUuNzA5IiByPSIzLjAzNiIvPg0KCQkJPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBjeD0iLTM1NjAuMjY2IiBjeT0iLTI1NTUuNzA5IiByPSIzLjAzNiIvPg0KCQk8L2c+DQoJCTxnPg0KCgkJCQk8Y2lyY2xlIG9wYWNpdHk9IjAuNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIGN4PSItMzUzOS43MzMiIGN5PSItMjU1'+
			'NS43MDkiIHI9IjMuMDM2Ii8+DQoJCQk8Y2lyY2xlIGZpbGw9IiNGRkZGRkYiIGN4PSItMzUzOS43MzMiIGN5PSItMjU1NS43MDkiIHI9IjMuMDM2Ii8+DQoJCQk8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGN4PSItMzUzOS43MzMiIGN5PSItMjU1NS43MDkiIHI9IjMuMDM2Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoKCQkJPGNpcmNsZSBvcGFjaXR5PSIwLjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBjeD0iLTM1NTAiIGN5PSItMj'+
			'U1NS43MDkiIHI9IjMuMDM2Ii8+DQoJCTxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0zNTUwIiBjeT0iLTI1NTUuNzA5IiByPSIzLjAzNiIvPg0KCQk8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGN4PSItMzU1MCIgY3k9Ii0yNTU1LjcwOSIgcj0iMy4wMzYiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._show_controller_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;show_controller_button;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 23px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_controller_button.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('vis_website') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._show_controller_button.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._show_controller_button.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._show_controller_button.style[domTransition]='left 0s, bottom 0s';
				if (me._show_controller_button.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._show_controller_button.style.bottom='-100px';
					me._show_controller_button.ggUpdatePosition(true);
				}
				else {
					me._show_controller_button.ggDx=0;
					me._show_controller_button.style.bottom='23px';
					me._show_controller_button.ggUpdatePosition(true);
				}
			}
		}
		me._show_controller_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button.onmouseover=function (e) {
			me._show_controller_button__img.style.visibility='hidden';
			me._show_controller_button__imgo.style.visibility='inherit';
			me.elementMouseOver['show_controller_button']=true;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.onmouseout=function (e) {
			me._show_controller_button__img.style.visibility='inherit';
			me._show_controller_button__imgo.style.visibility='hidden';
			me.elementMouseOver['show_controller_button']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.ontouchend=function (e) {
			me.elementMouseOver['show_controller_button']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='1';
			me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='0';
			me._show_controller_button.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='1';
			me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='0';
			me._controller.style.visibility='hidden';
			player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._hide_timer);
		el=me._tt_show_controller=document.createElement('div');
		els=me._tt_show_controller__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_show_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Controller";
		el.appendChild(els);
		me._tt_show_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_show_controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_show_controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_show_controller.style[domTransition]='left 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_show_controller.style.top='-25px';
					me._tt_show_controller.ggUpdatePosition(true);
				}
				else {
					me._tt_show_controller.ggDx=0;
					me._tt_show_controller.style.top='32px';
					me._tt_show_controller.ggUpdatePosition(true);
				}
			}
		}
		me._tt_show_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['show_controller_button'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_show_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_show_controller.style[domTransition]='left 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStateVisible == 0) {
					me._tt_show_controller.style.visibility=(Number(me._tt_show_controller.style.opacity)>0||!me._tt_show_controller.style.opacity)?'inherit':'hidden';
					me._tt_show_controller.ggVisible=true;
				}
				else {
					me._tt_show_controller.style.visibility="hidden";
					me._tt_show_controller.ggVisible=false;
				}
			}
		}
		me._tt_show_controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._show_controller_button.appendChild(me._tt_show_controller);
		me.divSkin.appendChild(me._show_controller_button);
		el=me._loading_multires=document.createElement('div');
		els=me._loading_multires__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgaGVpZ2h0PSI3cHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjZweCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4wIiB2aWV3Qm94PSIwIDAgMTI4IDM1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBjeT0iMTcuNSIgcj0iMTcuNSIvPg'+
			'ogIDxhbmltYXRlIHZhbHVlcz0iMC4zOzE7MTswLjM7MC4zIiBkdXI9IjYwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIga2V5VGltZXM9IjA7MC4xNjc7MC41OzAuNjY4OzEiIGJlZ2luPSIwcyIvPgogPC9nPgogPGc+CiAgPGNpcmNsZSBjeD0iMTEwLjUiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgY3k9IjE3LjUiIHI9IjE3LjUiLz4KICA8YW5pbWF0ZSB2YWx1ZXM9IjAuMzswLjM7MTsxOzAuMyIgZHVyPSI2MDBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGtleVRpbWVzPSIwOzAu'+
			'MzM0OzAuNTswLjgzNTsxIiBiZWdpbj0iMHMiLz4KIDwvZz4KIDxnPgogIDxjaXJjbGUgY3g9IjY0IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGN5PSIxNy41IiByPSIxNy41Ii8+CiAgPGFuaW1hdGUgdmFsdWVzPSIwLjM7MC4zOzE7MTswLjM7MC4zIiBkdXI9IjYwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIga2V5VGltZXM9IjA7MC4xNjc7MC4zMzQ7MC42Njg7MC44MzU7MSIgYmVnaW49IjBzIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._loading_multires__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_multires;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_multires";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 7px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_multires.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_multires.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTileLoading() == true) && 
				(player.getVariableValue('opt_loader_mulires') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading_multires.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading_multires.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading_multires.style[domTransition]='';
				if (me._loading_multires.ggCurrentLogicStateVisible == 0) {
					me._loading_multires.style.visibility=(Number(me._loading_multires.style.opacity)>0||!me._loading_multires.style.opacity)?'inherit':'hidden';
					me._loading_multires.ggVisible=true;
				}
				else {
					me._loading_multires.style.visibility="hidden";
					me._loading_multires.ggVisible=false;
				}
			}
		}
		me._loading_multires.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._loading_multires);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_website') == true) || 
				(player.getVariableValue('vis_thumbnail_menu_mobile') == true) && 
				(player.getVariableValue('vis_thumbnail_menu_auto_hide') == true) && 
				(player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._screentint.ggCurrentLogicStateAlpha == 0) {
					me._screentint.style.visibility=me._screentint.ggVisible?'inherit':'hidden';
					me._screentint.style.opacity=1;
				}
				else {
					me._screentint.style.visibility="hidden";
					me._screentint.style.opacity=0;
				}
			}
		}
		me._screentint.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
			player.setVariableValue('vis_userdata', false);
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 40px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 92px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('vis_website') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._controller.style.bottom='-100px';
					me._controller.ggUpdatePosition(true);
				}
				else {
					me._controller.ggDx=-23;
					me._controller.style.bottom='40px';
					me._controller.ggUpdatePosition(true);
				}
			}
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getViewerSize().width < 1024)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		me._controller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateAlpha == 0) {
					me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
					me._controller.style.opacity=1;
				}
				else {
					me._controller.style.visibility="hidden";
					me._controller.style.opacity=0;
				}
			}
		}
		me._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('pos_controller') == 1)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('pos_controller') == 2)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(player.getVariableValue('pos_controller') == 3)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(player.getVariableValue('pos_controller') == 4)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(player.getVariableValue('pos_controller') == 5)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(player.getVariableValue('pos_controller') == 6)
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				(player.getVariableValue('pos_controller') == 7)
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				(player.getVariableValue('pos_controller') == 8)
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style[domTransition]='left 0s, top 0s';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.left='112px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 1) {
					me._controller_slider.style.left='96px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 2) {
					me._controller_slider.style.left='80px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 3) {
					me._controller_slider.style.left='64px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 4) {
					me._controller_slider.style.left='48px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 5) {
					me._controller_slider.style.left='32px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 6) {
					me._controller_slider.style.left='16px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 7) {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
				else {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
			}
		}
		me._controller_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotacin_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="rotaci\xf3n_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotacin_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotacin_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('pos_autorotate') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('pos_autorotate') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(player.getVariableValue('pos_autorotate') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rotacin_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rotacin_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rotacin_buttons.style[domTransition]='left 0s, top 0s';
				if (me._rotacin_buttons.ggCurrentLogicStatePosition == 0) {
					me._rotacin_buttons.style.left='0px';
					me._rotacin_buttons.style.top='0px';
				}
				else if (me._rotacin_buttons.ggCurrentLogicStatePosition == 1) {
					me._rotacin_buttons.style.left='32px';
					me._rotacin_buttons.style.top='0px';
				}
				else if (me._rotacin_buttons.ggCurrentLogicStatePosition == 2) {
					me._rotacin_buttons.style.left='76px';
					me._rotacin_buttons.style.top='0px';
				}
				else {
					me._rotacin_buttons.style.left='80px';
					me._rotacin_buttons.style.top='0px';
				}
			}
		}
		me._rotacin_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_autorotate') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rotacin_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rotacin_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rotacin_buttons.style[domTransition]='left 0s, top 0s';
				if (me._rotacin_buttons.ggCurrentLogicStateVisible == 0) {
					me._rotacin_buttons.style.visibility=(Number(me._rotacin_buttons.style.opacity)>0||!me._rotacin_buttons.style.opacity)?'inherit':'hidden';
					me._rotacin_buttons.ggVisible=true;
				}
				else {
					me._rotacin_buttons.style.visibility="hidden";
					me._rotacin_buttons.ggVisible=false;
				}
			}
		}
		me._rotacin_buttons.onclick=function (e) {
			player.setUseGyro(false);
			player.toggleAutorotate();
		}
		me._rotacin_buttons.onmouseover=function (e) {
			me.elementMouseOver['rotacin_buttons']=true;
			me._tt_rotacin.logicBlock_visible();
		}
		me._rotacin_buttons.onmouseout=function (e) {
			me.elementMouseOver['rotacin_buttons']=false;
			me._tt_rotacin.logicBlock_visible();
		}
		me._rotacin_buttons.ontouchend=function (e) {
			me.elementMouseOver['rotacin_buttons']=false;
			me._tt_rotacin.logicBlock_visible();
		}
		me._rotacin_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotacin_start=document.createElement('div');
		els=me._rotacin_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPGc+DQoJCQk8cGF0aCBkPSJNMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NA0KCQkJCWMtMS44MzEs'+
			'MS44MzMtMi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQkJYy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+DQoJCTwvZz4NCgkJPHBhdG'+
			'ggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMA0KCQkJYzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDANCgkJCWMtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAx'+
			'LDEuNDk1bDAsMA0KCQkJYy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwDQoJCQloMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMA0KCQkJYy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLD'+
			'AuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwDQoJCQljMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDANCgkJCWMwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4LDEuNDM4LTMuNTk0LDEuODI1bDAsMA0KCQkJYy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0'+
			'MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+DQoJCTxwYXRoIGQ9Ik0xNi4zOTYsMjMuNjIxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkNCgkJCWwwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLjE0OQ0KCQkJYzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLj'+
			'Y5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjENCgkJCUwxNi4zOTYsMjMuNjIxeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxnPg0KCQkJPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQkJYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkw'+
			'NCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQNCgkJCQljLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDANCgkJCQljMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCWMtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLD'+
			'guODUzLDguODU0TDguODUzLDguODU0eiIvPg0KCQk8L2c+DQoJCTxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS0wLjc4OSwyLjYzMy0xLjMwNWwwLDANCgkJCWMwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwDQoJCQljLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43'+
			'ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDANCgkJCWMtMC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMA0KCQkJaDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDANCgkJCWMtMC40NDQtMC42NDctMC43MjMtMS40Mj'+
			'MtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMA0KCQkJYzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwDQoJCQljMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWww'+
			'LDANCgkJCWMtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPg0KCQk8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5DQoJCQlsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zOD'+
			'YsMi4xNDkNCgkJCWMwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxDQoJCQlMMTYuMzk2LDIzLjYyMXoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._rotacin_start__img.setAttribute('src',hs);
		els.setAttribute('alt','detener la rotaci??n');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;rotacin_start;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._rotacin_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYs'+
			'MjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODU0DQoJCQkJYy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwDQoJCQkJYzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCQljLTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuOD'+
			'k0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4NCgkJPC9nPg0KCQk8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwDQoJCQljMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMA0KCQkJYy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAw'+
			'MS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwDQoJCQljLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDANCgkJCWgwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwDQoJCQljLTAuNDQ0LT'+
			'AuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDANCgkJCWMxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMA0KCQkJYzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40'+
			'MzgtMy41OTQsMS44MjVsMCwwDQoJCQljLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4NCgkJPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OQ0KCQkJbDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC'+
			'0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5DQoJCQljMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMQ0KCQkJTDE2LjM5NiwyMy42MjF6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41'+
			'LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODU0DQoJCQkJYy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwDQoJCQkJYzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMT'+
			'Q3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCQljLTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4NCgkJPC9nPg0KCQk8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwDQoJCQljMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAu'+
			'OTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMA0KCQkJYy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwDQoJCQljLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDANCgkJCWgwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LD'+
			'EuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwDQoJCQljLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDANCgkJCWMxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMA0KCQkJ'+
			'YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwDQoJCQljLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4NCgkJPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OQ'+
			'0KCQkJbDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5DQoJCQljMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMQ0KCQkJTDE2LjM5NiwyMy42MjF6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._rotacin_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;rotacin_start;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="rotaci\xf3n_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotacin_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotacin_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getIsAutorotating() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rotacin_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rotacin_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rotacin_start.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rotacin_start.ggCurrentLogicStateAlpha == 0) {
					me._rotacin_start.style.visibility="hidden";
					me._rotacin_start.style.opacity=0;
				}
				else {
					me._rotacin_start.style.visibility=me._rotacin_start.ggVisible?'inherit':'hidden';
					me._rotacin_start.style.opacity=1;
				}
			}
		}
		me._rotacin_start.onmouseover=function (e) {
			me._rotacin_start__img.style.visibility='hidden';
			me._rotacin_start__imgo.style.visibility='inherit';
		}
		me._rotacin_start.onmouseout=function (e) {
			me._rotacin_start__img.style.visibility='inherit';
			me._rotacin_start__imgo.style.visibility='hidden';
		}
		me._rotacin_start.ggUpdatePosition=function (useTransition) {
		}
		me._rotacin_buttons.appendChild(me._rotacin_start);
		el=me._rotacin_stop=document.createElement('div');
		els=me._rotacin_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41DQoJCUMyOC40OTgsOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk1OS03LjE0NiwyLjk2MWMtMi43OTYtMC4wMDIt'+
			'NS4zMTUtMS4xMy03LjE0Ny0yLjk2MQ0KCQlDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYNCgkJYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3eiBNMjMuOTA3LDEzLjM5Mg0KCQljLTAuNzYzLTEuMDI0LTEuOTA2LTEuNzc2LTMuMjYyLTIuMzA1QzE5LjI4NywxMC41NjIsMTcuNywxMC4yNywxNiwxMC4yNjljLTIuMjY4LDAuMDAzLT'+
			'QuMzMzLDAuNTE2LTUuOTI1LDEuNDI0DQoJCWMtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0Mw0KCQljMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4xMjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1Mw0KCQljMC4zNTYtMC41NTcsMC4xOTMtMS4yOTYtMC4zNjMtMS42NTFsLTAuMDAxLTAuMDAxYy0wLjQ5LTAuMzEyLTAuODQ4LTAuNjU1LTEuMDY1LTAuOTc3Yy0wLjIx'+
			'OC0wLjMyNC0wLjMwNC0wLjYwOC0wLjMwNi0wLjg5Ng0KCQljMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNiwyLjM2MS0wLjY1OCwzLjc4My0wLjY1Nw0KCQljMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzENCgkJYzAuMDA1LDAuNTAzLTAuMzA1LDEuMTA1LTEuMTM1LDEuNzEyYy0wLjUzNiwwLjM4Ny0wLjY1NiwxLjEzNS0wLjI3MSwxLjY3MWMwLjM4NywwLj'+
			'UzNSwxLjEzNSwwLjY1NiwxLjY3MSwwLjI3MQ0KCQljMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0MyNC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwDQoJCWwtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1Nw0KCQljLTAuNDY3LDAuNDY4LTAuNDY3LDEuMjI2LDAsMS42OTJjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSww'+
			'Ljg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ2LTAuMzUxbDEuNTU4LTEuNTU4bDEuNTU3LDEuNTU4DQoJCWMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcNCgkJQzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy'+
			'41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNQ0KCQlDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjENCgkJQzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZjMC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2DQoJCWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcu'+
			'MTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTINCgkJYy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNA0KCQljLTAuNzk1LDAuNDU2LTEuNDc3LDEuMDE2LTEuOTgzLDEuN2MtMC41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMNCgkJYzAuNDQ1LDAuNjUxLDEuMDQ5LDEuMT'+
			'k0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMNCgkJYzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYNCgkJYzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLjItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43ODMtMC42NTcNCgkJYzEuODk1LTAuMDAzLDMuNTk5'+
			'LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOTkyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxDQoJCWMwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzENCgkJYzEuMjEyLTAuODY3LDIuMTIzLTIuMTMsMi4xMjctMy42NTNDMjQuNzM1LDE0LjksMjQuNDEyLDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMA0KCQlsLT'+
			'EuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcNCgkJYy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OA0KCQljMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1'+
			'LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3DQoJCUMxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._rotacin_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;rotacin_stop;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._rotacin_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUNCgkJQzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0'+
			'NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYxYy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxDQoJCUM3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45Ng0KCQljMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMjEuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyDQoJCWMtMC43NjMtMS4wMjQtMS45MDYtMS43NzYtMy'+
			'4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQNCgkJYy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzDQoJCWMwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwxLjc1NSwxLjY0NmMwLjE5OSwwLjEyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzDQoJCWMwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0x'+
			'LjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2DQoJCWMwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3DQoJCWMxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSwwLjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MQ0KCQljMC4wMDUsMC41MDMtMC4zMDUsMS4xMD'+
			'UtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxDQoJCWMxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDANCgkJbC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LDEuNTU3DQoJ'+
			'CWMtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgNCgkJYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1Nw0KCQlDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYuNjQ4LDE5LjM2NCwxNi4xODJ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPS'+
			'IjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUNCgkJQzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYxYy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxDQoJCUM3LjAyMSwyMS4zMTQsNS44'+
			'OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45Ng0KCQljMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMjEuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyDQoJCWMtMC43NjMtMS4wMjQtMS45MDYtMS43NzYtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQNCgkJYy0wLjc5NSwwLjQ1Ni0xLj'+
			'Q3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzDQoJCWMwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwxLjc1NSwxLjY0NmMwLjE5OSwwLjEyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzDQoJCWMwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2DQoJCWMwLjAwMi0w'+
			'LjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3DQoJCWMxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSwwLjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MQ0KCQljMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxDQoJCWMxLjIxMi0wLjg2Ny'+
			'wyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDANCgkJbC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LDEuNTU3DQoJCWMtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFs'+
			'MS41NTgtMS41NThsMS41NTcsMS41NTgNCgkJYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1Nw0KCQlDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYuNjQ4LDE5LjM2NCwxNi4xODJ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._rotacin_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;rotacin_stop;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="rotaci\xf3n_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotacin_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotacin_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getIsAutorotating() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rotacin_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rotacin_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rotacin_stop.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rotacin_stop.ggCurrentLogicStateAlpha == 0) {
					me._rotacin_stop.style.visibility=me._rotacin_stop.ggVisible?'inherit':'hidden';
					me._rotacin_stop.style.opacity=1;
				}
				else {
					me._rotacin_stop.style.visibility="hidden";
					me._rotacin_stop.style.opacity=0;
				}
			}
		}
		me._rotacin_stop.onmouseover=function (e) {
			me._rotacin_stop__img.style.visibility='hidden';
			me._rotacin_stop__imgo.style.visibility='inherit';
		}
		me._rotacin_stop.onmouseout=function (e) {
			me._rotacin_stop__img.style.visibility='inherit';
			me._rotacin_stop__imgo.style.visibility='hidden';
		}
		me._rotacin_stop.ggUpdatePosition=function (useTransition) {
		}
		me._rotacin_buttons.appendChild(me._rotacin_stop);
		el=me._tt_rotacin=document.createElement('div');
		els=me._tt_rotacin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotaci\xf3n";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Detener la rotaci\xf3n";
		el.appendChild(els);
		me._tt_rotacin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_rotacin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_rotacin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_rotacin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_rotacin.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotacin.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_rotacin.style.top='-25px';
					me._tt_rotacin.ggUpdatePosition(true);
				}
				else {
					me._tt_rotacin.ggDx=0;
					me._tt_rotacin.style.top='32px';
					me._tt_rotacin.ggUpdatePosition(true);
				}
			}
		}
		me._tt_rotacin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['rotacin_buttons'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotacin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotacin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotacin.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotacin.ggCurrentLogicStateVisible == 0) {
					me._tt_rotacin.style.visibility=(Number(me._tt_rotacin.style.opacity)>0||!me._tt_rotacin.style.opacity)?'inherit':'hidden';
					me._tt_rotacin.ggVisible=true;
				}
				else {
					me._tt_rotacin.style.visibility="hidden";
					me._tt_rotacin.ggVisible=false;
				}
			}
		}
		me._tt_rotacin.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getIsAutorotating() == true)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getIsAutorotating() == false)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_rotacin.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_rotacin.ggCurrentLogicStateText = newLogicStateText;
				me._tt_rotacin.style[domTransition]='left 0s, top 0s';
				if (me._tt_rotacin.ggCurrentLogicStateText == 0) {
					me._tt_rotacin.ggText="Detener la rotaci\xf3n";
					me._tt_rotacin__text.innerHTML=me._tt_rotacin.ggText;
					if (me._tt_rotacin.ggUpdateText) {
					me._tt_rotacin.ggUpdateText=function() {
						var hs="Detener la rotaci\xf3n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotacin.ggUpdatePosition) me._tt_rotacin.ggUpdatePosition();
					}
				}
				else if (me._tt_rotacin.ggCurrentLogicStateText == 1) {
					me._tt_rotacin.ggText="Activar la rotaci\xf3n";
					me._tt_rotacin__text.innerHTML=me._tt_rotacin.ggText;
					if (me._tt_rotacin.ggUpdateText) {
					me._tt_rotacin.ggUpdateText=function() {
						var hs="Activar la rotaci\xf3n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotacin.ggUpdatePosition) me._tt_rotacin.ggUpdatePosition();
					}
				}
				else {
					me._tt_rotacin.ggText="Detener la rotaci\xf3n";
					me._tt_rotacin__text.innerHTML=me._tt_rotacin.ggText;
					if (me._tt_rotacin.ggUpdateText) {
					me._tt_rotacin.ggUpdateText=function() {
						var hs="Detener la rotaci\xf3n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotacin.ggUpdatePosition) me._tt_rotacin.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_rotacin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._rotacin_buttons.appendChild(me._tt_rotacin);
		me._controller_slider.appendChild(me._rotacin_buttons);
		el=me._alejar=document.createElement('div');
		els=me._alejar__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUs'+
			'OS4wOTYsMy41LDE2DQoJCQljMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0Ng0KCQkJYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNg0KCQkJYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLj'+
			'k2MQ0KCQkJYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBN'+
			'MTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2DQoJCQljMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0Ng0KCQkJYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNg0KCQkJYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMD'+
			'EsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MQ0KCQkJYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._alejar__img.setAttribute('src',hs);
		els.setAttribute('alt','Alejar');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;alejar;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._alejar__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNw0KCQkJYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1'+
			'LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYNCgkJCWMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2DQoJCQljLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2DQoJCQljMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS'+
			'44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxDQoJCQljMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAs'+
			'MC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3DQoJCQljMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNg0KCQkJYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYNCgkJCWMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMD'+
			'IyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYNCgkJCWMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjENCgkJCWMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._alejar__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;alejar;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Alejar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._alejar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._alejar.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_zoom') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._alejar.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._alejar.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._alejar.style[domTransition]='';
				if (me._alejar.ggCurrentLogicStateVisible == 0) {
					me._alejar.style.visibility=(Number(me._alejar.style.opacity)>0||!me._alejar.style.opacity)?'inherit':'hidden';
					me._alejar.ggVisible=true;
				}
				else {
					me._alejar.style.visibility="hidden";
					me._alejar.ggVisible=false;
				}
			}
		}
		me._alejar.onmouseover=function (e) {
			me._alejar__img.style.visibility='hidden';
			me._alejar__imgo.style.visibility='inherit';
			me.elementMouseOver['alejar']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._alejar.onmouseout=function (e) {
			me._alejar__img.style.visibility='inherit';
			me._alejar__imgo.style.visibility='hidden';
			me.elementMouseDown['alejar']=false;
			me.elementMouseOver['alejar']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._alejar.onmousedown=function (e) {
			me.elementMouseDown['alejar']=true;
		}
		me._alejar.onmouseup=function (e) {
			me.elementMouseDown['alejar']=false;
		}
		me._alejar.ontouchend=function (e) {
			me.elementMouseDown['alejar']=false;
			me.elementMouseOver['alejar']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._alejar.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Alejar";
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomout.style.top='-25px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomout.ggDx=0;
					me._tt_zoomout.style.top='32px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['alejar'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._alejar.appendChild(me._tt_zoomout);
		me._controller_slider.appendChild(me._alejar);
		el=me._acercar=document.createElement('div');
		els=me._acercar__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NQ0KCQkJSDkuOTM4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Nmg0Ljg2NnY0Ljg2NWMwLDAuNjYsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTYNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeg0KCQkJIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUNCgkJCUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOT'+
			'ZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTYNCgkJCUM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjENCgkJCWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTIyLjA2'+
			'MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NQ0KCQkJSDkuOTM4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Nmg0Ljg2NnY0Ljg2NWMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTYNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeg0KCQ'+
			'kJIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUNCgkJCUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTYNCgkJCUM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjENCgkJCWMyLjc5NSww'+
			'LjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._acercar__img.setAttribute('src',hs);
		els.setAttribute('alt','Acercar');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;acercar;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._acercar__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1DQoJCQlIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYs'+
			'MS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Ng0KCQkJYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTQuODY1aDQuODY0YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZDMjMuMjU3LDE1LjMzOSwyMi43MjIsMTQuODAzLDIyLjA2MSwxNC44MDN6DQoJCQkgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNQ0KCQkJQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy'+
			'41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45Ng0KCQkJQzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MQ0KCQkJYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZG'+
			'RkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0yMi4wNjEsMTQuODAzaC00Ljg2NFY5LjkzOGMwLTAuNjYxLTAuNTM2LTEuMTk3LTEuMTk3LTEuMTk3Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTd2NC44NjUNCgkJCUg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2DQoJCQljMC42Nj'+
			'EsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3oNCgkJCSBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41DQoJCQlDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2DQoJCQlD'+
			'Ny4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxDQoJCQljMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MWMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._acercar__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;acercar;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Acercar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._acercar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._acercar.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_zoom') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._acercar.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._acercar.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._acercar.style[domTransition]='';
				if (me._acercar.ggCurrentLogicStateVisible == 0) {
					me._acercar.style.visibility=(Number(me._acercar.style.opacity)>0||!me._acercar.style.opacity)?'inherit':'hidden';
					me._acercar.ggVisible=true;
				}
				else {
					me._acercar.style.visibility="hidden";
					me._acercar.ggVisible=false;
				}
			}
		}
		me._acercar.onmouseover=function (e) {
			me._acercar__img.style.visibility='hidden';
			me._acercar__imgo.style.visibility='inherit';
			me.elementMouseOver['acercar']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._acercar.onmouseout=function (e) {
			me._acercar__img.style.visibility='inherit';
			me._acercar__imgo.style.visibility='hidden';
			me.elementMouseDown['acercar']=false;
			me.elementMouseOver['acercar']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._acercar.onmousedown=function (e) {
			me.elementMouseDown['acercar']=true;
		}
		me._acercar.onmouseup=function (e) {
			me.elementMouseDown['acercar']=false;
		}
		me._acercar.ontouchend=function (e) {
			me.elementMouseDown['acercar']=false;
			me.elementMouseOver['acercar']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._acercar.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Acercar";
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomin.style.top='-25px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomin.ggDx=0;
					me._tt_zoomin.style.top='32px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['acercar'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._acercar.appendChild(me._tt_zoomin);
		me._controller_slider.appendChild(me._acercar);
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('pos_fullscreen') == 3)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('pos_fullscreen') == 4)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(player.getVariableValue('pos_fullscreen') == 5)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(player.getVariableValue('pos_fullscreen') == 6)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(player.getVariableValue('pos_fullscreen') == 7)
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 1) {
					me._fullscreen_buttons.style.left='116px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 2) {
					me._fullscreen_buttons.style.left='160px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 3) {
					me._fullscreen_buttons.style.left='192px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 4) {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
				else {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
			}
		}
		me._fullscreen_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_fullscreen') == true) && 
				(player.getOS() != 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
				else {
					me._fullscreen_buttons.style.visibility="hidden";
					me._fullscreen_buttons.ggVisible=false;
				}
			}
		}
		me._fullscreen_buttons.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_buttons.onmouseover=function (e) {
			me.elementMouseOver['fullscreen_buttons']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.onmouseout=function (e) {
			me.elementMouseOver['fullscreen_buttons']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.ontouchend=function (e) {
			me.elementMouseOver['fullscreen_buttons']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._pantalla_completa=document.createElement('div');
		els=me._pantalla_completa__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MQ0KCQlTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3DQoJ'+
			'CWMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQNCgkJVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2DQoJCWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0Mg'+
			'0KCQljLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2DQoJCUMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTINCgkJ'+
			'bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1Nw0KCQlsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0Nw0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy'+
			'0wLjE1N2wwLjIyMS0wLjE0OA0KCQljMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNg0KCQljMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVs'+
			'LTAuMjIxLDAuMTQ4DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMz'+
			'E1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTENCgkJUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNw0KCQljMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0DQoJCVY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40'+
			'NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Ng0KCQljMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDINCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLj'+
			'E5Ng0KCQljMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyDQoJCWwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcNCgkJbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4Nywx'+
			'My40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5Ni'+
			'wxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYNCgkJYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OA0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OA0KCQljMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4N'+
			'Cgk8L2c+Cjwvc3ZnPg==';
		me._pantalla_completa__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;pantalla_completa;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pantalla_completa__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxDQoJCVMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYy'+
			'MywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcNCgkJYzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNA0KCQlWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40ND'+
			'hDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyDQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYNCgkJYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2'+
			'QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMg0KCQlsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3DQoJCWwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC'+
			'4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2DQoJCWMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUt'+
			'MC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxDQoJCVMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcNCgkJYzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUs'+
			'MjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNA0KCQlWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyDQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYNCgkJYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMg0KCQlsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRj'+
			'MC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3DQoJCWwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LD'+
			'IzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2DQoJCWMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAu'+
			'NDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._pantalla_completa__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;pantalla_completa;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="pantalla completa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pantalla_completa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pantalla_completa.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pantalla_completa.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pantalla_completa.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pantalla_completa.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._pantalla_completa.ggCurrentLogicStateAlpha == 0) {
					me._pantalla_completa.style.visibility="hidden";
					me._pantalla_completa.style.opacity=0;
				}
				else {
					me._pantalla_completa.style.visibility=me._pantalla_completa.ggVisible?'inherit':'hidden';
					me._pantalla_completa.style.opacity=1;
				}
			}
		}
		me._pantalla_completa.onmouseover=function (e) {
			me._pantalla_completa__img.style.visibility='hidden';
			me._pantalla_completa__imgo.style.visibility='inherit';
		}
		me._pantalla_completa.onmouseout=function (e) {
			me._pantalla_completa__img.style.visibility='inherit';
			me._pantalla_completa__imgo.style.visibility='hidden';
		}
		me._pantalla_completa.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._pantalla_completa);
		el=me._pantalla_completa_off=document.createElement('div');
		els=me._pantalla_completa_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyDQoJCWMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTENCgkJYzAu'+
			'MjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQNCgkJSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1DQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwDQoJCVY5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1DQoJCUMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2DQoJCXMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4'+
			'LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzDQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6DQoJCSBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMj'+
			'QyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2DQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTENCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42Niww'+
			'LjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4DQoJCUMyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2DQoJCWgtMC4yMzRjLTAuNjYsMC'+
			'0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTENCgkJczAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgNCgkJYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXog'+
			'TTI4LjE0OSw3LjAzMw0KCQljLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5Ng0KCQljMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxDQoJCWwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNT'+
			'ZsLTAuMjIxLDAuMTQ2DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXoNCgkJIE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0w'+
			'LjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0Nw0KCQljMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MQ0KCQlDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LD'+
			'IzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3Ng0KCQljLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNA0KCQljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGgg'+
			'ZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMg0KCQljMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxDQoJCWMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0DQoJCUg1Ljg5M3YtNS43MjhoOC'+
			'45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMA0KCQlWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNQ0K'+
			'CQlDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0Mw0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny'+
			'0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eg0KCQkgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCVMyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNg0KCQljLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3Nmgw'+
			'LjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2DQoJCXMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExDQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOA0KCQlDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNT'+
			'M1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5Ng0KCQljMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5Ng0KCQloLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxDQoJCXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2'+
			'NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4DQoJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMNCgkJYy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAsMC42NjEsMC'+
			'41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MQ0KCQlsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0Ng0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6DQoJCSBN'+
			'MTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2DQoJCUMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcNCgkJYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC'+
			'44NjMtMC4yNTYsMS4yOTENCgkJQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYNCgkJYy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjlj'+
			'MC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTQNCgkJYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._pantalla_completa_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;pantalla_completa_off;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pantalla_completa_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTINCgkJYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUz'+
			'MSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MQ0KCQljMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNA0KCQlINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4Qz'+
			'MuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDANCgkJVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUNCgkJQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNS0x'+
			'LjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHoNCgkJIE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi'+
			'0xLjE5NiwxLjE5Ng0KCQlTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYNCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0'+
			'LDExLjExMQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgNCgkJQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNC'+
			'wyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYNCgkJaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MQ0KCQlzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOA0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwx'+
			'LjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzDQoJCWMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjENCgkJbDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LD'+
			'AuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeg0KCQkgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMjAuNTI1LDIzLjQ2'+
			'LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3DQoJCWMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxDQoJCUMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMT'+
			'k2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2DQoJCWMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0DQoJCWMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+DQoJPC9nPgoJPGcg'+
			'ZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTINCgkJYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MQ0KCQljMC4yMjYtMC4yMjYsMC4zNS0wLjUyNS'+
			'wwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNA0KCQlINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEu'+
			'MTk3aDANCgkJVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUNCgkJQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5Lj'+
			'A3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHoNCgkJIE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQlTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2'+
			'LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYNCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMT'+
			'k2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgNCgkJQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYNCgkJaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEu'+
			'MTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MQ0KCQlzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOA0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzDQoJCWMtMC'+
			'4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjENCgkJbDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYNCgkJYy0w'+
			'LjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeg0KCQkgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMjAuNTI1LDIzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMj'+
			'IxLTAuMTQ3DQoJCWMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxDQoJCUMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwy'+
			'Mi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2DQoJCWMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0DQoJCWMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._pantalla_completa_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;pantalla_completa_off;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="pantalla completa_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pantalla_completa_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pantalla_completa_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pantalla_completa_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pantalla_completa_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pantalla_completa_off.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._pantalla_completa_off.ggCurrentLogicStateAlpha == 0) {
					me._pantalla_completa_off.style.visibility=me._pantalla_completa_off.ggVisible?'inherit':'hidden';
					me._pantalla_completa_off.style.opacity=1;
				}
				else {
					me._pantalla_completa_off.style.visibility="hidden";
					me._pantalla_completa_off.style.opacity=0;
				}
			}
		}
		me._pantalla_completa_off.onmouseover=function (e) {
			me._pantalla_completa_off__img.style.visibility='hidden';
			me._pantalla_completa_off__imgo.style.visibility='inherit';
		}
		me._pantalla_completa_off.onmouseout=function (e) {
			me._pantalla_completa_off__img.style.visibility='inherit';
			me._pantalla_completa_off__imgo.style.visibility='hidden';
		}
		me._pantalla_completa_off.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._pantalla_completa_off);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Pantalla completa";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 106;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['fullscreen_buttons'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getIsFullscreen() == false)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Salir pantalla completa";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Salir pantalla completa";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Entrar a pantalla completa";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Entrar a pantalla completa";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="Pantalla completa";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Pantalla completa";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._fullscreen_buttons.appendChild(me._tt_fullscreen);
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._key_up=document.createElement('div');
		el.ggId="key_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_up.onmouseout=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.onmousedown=function (e) {
			me.elementMouseDown['key_up']=true;
		}
		me._key_up.onmouseup=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ontouchend=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_up);
		el=me._key_down=document.createElement('div');
		el.ggId="key_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_down.onmouseout=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.onmousedown=function (e) {
			me.elementMouseDown['key_down']=true;
		}
		me._key_down.onmouseup=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ontouchend=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_down);
		el=me._key_left=document.createElement('div');
		el.ggId="key_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_left.onmouseout=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.onmousedown=function (e) {
			me.elementMouseDown['key_left']=true;
		}
		me._key_left.onmouseup=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ontouchend=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_left);
		el=me._key_right=document.createElement('div');
		el.ggId="key_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._key_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_right.onmouseout=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.onmousedown=function (e) {
			me.elementMouseDown['key_right']=true;
		}
		me._key_right.onmouseup=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ontouchend=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_right);
		me._controller.appendChild(me._controller_slider);
		el=me._element_alpha_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="element_alpha_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._element_alpha_timer.ggIsActive=function() {
			return (me._element_alpha_timer.ggTimestamp + me._element_alpha_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._element_alpha_timer.ggDeactivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._element_alpha_timer.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._element_alpha_timer);
		me.divSkin.appendChild(me._controller);
		el=me._thumbnail_menu_mobile=document.createElement('div');
		els=me._thumbnail_menu_mobile__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 76.764px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.49px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 118.98px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu_mobile.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu_mobile.ggScrollPosX = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.clientWidth - me._thumbnail_menu_mobile__horScrollFg.clientWidth);
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.clientWidth);
		}
		me._thumbnail_menu_mobile.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu_mobile.ggScrollPosX >= me._thumbnail_menu_mobile__horScrollBg.clientWidth - me._thumbnail_menu_mobile__horScrollFg.clientWidth)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.clientWidth - me._thumbnail_menu_mobile__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu_mobile.ggScrollPosX <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu_mobile.ggScrollPosY = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight);
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu_mobile.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu_mobile.ggScrollPosY >= me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu_mobile.ggScrollPosY <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu_mobile.clientWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu_mobile.clientWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu_mobile.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu_mobile.clientHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu_mobile.clientHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
			me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
			me._thumbnail_menu_mobile__content.ontouchend = function() {
				me._thumbnail_menu_mobile__content.ontouchend = null;
				me._thumbnail_menu_mobile__content.ontouchmove = null;
			}
			me._thumbnail_menu_mobile__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu_mobile.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
				me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
				me._thumbnail_menu_mobile.ggScrollByX(-diffX);
				me._thumbnail_menu_mobile.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._thumbnail_menu_mobile__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 560px; background-color: rgba(255,255,255,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu_mobile__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 560px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu_mobile.ggScrollPosY = 0;
		me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu_mobile__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu_mobile.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu_mobile__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu_mobile.style.top='1000px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu_mobile.ggDx=0;
					me._thumbnail_menu_mobile.style.top='10px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_thumbnail') == true) && 
				(player.getIsTour() == true) && 
				(player.getViewerSize().width <= 450)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu_mobile.style.visibility=(Number(me._thumbnail_menu_mobile.style.opacity)>0||!me._thumbnail_menu_mobile.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu_mobile.ggVisible=true;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu_mobile') == true) && 
				(player.getVariableValue('vis_thumbnail_menu_auto_hide') == true) && 
				(player.getVariableValue('vis_timer') == true) && 
				(player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_mobile.style.visibility=me._thumbnail_menu_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_mobile.style.opacity=1;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = this.clientWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile.ggVertScrollVisible = true;
				} else {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile.ggVertScrollVisible = false;
				}
				if(me._thumbnail_menu_mobile.ggVertScrollVisible) {
					if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.clientHeight - 15;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.clientHeight;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu_mobile__vertScrollBg.style.height = me._thumbnail_menu_mobile.ggAvailableHeight + 'px';
					me._thumbnail_menu_mobile.ggVPercentVisible = me._thumbnail_menu_mobile.ggAvailableHeight / contentHeight;
					if (me._thumbnail_menu_mobile.ggVPercentVisible > 1.0) me._thumbnail_menu_mobile.ggVPercentVisible = 1.0;
					me._thumbnail_menu_mobile.ggScrollHeight =  Math.round(me._thumbnail_menu_mobile__vertScrollBg.clientHeight * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile__vertScrollFg.style.height = me._thumbnail_menu_mobile.ggScrollHeight + 'px';
					me._thumbnail_menu_mobile.ggScrollPosY = me._thumbnail_menu_mobile.ggScrollPosYPercent * me._thumbnail_menu_mobile.ggAvailableHeight;
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight);
					me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
					me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._thumbnail_menu_mobile.ggScrollPosY = 0;
					me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
					me._thumbnail_menu_mobile__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._thumbnail_cloner_mobile=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_mobile.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_mobile.ggUpdating == true) return;
			me._thumbnail_cloner_mobile.ggUpdating = true;
			var el=me._thumbnail_cloner_mobile;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var parentWidth = me._thumbnail_cloner_mobile.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnail_cloner_mobile.parentNode.parentNode.clientWidth;
			var numCols = Math.floor((parentWidth * me._thumbnail_cloner_mobile.ggNumRepeat / 100.0) / me._thumbnail_cloner_mobile.offsetWidth);
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner_mobile.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_mobile.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_mobile_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._thumbnail_cloner_mobile.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_active();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();
			me._thumbnail_cloner_mobile.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 1.98px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 1.764px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=true;
		}
		me._thumbnail_cloner_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		me._thumbnail_cloner_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_mobile.childNodes.length; i++) {
				var child=me._thumbnail_cloner_mobile.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_mobile.ggLastSize) || (me._thumbnail_cloner_mobile.ggLastSize.w!=w) || (me._thumbnail_cloner_mobile.ggLastSize.h!=h)) {
				me._thumbnail_cloner_mobile.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_mobile.ggUpdate();
			}
		}
		me._thumbnail_cloner_mobile.ggNodeChange=function () {
			me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu_mobile__content.appendChild(me._thumbnail_cloner_mobile);
		me.divSkin.appendChild(me._thumbnail_menu_mobile);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._web_page);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._userdata.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._userdata.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._userdata.style[domTransition]='';
				if (me._userdata.ggCurrentLogicStateVisible == 0) {
					me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
					me._userdata.ggVisible=true;
				}
				else {
					me._userdata.style.visibility="hidden";
					me._userdata.ggVisible=false;
				}
			}
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._userdata_title=document.createElement('div');
		els=me._userdata_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_title.ggUpdateText();
		el.appendChild(els);
		me._userdata_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_title);
		el=me._userdata_description=document.createElement('div');
		els=me._userdata_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_description.ggUpdateText();
		el.appendChild(els);
		me._userdata_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_description);
		el=me._userdata_author=document.createElement('div');
		els=me._userdata_author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_author.ggUpdateText();
		el.appendChild(els);
		me._userdata_author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_author);
		el=me._userdata_datetime=document.createElement('div');
		els=me._userdata_datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_datetime.ggUpdateText();
		el.appendChild(els);
		me._userdata_datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_datetime.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_datetime);
		el=me._userdata_copyright=document.createElement('div');
		els=me._userdata_copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._userdata_copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_copyright.ggUpdateText();
		el.appendChild(els);
		me._userdata_copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_copyright);
		el=me._userdata_close=document.createElement('div');
		els=me._userdata_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._userdata_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;userdata_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._userdata_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._userdata_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;userdata_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="userdata_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_close.onclick=function (e) {
			player.setVariableValue('vis_userdata', false);
		}
		me._userdata_close.onmouseover=function (e) {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		me._userdata_close.onmouseout=function (e) {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		me._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_close);
		me.divSkin.appendChild(me._userdata);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.onclick=function (e) {
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAi'+
			'IGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUo'+
			'MjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdX'+
			'I9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40'+
			'IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		me._popup_image__img=document.createElement('img');
		me._popup_image__img.className='ggskin ggskin_external';
		me._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		me._popup_image.ggText=basePath + '';
		me._popup_image__img.setAttribute('src', me._popup_image.ggText);
		me._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		me._popup_image.appendChild(me._popup_image__img);
		me._popup_image.ggSubElement = me._popup_image__img;
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			};
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_file') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAi'+
			'IGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUo'+
			'MjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdX'+
			'I9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40'+
			'IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_file;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_file.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('autoplay', '');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_file') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_file') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#ffffff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function() {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState) {
					var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background: #ffffff;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
		}
		me._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMA0KCQkJYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQy'+
			'OC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDANCgkJCWwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eg0KCQkJIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4NCgkJPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLj'+
			'Q5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2'+
			'bDAsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMA0KCQkJYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC'+
			'0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDANCgkJCWwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eg0KCQkJIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4NCgkJPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5'+
			'OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bD'+
			'AsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_play_file;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwDQoJCQljMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAs'+
			'MGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMA0KCQkJbC05Ljk3OCw1Ljc2MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6DQoJCQkgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPg0KCQk8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOT'+
			'A0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0Ng0KCQkJbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDANCgkJCWMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAy'+
			'MiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLj'+
			'gyMiwwLjU5OC0xLjAzNmwwLDANCgkJCWMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDkuOTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwDQoJCQlsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3oNCgkJCSBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+DQoJCTxwYXRo'+
			'IGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2DQoJCQlsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMA'+
			'0KCQkJYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_play_file;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.onclick=function (e) {
			player.playSound("popup_video_file","1");
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1MywyMy4xNDYNCgkJCWMxLjgzMywxLjgzMSw0LjM1'+
			'MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwDQoJCQljMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMA0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwaDBDNS44OTQsMTguNzk1LDcuMDIyLDIxLjMxNCw4Ljg1MywyMy4xNDZMOC44NTMsMjMuMTQ2eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik'+
			'0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NQ0KCQkJCWMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzEyLjk2OSwyMS42OTMsMTIuNDMzLDIxLjE1OCwxMi40MzMsMjAuNDk4TDEyLjQzMywyMC40OTh6Ii8+DQoJCQk8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NQ0KCQkJCWMwLDAuNjYtMC41MzYsMS4xOTUt'+
			'MS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2DQoJCQljMS'+
			'44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMA0KCQkJYzAtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4NCgkJPGc+'+
			'DQoJCQk8cGF0aCBkPSJNMTIuNDMzLDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NjEsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUNCgkJCQljMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPg0KCQkJPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUNCgkJCQljMCwwLj'+
			'Y2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxNy43MSwyMS42OTMsMTcuMTc1LDIxLjE1OCwxNy4xNzUsMjAuNDk4TDE3LjE3NSwyMC40OTh6Ii8+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_pause_file;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMu'+
			'NSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0Ng0KCQkJYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMj'+
			'IsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4NCgkJCTxwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAs'+
			'MS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LD'+
			'EyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0Ng0KCQkJYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3'+
			'LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4NCgkJCT'+
			'xwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_pause_file;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.onclick=function (e) {
			player.pauseSound("popup_video_file");
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_url=document.createElement('div');
		el.ggId="video_popup_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url.style[domTransition]='';
				if (me._video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url.style.visibility=(Number(me._video_popup_url.style.opacity)>0||!me._video_popup_url.style.opacity)?'inherit':'hidden';
					me._video_popup_url.ggVisible=true;
				}
				else {
					me._video_popup_url.style.visibility="hidden";
					me._video_popup_url.ggVisible=false;
				}
			}
		}
		me._video_popup_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_url=document.createElement('div');
		els=me._loading_video_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAi'+
			'IGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUo'+
			'MjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdX'+
			'I9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40'+
			'IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_url.appendChild(me._loading_video_url);
		el=me._popup_video_url=document.createElement('div');
		me._popup_video_url.seekbars = [];
		me._popup_video_url.seekbars.push('seekbar_url');
		me._popup_video_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_url.hasChildNodes()) {
				me._popup_video_url.removeChild(me._popup_video_url.lastChild);
			}
			if (me._popup_video_url__vid) {
				me._popup_video_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_url.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_url.ggVideoNotLoaded = false;
			me._popup_video_url__vid=document.createElement('video');
			me._popup_video_url__vid.className='ggskin ggskin_video';
			me._popup_video_url__vid.setAttribute('width', '100%');
			me._popup_video_url__vid.setAttribute('height', '100%');
			me._popup_video_url__vid.setAttribute('autoplay', '');
			me._popup_video_url__source=document.createElement('source');
			me._popup_video_url__source.setAttribute('src', media);
			me._popup_video_url__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_url__vid.setAttribute('style', ';');
			me._popup_video_url__vid.appendChild(me._popup_video_url__source);
			me._popup_video_url.appendChild(me._popup_video_url__vid);
			var videoEl = player.registerVideoElement('popup_video_url', me._popup_video_url__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._popup_video_url.ggVideoSource = media;
		}
		el.ggId="popup_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_url.ggIsActive=function() {
			if (me._popup_video_url__vid != null) {
				return (me._popup_video_url__vid.paused == false && me._popup_video_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_url.style[domTransition]='';
				if (me._popup_video_url.ggCurrentLogicStateVisible == 0) {
					me._popup_video_url.style.visibility=(Number(me._popup_video_url.style.opacity)>0||!me._popup_video_url.style.opacity)?'inherit':'hidden';
					if (me._popup_video_url.ggVideoNotLoaded) {
						me._popup_video_url.ggInitMedia(me._popup_video_url.ggVideoSource);
					}
					me._popup_video_url.ggVisible=true;
				}
				else {
					me._popup_video_url.style.visibility="hidden";
					me._popup_video_url.ggInitMedia('');
					me._popup_video_url.ggVisible=false;
				}
			}
		}
		me._popup_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._popup_video_url);
		me.divSkin.appendChild(me._video_popup_url);
		el=me._video_popup_controls_url=document.createElement('div');
		el.ggId="video_popup_controls_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_url.style[domTransition]='';
				if (me._video_popup_controls_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_url.style.visibility=(Number(me._video_popup_controls_url.style.opacity)>0||!me._video_popup_controls_url.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_url.ggVisible=true;
				}
				else {
					me._video_popup_controls_url.style.visibility="hidden";
					me._video_popup_controls_url.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_url=document.createElement('div');
		me._seekbar_url__playhead=document.createElement('div');
		me._seekbar_url.mediaEl = null;
		el.ggId="seekbar_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_url.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_url__playhead.style.visibility = 'hidden';
				me._seekbar_url.style.background = '#ffffff';
				me._seekbar_url.ggConnected = false;
			}
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url.mediaEl.removeEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.removeEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.removeEventListener('pause', me._seekbar_url.ggDeactivate);
				}
				if (me._seekbar_url.ggMediaEnded) {
					me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggMediaEnded);
				}
			}
			me._seekbar_url.mediaEl = player.getMediaObject('popup_video_url');
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url__playhead.style.visibility = 'inherit';
				me._seekbar_url__playhead.style.left = '1px';
				me._seekbar_url.mediaEl.addEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.addEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.addEventListener('pause', me._seekbar_url.ggDeactivate);
				}
				if (me._seekbar_url.ggMediaEnded) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggMediaEnded);
				}
			me._seekbar_url.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_url');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_url.updatePlayback = function() {
			if (!me._seekbar_url.ggConnected) return;
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.mediaEl.readyState) {
					var percent = me._seekbar_url.mediaEl.currentTime / me._seekbar_url.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_url.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_url__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_url.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_url.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_url.mediaEl.buffered.start(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_url.mediaEl.buffered.end(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_url.style.background = gradientString;
				}
			}
		}
		me._seekbar_url.appendChild(me._seekbar_url__playhead);
		hs+='background: #ffffff;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_url.setAttribute('style', hs);
		me._seekbar_url__playhead.setAttribute('style', hs_playhead);
		me._seekbar_url.ggIsActive=function() {
			if (me._seekbar_url.mediaEl != null) {
				return (me._seekbar_url.mediaEl.paused == false && me._seekbar_url.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_url.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_url.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_url.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_url.ggActivate=function () {
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
		}
		me._seekbar_url.ggDeactivate=function () {
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
		}
		me._seekbar_url.ggUpdatePosition=function (useTransition) {
		}
		me._seekbar_url.ggNodeChange=function () {
			me._seekbar_url.connectToMediaEl();
		}
		me._video_popup_controls_url.appendChild(me._seekbar_url);
		el=me._ht_video_play_url=document.createElement('div');
		els=me._ht_video_play_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMA0KCQkJYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQy'+
			'OC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDANCgkJCWwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eg0KCQkJIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4NCgkJPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLj'+
			'Q5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2'+
			'bDAsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMA0KCQkJYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC'+
			'0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDANCgkJCWwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eg0KCQkJIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4NCgkJPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5'+
			'OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYNCgkJCWwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwDQoJCQljLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bD'+
			'AsMA0KCQkJQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_play_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_play_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwDQoJCQljMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAs'+
			'MGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMA0KCQkJbC05Ljk3OCw1Ljc2MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6DQoJCQkgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPg0KCQk8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOT'+
			'A0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0Ng0KCQkJbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDANCgkJCWMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAy'+
			'MiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLj'+
			'gyMiwwLjU5OC0xLjAzNmwwLDANCgkJCWMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDkuOTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwDQoJCQlsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3oNCgkJCSBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+DQoJCTxwYXRo'+
			'IGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2DQoJCQlsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMA'+
			'0KCQkJYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._ht_video_play_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_play_url;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_url.onclick=function (e) {
			player.playSound("popup_video_url","1");
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
		}
		me._ht_video_play_url.onmouseover=function (e) {
			me._ht_video_play_url__img.style.visibility='hidden';
			me._ht_video_play_url__imgo.style.visibility='inherit';
		}
		me._ht_video_play_url.onmouseout=function (e) {
			me._ht_video_play_url__img.style.visibility='inherit';
			me._ht_video_play_url__imgo.style.visibility='hidden';
		}
		me._ht_video_play_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_play_url);
		el=me._ht_video_pause_url=document.createElement('div');
		els=me._ht_video_pause_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQljLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1MywyMy4xNDYNCgkJCWMxLjgzMywxLjgzMSw0LjM1'+
			'MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwDQoJCQljMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMA0KCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwaDBDNS44OTQsMTguNzk1LDcuMDIyLDIxLjMxNCw4Ljg1MywyMy4xNDZMOC44NTMsMjMuMTQ2eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik'+
			'0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NQ0KCQkJCWMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzEyLjk2OSwyMS42OTMsMTIuNDMzLDIxLjE1OCwxMi40MzMsMjAuNDk4TDEyLjQzMywyMC40OTh6Ii8+DQoJCQk8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NQ0KCQkJCWMwLDAuNjYtMC41MzYsMS4xOTUt'+
			'MS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2DQoJCQljMS'+
			'44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMA0KCQkJYzAtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDANCgkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4NCgkJPGc+'+
			'DQoJCQk8cGF0aCBkPSJNMTIuNDMzLDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NjEsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUNCgkJCQljMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPg0KCQkJPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUNCgkJCQljMCwwLj'+
			'Y2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxNy43MSwyMS42OTMsMTcuMTc1LDIxLjE1OCwxNy4xNzUsMjAuNDk4TDE3LjE3NSwyMC40OTh6Ii8+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_video_pause_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_pause_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMu'+
			'NSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0Ng0KCQkJYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMj'+
			'IsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4NCgkJCTxwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAs'+
			'MS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LD'+
			'EyLjUsMTIuNWwwLDANCgkJCWMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0Ng0KCQkJYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDANCgkJCWMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3'+
			'LDIuOTZsMCwwDQoJCQlDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4NCgkJCT'+
			'xwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1DQoJCQkJYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_pause_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_pause_url;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_url.onclick=function (e) {
			player.pauseSound("popup_video_url");
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
		}
		me._ht_video_pause_url.onmouseover=function (e) {
			me._ht_video_pause_url__img.style.visibility='hidden';
			me._ht_video_pause_url__imgo.style.visibility='inherit';
		}
		me._ht_video_pause_url.onmouseout=function (e) {
			me._ht_video_pause_url__img.style.visibility='inherit';
			me._ht_video_pause_url__imgo.style.visibility='hidden';
		}
		me._ht_video_pause_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_pause_url);
		me.divSkin.appendChild(me._video_popup_controls_url);
		el=me._video_popup_vimeo=document.createElement('div');
		el.ggId="video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_vimeo') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_vimeo.style[domTransition]='';
				if (me._video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._video_popup_vimeo.style.visibility=(Number(me._video_popup_vimeo.style.opacity)>0||!me._video_popup_vimeo.style.opacity)?'inherit':'hidden';
					me._video_popup_vimeo.ggVisible=true;
				}
				else {
					me._video_popup_vimeo.style.visibility="hidden";
					me._video_popup_vimeo.ggVisible=false;
				}
			}
		}
		me._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_vimeo=document.createElement('div');
		els=me._loading_video_vimeo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAi'+
			'IGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUo'+
			'MjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdX'+
			'I9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40'+
			'IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_vimeo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_vimeo;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_vimeo.appendChild(me._loading_video_vimeo);
		el=me._popup_video_vimeo=document.createElement('div');
		me._popup_video_vimeo.seekbars = [];
		me._popup_video_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_vimeo.hasChildNodes()) {
				me._popup_video_vimeo.removeChild(me._popup_video_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_vimeo.ggVideoNotLoaded = false;
			me._popup_video_vimeo__vid=document.createElement('iframe');
			me._popup_video_vimeo__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._popup_video_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_vimeo__vid.setAttribute('width', '100%');
			me._popup_video_vimeo__vid.setAttribute('height', '100%');
			me._popup_video_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_vimeo.appendChild(me._popup_video_vimeo__vid);
			me._popup_video_vimeo.ggVideoSource = media;
		}
		el.ggId="popup_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_vimeo') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_vimeo.style[domTransition]='';
				if (me._popup_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._popup_video_vimeo.style.visibility=(Number(me._popup_video_vimeo.style.opacity)>0||!me._popup_video_vimeo.style.opacity)?'inherit':'hidden';
					if (me._popup_video_vimeo.ggVideoNotLoaded) {
						me._popup_video_vimeo.ggInitMedia(me._popup_video_vimeo.ggVideoSource);
					}
					me._popup_video_vimeo.ggVisible=true;
				}
				else {
					me._popup_video_vimeo.style.visibility="hidden";
					me._popup_video_vimeo.ggInitMedia('');
					me._popup_video_vimeo.ggVisible=false;
				}
			}
		}
		me._popup_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_vimeo.appendChild(me._popup_video_vimeo);
		me.divSkin.appendChild(me._video_popup_vimeo);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_youtube') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style[domTransition]='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm'+
			'90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAi'+
			'IGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvY2lyY2xlPgogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUo'+
			'MjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdX'+
			'I9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40'+
			'IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9jaXJjbGU+CiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_youtube;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_video_popup_youtube') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style[domTransition]='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me.__360image_gyro=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=4000;
		el.ggId="360image_gyro";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 116px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_gyro.ggIsActive=function() {
			return (me.__360image_gyro.ggTimestamp + me.__360image_gyro.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__360image_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true) && 
				(player.getVariableValue('opt_gyro') == true) && 
				(player.getVariableValue('vis_360image_once') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__360image_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__360image_gyro.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateVisible == 0) {
					me.__360image_gyro.style.visibility=(Number(me.__360image_gyro.style.opacity)>0||!me.__360image_gyro.style.opacity)?'inherit':'hidden';
					me.__360image_gyro.ggVisible=true;
				}
				else {
					me.__360image_gyro.style.visibility="hidden";
					me.__360image_gyro.ggVisible=false;
				}
			}
		}
		me.__360image_gyro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.__360image_gyro.ggIsActive() == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__360image_gyro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__360image_gyro.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateAlpha == 0) {
					me.__360image_gyro.style.visibility="hidden";
					me.__360image_gyro.style.opacity=0;
				}
				else {
					me.__360image_gyro.style.visibility=me.__360image_gyro.ggVisible?'inherit':'hidden';
					me.__360image_gyro.style.opacity=1;
				}
			}
		}
		me.__360image_gyro.ggDeactivate=function () {
			player.setVariableValue('vis_360image_once', false);
		}
		me.__360image_gyro.ggCurrentLogicStateVisible = -1;
		me.__360image_gyro.ggCurrentLogicStateAlpha = -1;
		me.__360image_gyro.ggUpdateConditionTimer=function () {
			me.__360image_gyro.logicBlock_alpha();
		}
		me.__360image_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me.__360image_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=400;
		el.ggId="360image_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_timer.ggIsActive=function() {
			return (me.__360image_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me.__360image_timer.ggTimestamp) / me.__360image_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_timer.ggActivate=function () {
			player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') + Number("1"));
			player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') % Number("5"));
		}
		me.__360image_timer.ggUpdatePosition=function (useTransition) {
		}
		me.__360image_gyro.appendChild(me.__360image_timer);
		el=me.__360image_background=document.createElement('div');
		el.ggId="360image_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360image_gyro.appendChild(me.__360image_background);
		el=me.__360image_text=document.createElement('div');
		els=me.__360image_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="360image_text";
		el.ggDx=0;
		el.ggDy=32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 89px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Gyroscope";
		el.appendChild(els);
		me.__360image_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360image_gyro.appendChild(me.__360image_text);
		el=me.__360image=document.createElement('div');
		el.ggId="360image";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 9px;';
		hs+='border-radius : 9px;';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('pos_360image') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('pos_360image') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(player.getVariableValue('pos_360image') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(player.getVariableValue('pos_360image') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(player.getVariableValue('pos_360image') == 4)
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__360image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__360image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__360image.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 2) {
					this.ggDx = -32;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 3) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 4) {
					this.ggDx = 32;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else {
					me.__360image.ggDx=0;
					me.__360image.ggDy=-8;
					me.__360image.ggUpdatePosition(true);
				}
			}
		}
		me.__360image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('pos_360image') == 2)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getVariableValue('pos_360image') == 3)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getVariableValue('pos_360image') == 4)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(player.getVariableValue('pos_360image') == 5)
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__360image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__360image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__360image.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStateScaling == 0) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 1) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 2) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 3) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
			}
		}
		me.__360image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._phone1=document.createElement('div');
		el.ggId="phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone1.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone1);
		el=me._phone2=document.createElement('div');
		el.ggId="phone2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('pos_360image') == 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getVariableValue('pos_360image') == 2)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getVariableValue('pos_360image') == 3)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._phone2.ggCurrentLogicStateScaling == 0) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 1) {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 2) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
			}
		}
		me._phone2.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone2);
		el=me._phone3=document.createElement('div');
		el.ggId="phone3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('pos_360image') == 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(player.getVariableValue('pos_360image') == 0)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(player.getVariableValue('pos_360image') == 0)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone3.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._phone3.ggCurrentLogicStateScaling == 0) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 1) {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 2) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
			}
		}
		me._phone3.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone3);
		me.__360image_gyro.appendChild(me.__360image);
		me.divSkin.appendChild(me.__360image_gyro);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close.style[domTransition]='';
				if (me._close.ggCurrentLogicStateVisible == 0) {
					me._close.style.visibility=(Number(me._close.style.opacity)>0||!me._close.style.opacity)?'inherit':'hidden';
					me._close.ggVisible=true;
				}
				else {
					me._close.style.visibility="hidden";
					me._close.ggVisible=false;
				}
			}
		}
		me._close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_website', false);
		}
		me._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		me._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._cargando=document.createElement('div');
		el.ggId="cargando";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 320px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cargando.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cargando.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_loader') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cargando.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cargando.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cargando.style[domTransition]='';
				if (me._cargando.ggCurrentLogicStateVisible == 0) {
					me._cargando.style.visibility=(Number(me._cargando.style.opacity)>0||!me._cargando.style.opacity)?'inherit':'hidden';
					me._cargando.ggVisible=true;
				}
				else {
					me._cargando.style.visibility="hidden";
					me._cargando.ggVisible=false;
				}
			}
		}
		me._cargando.onclick=function (e) {
			me._cargando.style[domTransition]='none';
			me._cargando.style.visibility='hidden';
			me._cargando.ggVisible=false;
		}
		me._cargando.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._cargando.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="cargando... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._cargando.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._cargando.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._cargando);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 567px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1136px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getViewerSize().width < 1024)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10.style[domTransition]='';
				if (me._image_10.ggCurrentLogicStateVisible == 0) {
					me._image_10.style.visibility="hidden";
					me._image_10.ggVisible=false;
				}
				else {
					me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
					me._image_10.ggVisible=true;
				}
			}
		}
		me._image_10.onclick=function (e) {
			me._image_10.style[domTransition]='none';
			me._image_10.style.visibility='hidden';
			me._image_10.ggVisible=false;
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_10);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 1269px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 814px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getViewerSize().width < 1024)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_1.style[domTransition]='';
				if (me._image_1.ggCurrentLogicStateVisible == 0) {
					me._image_1.style.visibility=(Number(me._image_1.style.opacity)>0||!me._image_1.style.opacity)?'inherit':'hidden';
					me._image_1.ggVisible=true;
				}
				else {
					me._image_1.style.visibility="hidden";
					me._image_1.ggVisible=false;
				}
			}
		}
		me._image_1.onclick=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='hidden';
			me._image_1.ggVisible=false;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 134px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 235px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.75;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me._container_1.appendChild(me._map_1);
		me.divSkin.appendChild(me._container_1);
		el=me._barrasuperiormobile=document.createElement('div');
		el.ggId="BarraSuperiorMobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : hidden;';
		hs+='width : 104%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._barrasuperiormobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._barrasuperiormobile.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().height < 500)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._barrasuperiormobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._barrasuperiormobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._barrasuperiormobile.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._barrasuperiormobile.ggCurrentLogicStateScaling == 0) {
					me._barrasuperiormobile.ggParameter.sx = 1;
					me._barrasuperiormobile.ggParameter.sy = 1;
					me._barrasuperiormobile.style[domTransform]=parameterToTransform(me._barrasuperiormobile.ggParameter);
				}
				else {
					me._barrasuperiormobile.ggParameter.sx = 1;
					me._barrasuperiormobile.ggParameter.sy = 1;
					me._barrasuperiormobile.style[domTransform]=parameterToTransform(me._barrasuperiormobile.ggParameter);
				}
			}
		}
		me._barrasuperiormobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getViewerSize().width < 1024)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._barrasuperiormobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._barrasuperiormobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._barrasuperiormobile.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._barrasuperiormobile.ggCurrentLogicStateVisible == 0) {
					me._barrasuperiormobile.style.visibility=(Number(me._barrasuperiormobile.style.opacity)>0||!me._barrasuperiormobile.style.opacity)?'inherit':'hidden';
					me._barrasuperiormobile.ggVisible=true;
				}
				else {
					me._barrasuperiormobile.style.visibility="hidden";
					me._barrasuperiormobile.ggVisible=false;
				}
			}
		}
		me._barrasuperiormobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getViewerSize().height < 700) && 
				(player.getViewerSize().width < 500) && 
				(player.getViewerSize().width < 350)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_20.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_20.ggCurrentLogicStateScaling == 0) {
					me._image_20.ggParameter.sx = 1;
					me._image_20.ggParameter.sy = 3;
					me._image_20.style[domTransform]=parameterToTransform(me._image_20.ggParameter);
				}
				else {
					me._image_20.ggParameter.sx = 1;
					me._image_20.ggParameter.sy = 1;
					me._image_20.style[domTransform]=parameterToTransform(me._image_20.ggParameter);
				}
			}
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._barrasuperiormobile.appendChild(me._image_20);
		el=me._image_30=document.createElement('div');
		els=me._image_30__img=document.createElement('img');
		els.className='ggskin ggskin_image_30';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 56px;';
		hs+='left : -5%;';
		hs+='position : absolute;';
		hs+='top : 11%;';
		hs+='visibility : inherit;';
		hs+='width : 236px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_30.ggUpdatePosition=function (useTransition) {
		}
		me._barrasuperiormobile.appendChild(me._image_30);
		el=me._image_40=document.createElement('div');
		els=me._image_40__img=document.createElement('img');
		els.className='ggskin ggskin_image_40';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 106px;';
		hs+='position : absolute;';
		hs+='right : -2.59%;';
		hs+='top : -11%;';
		hs+='visibility : inherit;';
		hs+='width : 291px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_40.ggUpdatePosition=function (useTransition) {
		}
		me._barrasuperiormobile.appendChild(me._image_40);
		me.divSkin.appendChild(me._barrasuperiormobile);
		el=me._barrasuperiorpc=document.createElement('div');
		el.ggId="BarraSuperiorPc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 12%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 104%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._barrasuperiorpc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._barrasuperiorpc.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(player.getViewerSize().height > 700)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(player.getViewerSize().height < 700)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._barrasuperiorpc.ggCurrentLogicStateSize != newLogicStateSize) {
				me._barrasuperiorpc.ggCurrentLogicStateSize = newLogicStateSize;
				me._barrasuperiorpc.style[domTransition]='width 0s, height 0s';
				if (me._barrasuperiorpc.ggCurrentLogicStateSize == 0) {
					me._barrasuperiorpc.style.width='104%';
					me._barrasuperiorpc.style.height='12%';
					skin.updateSize(me._barrasuperiorpc);
				}
				else if (me._barrasuperiorpc.ggCurrentLogicStateSize == 1) {
					me._barrasuperiorpc.style.width='104%';
					me._barrasuperiorpc.style.height='18%';
					skin.updateSize(me._barrasuperiorpc);
				}
				else {
					me._barrasuperiorpc.style.width='104%';
					me._barrasuperiorpc.style.height='12%';
					skin.updateSize(me._barrasuperiorpc);
				}
			}
		}
		me._barrasuperiorpc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getViewerSize().width < 1024)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._barrasuperiorpc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._barrasuperiorpc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._barrasuperiorpc.style[domTransition]='width 0s, height 0s';
				if (me._barrasuperiorpc.ggCurrentLogicStateVisible == 0) {
					me._barrasuperiorpc.style.visibility="hidden";
					me._barrasuperiorpc.ggVisible=false;
				}
				else {
					me._barrasuperiorpc.style.visibility=(Number(me._barrasuperiorpc.style.opacity)>0||!me._barrasuperiorpc.style.opacity)?'inherit':'hidden';
					me._barrasuperiorpc.ggVisible=true;
				}
			}
		}
		me._barrasuperiorpc.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._barrasuperiorpc.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 56px;';
		hs+='left : 2%;';
		hs+='position : absolute;';
		hs+='top : 15.95%;';
		hs+='visibility : inherit;';
		hs+='width : 236px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._barrasuperiorpc.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 106px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : -7%;';
		hs+='visibility : inherit;';
		hs+='width : 291px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._barrasuperiorpc.appendChild(me._image_4);
		me.divSkin.appendChild(me._barrasuperiorpc);
		el=me._ht_video_url_image1=document.createElement('div');
		els=me._ht_video_url_image1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi43LDBIMS4zQzAuNiwwLDAsMC42LDAsMS4zdjIxLjRDMCwyMy40LDAuNiwyNCwxLjMsMjRoMTEuNXYtOS4zSDkuN3YtMy42aDMuMVY4LjRjMC0zLjEsMS45LTQuOCw0LjctNC44DQoJYzEuMywwLDIuNSwwLjEsMi44LDAuMVY3bC0xLjksMGMtMS41LDAtMS44LDAuNy0xLjgsMS44djIuM2gzLjZsLTAuNSwzLjZoLTMuMVYyNGg2LjFjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjEuMw0KCUMyNCwwLjYsMjMuNCwwLDIyLjcsMHoiLz4NCjwv'+
			'c3ZnPg0K';
		me._ht_video_url_image1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_url_image1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi43LDBIMS4zQzAuNiwwLDAsMC42LDAsMS4zdjIxLjRDMCwyMy40LDAuNiwyNCwxLjMsMjRoMTEuNXYtOS4zSDkuN3YtMy42aDMuMVY4LjRjMC0zLjEsMS45LTQuOCw0LjctNC44DQoJYzEuMywwLDIuNSwwLjEsMi44LDAuMVY3bC0xLjksMGMtMS41LDAtMS44LDAuNy0xLjgsMS44djIuM2gzLjZsLTAuNSwzLjZoLTMuMVYyNGg2LjFjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjEuMw0KCUMyNCwwLjYsMjMuNCwwLDIyLjcsMHoiLz4NCjwv'+
			'c3ZnPg0K';
		me._ht_video_url_image1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_url_image1;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_url_image";
		el.ggDx=-200;
		el.ggDy=-300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_image1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_video_url_image1.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/ceramicasanlorenzocolombiaoficial","");
		}
		me._ht_video_url_image1.onmouseover=function (e) {
			me._ht_video_url_image1__img.style.visibility='hidden';
			me._ht_video_url_image1__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_image1']=true;
			me._tt_ht_video_url0.logicBlock_visible();
		}
		me._ht_video_url_image1.onmouseout=function (e) {
			me._ht_video_url_image1__img.style.visibility='inherit';
			me._ht_video_url_image1__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_image1']=false;
			me._tt_ht_video_url0.logicBlock_visible();
		}
		me._ht_video_url_image1.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url_image1']=false;
			me._tt_ht_video_url0.logicBlock_visible();
		}
		me._ht_video_url_image1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_ht_video_url0=document.createElement('div');
		els=me._tt_ht_video_url0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_url0.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_url0.ggUpdateText();
		el.appendChild(els);
		me._tt_ht_video_url0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_ht_video_url0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_url0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_url0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_url0.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_url0.style.top='-50px';
					me._tt_ht_video_url0.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_url0.ggDx=0;
					me._tt_ht_video_url0.style.top='38px';
					me._tt_ht_video_url0.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_url0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_url_image1'] == true) && 
				(player.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url0.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url0.style.visibility=(Number(me._tt_ht_video_url0.style.opacity)>0||!me._tt_ht_video_url0.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url0.ggVisible=true;
				}
				else {
					me._tt_ht_video_url0.style.visibility="hidden";
					me._tt_ht_video_url0.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_url0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_url_image1.appendChild(me._tt_ht_video_url0);
		me.divSkin.appendChild(me._ht_video_url_image1);
		el=me._ht_video_url_image0=document.createElement('div');
		els=me._ht_video_url_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAzMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMzA7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwwSDRDMS44LDAsMCwxLjgsMCw0djE2YzAsMi4yLDEuOCw0LDQsNGgxNmMyLjIsMCw0LTEuOCw0LTRWNEMyNCwxLjgsMjIuMiwwLDIwLDB6IE0yMiwyMGMwLDEuMS0wLjksMi0yLDINCglINGMtMS4xLDAtMi0wLjktMi0yVjRjMC0xLjEsMC45LTIsMi0yaDE2YzEuMSwwLDIsMC45LDIsMlYyMHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMiw2Yy0zLjMsMC02LDIuNy02LDZzMi43LDYsNiw2czYtMi43LDYtNlMxNS4zLDYsMTIs'+
			'NnogTTEyLDE2Yy0yLjIsMC00LTEuOC00LTRzMS44LTQsNC00czQsMS44LDQsNA0KCVMxNC4yLDE2LDEyLDE2eiIvPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTguNSIgY3k9IjUuNSIgcj0iMS41Ii8+DQo8L3N2Zz4NCg==';
		me._ht_video_url_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_url_image0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAzMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMzA7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwwSDRDMS44LDAsMCwxLjgsMCw0djE2YzAsMi4yLDEuOCw0LDQsNGgxNmMyLjIsMCw0LTEuOCw0LTRWNEMyNCwxLjgsMjIuMiwwLDIwLDB6IE0yMiwyMGMwLDEuMS0wLjksMi0yLDINCglINGMtMS4xLDAtMi0wLjktMi0yVjRjMC0xLjEsMC45LTIsMi0yaDE2YzEuMSwwLDIsMC45LDIsMlYyMHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMiw2Yy0zLjMsMC02LDIuNy02LDZzMi43LDYsNiw2czYtMi43LDYtNlMxNS4zLDYsMTIs'+
			'NnogTTEyLDE2Yy0yLjIsMC00LTEuOC00LTRzMS44LTQsNC00czQsMS44LDQsNA0KCVMxNC4yLDE2LDEyLDE2eiIvPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTguNSIgY3k9IjUuNSIgcj0iMS41Ii8+DQo8L3N2Zz4NCg==';
		me._ht_video_url_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_url_image0;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_url_image";
		el.ggDx=-200;
		el.ggDy=-300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_image0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_video_url_image0.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/ceramicasanlorenzocol\/?hl=es","");
		}
		me._ht_video_url_image0.onmouseover=function (e) {
			me._ht_video_url_image0__img.style.visibility='hidden';
			me._ht_video_url_image0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_image0']=true;
			me._tt_ht_video_url.logicBlock_visible();
		}
		me._ht_video_url_image0.onmouseout=function (e) {
			me._ht_video_url_image0__img.style.visibility='inherit';
			me._ht_video_url_image0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_image0']=false;
			me._tt_ht_video_url.logicBlock_visible();
		}
		me._ht_video_url_image0.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url_image0']=false;
			me._tt_ht_video_url.logicBlock_visible();
		}
		me._ht_video_url_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tt_ht_video_url=document.createElement('div');
		els=me._tt_ht_video_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_url.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_url.ggUpdateText();
		el.appendChild(els);
		me._tt_ht_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_ht_video_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_url.style.top='-50px';
					me._tt_ht_video_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_url.ggDx=0;
					me._tt_ht_video_url.style.top='38px';
					me._tt_ht_video_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_url_image0'] == true) && 
				(player.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url.style.visibility=(Number(me._tt_ht_video_url.style.opacity)>0||!me._tt_ht_video_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url.ggVisible=true;
				}
				else {
					me._tt_ht_video_url.style.visibility="hidden";
					me._tt_ht_video_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_url_image0.appendChild(me._tt_ht_video_url);
		me.divSkin.appendChild(me._ht_video_url_image0);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi43LDBIMS4zQzAuNiwwLDAsMC42LDAsMS4zdjIxLjRDMCwyMy40LDAuNiwyNCwxLjMsMjRoMTEuNXYtOS4zSDkuN3YtMy42aDMuMVY4LjRjMC0zLjEsMS45LTQuOCw0LjctNC44DQoJYzEuMywwLDIuNSwwLjEsMi44LDAuMVY3bC0xLjksMGMtMS41LDAtMS44LDAuNy0xLjgsMS44djIuM2gzLjZsLTAuNSwzLjZoLTMuMVYyNGg2LjFjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjEuMw0KCUMyNCwwLjYsMjMuNCwwLDIyLjcsMHoiLz4NCjwv'+
			'c3ZnPg0K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/ceramicasanlorenzocolombiaoficial\/","_blank");
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAzMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMzA7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCwwSDRDMS44LDAsMCwxLjgsMCw0djE2YzAsMi4yLDEuOCw0LDQsNGgxNmMyLjIsMCw0LTEuOCw0LTRWNEMyNCwxLjgsMjIuMiwwLDIwLDB6IE0yMiwyMGMwLDEuMS0wLjksMi0yLDINCglINGMtMS4xLDAtMi0wLjktMi0yVjRjMC0xLjEsMC45LTIsMi0yaDE2YzEuMSwwLDIsMC45LDIsMlYyMHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMiw2Yy0zLjMsMC02LDIuNy02LDZzMi43LDYsNiw2czYtMi43LDYtNlMxNS4zLDYsMTIs'+
			'NnogTTEyLDE2Yy0yLjIsMC00LTEuOC00LTRzMS44LTQsNC00czQsMS44LDQsNA0KCVMxNC4yLDE2LDEyLDE2eiIvPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTguNSIgY3k9IjUuNSIgcj0iMS41Ii8+DQo8L3N2Zz4NCg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/ceramicasanlorenzocol\/?hl=es","");
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_2);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._popup_video_url.ggVideoSource = '';
		me._popup_video_url.ggVideoNotLoaded = true;
		me._popup_video_vimeo.ggVideoSource = '';
		me._popup_video_vimeo.ggVideoNotLoaded = true;
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'Plano';
		me._map_1.ggLastNodeId=null;
		me._map_1.callChildLogicBlocksHotspot_map_pin_changenodeid = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_active && me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._map_1.ggMarkerInstances[i]._map_pin_normal && me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_active && me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._map_1.ggMarkerInstances[i]._map_pin_normal && me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',360);
				radar.radarElement.setAttributeNS(null,'height',360);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 360 360');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 180 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 180 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 180 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 180 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 180;
				arcY1 += 180;
				arcX2 += 180;
				arcY2 += 180;
				var radarPathString = 'M180,180 L' + arcX1 + ',' + arcY1 + ' A 180 180 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 180;
				var radarYPos = activeMarker.radarYPos - 180;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500;
			var level = 1;
			while (mapWidth > levelLimit && mapHeight > levelLimit) {
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; bottom: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids = player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 41;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		me._map_1.callChildLogicBlocksHotspot_map_pin_changenodeid();
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map_1.callChildLogicBlocksHotspot_map_pin_active();
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (
				(
					(player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
			if (
				(
					(player.getVariableValue('opt_zoom') == true)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("2"));
			}
			if (
				(
					(player.getVariableValue('opt_autorotate') == true)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_info') == true)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_thumbnail') == true) && 
					(player.getIsTour() == true)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_projection') == true)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_gyro') == true) && 
					(player.getIsMobile() == true)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_fullscreen') == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_zoom') == true)
				)
			) {
				player.setVariableValue('pos_autorotate', player.getVariableValue('pos_autorotate') + Number("2"));
			}
			if (
				(
					(player.getVariableValue('opt_zoom') == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_autorotate') == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_info') == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_thumbnail') == true) && 
					(player.getIsTour() == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_projection') == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					(player.getVariableValue('opt_gyro') == true) && 
					(player.getIsMobile() == true) && 
					(player.getOS() != 4)
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			me._thumbnail_cloner_mobile.ggUpdate();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('imagesready', function() {
			me._thumbnail_menu_mobile.ggUpdatePosition();
			me._cargando.style[domTransition]='none';
			me._cargando.style.visibility='hidden';
			me._cargando.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					(player.getVariableValue('vis_loader') == true)
				)
			) {
				me._cargando.style[domTransition]='none';
				me._cargando.style.visibility=(Number(me._cargando.style.opacity)>0||!me._cargando.style.opacity)?'inherit':'hidden';
				me._cargando.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenodeid = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenodeid = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image0 && hotspotTemplates['ht_url'][i]._ht_url_image0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image0 && hotspotTemplates['ht_url'][i]._ht_url_image0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image0 && hotspotTemplates['ht_url'][i]._ht_url_image0.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenodeid = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenodeid = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenodeid = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_configloaded = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_changenodeid = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1 && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_configloaded = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1 && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1.logicBlock_position) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_mouseover = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1 && hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_changenodeid = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo && hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_changenodeid = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_changenodeid = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_alpha) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_catalogo'][i]._ht_url_image && hotspotTemplates['ht_catalogo'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_catalogo'][i]._catalogo && hotspotTemplates['ht_catalogo'][i]._catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_configloaded = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_url_image && hotspotTemplates['ht_catalogo'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_catalogo'][i]._catalogo && hotspotTemplates['ht_catalogo'][i]._catalogo.logicBlock_position) {
					hotspotTemplates['ht_catalogo'][i]._catalogo.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_mouseover = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._catalogo && hotspotTemplates['ht_catalogo'][i]._catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_timer = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_alpha) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_catalogo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_opt_url = function(){
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				if (hotspotTemplates['ht_catalogo'][i]._ht_url_image && hotspotTemplates['ht_catalogo'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_catalogo'][i]._ht_url_image.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenodeid', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='1';
				me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='0';
				me._show_controller_button.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
			} else {
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='1';
				me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='0';
				me._controller.style.visibility='hidden';
				player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
			}
		}
		if (me.elementMouseOver['controller']) {
			if (
				(
					(player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		}
		if (me.elementMouseDown['alejar']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['acercar']) {
			player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['key_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me.elementMouseDown['key_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['key_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['key_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
			}
		}
		if (me.elementMouseOver['thumbnail_cloner_mobile']) {
			if (
				(
					(player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		}
		me._userdata_title.ggUpdateText();
		me._userdata_description.ggUpdateText();
		me._userdata_author.ggUpdateText();
		me._userdata_datetime.ggUpdateText();
		me._userdata_copyright.ggUpdateText();
		me._info_text_body.ggUpdateText();
		me._info_title.ggUpdateText();
		if (me.__360image_gyro.ggLastIsActive!=me.__360image_gyro.ggIsActive()) {
			me.__360image_gyro.ggLastIsActive=me.__360image_gyro.ggIsActive();
			if (me.__360image_gyro.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_360image_once', false);
			}
		}
		me.__360image_gyro.ggUpdateConditionTimer();
		if (me.__360image_timer.ggLastIsActive!=me.__360image_timer.ggIsActive()) {
			me.__360image_timer.ggLastIsActive=me.__360image_timer.ggIsActive();
			if (me.__360image_timer.ggLastIsActive) {
				player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') + Number("1"));
				player.setVariableValue('pos_360image', player.getVariableValue('pos_360image') % Number("5"));
			} else {
			}
		}
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._map_1.ggUpdateConditionTimer();
		me._tt_ht_video_url0.ggUpdateText();
		me._tt_ht_video_url.ggUpdateText();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:4,sy:4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 103px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.style.opacity=0;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAgMTI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTI1OyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDcuMSw4OC42YzEuNiwxLjYsNC4xLDEuNiw1LjgsMGwwLDBMODEuNCw2MGMxLjYtMS42LDEuNi00LjEsMC01LjhjLTAuOC0wLjgtMS44LTEuMi0yLjgtMS4ySDYyVjE4LjgNCgljMC0yLjItMS44LTQtNC00SDQxLjhjLTIuMiwwLTQsMS44LTQsNHYzNC4zSDIxLjNjLTIuMiwwLTQsMS44LTQsNGMwLDEuMSww'+
			'LjQsMi4xLDEuMiwyLjhMNDcuMSw4OC42eiBNNDkuOSw4MCBNNTMuOSw1Ny4xIi8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzEuMyw4Mi43YzEyLjQsMi42LDE4LjEsNi45LDE4LjEsOS4xYzAsMy43LTEzLjksMTEuMS0zOS40LDExLjFzLTM5LjQtNy40LTM5LjQtMTEuMWMwLTIuNCw2LjItNi45LDE5LjktOS40Ig0KCS8+DQo8L3N2Zz4NCg==';
		me._hsimage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hsimage;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggDx=1;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._hsimage);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-50px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='22px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == false) && 
				(player.getVariableValue('opt_hotspot_preview') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.elementMouseOver['ht_node'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == true) && 
				(player.getVariableValue('opt_hotspot_preview') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				(me.elementMouseOver['ht_node'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == false) && 
				(player.getVariableValue('opt_hotspot_preview') == true)
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.style.opacity=0;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image0=document.createElement('div');
		els=me._ht_url_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPGcgb3BhY2l0eT0iMC40IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9Ik0yOC4wODQsMTYNCgkJCQljMC02LjQ3Ny01LjI3LTExLjc0Ni0xMS43NDYtMTEuNzQ2QzkuODYxLDQuMjU0LDQuNTkyLDkuNTIyLDQuNTkyLDE2YzAsNi40MzIsNS4yLDExLjY3LDExLjYxNSwxMS43NDENCgkJCQljMC4wMzcsMC4wMDQsMC4wNzIsMC4wMDYsMC4xMDcsMC4wMDZjMC4wMTIsMCwwLjAyMi0wLjAwMiwwLjAzMi0wLjAwMkMyMi44MTksMjcuNzQsMjguMDg0LDIyLjQ3MywyOC4wODQsMTZ6IE01Ljk5MywxNi42ODYNCgkJCQloMy4zMDRjMC4wNTYsMS42NTYsMC4zMDYsMy4yMDksMC43MTYsNC42SDcuNDJDNi42MDgsMTkuOTIsNi4xMDMsMTguMzU5LDUuOTkzLDE2LjY4'+
			'NnogTTI2LjY4NCwxNS4zMTJoLTMuMzUyDQoJCQkJYy0wLjA1NS0xLjY1MS0wLjMwMy0zLjItMC43MTItNC41ODZoMi42NDRDMjYuMDcsMTIuMDg2LDI2LjU3MiwxMy42NDYsMjYuNjg0LDE1LjMxMnogTTIxLjk1NywxNS4zMTJoLTQuOTMydi00LjU4Nmg0LjEzDQoJCQkJQzIxLjYwNywxMi4wOTQsMjEuODk0LDEzLjY1NywyMS45NTcsMTUuMzEyeiBNMTcuMDI1LDkuMzUxVjUuNzE5YzEuNDE4LDAuMzQzLDIuNjg5LDEuNjkyLDMuNTg5LDMuNjMySDE3LjAyNXogTTE1LjY1MSw1LjcwNw0KCQkJCXYzLjY0NGgtMy42MzVDMTIuOTI0LDcuMzkxLDE0LjIxMyw2LjAzMywxNS42NTEsNS43MDd6IE0xNS'+
			'42NTEsMTAuNzI3djQuNTg2aC00Ljk3N2MwLjA2My0xLjY1NiwwLjM0Ny0zLjIxOSwwLjgtNC41ODZIMTUuNjUxeg0KCQkJCSBNOS4yOTcsMTUuMzEySDUuOTkzYzAuMTA4LTEuNjY2LDAuNjE0LTMuMjI2LDEuNDItNC41ODZoMi41OThDOS42MDIsMTIuMTEzLDkuMzUzLDEzLjY2MSw5LjI5NywxNS4zMTJ6IE0xMC42NzQsMTYuNjg2aDQuOTc3DQoJCQkJdjQuNmgtNC4xNzRDMTEuMDIyLDE5LjkxNCwxMC43MzcsMTguMzQ4LDEwLjY3NCwxNi42ODZ6IE0xNS42NTEsMjIuNjZ2My42MzNjLTEuNDM1LTAuMzI0LTIuNzIyLTEuNjc4LTMuNjMtMy42MzNIMTUuNjUxeg0KCQkJCSBNMTcuMDI1LDI2LjI4'+
			'MVYyMi42NmgzLjU4M0MxOS43MTEsMjQuNTk0LDE4LjQ0LDI1LjkzOSwxNy4wMjUsMjYuMjgxeiBNMTcuMDI1LDIxLjI4NXYtNC42aDQuOTMyDQoJCQkJYy0wLjA2MywxLjY2Mi0wLjM1LDMuMjI5LTAuODA1LDQuNkgxNy4wMjV6IE0yMy4zMzIsMTYuNjg2aDMuMzUyYy0wLjExMSwxLjY3NC0wLjYxNywzLjIzNC0xLjQyOCw0LjZoLTIuNjM5DQoJCQkJQzIzLjAyNywxOS44OTUsMjMuMjc3LDE4LjM0MiwyMy4zMzIsMTYuNjg2eiBNMjQuMjg5LDkuMzUxaC0yLjE0NWMtMC40NDctMS4xMDItMS4wMDItMi4wNjQtMS42NDUtMi44NDgNCgkJCQlDMjEuOTczLDcuMTUyLDIzLjI3LDguMTMyLDI0LjI4OS'+
			'w5LjM1MXogTTEyLjEwMyw2LjUzOGMtMC42MywwLjc3Ni0xLjE3NywxLjcyNy0xLjYxNiwyLjgxM0g4LjM4NQ0KCQkJCUM5LjM5MSw4LjE1MiwxMC42NTksNy4xODYsMTIuMTAzLDYuNTM4eiBNOC4zOTcsMjIuNjZoMi4wOTRjMC40MzgsMS4wODIsMC45ODEsMi4wMjcsMS42MDksMi44MDENCgkJCQlDMTAuNjYyLDI0LjgxNCw5LjM5OCwyMy44NTQsOC4zOTcsMjIuNjZ6IE0yMC41MDIsMjUuNDk0YzAuNjM5LTAuNzc5LDEuMTkyLTEuNzM4LDEuNjM4LTIuODM0aDIuMTQNCgkJCQlDMjMuMjYsMjMuODczLDIxLjk3LDI0Ljg1LDIwLjUwMiwyNS40OTR6Ii8+DQoJCTwvZz4NCgkJPHBhdGggZmlsbD0i'+
			'I0ZGRkZGRiIgZD0iTTE2LjE5NywyNy44NEM5Ljc0NywyNy43Nyw0LjQ5MiwyMi40NTgsNC40OTIsMTZjMC02LjUzMiw1LjMxNC0xMS44NDYsMTEuODQ2LTExLjg0Ng0KCQkJYzYuNTMyLDAsMTEuODQ2LDUuMzE0LDExLjg0NiwxMS44NDZjMCw2LjUyNy01LjMxLDExLjg0LTExLjgzNywxMS44NDRsLTAuMDMyLDAuMDAyQzE2LjI3NiwyNy44NDYsMTYuMjM3LDI3Ljg0NCwxNi4xOTcsMjcuODR6DQoJCQkgTTEyLjE3OCwyMi43NmMwLjg5NCwxLjg1NywyLjA4MywzLjA1OSwzLjM3MywzLjQwNVYyMi43NkgxMi4xNzh6IE0xNy4xMjUsMjYuMTUxYzEuMjcxLTAuMzYyLDIuNDQ0LTEuNTU5LDMuMzI1LT'+
			'MuMzkyaC0zLjMyNQ0KCQkJVjI2LjE1MXogTTIyLjIwNywyMi43NmMtMC4zODUsMC45MzUtMC44NDYsMS43NjMtMS4zNzEsMi40N2MxLjIxOS0wLjU5NywyLjMyNS0xLjQ0MiwzLjIyNi0yLjQ3SDIyLjIwN3ogTTguNjE0LDIyLjc2DQoJCQljMC44NzgsMS4wMDIsMS45NTgsMS44MzUsMy4xNTEsMi40MzJjLTAuNTE1LTAuNjk5LTAuOTY1LTEuNTE1LTEuMzQyLTIuNDMySDguNjE0eiBNNi4xLDE2Ljc4NQ0KCQkJYzAuMTIxLDEuNTg2LDAuNTkzLDMuMDgyLDEuNDA2LDQuNDQ5bDIuMzc1LTAuMDQ3QzkuNDg4LDE5LjgxNiw5LjI2LDE4LjMzNyw5LjIsMTYuNzg1SDYuMXogTTI1LjI1NiwyMS4xODYN'+
			'CgkJCWMwLjcyOC0xLjMyLDEuMTk5LTIuODE1LDEuMzItNC40aC0zLjE0N2MtMC4wNTksMS41NTEtMC4yODYsMy4wMjktMC42NzksNC40SDI1LjI1NnogTTIxLjA4LDIxLjE4Ng0KCQkJYzAuNDM4LTEuMzQ2LDAuNzA1LTIuODYzLDAuNzcyLTQuNGgtNC43Mjh2NC40SDIxLjA4eiBNMTUuNTUxLDIxLjE4NnYtNC40aC00Ljc3M2MwLjA2NywxLjUzNywwLjMzMywzLjA1NSwwLjc3MSw0LjRIMTUuNTUxeg0KCQkJIE0yNi41NzYsMTUuMjEyYy0wLjEyMS0xLjU2My0wLjYwNC0zLjA5NS0xLjM5OC00LjQzNWwtMi40MjUsMC4wNDdjMC4zOSwxLjM2MywwLjYxNywyLjgzOCwwLjY3Niw0LjM4OEgyNi41Nz'+
			'Z6IE0yMS44NTMsMTUuMjEyDQoJCQljLTAuMDY3LTEuNTI5LTAuMzMzLTMuMDQyLTAuNzctNC4zODZoLTMuOTU4djQuMzg2SDIxLjg1M3ogTTE1LjU1MSwxNS4yMTJ2LTQuMzg2aC00LjAwNWMtMC40MzYsMS4zNC0wLjcwMSwyLjg1My0wLjc2OCw0LjM4Ng0KCQkJSDE1LjU1MXogTTkuMiwxNS4yMTJjMC4wNi0xLjU0NywwLjI4Ny0zLjAyMSwwLjY3Ny00LjM4Nkg3LjQ3Yy0wLjc4MSwxLjMzNS0xLjI1MywyLjg0OC0xLjM3LDQuMzg2SDkuMnogTTI0LjA3Miw5LjI1MQ0KCQkJYy0wLjg5OS0xLjAyOS0yLjAwOS0xLjg4LTMuMjM3LTIuNDgyYzAuNTI3LDAuNzA5LDAuOTksMS41NDIsMS4zNzcsMi40'+
			'ODJIMjQuMDcyeiBNMjAuNDU2LDkuMjUxDQoJCQljLTAuODgyLTEuODM4LTIuMDU4LTMuMDM5LTMuMzMxLTMuNDAydjMuNDAySDIwLjQ1NnogTTE1LjU1MSw5LjI1MVY1LjgzNWMtMS4yOTIsMC4zNDgtMi40ODMsMS41NTMtMy4zNzcsMy40MTZIMTUuNTUxeg0KCQkJIE0xMC40MTksOS4yNTFjMC4zNzgtMC45MjEsMC44MzEtMS43NDIsMS4zNDktMi40NDRjLTEuMTk3LDAuNTk3LTIuMjgxLDEuNDM0LTMuMTY2LDIuNDQ0SDEwLjQxOXoiLz4NCgkJPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTTE2LjMzOCw0LjI1NGM2LjQ3NywwLDExLjc0Niw1LjI2OSwxMS43NDYsMTEuNzQ2YzAsNi40NzMtNS4yNj'+
			'UsMTEuNzQxLTExLjczNywxMS43NDUNCgkJCWMtMC4wMSwwLTAuMDIxLDAuMDAyLTAuMDMyLDAuMDAyYy0wLjAzNSwwLTAuMDctMC4wMDItMC4xMDctMC4wMDZDOS43OTIsMjcuNjcsNC41OTIsMjIuNDMyLDQuNTkyLDE2DQoJCQlDNC41OTIsOS41MjIsOS44NjEsNC4yNTQsMTYuMzM4LDQuMjU0IE0xMi4wMTYsOS4zNTFoMy42MzVWNS43MDdDMTQuMjEzLDYuMDMzLDEyLjkyNCw3LjM5MSwxMi4wMTYsOS4zNTEgTTE3LjAyNSw5LjM1MWgzLjU4OQ0KCQkJYy0wLjg5OS0xLjk0LTIuMTcxLTMuMjg5LTMuNTg5LTMuNjMyVjkuMzUxIE0yMi4xNDUsOS4zNTFoMi4xNDVjLTEuMDItMS4yMTktMi4zMTYt'+
			'Mi4xOTktMy43ODktMi44NDgNCgkJCUMyMS4xNDMsNy4yODcsMjEuNjk3LDguMjQ5LDIyLjE0NSw5LjM1MSBNOC4zODUsOS4zNTFoMi4xMDFjMC40MzktMS4wODYsMC45ODYtMi4wMzcsMS42MTYtMi44MTMNCgkJCUMxMC42NTksNy4xODYsOS4zOTEsOC4xNTIsOC4zODUsOS4zNTEgTTIzLjMzMiwxNS4zMTJoMy4zNTJjLTAuMTExLTEuNjY2LTAuNjEzLTMuMjI2LTEuNDItNC41ODZIMjIuNjINCgkJCUMyMy4wMjksMTIuMTEzLDIzLjI3NywxMy42NjEsMjMuMzMyLDE1LjMxMiBNMTcuMDI1LDE1LjMxMmg0LjkzMmMtMC4wNjMtMS42NTYtMC4zNS0zLjIxOS0wLjgwMi00LjU4NmgtNC4xM1YxNS4zMT'+
			'INCgkJCSBNMTAuNjc0LDE1LjMxMmg0Ljk3N3YtNC41ODZoLTQuMTc3QzExLjAyMSwxMi4wOTQsMTAuNzM3LDEzLjY1NywxMC42NzQsMTUuMzEyIE01Ljk5MywxNS4zMTJoMy4zMDQNCgkJCWMwLjA1Ni0xLjY1MSwwLjMwNS0zLjIsMC43MTMtNC41ODZINy40MTNDNi42MDcsMTIuMDg2LDYuMTAxLDEzLjY0Niw1Ljk5MywxNS4zMTIgTTIyLjYxNywyMS4yODVoMi42MzkNCgkJCWMwLjgxMS0xLjM2NSwxLjMxNi0yLjkyNiwxLjQyOC00LjZoLTMuMzUyQzIzLjI3NywxOC4zNDIsMjMuMDI3LDE5Ljg5NSwyMi42MTcsMjEuMjg1IE0xNy4wMjUsMjEuMjg1aDQuMTI3DQoJCQljMC40NTUtMS4zNzEsMC43'+
			'NDEtMi45MzgsMC44MDUtNC42aC00LjkzMlYyMS4yODUgTTExLjQ3NywyMS4yODVoNC4xNzR2LTQuNmgtNC45NzdDMTAuNzM3LDE4LjM0OCwxMS4wMjIsMTkuOTE0LDExLjQ3NywyMS4yODUNCgkJCSBNNy40MiwyMS4yODVoMi41OTNjLTAuNDEtMS4zOTEtMC42NjEtMi45NDMtMC43MTYtNC42SDUuOTkzQzYuMTAzLDE4LjM1OSw2LjYwOCwxOS45Miw3LjQyLDIxLjI4NSBNMjAuNTAyLDI1LjQ5NA0KCQkJYzEuNDY4LTAuNjQ1LDIuNzU4LTEuNjIxLDMuNzc3LTIuODM0aC0yLjE0QzIxLjY5NCwyMy43NTYsMjEuMTQxLDI0LjcxNSwyMC41MDIsMjUuNDk0IE0xNy4wMjUsMjYuMjgxDQoJCQljMS40MT'+
			'UtMC4zNDIsMi42ODYtMS42ODgsMy41ODMtMy42MjFoLTMuNTgzVjI2LjI4MSBNMTUuNjUxLDI2LjI5M1YyMi42NmgtMy42M0MxMi45MjksMjQuNjE1LDE0LjIxNiwyNS45NjksMTUuNjUxLDI2LjI5Mw0KCQkJIE0xMi4xLDI1LjQ2MWMtMC42MjctMC43NzMtMS4xNzEtMS43MTktMS42MDktMi44MDFIOC4zOTdDOS4zOTgsMjMuODU0LDEwLjY2MiwyNC44MTQsMTIuMSwyNS40NjEgTTE2LjMzOCw0LjA1NA0KCQkJQzkuNzUxLDQuMDU0LDQuMzkyLDkuNDEzLDQuMzkyLDE2YzAsNi41MTMsNS4yOTksMTEuODcsMTEuODEzLDExLjk0MWMwLjAyNSwwLjAwMywwLjA2NywwLjAwNiwwLjEwOSwwLjAwNg0K'+
			'CQkJYzYuNjE0LTAuMDA2LDExLjk3LTUuMzY0LDExLjk3LTExLjk0N0MyOC4yODQsOS40MTMsMjIuOTI1LDQuMDU0LDE2LjMzOCw0LjA1NEwxNi4zMzgsNC4wNTR6IE0xMi4zMzQsOS4xNTENCgkJCWMwLjg0Mi0xLjY5NCwxLjkzNS0yLjgxLDMuMTE3LTMuMTgzdjMuMTgzSDEyLjMzNEwxMi4zMzQsOS4xNTF6IE0xNy4yMjYsOS4xNTFWNS45ODRjMS4xNjMsMC4zODcsMi4yMzksMS40OTcsMy4wNywzLjE2N0gxNy4yMjYNCgkJCUwxNy4yMjYsOS4xNTF6IE0yMi4yNzgsOS4xNTFjLTAuMzI0LTAuNzc4LTAuNzAxLTEuNDgzLTEuMTI0LTIuMTA0YzEuMDA4LDAuNTQ1LDEuOTI0LDEuMjYsMi42OTQsMi'+
			'4xMDRIMjIuMjc4TDIyLjI3OCw5LjE1MXoNCgkJCSBNOC44MjYsOS4xNTFjMC43NTQtMC44MjQsMS42NDYtMS41MjUsMi42MjItMi4wNjJjLTAuNDEzLDAuNjEyLTAuNzc5LDEuMzAzLTEuMDk2LDIuMDYySDguODI2TDguODI2LDkuMTUxeiBNMjIuODg2LDEwLjkyNw0KCQkJaDIuMjY0YzAuNzM0LDEuMjcyLDEuMTg4LDIuNzEzLDEuMzE4LDQuMTg2aC0yLjk0M0MyMy40NjIsMTMuNjM5LDIzLjI0OCwxMi4yMzIsMjIuODg2LDEwLjkyN0wyMi44ODYsMTAuOTI3eiBNMTcuMjI2LDEwLjkyNw0KCQkJaDMuNzg0YzAuNDExLDEuMjg4LDAuNjY1LDIuNzI4LDAuNzM4LDQuMTg2aC00LjUyMlYxMC45MjdM'+
			'MTcuMjI2LDEwLjkyN3ogTTExLjYxOSwxMC45MjdoMy44MzJ2NC4xODZoLTQuNTY4DQoJCQlDMTAuOTU2LDEzLjY1LDExLjIwOSwxMi4yMSwxMS42MTksMTAuOTI3TDExLjYxOSwxMC45Mjd6IE03LjUyNywxMC45MjdoMi4yMThjLTAuMzYyLDEuMzA4LTAuNTc4LDIuNzEzLTAuNjQxLDQuMTg2SDYuMjA4DQoJCQlDNi4zMzYsMTMuNjQ2LDYuNzg5LDEyLjIwNSw3LjUyNywxMC45MjdMNy41MjcsMTAuOTI3eiBNMjMuNTI0LDE2Ljg4NmgyLjk0M2MtMC4xMywxLjQ5MS0wLjU3NSwyLjkwMy0xLjMyNiw0LjE5OWgtMi4yNTkNCgkJCUMyMy4yNDcsMTkuNzcxLDIzLjQ2MiwxOC4zNjEsMjMuNTI0LDE2Lj'+
			'g4NkwyMy41MjQsMTYuODg2eiBNMTcuMjI2LDE2Ljg4Nmg0LjUyMmMtMC4wNzMsMS40NjYtMC4zMjgsMi45MS0wLjc0MSw0LjE5OWgtMy43ODENCgkJCVYxNi44ODZMMTcuMjI2LDE2Ljg4NnogTTEwLjg4MywxNi44ODZoNC41Njh2NC4xOTloLTMuODI5QzExLjIwOSwxOS43OTYsMTAuOTU2LDE4LjM1MiwxMC44ODMsMTYuODg2TDEwLjg4MywxNi44ODZ6DQoJCQkgTTYuMjA4LDE2Ljg4NmgyLjg5NmMwLjA2MywxLjQ3NiwwLjI3OSwyLjg4NiwwLjY0NCw0LjE5OUg3LjUzNEM2Ljc4MywxOS43ODksNi4zMzcsMTguMzc4LDYuMjA4LDE2Ljg4Nkw2LjIwOCwxNi44ODZ6DQoJCQkgTTIyLjI3MywyMi44'+
			'NmgxLjU2NGMtMC43NzEsMC44NDEtMS42ODQsMS41NTItMi42ODMsMi4wOTJDMjEuNTc2LDI0LjMzMywyMS45NTEsMjMuNjMzLDIyLjI3MywyMi44NkwyMi4yNzMsMjIuODZ6DQoJCQkgTTE3LjIyNiwyMi44NmgzLjA2NGMtMC44MjksMS42NjQtMS45MDMsMi43NzEtMy4wNjQsMy4xNTVWMjIuODZMMTcuMjI2LDIyLjg2eiBNMTIuMzM5LDIyLjg2aDMuMTEydjMuMTcyDQoJCQlDMTQuMjcxLDI1LjY2LDEzLjE4MSwyNC41NDksMTIuMzM5LDIyLjg2TDEyLjMzOSwyMi44NnogTTguODM4LDIyLjg2aDEuNTE4YzAuMzE0LDAuNzU1LDAuNjc5LDEuNDQsMS4wODgsMi4wNQ0KCQkJQzEwLjQ3MywyNC4zNz'+
			'QsOS41ODcsMjMuNjc4LDguODM4LDIyLjg2TDguODM4LDIyLjg2eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_url_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPGcgb3BhY2l0eT0iMC40IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9Ik0yOS4yNTksMTUuOTk5DQoJCQkJYzAtNy4xMjUtNS43OTYtMTIuOTItMTIuOTIxLTEyLjkyYy03LjEyNCwwLTEyLjkyLDUuNzk1LTEyLjkyLDEyLjkyYzAsNy4wNzUsNS43MiwxMi44MzgsMTIuNzc3LDEyLjkxNQ0KCQkJCWMwLjA0LDAuMDA0LDAuMDc4LDAuMDA3LDAuMTE3LDAuMDA3YzAuMDEzLDAsMC4wMjQtMC4wMDMsMC4wMzUtMC4wMDNDMjMuNDY4LDI4LjkxNCwyOS4yNTksMjMuMTIsMjkuMjU5LDE1Ljk5OXogTTQuOTU5LDE2Ljc1NA0KCQkJCWgzLjYzNGMwLjA2MiwxLjgyMiwwLjMzNywzLjUzLDAuNzg4LDUuMDZINi41MjhDNS42MzYsMjAuMzEyLDUuMDgsMTguNTk1LDQu'+
			'OTU5LDE2Ljc1NHogTTI3LjcxOSwxNS4yNDNoLTMuNjg3DQoJCQkJYy0wLjA2MS0xLjgxNi0wLjMzMy0zLjUyLTAuNzgzLTUuMDQ0aDIuOTA3QzI3LjA0NCwxMS42OTUsMjcuNTk2LDEzLjQxMSwyNy43MTksMTUuMjQzeiBNMjIuNTIsMTUuMjQzaC01LjQyNXYtNS4wNDRoNC41NDMNCgkJCQlDMjIuMTM1LDExLjcwMywyMi40NDksMTMuNDIyLDIyLjUyLDE1LjI0M3ogTTE3LjA5NSw4LjY4NlY0LjY5YzEuNTYsMC4zNzgsMi45NTgsMS44NjEsMy45NDcsMy45OTVIMTcuMDk1eiBNMTUuNTgzLDQuNjc4djQuMDA4DQoJCQkJaC0zLjk5OUMxMi41ODMsNi41MjksMTQuMDAxLDUuMDM2LDE1LjU4Myw0Lj'+
			'Y3OHogTTE1LjU4MywxMC4xOTl2NS4wNDRoLTUuNDc2YzAuMDY5LTEuODIxLDAuMzgyLTMuNTQsMC44OC01LjA0NEgxNS41ODN6DQoJCQkJIE04LjU5MywxNS4yNDNINC45NTljMC4xMTktMS44MzIsMC42NzUtMy41NDgsMS41NjItNS4wNDRoMi44NTdDOC45MjksMTEuNzI0LDguNjU0LDEzLjQyNyw4LjU5MywxNS4yNDN6IE0xMC4xMDcsMTYuNzU0aDUuNDc2DQoJCQkJdjUuMDZoLTQuNTkyQzEwLjQ5MSwyMC4zMDYsMTAuMTc3LDE4LjU4MiwxMC4xMDcsMTYuNzU0eiBNMTUuNTgzLDIzLjMyNnYzLjk5NmMtMS41NzgtMC4zNTYtMi45OTUtMS44NDYtMy45OTQtMy45OTZIMTUuNTgzeg0KCQkJCSBN'+
			'MTcuMDk1LDI3LjMxdi0zLjk4M2gzLjk0MUMyMC4wNDksMjUuNDUzLDE4LjY1MSwyNi45MzQsMTcuMDk1LDI3LjMxeiBNMTcuMDk1LDIxLjgxM3YtNS4wNmg1LjQyNQ0KCQkJCWMtMC4wNywxLjgyOC0wLjM4NSwzLjU1Mi0wLjg4Niw1LjA2SDE3LjA5NXogTTI0LjAzMiwxNi43NTRoMy42ODdjLTAuMTIzLDEuODQxLTAuNjc5LDMuNTU4LTEuNTcsNS4wNmgtMi45MDMNCgkJCQlDMjMuNjk2LDIwLjI4NCwyMy45NzIsMTguNTc2LDI0LjAzMiwxNi43NTR6IE0yNS4wODUsOC42ODZoLTIuMzU5Yy0wLjQ5Mi0xLjIxMi0xLjEwMy0yLjI3MS0xLjgwOS0zLjEzMw0KCQkJCUMyMi41MzYsNi4yNjcsMjMuOT'+
			'YzLDcuMzQ1LDI1LjA4NSw4LjY4NnogTTExLjY4LDUuNTkyYy0wLjY5MywwLjg1NC0xLjI5NSwxLjg5OS0xLjc3OCwzLjA5NEg3LjU5MQ0KCQkJCUM4LjY5Niw3LjM2NywxMC4wOTIsNi4zMDQsMTEuNjgsNS41OTJ6IE03LjYwNCwyMy4zMjZoMi4zMDNjMC40ODEsMS4xOSwxLjA4LDIuMjI5LDEuNzcsMy4wODENCgkJCQlDMTAuMDk1LDI1LjY5NSw4LjcwNCwyNC42MzksNy42MDQsMjMuMzI2eiBNMjAuOTE5LDI2LjQ0M2MwLjcwMi0wLjg1NywxLjMxMi0xLjkxMiwxLjgwMi0zLjExN2gyLjM1NA0KCQkJCUMyMy45NTIsMjQuNjYsMjIuNTMzLDI1LjczNCwyMC45MTksMjYuNDQzeiIvPg0KCQk8L2c+'+
			'DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNi4xODYsMjkuMDE0QzkuMDk0LDI4LjkzNywzLjMxOCwyMy4wOTgsMy4zMTgsMTUuOTk5YzAtNy4xNzksNS44NDEtMTMuMDIsMTMuMDItMTMuMDINCgkJCWM3LjE4LDAsMTMuMDIxLDUuODQxLDEzLjAyMSwxMy4wMmMwLDcuMTc1LTUuODM2LDEzLjAxNS0xMy4wMTEsMTMuMDE5bC0wLjAzNSwwLjAwM0MxNi4yNywyOS4wMjEsMTYuMjI5LDI5LjAxOCwxNi4xODYsMjkuMDE0eg0KCQkJIE0xMS43NDcsMjMuNDI2YzAuOTg4LDIuMDYxLDIuMzA3LDMuMzkxLDMuNzM2LDMuNzY5di0zLjc2OUgxMS43NDd6IE0xNy4xOTQsMjcuMThjMS40MDktMC4zOT'+
			'YsMi43MS0xLjcyMSwzLjY4NC0zLjc1NGgtMy42ODQNCgkJCVYyNy4xOHogTTIyLjc4OCwyMy40MjZjLTAuNDMsMS4wNDQtMC45NDUsMS45NjgtMS41MzUsMi43NTNjMS4zNjMtMC42NiwyLjYtMS42MDQsMy42MDQtMi43NTNIMjIuNzg4eiBNNy44MjEsMjMuNDI2DQoJCQljMC45NzcsMS4xMiwyLjE4NCwyLjA1LDMuNTIsMi43MTNjLTAuNTc5LTAuNzgtMS4wODMtMS42OS0xLjUwMi0yLjcxM0g3LjgyMXogTTUuMDY2LDE2Ljg1NGMwLjEzMSwxLjc1LDAuNjUxLDMuNCwxLjU0OCw0LjkwOQ0KCQkJbDIuNjM0LTAuMDQ3Yy0wLjQzNS0xLjUxMy0wLjY4Ny0zLjE0Ny0wLjc1Mi00Ljg2Mkg1LjA2Nnog'+
			'TTI2LjE0OCwyMS43MTRjMC44MTEtMS40NiwxLjMzLTMuMTEsMS40NjMtNC44NmgtMy40ODINCgkJCWMtMC4wNjQsMS43MTQtMC4zMTYsMy4zNDctMC43NTEsNC44NkgyNi4xNDh6IE0yMS41NjIsMjEuNzE0YzAuNDg1LTEuNDgzLDAuNzc5LTMuMTYsMC44NTQtNC44NmgtNS4yMjF2NC44NkgyMS41NjJ6DQoJCQkgTTE1LjQ4MywyMS43MTR2LTQuODZoLTUuMjcxYzAuMDc0LDEuNjk4LDAuMzY3LDMuMzc1LDAuODUyLDQuODZIMTUuNDgzeiBNMjcuNjExLDE1LjE0M2MtMC4xMzMtMS43MjYtMC42NjQtMy40MTUtMS41NDEtNC44OTMNCgkJCWwtMi42ODgsMC4wNDZjMC40MzIsMS41MDMsMC42ODMsMy'+
			'4xMzIsMC43NDcsNC44NDZIMjcuNjExeiBNMjIuNDE1LDE1LjE0M2MtMC4wNzQtMS42ODktMC4zNjctMy4zNi0wLjg1LTQuODQ0aC00LjM3MXY0Ljg0NA0KCQkJSDIyLjQxNXogTTE1LjQ4MywxNS4xNDN2LTQuODQ0SDExLjA2Yy0wLjQ4MiwxLjQ3OS0wLjc3NCwzLjE1LTAuODQ4LDQuODQ0SDE1LjQ4M3ogTTguNDk2LDE1LjE0Mw0KCQkJYzAuMDY1LTEuNzA4LDAuMzE3LTMuMzM3LDAuNzQ5LTQuODQ0SDYuNTc4Yy0wLjg2MywxLjQ3My0xLjM4NCwzLjE0NS0xLjUxMSw0Ljg0NEg4LjQ5NnogTTI0Ljg2OCw4LjU4NQ0KCQkJYy0xLjAwMi0xLjE1MS0yLjI0Mi0yLjEtMy42MTYtMi43NjhjMC41OTIs'+
			'MC43ODksMS4xMDksMS43MTgsMS41NDEsMi43NjhIMjQuODY4eiBNMjAuODg1LDguNTg1DQoJCQljLTAuOTc2LTIuMDM5LTIuMjc4LTMuMzY4LTMuNjktMy43NjZ2My43NjZIMjAuODg1eiBNMTUuNDgzLDguNTg1di0zLjc4Yy0xLjQzMywwLjM4LTIuNzUzLDEuNzE0LTMuNzQxLDMuNzhIMTUuNDgzeg0KCQkJIE05LjgzNCw4LjU4NWMwLjQyMi0xLjAzLDAuOTI5LTEuOTQ0LDEuNTEtMi43MjVjLTEuMzM5LDAuNjYyLTIuNTUxLDEuNTk2LTMuNTM2LDIuNzI1SDkuODM0eiIvPg0KCQk8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNMTYuMzM4LDMuMDc5YzcuMTI1LDAsMTIuOTIxLDUuNzk1LDEyLjkyMS'+
			'wxMi45MmMwLDcuMTIxLTUuNzkxLDEyLjkxNS0xMi45MTEsMTIuOTE5DQoJCQljLTAuMDExLDAtMC4wMjIsMC4wMDMtMC4wMzUsMC4wMDNjLTAuMDM5LDAtMC4wNzctMC4wMDMtMC4xMTctMC4wMDdjLTcuMDU4LTAuMDc3LTEyLjc3Ny01Ljg0LTEyLjc3Ny0xMi45MTUNCgkJCUMzLjQxOCw4Ljg3NCw5LjIxNCwzLjA3OSwxNi4zMzgsMy4wNzkgTTExLjU4NCw4LjY4NmgzLjk5OVY0LjY3OEMxNC4wMDEsNS4wMzYsMTIuNTgzLDYuNTI5LDExLjU4NCw4LjY4NiBNMTcuMDk1LDguNjg2aDMuOTQ3DQoJCQljLTAuOTg5LTIuMTM0LTIuMzg4LTMuNjE3LTMuOTQ3LTMuOTk1VjguNjg2IE0yMi43MjYsOC42'+
			'ODZoMi4zNTljLTEuMTIyLTEuMzQxLTIuNTQ5LTIuNDE5LTQuMTY4LTMuMTMzDQoJCQlDMjEuNjIzLDYuNDE1LDIyLjIzMyw3LjQ3NCwyMi43MjYsOC42ODYgTTcuNTkxLDguNjg2aDIuMzExYzAuNDgzLTEuMTk0LDEuMDg1LTIuMjQsMS43NzgtMy4wOTQNCgkJCUMxMC4wOTIsNi4zMDQsOC42OTYsNy4zNjcsNy41OTEsOC42ODYgTTI0LjAzMiwxNS4yNDNoMy42ODdjLTAuMTIzLTEuODMyLTAuNjc1LTMuNTQ4LTEuNTYyLTUuMDQ0aC0yLjkwNw0KCQkJQzIzLjY5OSwxMS43MjQsMjMuOTcyLDEzLjQyNywyNC4wMzIsMTUuMjQzIE0xNy4wOTUsMTUuMjQzaDUuNDI1Yy0wLjA3LTEuODIxLTAuMzg1LT'+
			'MuNTQtMC44ODItNS4wNDRoLTQuNTQzVjE1LjI0Mw0KCQkJIE0xMC4xMDcsMTUuMjQzaDUuNDc2di01LjA0NGgtNC41OTZDMTAuNDg5LDExLjcwMywxMC4xNzcsMTMuNDIyLDEwLjEwNywxNS4yNDMgTTQuOTU5LDE1LjI0M2gzLjYzNA0KCQkJYzAuMDYyLTEuODE2LDAuMzM2LTMuNTIsMC43ODUtNS4wNDRINi41MjFDNS42MzQsMTEuNjk1LDUuMDc4LDEzLjQxMSw0Ljk1OSwxNS4yNDMgTTIzLjI0NSwyMS44MTNoMi45MDMNCgkJCWMwLjg5Mi0xLjUwMiwxLjQ0Ny0zLjIxOSwxLjU3LTUuMDZoLTMuNjg3QzIzLjk3MiwxOC41NzYsMjMuNjk2LDIwLjI4NCwyMy4yNDUsMjEuODEzIE0xNy4wOTUsMjEu'+
			'ODEzaDQuNTM5DQoJCQljMC41MDEtMS41MDgsMC44MTUtMy4yMzEsMC44ODYtNS4wNmgtNS40MjVWMjEuODEzIE0xMC45OTEsMjEuODEzaDQuNTkydi01LjA2aC01LjQ3NkMxMC4xNzcsMTguNTgyLDEwLjQ5MSwyMC4zMDYsMTAuOTkxLDIxLjgxMw0KCQkJIE02LjUyOCwyMS44MTNoMi44NTNjLTAuNDUxLTEuNTI5LTAuNzI3LTMuMjM3LTAuNzg4LTUuMDZINC45NTlDNS4wOCwxOC41OTUsNS42MzYsMjAuMzEyLDYuNTI4LDIxLjgxMyBNMjAuOTE5LDI2LjQ0Mw0KCQkJYzEuNjE0LTAuNzA5LDMuMDMzLTEuNzgzLDQuMTU1LTMuMTE3aC0yLjM1NEMyMi4yMywyNC41MzEsMjEuNjIxLDI1LjU4NiwyMC'+
			'45MTksMjYuNDQzIE0xNy4wOTUsMjcuMzENCgkJCWMxLjU1Ny0wLjM3NiwyLjk1NC0xLjg1NiwzLjk0MS0zLjk4M2gtMy45NDFWMjcuMzEgTTE1LjU4MywyNy4zMjJ2LTMuOTk2aC0zLjk5NEMxMi41ODgsMjUuNDc3LDE0LjAwNSwyNi45NjYsMTUuNTgzLDI3LjMyMg0KCQkJIE0xMS42NzYsMjYuNDA3Yy0wLjY4OS0wLjg1Mi0xLjI4OC0xLjg5MS0xLjc3LTMuMDgxSDcuNjA0QzguNzA0LDI0LjYzOSwxMC4wOTUsMjUuNjk1LDExLjY3NiwyNi40MDcgTTE2LjMzOCwyLjg3OQ0KCQkJYy03LjIzNCwwLTEzLjEyLDUuODg2LTEzLjEyLDEzLjEyYzAsNy4xNTMsNS44MjEsMTMuMDM3LDEyLjk3NiwxMy4x'+
			'MTVjMC4wMjksMC4wMDMsMC4wNzQsMC4wMDcsMC4xMTksMC4wMDcNCgkJCWM3LjI2NS0wLjAwNywxMy4xNDYtNS44OTMsMTMuMTQ2LTEzLjEyMkMyOS40NTksOC43NjUsMjMuNTczLDIuODc5LDE2LjMzOCwyLjg3OUwxNi4zMzgsMi44Nzl6IE0xMS45MDEsOC40ODUNCgkJCWMwLjkzNy0xLjg5NywyLjE1OS0zLjE0MiwzLjQ4MS0zLjU0N3YzLjU0N0gxMS45MDFMMTEuOTAxLDguNDg1eiBNMTcuMjk1LDguNDg1VjQuOTU1YzEuMzAyLDAuNDIyLDIuNTA1LDEuNjYsMy40MywzLjUzMUgxNy4yOTUNCgkJCUwxNy4yOTUsOC40ODV6IE0yMi44NTksOC40ODVjLTAuMzY5LTAuODg4LTAuOC0xLjY4OC0xLj'+
			'I4Ni0yLjM5MmMxLjE1MSwwLjYxMiwyLjE5NywxLjQyNiwzLjA3MiwyLjM5MkgyMi44NTlMMjIuODU5LDguNDg1eg0KCQkJIE04LjAzMSw4LjQ4NWMwLjg1Ni0wLjk0MywxLjg3NS0xLjc0MSwyLjk5MS0yLjM0NmMtMC40NzQsMC42OTMtMC44OTUsMS40NzktMS4yNTUsMi4zNDZIOC4wMzFMOC4wMzEsOC40ODV6IE0yMy41MTUsMTAuMzk5DQoJCQloMi41MjdjMC44MTYsMS40MSwxLjMxOSwzLjAwOSwxLjQ2MSw0LjY0NGgtMy4yNzhDMjQuMTU2LDEzLjQwNSwyMy45MTgsMTEuODQ2LDIzLjUxNSwxMC4zOTlMMjMuNTE1LDEwLjM5OXogTTE3LjI5NSwxMC4zOTkNCgkJCWg0LjE5N2MwLjQ1NywxLjQy'+
			'NywwLjczOCwzLjAyNSwwLjgxOCw0LjY0NGgtNS4wMTZWMTAuMzk5TDE3LjI5NSwxMC4zOTl6IE0xMS4xMzIsMTAuMzk5aDQuMjV2NC42NDRoLTUuMDY2DQoJCQlDMTAuMzk2LDEzLjQyMSwxMC42NzYsMTEuODIzLDExLjEzMiwxMC4zOTlMMTEuMTMyLDEwLjM5OXogTTYuNjM1LDEwLjM5OWgyLjQ3OGMtMC40MDQsMS40NS0wLjY0NCwzLjAxLTAuNzEyLDQuNjQ0SDUuMTc0DQoJCQlDNS4zMTIsMTMuNDE1LDUuODE1LDExLjgxNiw2LjYzNSwxMC4zOTlMNi42MzUsMTAuMzk5eiBNMjQuMjI1LDE2Ljk1NGgzLjI3OGMtMC4xNDIsMS42NTYtMC42MzUsMy4yMjMtMS40NjksNC42NTloLTIuNTIzDQoJCQ'+
			'lDMjMuOTE3LDIwLjE1NywyNC4xNTcsMTguNTkyLDI0LjIyNSwxNi45NTRMMjQuMjI1LDE2Ljk1NHogTTE3LjI5NSwxNi45NTRoNS4wMTZjLTAuMDgsMS42MjktMC4zNjIsMy4yMzItMC44MjIsNC42NTloLTQuMTkzDQoJCQlWMTYuOTU0TDE3LjI5NSwxNi45NTR6IE0xMC4zMTYsMTYuOTU0aDUuMDY2djQuNjU5aC00LjI0N0MxMC42NzcsMjAuMTg1LDEwLjM5NiwxOC41ODEsMTAuMzE2LDE2Ljk1NEwxMC4zMTYsMTYuOTU0eg0KCQkJIE01LjE3NSwxNi45NTRIOC40YzAuMDY5LDEuNjM5LDAuMzA5LDMuMjA0LDAuNzE1LDQuNjU5SDYuNjQzQzUuODA4LDIwLjE3Niw1LjMxNCwxOC42MSw1LjE3NSwx'+
			'Ni45NTRMNS4xNzUsMTYuOTU0eg0KCQkJIE0yMi44NTQsMjMuNTI2aDEuNzc5Yy0wLjg3NiwwLjk2Mi0xLjkxNywxLjc3MS0zLjA1OSwyLjM3N0MyMi4wNTksMjUuMjA0LDIyLjQ4NywyNC40MDgsMjIuODU0LDIzLjUyNkwyMi44NTQsMjMuNTI2eg0KCQkJIE0xNy4yOTUsMjMuNTI2aDMuNDI0Yy0wLjkyMywxLjg2NS0yLjEyNSwzLjA5OS0zLjQyNCwzLjUyVjIzLjUyNkwxNy4yOTUsMjMuNTI2eiBNMTEuOTA3LDIzLjUyNmgzLjQ3NnYzLjUzNg0KCQkJQzE0LjA2MywyNi42NTgsMTIuODQzLDI1LjQxOCwxMS45MDcsMjMuNTI2TDExLjkwNywyMy41MjZ6IE04LjA0MywyMy41MjZoMS43MjljMC4zNT'+
			'csMC44NiwwLjc3NCwxLjY0MiwxLjI0NywyLjMzMg0KCQkJQzkuOTA1LDI1LjI1NCw4Ljg5MywyNC40NjEsOC4wNDMsMjMuNTI2TDguMDQzLDIzLjUyNnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_url_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image0;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == false) && 
				(player.getVariableValue('opt_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image0.style[domTransition]='';
				if (me._ht_url_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image0.style.visibility=(Number(me._ht_url_image0.style.opacity)>0||!me._ht_url_image0.style.opacity)?'inherit':'hidden';
					me._ht_url_image0.ggVisible=true;
				}
				else {
					me._ht_url_image0.style.visibility="hidden";
					me._ht_url_image0.ggVisible=false;
				}
			}
		}
		me._ht_url_image0.onclick=function (e) {
			skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
			skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
			if (skin._web_page.ggUpdateText) {
				skin._web_page.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._web_page.ggUpdatePosition) {
				skin._web_page.ggUpdatePosition();
			}
			skin._web_page.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_website', true);
		}
		me._ht_url_image0.onmouseover=function (e) {
			me._ht_url_image0__img.style.visibility='hidden';
			me._ht_url_image0__imgo.style.visibility='inherit';
		}
		me._ht_url_image0.onmouseout=function (e) {
			me._ht_url_image0__img.style.visibility='inherit';
			me._ht_url_image0__imgo.style.visibility='hidden';
		}
		me._ht_url_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_url_image0);
		el=me._ht_url_image_newpage=document.createElement('div');
		els=me._ht_url_image_newpage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MDAgNzAwOyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgwLjgsODIuNGMtNS45LDAtMTEuMiw1LjMtMTEuMiwxMS4ydjQ5Mi44YzAsNS41LDUsMTEuMiwxMS4yLDExLjJoMzU4LjRjNS45LDAsMTEuMi01LjMsMTEuMi0xMS4yVjE3Mg0KCWMwLTIuOS0xLjItNS44LTMuMy03LjlsLTc4LjQtNzguNGMtMi4xLTIuMS01LTMuMy03LjktMy4zTDE4MC44LDgyLjR6IE0xOTIsMTA0LjhoMjU3LjZWMTcyYzAuMSw1LjIsNC40LDExLjIsMTEuMiwxMS4ySDUyOHYzOTINCglIMTkyTDE5MiwxMDQu'+
			'OHogTTQ3MiwxMjAuN2w0MC4xLDQwLjFINDcyVjEyMC43eiBNMjI1LjYsMTQ0Yy02LjEsMC0xMS4yLDYtMTEuMiwxMS4ydjc4LjRjMCw1LjksNS4zLDExLjIsMTEuMiwxMS4yaDEwMC44DQoJYzUuOSwwLDExLjItNS4zLDExLjItMTEuMnYtNzguNGMwLTUuOS01LjMtMTEuMi0xMS4yLTExLjJMMjI1LjYsMTQ0eiBNMjM2LjgsMTY2LjRoNzguNHY1NmgtNzguNFYxNjYuNHogTTM3MS4yLDE4My4yDQoJYy02LjIsMC0xMS4yLDUtMTEuMiwxMS4yYzAsNi4yLDUsMTEuMiwxMS4yLDExLjJoNTZjNi4yLDAsMTEuMi01LDExLjItMTEuMmMwLTYuMi01LTExLjItMTEuMi0xMS4ySDM3MS4yeiBNMzQ3LjcsMj'+
			'Y3DQoJYy0zLjMsMC4zLTYuNCwyLjItOC4yLDQuOWwtNDQuMSw2My43bC0yNC4zLTE2LjNjLTQuOS0zLjMtMTIuNC0xLjktMTUuOCwzYy0zLjMsNC45LTEuOCwxMi41LDMuMSwxNS44bDMzLjYsMjIuNA0KCWM0LjksMy4zLDEyLjMsMS45LDE1LjYtM2w1MC40LTcyLjhjMi41LTMuNSwyLjctOC41LDAuNS0xMi4yQzM1Ni40LDI2OC43LDM1MiwyNjYuNSwzNDcuNywyNjdMMzQ3LjcsMjY3eiBNMjI1LjYsMjc4LjQNCgljLTYuMSwwLjItMTEuMiw2LTExLjIsMTEuMnYxMDAuOGMwLDUuOSw1LjMsMTEuMiwxMS4yLDExLjJoMTAwLjhjNS45LDAsMTEuMi01LjMsMTEuMi0xMS4ydi0xMS4yYzAuMS01Ljkt'+
			'NS4zLTExLjQtMTEuMi0xMS40DQoJYy01LjksMC0xMS4zLDUuNS0xMS4yLDExLjRoLTc4LjR2LTc4LjRoNTZjNS45LDAuMSwxMS40LTUuMywxMS40LTExLjJjMC01LjktNS41LTExLjMtMTEuNC0xMS4yTDIyNS42LDI3OC40eiBNMzcxLjIsMzI4LjgNCgljLTYuMiwwLTExLjIsNS0xMS4yLDExLjJjMCw2LjIsNSwxMS4yLDExLjIsMTEuMmgxMjMuMmM2LjIsMCwxMS4yLTUsMTEuMi0xMS4yYzAtNi4yLTUtMTEuMi0xMS4yLTExLjJIMzcxLjJ6IE0yMjUuNiw0MzUuMg0KCWMtNi4xLDAtMTEuMiw2LTExLjIsMTEuMnY3OC40YzAsNS45LDUuMywxMS4yLDExLjIsMTEuMmgxMDAuOGM1LjksMCwxMS4yLT'+
			'UuMywxMS4yLTExLjJ2LTc4LjRjMC01LjktNS4zLTExLjItMTEuMi0xMS4ySDIyNS42eg0KCSBNMjM2LjgsNDU3LjZoNzguNHY1NmgtNzguNFY0NTcuNnogTTM3MS4yLDQ3NC40Yy02LjIsMC0xMS4yLDUtMTEuMiwxMS4yYzAsNi4yLDUsMTEuMiwxMS4yLDExLjJoMTIzLjJjNi4yLDAsMTEuMi01LDExLjItMTEuMg0KCWMwLTYuMi01LTExLjItMTEuMi0xMS4ySDM3MS4yeiIvPg0KPC9zdmc+DQo=';
		me._ht_url_image_newpage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image_newpage;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_newpage__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MDAgNzAwOyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTIwMDAwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgwLjgsODIuNGMtNS45LDAtMTEuMiw1LjMtMTEuMiwxMS4ydjQ5Mi44YzAsNS41LDUsMTEuMiwxMS4yLDExLjJoMzU4LjRjNS45LDAsMTEuMi01LjMsMTEuMi0xMS4yVjE3Mg0KCWMwLTIuOS0xLjItNS44LTMuMy03LjlsLTc4LjQtNzguNGMtMi4xLTIuMS01LTMuMy03LjktMy4zTDE4MC44LDgyLjR6IE0xOTIsMTA0LjhoMjU3LjZWMTcyYzAuMSw1LjIsNC40LDExLjIsMTEuMiwxMS4ySDUyOHYzOTINCglIMTkyTDE5MiwxMDQu'+
			'OHogTTQ3MiwxMjAuN2w0MC4xLDQwLjFINDcyVjEyMC43eiBNMjI1LjYsMTQ0Yy02LjEsMC0xMS4yLDYtMTEuMiwxMS4ydjc4LjRjMCw1LjksNS4zLDExLjIsMTEuMiwxMS4yaDEwMC44DQoJYzUuOSwwLDExLjItNS4zLDExLjItMTEuMnYtNzguNGMwLTUuOS01LjMtMTEuMi0xMS4yLTExLjJMMjI1LjYsMTQ0eiBNMjM2LjgsMTY2LjRoNzguNHY1NmgtNzguNFYxNjYuNHogTTM3MS4yLDE4My4yDQoJYy02LjIsMC0xMS4yLDUtMTEuMiwxMS4yYzAsNi4yLDUsMTEuMiwxMS4yLDExLjJoNTZjNi4yLDAsMTEuMi01LDExLjItMTEuMmMwLTYuMi01LTExLjItMTEuMi0xMS4ySDM3MS4yeiBNMzQ3LjcsMj'+
			'Y3DQoJYy0zLjMsMC4zLTYuNCwyLjItOC4yLDQuOWwtNDQuMSw2My43bC0yNC4zLTE2LjNjLTQuOS0zLjMtMTIuNC0xLjktMTUuOCwzYy0zLjMsNC45LTEuOCwxMi41LDMuMSwxNS44bDMzLjYsMjIuNA0KCWM0LjksMy4zLDEyLjMsMS45LDE1LjYtM2w1MC40LTcyLjhjMi41LTMuNSwyLjctOC41LDAuNS0xMi4yQzM1Ni40LDI2OC43LDM1MiwyNjYuNSwzNDcuNywyNjdMMzQ3LjcsMjY3eiBNMjI1LjYsMjc4LjQNCgljLTYuMSwwLjItMTEuMiw2LTExLjIsMTEuMnYxMDAuOGMwLDUuOSw1LjMsMTEuMiwxMS4yLDExLjJoMTAwLjhjNS45LDAsMTEuMi01LjMsMTEuMi0xMS4ydi0xMS4yYzAuMS01Ljkt'+
			'NS4zLTExLjQtMTEuMi0xMS40DQoJYy01LjksMC0xMS4zLDUuNS0xMS4yLDExLjRoLTc4LjR2LTc4LjRoNTZjNS45LDAuMSwxMS40LTUuMywxMS40LTExLjJjMC01LjktNS41LTExLjMtMTEuNC0xMS4yTDIyNS42LDI3OC40eiBNMzcxLjIsMzI4LjgNCgljLTYuMiwwLTExLjIsNS0xMS4yLDExLjJjMCw2LjIsNSwxMS4yLDExLjIsMTEuMmgxMjMuMmM2LjIsMCwxMS4yLTUsMTEuMi0xMS4yYzAtNi4yLTUtMTEuMi0xMS4yLTExLjJIMzcxLjJ6IE0yMjUuNiw0MzUuMg0KCWMtNi4xLDAtMTEuMiw2LTExLjIsMTEuMnY3OC40YzAsNS45LDUuMywxMS4yLDExLjIsMTEuMmgxMDAuOGM1LjksMCwxMS4yLT'+
			'UuMywxMS4yLTExLjJ2LTc4LjRjMC01LjktNS4zLTExLjItMTEuMi0xMS4ySDIyNS42eg0KCSBNMjM2LjgsNDU3LjZoNzguNHY1NmgtNzguNFY0NTcuNnogTTM3MS4yLDQ3NC40Yy02LjIsMC0xMS4yLDUtMTEuMiwxMS4yYzAsNi4yLDUsMTEuMiwxMS4yLDExLjJoMTIzLjJjNi4yLDAsMTEuMi01LDExLjItMTEuMg0KCWMwLTYuMi01LTExLjItMTEuMi0xMS4ySDM3MS4yeiIvPg0KPC9zdmc+DQo=';
		me._ht_url_image_newpage__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image_newpage;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_newpage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_url_image_newpage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_newpage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true) || 
				(player.getVariableValue('opt_url') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_newpage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_newpage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_newpage.style[domTransition]='';
				if (me._ht_url_image_newpage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_newpage.style.visibility=(Number(me._ht_url_image_newpage.style.opacity)>0||!me._ht_url_image_newpage.style.opacity)?'inherit':'hidden';
					me._ht_url_image_newpage.ggVisible=true;
				}
				else {
					me._ht_url_image_newpage.style.visibility="hidden";
					me._ht_url_image_newpage.ggVisible=false;
				}
			}
		}
		me._ht_url_image_newpage.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._ht_url_image_newpage.onmouseover=function (e) {
			me._ht_url_image_newpage__img.style.visibility='hidden';
			me._ht_url_image_newpage__imgo.style.visibility='inherit';
		}
		me._ht_url_image_newpage.onmouseout=function (e) {
			me._ht_url_image_newpage__img.style.visibility='inherit';
			me._ht_url_image_newpage__imgo.style.visibility='hidden';
		}
		me._ht_url_image_newpage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_url_image_newpage);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url.style.top='-50px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url.ggDx=0;
					me._tt_ht_url.style.top='22px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_url'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url.appendChild(me._tt_ht_url);
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateAlpha == 0) {
					me._ht_info.style.visibility=me._ht_info.ggVisible?'inherit':'hidden';
					me._ht_info.style.opacity=1;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.style.opacity=0;
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPGc+DQoJCQk8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwDQoJCQkJYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMNCgkJCQlDNy4wMjIsMTAu'+
			'Njg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDANCgkJCQljMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDANCgkJCQlDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4NCgkJPC9nPg0KCQ'+
			'k8Zz4NCgkJCTxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOQ0KCQkJCWMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+DQoJCQk8Zz4NCgkJCQk8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0DQoJCQkJCWMwLTAu'+
			'NjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3DQoJCQkJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2DQoJCQkJCUMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMC'+
			'Igc3Ryb2tlLXdpZHRoPSIwLjIiPgoJCTxnPg0KCQkJPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMA0KCQkJCWMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzDQoJCQkJQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwDQoJ'+
			'CQkJYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwDQoJCQkJQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC'+
			'41MjkNCgkJCQljMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPg0KCQkJPGc+DQoJCQkJPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNA0KCQkJCQljMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5'+
			'aC0xLjIwNw0KCQkJCQljLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5Ng0KCQkJCQlDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4'+
			'LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJCUM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCUMyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMD'+
			'UsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5DQoJCQkJYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0w'+
			'LjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQNCgkJCQkJYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcNCgkJCQkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYNCgkJCQkJQzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPg'+
			'0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDANCgkJCQljLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4Ljg1Mw0KCQkJCUM3'+
			'LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMA0KCQkJCWMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMA0KCQkJCUMyMS4zMTMsNy4wMjIsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPg0KCQ'+
			'k8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5DQoJCQkJYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQNCgkJ'+
			'CQkJYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcNCgkJCQkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYNCgkJCQkJQzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-50px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='22px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_info'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNzguOSAzNDguNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjc4LjkgMzQ4LjY7Ii'+
			'B4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC45LDI0LjlDNTgtOC4zLDExMS44LTguMywxNDUsMjQuOWMzMC4xLDMwLjEsMzIuOSw3Ny4xLDguNCwxMTAuNGwxOSwxOWwzLjgtMy44bDk3LjIsOTcuMg0KCQljMTcsMTctOC43LDQyLjYtMjUuNiwyNS42bC05Ny4yLTk3LjFsMy44LTMuOGwtMTktMTlDMTAyLDE3Ny45LDU1LDE3NS4xLDI0LjksMTQ1Qy04LjMsMTExLjgtOC4zLDU4LDI0'+
			'LjksMjQuOXogTTM5LjYsNDUuOQ0KCQljLTMsMy44LTguNy0wLjgtNS43LTQuNmM3LjUtOS40LDE3LjYtMTUuOSwyOC42LTE5czIzLTIuNywzNC4zLDEuNmM0LjUsMS43LDEuOSw4LjUtMi42LDYuOGMtOS44LTMuNy0yMC4yLTQtMjkuOC0xLjQNCgkJUzQ2LjEsMzcuNywzOS42LDQ1LjlMMzkuNiw0NS45eiBNMzMuNSwzMy41YzI4LjQtMjguNCw3NC40LTI4LjQsMTAyLjgsMGMyOC40LDI4LjQsMjguNCw3NC40LDAsMTAyLjgNCgkJYy0yOC40LDI4LjQtNzQuNCwyOC40LTEwMi44LDBDNS4xLDEwNy45LDUuMSw2MS45LDMzLjUsMzMuNXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_image_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNzguOSAzNDguNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjc4LjkgMzQ4LjY7Ii'+
			'B4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNDMTAyMDI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC45LDI0LjlDNTgtOC4zLDExMS44LTguMywxNDUsMjQuOWMzMC4xLDMwLjEsMzIuOSw3Ny4xLDguNCwxMTAuNGwxOSwxOWwzLjgtMy44bDk3LjIsOTcuMg0KCQljMTcsMTctOC43LDQyLjYtMjUuNiwyNS42bC05Ny4yLTk3LjFsMy44LTMuOGwtMTktMTlDMTAyLDE3Ny45LDU1LDE3NS4xLDI0LjksMTQ1Qy04LjMsMTExLjgtOC4zLDU4LDI0'+
			'LjksMjQuOXogTTM5LjYsNDUuOQ0KCQljLTMsMy44LTguNy0wLjgtNS43LTQuNmM3LjUtOS40LDE3LjYtMTUuOSwyOC42LTE5czIzLTIuNywzNC4zLDEuNmM0LjUsMS43LDEuOSw4LjUtMi42LDYuOGMtOS44LTMuNy0yMC4yLTQtMjkuOC0xLjQNCgkJUzQ2LjEsMzcuNywzOS42LDQ1LjlMMzkuNiw0NS45eiBNMzMuNSwzMy41YzI4LjQtMjguNCw3NC40LTI4LjQsMTAyLjgsMGMyOC40LDI4LjQsMjguNCw3NC40LDAsMTAyLjgNCgkJYy0yOC40LDI4LjQtNzQuNCwyOC40LTEwMi44LDBDNS4xLDEwNy45LDUuMSw2MS45LDMzLjUsMzMuNXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_image_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-50px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=0;
					me._tt_ht_image.style.top='22px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_image'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		me.ggUse3d=true;
		me.gg3dDistance=400;
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
				else {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
			}
		}
		me._ht_video_file.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file.style.visibility=me._ht_video_file.ggVisible?'inherit':'hidden';
					me._ht_video_file.style.opacity=1;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.style.opacity=0;
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+me.hotspot.url);
			player.setVariableValue('vis_video_popup_file', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_image=document.createElement('div');
		els=me._ht_video_file_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguMTc4LDE1Ljc1OGMtMC4yLTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ2LDBsLTIuODM5LDEuNjM5di0yLjY1OWMwLTAuMTY5LTAuMDY4LTAuMzM1LTAuMTg4LTAuNDU2DQoJCXMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDU2YzEuMDYtMC45MzcsMS43MjktMi4zMDUsMS43MjktMy44MzFDMjMuNzIyLDcuNDM4LDIxLjQzNCw1LjE1LDE4'+
			'LjYxLDUuMTUNCgkJYy0yLjgyNCwwLTUuMTEyLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MjYsMC42NjksMi44OTUsMS43MjksMy44MzFIMTEuNzZjMC42NDQtMC43MDIsMS4wMzctMS42MzgsMS4wMzgtMi42NjYNCgkJYy0wLjAwMS0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDdjMCwxLjAyOCwwLjM5NCwxLjk2NCwxLjAzNywyLjY2Nkg0LjE0NA0KCQljLTAuMTY5LDAtMC4zMzUsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDAyLDMuNSwxNC41NjgsMy41LDE0LjczN3YxMS40NjhjMCwwLjE3LDAuMDY4LDAuMzM2LDAuMTg4LDAuND'+
			'U3DQoJCWMwLjEyLDAuMTE5LDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNWMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODhjMC4xMi0wLjEyMSwwLjE4OC0wLjI4NywwLjE4OC0wLjQ1N3YtMi42NmwyLjgzOSwxLjY0MQ0KCQljMC4yLDAuMTE1LDAuNDQ1LDAuMTE1LDAuNjQ2LDBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTl2LTguMzExQzI4LjUsMTYuMDg2LDI4LjM3NywxNS44NzMsMjguMTc4LDE1Ljc1OHoNCgkJIE0xNC43ODgsMTAuMjYyYzAuMDA0LTIuMTExLDEuNzEyLTMuODE4LDMuODIzLTMuODIyYzIuMTExLDAuMDA0LDMuODE5LDEuNzExLDMuODIzLDMu'+
			'ODIyYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMw0KCQlDMTYuNSwxNC4wODEsMTQuNzkyLDEyLjM3MywxNC43ODgsMTAuMjYyeiBNOC44NTEsOC43NjljMS40NjgsMC4wMDMsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjgtMS4xOSwyLjY1NS0yLjY1OCwyLjY1Nw0KCQljLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTg5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTU5LDcuMzgzLDguNzcyLDguODUxLDguNzY5eiBNMjcuMjExLDIzLjUxbC0yLjg0LTEuNjM5DQoJCWMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMHMtMC4zMjIsMC4zMjgtMC4zMjIsMC41NTl2My'+
			'4xMzFINC43ODlWMTUuMzgyaDE4LjYxNXYyLjQ5OUgxMC4xMjINCgkJYy0wLjM1NSwwLTAuNjQ1LDAuMjg5LTAuNjQ1LDAuNjQ1YzAsMC4zNTcsMC4yODksMC42NDUsMC42NDUsMC42NDVIMjMuOTljMC4wNTQsMCwwLjEwNC0wLjAwOCwwLjE1My0wLjAyDQoJCWMwLjA3OS0wLjAxMiwwLjE1Ni0wLjAzNywwLjIyOC0wLjA3OGwyLjg0LTEuNjQxVjIzLjUxeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTI4LjE3OCwxNS43NThjLTAuMi0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NiwwbC0yLjgzOSwxLjYzOXYt'+
			'Mi42NTljMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1Ng0KCQlzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA1NmMxLjA2LTAuOTM3LDEuNzI5LTIuMzA1LDEuNzI5LTMuODMxQzIzLjcyMiw3LjQzOCwyMS40MzQsNS4xNSwxOC42MSw1LjE1DQoJCWMtMi44MjQsMC01LjExMiwyLjI4OS01LjExMiw1LjExMmMwLDEuNTI2LDAuNjY5LDIuODk1LDEuNzI5LDMuODMxSDExLjc2YzAuNjQ0LTAuNzAyLDEuMDM3LTEuNjM4LDEuMDM4LTIuNjY2DQoJCWMtMC4wMDEtMi4xOC0xLjc2Ny0zLjk0Ni0zLjk0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3YzAsMS4wMjgsMC'+
			'4zOTQsMS45NjQsMS4wMzcsMi42NjZINC4xNDQNCgkJYy0wLjE2OSwwLTAuMzM1LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwMiwzLjUsMTQuNTY4LDMuNSwxNC43Mzd2MTEuNDY4YzAsMC4xNywwLjA2OCwwLjMzNiwwLjE4OCwwLjQ1Nw0KCQljMC4xMiwwLjExOSwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDVjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4YzAuMTItMC4xMjEsMC4xODgtMC4yODcsMC4xODgtMC40NTd2LTIuNjZsMi44MzksMS42NDENCgkJYzAuMiwwLjExNSwwLjQ0NSwwLjExNSwwLjY0NiwwYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU5'+
			'di04LjMxMUMyOC41LDE2LjA4NiwyOC4zNzcsMTUuODczLDI4LjE3OCwxNS43NTh6DQoJCSBNMTQuNzg4LDEwLjI2MmMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOCwzLjgyMy0zLjgyMmMyLjExMSwwLjAwNCwzLjgxOSwxLjcxMSwzLjgyMywzLjgyMmMtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMNCgkJQzE2LjUsMTQuMDgxLDE0Ljc5MiwxMi4zNzMsMTQuNzg4LDEwLjI2MnogTTguODUxLDguNzY5YzEuNDY4LDAuMDAzLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY4LTEuMTksMi42NTUtMi42NTgsMi42NTcNCgkJYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE4OS0yLj'+
			'Y1Ny0yLjY1N0M2LjE5Niw5Ljk1OSw3LjM4Myw4Ljc3Miw4Ljg1MSw4Ljc2OXogTTI3LjIxMSwyMy41MWwtMi44NC0xLjYzOQ0KCQljLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDBzLTAuMzIyLDAuMzI4LTAuMzIyLDAuNTU5djMuMTMxSDQuNzg5VjE1LjM4MmgxOC42MTV2Mi40OTlIMTAuMTIyDQoJCWMtMC4zNTUsMC0wLjY0NSwwLjI4OS0wLjY0NSwwLjY0NWMwLDAuMzU3LDAuMjg5LDAuNjQ1LDAuNjQ1LDAuNjQ1SDIzLjk5YzAuMDU0LDAsMC4xMDQtMC4wMDgsMC4xNTMtMC4wMg0KCQljMC4wNzktMC4wMTIsMC4xNTYtMC4wMzcsMC4yMjgtMC4wNzhsMi44NC0xLjY0MVYyMy41MXoi'+
			'Lz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_video_file_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_file_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNzgsMTUuNzU4Yy0wLjItMC4xMTUtMC40NDUtMC4xMTUtMC42NDYsMGwtMi44MzksMS42Mzl2LTIuNjU5YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTYNCgkJcy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wNTZjMS4w'+
			'Ni0wLjkzNywxLjcyOS0yLjMwNSwxLjcyOS0zLjgzMUMyMy43MjIsNy40MzgsMjEuNDM0LDUuMTUsMTguNjEsNS4xNQ0KCQljLTIuODI0LDAtNS4xMTIsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUyNiwwLjY2OSwyLjg5NSwxLjcyOSwzLjgzMUgxMS43NmMwLjY0NC0wLjcwMiwxLjAzNy0xLjYzOCwxLjAzOC0yLjY2Ng0KCQljLTAuMDAxLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0N2MwLDEuMDI4LDAuMzk0LDEuOTY0LDEuMDM3LDIuNjY2SDQuMTQ0DQoJCWMtMC4xNjksMC0wLjMzNSwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MD'+
			'IsMy41LDE0LjU2OCwzLjUsMTQuNzM3djExLjQ2OGMwLDAuMTcsMC4wNjgsMC4zMzYsMC4xODgsMC40NTcNCgkJYzAuMTIsMC4xMTksMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA1YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OGMwLjEyLTAuMTIxLDAuMTg4LTAuMjg3LDAuMTg4LTAuNDU3di0yLjY2bDIuODM5LDEuNjQxDQoJCWMwLjIsMC4xMTUsMC40NDUsMC4xMTUsMC42NDYsMGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OXYtOC4zMTFDMjguNSwxNi4wODYsMjguMzc3LDE1Ljg3MywyOC4xNzgsMTUuNzU4eg0KCQkgTTE0Ljc4OCwxMC4yNjJjMC4wMDQtMi4x'+
			'MTEsMS43MTItMy44MTgsMy44MjMtMy44MjJjMi4xMTEsMC4wMDQsMy44MTksMS43MTEsMy44MjMsMy44MjJjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzDQoJCUMxNi41LDE0LjA4MSwxNC43OTIsMTIuMzczLDE0Ljc4OCwxMC4yNjJ6IE04Ljg1MSw4Ljc2OWMxLjQ2OCwwLjAwMywyLjY1NSwxLjE5LDIuNjU4LDIuNjU4Yy0wLjAwMiwxLjQ2OC0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3DQoJCWMtMS40NjctMC4wMDItMi42NTUtMS4xODktMi42NTctMi42NTdDNi4xOTYsOS45NTksNy4zODMsOC43NzIsOC44NTEsOC43Njl6IE0yNy4yMTEsMjMuNTFsLTIuODQtMS42MzkNCgkJYy'+
			'0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwcy0wLjMyMiwwLjMyOC0wLjMyMiwwLjU1OXYzLjEzMUg0Ljc4OVYxNS4zODJoMTguNjE1djIuNDk5SDEwLjEyMg0KCQljLTAuMzU1LDAtMC42NDUsMC4yODktMC42NDUsMC42NDVjMCwwLjM1NywwLjI4OSwwLjY0NSwwLjY0NSwwLjY0NUgyMy45OWMwLjA1NCwwLDAuMTA0LTAuMDA4LDAuMTUzLTAuMDINCgkJYzAuMDc5LTAuMDEyLDAuMTU2LTAuMDM3LDAuMjI4LTAuMDc4bDIuODQtMS42NDFWMjMuNTF6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNzgsMTUuNzU4Yy0wLjItMC4xMTUtMC40NDUtMC4xMTUtMC42NDYsMGwtMi44MzksMS42Mzl2LTIuNjU5YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTYNCgkJcy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wNTZjMS4wNi0wLjkzNywxLjcyOS0yLjMwNSwxLjcyOS0zLjgzMUMyMy43MjIsNy40MzgsMjEuNDM0LDUuMTUsMTguNjEsNS4xNQ0KCQljLTIuODI0LDAtNS4xMTIsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUyNiwwLjY2OSwyLjg5NSwxLjcyOSwzLjgzMUgxMS43Nm'+
			'MwLjY0NC0wLjcwMiwxLjAzNy0xLjYzOCwxLjAzOC0yLjY2Ng0KCQljLTAuMDAxLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0N2MwLDEuMDI4LDAuMzk0LDEuOTY0LDEuMDM3LDIuNjY2SDQuMTQ0DQoJCWMtMC4xNjksMC0wLjMzNSwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDIsMy41LDE0LjU2OCwzLjUsMTQuNzM3djExLjQ2OGMwLDAuMTcsMC4wNjgsMC4zMzYsMC4xODgsMC40NTcNCgkJYzAuMTIsMC4xMTksMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA1YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OGMwLjEy'+
			'LTAuMTIxLDAuMTg4LTAuMjg3LDAuMTg4LTAuNDU3di0yLjY2bDIuODM5LDEuNjQxDQoJCWMwLjIsMC4xMTUsMC40NDUsMC4xMTUsMC42NDYsMGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OXYtOC4zMTFDMjguNSwxNi4wODYsMjguMzc3LDE1Ljg3MywyOC4xNzgsMTUuNzU4eg0KCQkgTTE0Ljc4OCwxMC4yNjJjMC4wMDQtMi4xMTEsMS43MTItMy44MTgsMy44MjMtMy44MjJjMi4xMTEsMC4wMDQsMy44MTksMS43MTEsMy44MjMsMy44MjJjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzDQoJCUMxNi41LDE0LjA4MSwxNC43OTIsMTIuMzczLDE0Ljc4OCwxMC4yNj'+
			'J6IE04Ljg1MSw4Ljc2OWMxLjQ2OCwwLjAwMywyLjY1NSwxLjE5LDIuNjU4LDIuNjU4Yy0wLjAwMiwxLjQ2OC0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3DQoJCWMtMS40NjctMC4wMDItMi42NTUtMS4xODktMi42NTctMi42NTdDNi4xOTYsOS45NTksNy4zODMsOC43NzIsOC44NTEsOC43Njl6IE0yNy4yMTEsMjMuNTFsLTIuODQtMS42MzkNCgkJYy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwcy0wLjMyMiwwLjMyOC0wLjMyMiwwLjU1OXYzLjEzMUg0Ljc4OVYxNS4zODJoMTguNjE1djIuNDk5SDEwLjEyMg0KCQljLTAuMzU1LDAtMC42NDUsMC4yODktMC42NDUsMC42NDVjMCwwLjM1Nyww'+
			'LjI4OSwwLjY0NSwwLjY0NSwwLjY0NUgyMy45OWMwLjA1NCwwLDAuMTA0LTAuMDA4LDAuMTUzLTAuMDINCgkJYzAuMDc5LTAuMDEyLDAuMTU2LTAuMDM3LDAuMjI4LTAuMDc4bDIuODQtMS42NDFWMjMuNTF6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_file_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_file_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_file_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_image.onmouseover=function (e) {
			me._ht_video_file_image__img.style.visibility='hidden';
			me._ht_video_file_image__imgo.style.visibility='inherit';
		}
		me._ht_video_file_image.onmouseout=function (e) {
			me._ht_video_file_image__img.style.visibility='inherit';
			me._ht_video_file_image__imgo.style.visibility='hidden';
		}
		me._ht_video_file_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_image);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_file.style.top='-50px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_file.ggDx=0;
					me._tt_ht_video_file.style.top='22px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_file'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
				else {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
			}
		}
		me._ht_video_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url.style.visibility=me._ht_video_url.ggVisible?'inherit':'hidden';
					me._ht_video_url.style.opacity=1;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.style.opacity=0;
				}
			}
		}
		me._ht_video_url.onclick=function (e) {
			skin._popup_video_url.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_popup_url', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._tt_ht_video_url1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_url.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url1.logicBlock_visible();
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_image2=document.createElement('div');
		els=me._ht_video_url_image2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguMTc4LDE1Ljc1OGMtMC4yLTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ2LDBsLTIuODM5LDEuNjM5di0yLjY1OWMwLTAuMTY5LTAuMDY4LTAuMzM1LTAuMTg4LTAuNDU2DQoJCXMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDU2YzEuMDYtMC45MzcsMS43MjktMi4zMDUsMS43MjktMy44MzFDMjMuNzIyLDcuNDM4LDIxLjQzNCw1LjE1LDE4'+
			'LjYxLDUuMTUNCgkJYy0yLjgyNCwwLTUuMTEyLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MjYsMC42NjksMi44OTUsMS43MjksMy44MzFIMTEuNzZjMC42NDQtMC43MDIsMS4wMzctMS42MzgsMS4wMzgtMi42NjYNCgkJYy0wLjAwMS0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDdjMCwxLjAyOCwwLjM5NCwxLjk2NCwxLjAzNywyLjY2Nkg0LjE0NA0KCQljLTAuMTY5LDAtMC4zMzUsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDAyLDMuNSwxNC41NjgsMy41LDE0LjczN3YxMS40NjhjMCwwLjE3LDAuMDY4LDAuMzM2LDAuMTg4LDAuND'+
			'U3DQoJCWMwLjEyLDAuMTE5LDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNWMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODhjMC4xMi0wLjEyMSwwLjE4OC0wLjI4NywwLjE4OC0wLjQ1N3YtMi42NmwyLjgzOSwxLjY0MQ0KCQljMC4yLDAuMTE1LDAuNDQ1LDAuMTE1LDAuNjQ2LDBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTl2LTguMzExQzI4LjUsMTYuMDg2LDI4LjM3NywxNS44NzMsMjguMTc4LDE1Ljc1OHoNCgkJIE0xNC43ODgsMTAuMjYyYzAuMDA0LTIuMTExLDEuNzEyLTMuODE4LDMuODIzLTMuODIyYzIuMTExLDAuMDA0LDMuODE5LDEuNzExLDMuODIzLDMu'+
			'ODIyYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMw0KCQlDMTYuNSwxNC4wODEsMTQuNzkyLDEyLjM3MywxNC43ODgsMTAuMjYyeiBNOC44NTEsOC43NjljMS40NjgsMC4wMDMsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjgtMS4xOSwyLjY1NS0yLjY1OCwyLjY1Nw0KCQljLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTg5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTU5LDcuMzgzLDguNzcyLDguODUxLDguNzY5eiBNMjcuMjExLDIzLjUxbC0yLjg0LTEuNjM5DQoJCWMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMHMtMC4zMjIsMC4zMjgtMC4zMjIsMC41NTl2My'+
			'4xMzFINC43ODlWMTUuMzgyaDE4LjYxNXYyLjQ5OUgxMC4xMjINCgkJYy0wLjM1NSwwLTAuNjQ1LDAuMjg5LTAuNjQ1LDAuNjQ1YzAsMC4zNTcsMC4yODksMC42NDUsMC42NDUsMC42NDVIMjMuOTljMC4wNTQsMCwwLjEwNC0wLjAwOCwwLjE1My0wLjAyDQoJCWMwLjA3OS0wLjAxMiwwLjE1Ni0wLjAzNywwLjIyOC0wLjA3OGwyLjg0LTEuNjQxVjIzLjUxeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTI4LjE3OCwxNS43NThjLTAuMi0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NiwwbC0yLjgzOSwxLjYzOXYt'+
			'Mi42NTljMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1Ng0KCQlzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA1NmMxLjA2LTAuOTM3LDEuNzI5LTIuMzA1LDEuNzI5LTMuODMxQzIzLjcyMiw3LjQzOCwyMS40MzQsNS4xNSwxOC42MSw1LjE1DQoJCWMtMi44MjQsMC01LjExMiwyLjI4OS01LjExMiw1LjExMmMwLDEuNTI2LDAuNjY5LDIuODk1LDEuNzI5LDMuODMxSDExLjc2YzAuNjQ0LTAuNzAyLDEuMDM3LTEuNjM4LDEuMDM4LTIuNjY2DQoJCWMtMC4wMDEtMi4xOC0xLjc2Ny0zLjk0Ni0zLjk0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3YzAsMS4wMjgsMC'+
			'4zOTQsMS45NjQsMS4wMzcsMi42NjZINC4xNDQNCgkJYy0wLjE2OSwwLTAuMzM1LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwMiwzLjUsMTQuNTY4LDMuNSwxNC43Mzd2MTEuNDY4YzAsMC4xNywwLjA2OCwwLjMzNiwwLjE4OCwwLjQ1Nw0KCQljMC4xMiwwLjExOSwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDVjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4YzAuMTItMC4xMjEsMC4xODgtMC4yODcsMC4xODgtMC40NTd2LTIuNjZsMi44MzksMS42NDENCgkJYzAuMiwwLjExNSwwLjQ0NSwwLjExNSwwLjY0NiwwYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU5'+
			'di04LjMxMUMyOC41LDE2LjA4NiwyOC4zNzcsMTUuODczLDI4LjE3OCwxNS43NTh6DQoJCSBNMTQuNzg4LDEwLjI2MmMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOCwzLjgyMy0zLjgyMmMyLjExMSwwLjAwNCwzLjgxOSwxLjcxMSwzLjgyMywzLjgyMmMtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMNCgkJQzE2LjUsMTQuMDgxLDE0Ljc5MiwxMi4zNzMsMTQuNzg4LDEwLjI2MnogTTguODUxLDguNzY5YzEuNDY4LDAuMDAzLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY4LTEuMTksMi42NTUtMi42NTgsMi42NTcNCgkJYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE4OS0yLj'+
			'Y1Ny0yLjY1N0M2LjE5Niw5Ljk1OSw3LjM4Myw4Ljc3Miw4Ljg1MSw4Ljc2OXogTTI3LjIxMSwyMy41MWwtMi44NC0xLjYzOQ0KCQljLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDBzLTAuMzIyLDAuMzI4LTAuMzIyLDAuNTU5djMuMTMxSDQuNzg5VjE1LjM4MmgxOC42MTV2Mi40OTlIMTAuMTIyDQoJCWMtMC4zNTUsMC0wLjY0NSwwLjI4OS0wLjY0NSwwLjY0NWMwLDAuMzU3LDAuMjg5LDAuNjQ1LDAuNjQ1LDAuNjQ1SDIzLjk5YzAuMDU0LDAsMC4xMDQtMC4wMDgsMC4xNTMtMC4wMg0KCQljMC4wNzktMC4wMTIsMC4xNTYtMC4wMzcsMC4yMjgtMC4wNzhsMi44NC0xLjY0MVYyMy41MXoi'+
			'Lz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_video_url_image2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_url_image2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_image2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNzgsMTUuNzU4Yy0wLjItMC4xMTUtMC40NDUtMC4xMTUtMC42NDYsMGwtMi44MzksMS42Mzl2LTIuNjU5YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTYNCgkJcy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wNTZjMS4w'+
			'Ni0wLjkzNywxLjcyOS0yLjMwNSwxLjcyOS0zLjgzMUMyMy43MjIsNy40MzgsMjEuNDM0LDUuMTUsMTguNjEsNS4xNQ0KCQljLTIuODI0LDAtNS4xMTIsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUyNiwwLjY2OSwyLjg5NSwxLjcyOSwzLjgzMUgxMS43NmMwLjY0NC0wLjcwMiwxLjAzNy0xLjYzOCwxLjAzOC0yLjY2Ng0KCQljLTAuMDAxLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0N2MwLDEuMDI4LDAuMzk0LDEuOTY0LDEuMDM3LDIuNjY2SDQuMTQ0DQoJCWMtMC4xNjksMC0wLjMzNSwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MD'+
			'IsMy41LDE0LjU2OCwzLjUsMTQuNzM3djExLjQ2OGMwLDAuMTcsMC4wNjgsMC4zMzYsMC4xODgsMC40NTcNCgkJYzAuMTIsMC4xMTksMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA1YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OGMwLjEyLTAuMTIxLDAuMTg4LTAuMjg3LDAuMTg4LTAuNDU3di0yLjY2bDIuODM5LDEuNjQxDQoJCWMwLjIsMC4xMTUsMC40NDUsMC4xMTUsMC42NDYsMGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OXYtOC4zMTFDMjguNSwxNi4wODYsMjguMzc3LDE1Ljg3MywyOC4xNzgsMTUuNzU4eg0KCQkgTTE0Ljc4OCwxMC4yNjJjMC4wMDQtMi4x'+
			'MTEsMS43MTItMy44MTgsMy44MjMtMy44MjJjMi4xMTEsMC4wMDQsMy44MTksMS43MTEsMy44MjMsMy44MjJjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzDQoJCUMxNi41LDE0LjA4MSwxNC43OTIsMTIuMzczLDE0Ljc4OCwxMC4yNjJ6IE04Ljg1MSw4Ljc2OWMxLjQ2OCwwLjAwMywyLjY1NSwxLjE5LDIuNjU4LDIuNjU4Yy0wLjAwMiwxLjQ2OC0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3DQoJCWMtMS40NjctMC4wMDItMi42NTUtMS4xODktMi42NTctMi42NTdDNi4xOTYsOS45NTksNy4zODMsOC43NzIsOC44NTEsOC43Njl6IE0yNy4yMTEsMjMuNTFsLTIuODQtMS42MzkNCgkJYy'+
			'0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwcy0wLjMyMiwwLjMyOC0wLjMyMiwwLjU1OXYzLjEzMUg0Ljc4OVYxNS4zODJoMTguNjE1djIuNDk5SDEwLjEyMg0KCQljLTAuMzU1LDAtMC42NDUsMC4yODktMC42NDUsMC42NDVjMCwwLjM1NywwLjI4OSwwLjY0NSwwLjY0NSwwLjY0NUgyMy45OWMwLjA1NCwwLDAuMTA0LTAuMDA4LDAuMTUzLTAuMDINCgkJYzAuMDc5LTAuMDEyLDAuMTU2LTAuMDM3LDAuMjI4LTAuMDc4bDIuODQtMS42NDFWMjMuNTF6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNzgsMTUuNzU4Yy0wLjItMC4xMTUtMC40NDUtMC4xMTUtMC42NDYsMGwtMi44MzksMS42Mzl2LTIuNjU5YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTYNCgkJcy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wNTZjMS4wNi0wLjkzNywxLjcyOS0yLjMwNSwxLjcyOS0zLjgzMUMyMy43MjIsNy40MzgsMjEuNDM0LDUuMTUsMTguNjEsNS4xNQ0KCQljLTIuODI0LDAtNS4xMTIsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUyNiwwLjY2OSwyLjg5NSwxLjcyOSwzLjgzMUgxMS43Nm'+
			'MwLjY0NC0wLjcwMiwxLjAzNy0xLjYzOCwxLjAzOC0yLjY2Ng0KCQljLTAuMDAxLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0N2MwLDEuMDI4LDAuMzk0LDEuOTY0LDEuMDM3LDIuNjY2SDQuMTQ0DQoJCWMtMC4xNjksMC0wLjMzNSwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDIsMy41LDE0LjU2OCwzLjUsMTQuNzM3djExLjQ2OGMwLDAuMTcsMC4wNjgsMC4zMzYsMC4xODgsMC40NTcNCgkJYzAuMTIsMC4xMTksMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA1YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OGMwLjEy'+
			'LTAuMTIxLDAuMTg4LTAuMjg3LDAuMTg4LTAuNDU3di0yLjY2bDIuODM5LDEuNjQxDQoJCWMwLjIsMC4xMTUsMC40NDUsMC4xMTUsMC42NDYsMGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OXYtOC4zMTFDMjguNSwxNi4wODYsMjguMzc3LDE1Ljg3MywyOC4xNzgsMTUuNzU4eg0KCQkgTTE0Ljc4OCwxMC4yNjJjMC4wMDQtMi4xMTEsMS43MTItMy44MTgsMy44MjMtMy44MjJjMi4xMTEsMC4wMDQsMy44MTksMS43MTEsMy44MjMsMy44MjJjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzDQoJCUMxNi41LDE0LjA4MSwxNC43OTIsMTIuMzczLDE0Ljc4OCwxMC4yNj'+
			'J6IE04Ljg1MSw4Ljc2OWMxLjQ2OCwwLjAwMywyLjY1NSwxLjE5LDIuNjU4LDIuNjU4Yy0wLjAwMiwxLjQ2OC0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3DQoJCWMtMS40NjctMC4wMDItMi42NTUtMS4xODktMi42NTctMi42NTdDNi4xOTYsOS45NTksNy4zODMsOC43NzIsOC44NTEsOC43Njl6IE0yNy4yMTEsMjMuNTFsLTIuODQtMS42MzkNCgkJYy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwcy0wLjMyMiwwLjMyOC0wLjMyMiwwLjU1OXYzLjEzMUg0Ljc4OVYxNS4zODJoMTguNjE1djIuNDk5SDEwLjEyMg0KCQljLTAuMzU1LDAtMC42NDUsMC4yODktMC42NDUsMC42NDVjMCwwLjM1Nyww'+
			'LjI4OSwwLjY0NSwwLjY0NSwwLjY0NUgyMy45OWMwLjA1NCwwLDAuMTA0LTAuMDA4LDAuMTUzLTAuMDINCgkJYzAuMDc5LTAuMDEyLDAuMTU2LTAuMDM3LDAuMjI4LTAuMDc4bDIuODQtMS42NDFWMjMuNTF6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_url_image2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_url_image2;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_image2.onmouseover=function (e) {
			me._ht_video_url_image2__img.style.visibility='hidden';
			me._ht_video_url_image2__imgo.style.visibility='inherit';
		}
		me._ht_video_url_image2.onmouseout=function (e) {
			me._ht_video_url_image2__img.style.visibility='inherit';
			me._ht_video_url_image2__imgo.style.visibility='hidden';
		}
		me._ht_video_url_image2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_image2);
		el=me._tt_ht_video_url1=document.createElement('div');
		els=me._tt_ht_video_url1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_url1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_url1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_url1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_url1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_url1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_url1.style.top='-50px';
					me._tt_ht_video_url1.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_url1.ggDx=0;
					me._tt_ht_video_url1.style.top='22px';
					me._tt_ht_video_url1.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_url1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_url'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url1.style.visibility=(Number(me._tt_ht_video_url1.style.opacity)>0||!me._tt_ht_video_url1.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url1.ggVisible=true;
				}
				else {
					me._tt_ht_video_url1.style.visibility="hidden";
					me._tt_ht_video_url1.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_url1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_url.appendChild(me._tt_ht_video_url1);
		me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
				else {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo.style.visibility=me._ht_video_vimeo.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo.style.opacity=1;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo.onclick=function (e) {
			skin._popup_video_vimeo.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_popup_vimeo', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._tt_ht_video_vimeo.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_vimeo.ontouchend=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_image=document.createElement('div');
		els=me._ht_video_vimeo_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguMTc4LDE1Ljc1OGMtMC4yLTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ2LDBsLTIuODM5LDEuNjM5di0yLjY1OWMwLTAuMTY5LTAuMDY4LTAuMzM1LTAuMTg4LTAuNDU2DQoJCXMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDU2YzEuMDYtMC45MzcsMS43MjktMi4zMDUsMS43MjktMy44MzFDMjMuNzIyLDcuNDM4LDIxLjQzNCw1LjE1LDE4'+
			'LjYxLDUuMTUNCgkJYy0yLjgyNCwwLTUuMTEyLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MjYsMC42NjksMi44OTUsMS43MjksMy44MzFIMTEuNzZjMC42NDQtMC43MDIsMS4wMzctMS42MzgsMS4wMzgtMi42NjYNCgkJYy0wLjAwMS0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDdjMCwxLjAyOCwwLjM5NCwxLjk2NCwxLjAzNywyLjY2Nkg0LjE0NA0KCQljLTAuMTY5LDAtMC4zMzUsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDAyLDMuNSwxNC41NjgsMy41LDE0LjczN3YxMS40NjhjMCwwLjE3LDAuMDY4LDAuMzM2LDAuMTg4LDAuND'+
			'U3DQoJCWMwLjEyLDAuMTE5LDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNWMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODhjMC4xMi0wLjEyMSwwLjE4OC0wLjI4NywwLjE4OC0wLjQ1N3YtMi42NmwyLjgzOSwxLjY0MQ0KCQljMC4yLDAuMTE1LDAuNDQ1LDAuMTE1LDAuNjQ2LDBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTl2LTguMzExQzI4LjUsMTYuMDg2LDI4LjM3NywxNS44NzMsMjguMTc4LDE1Ljc1OHoNCgkJIE0xNC43ODgsMTAuMjYyYzAuMDA0LTIuMTExLDEuNzEyLTMuODE4LDMuODIzLTMuODIyYzIuMTExLDAuMDA0LDMuODE5LDEuNzExLDMuODIzLDMu'+
			'ODIyYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMw0KCQlDMTYuNSwxNC4wODEsMTQuNzkyLDEyLjM3MywxNC43ODgsMTAuMjYyeiBNOC44NTEsOC43NjljMS40NjgsMC4wMDMsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjgtMS4xOSwyLjY1NS0yLjY1OCwyLjY1Nw0KCQljLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTg5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTU5LDcuMzgzLDguNzcyLDguODUxLDguNzY5eiBNMjcuMjExLDIzLjUxbC0yLjg0LTEuNjM5DQoJCWMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMHMtMC4zMjIsMC4zMjgtMC4zMjIsMC41NTl2My'+
			'4xMzFINC43ODlWMTUuMzgyaDE4LjYxNXYyLjQ5OUgxMC4xMjINCgkJYy0wLjM1NSwwLTAuNjQ1LDAuMjg5LTAuNjQ1LDAuNjQ1YzAsMC4zNTcsMC4yODksMC42NDUsMC42NDUsMC42NDVIMjMuOTljMC4wNTQsMCwwLjEwNC0wLjAwOCwwLjE1My0wLjAyDQoJCWMwLjA3OS0wLjAxMiwwLjE1Ni0wLjAzNywwLjIyOC0wLjA3OGwyLjg0LTEuNjQxVjIzLjUxeiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTI4LjE3OCwxNS43NThjLTAuMi0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NiwwbC0yLjgzOSwxLjYzOXYt'+
			'Mi42NTljMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1Ng0KCQlzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA1NmMxLjA2LTAuOTM3LDEuNzI5LTIuMzA1LDEuNzI5LTMuODMxQzIzLjcyMiw3LjQzOCwyMS40MzQsNS4xNSwxOC42MSw1LjE1DQoJCWMtMi44MjQsMC01LjExMiwyLjI4OS01LjExMiw1LjExMmMwLDEuNTI2LDAuNjY5LDIuODk1LDEuNzI5LDMuODMxSDExLjc2YzAuNjQ0LTAuNzAyLDEuMDM3LTEuNjM4LDEuMDM4LTIuNjY2DQoJCWMtMC4wMDEtMi4xOC0xLjc2Ny0zLjk0Ni0zLjk0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3YzAsMS4wMjgsMC'+
			'4zOTQsMS45NjQsMS4wMzcsMi42NjZINC4xNDQNCgkJYy0wLjE2OSwwLTAuMzM1LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwMiwzLjUsMTQuNTY4LDMuNSwxNC43Mzd2MTEuNDY4YzAsMC4xNywwLjA2OCwwLjMzNiwwLjE4OCwwLjQ1Nw0KCQljMC4xMiwwLjExOSwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDVjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4YzAuMTItMC4xMjEsMC4xODgtMC4yODcsMC4xODgtMC40NTd2LTIuNjZsMi44MzksMS42NDENCgkJYzAuMiwwLjExNSwwLjQ0NSwwLjExNSwwLjY0NiwwYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU5'+
			'di04LjMxMUMyOC41LDE2LjA4NiwyOC4zNzcsMTUuODczLDI4LjE3OCwxNS43NTh6DQoJCSBNMTQuNzg4LDEwLjI2MmMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOCwzLjgyMy0zLjgyMmMyLjExMSwwLjAwNCwzLjgxOSwxLjcxMSwzLjgyMywzLjgyMmMtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMNCgkJQzE2LjUsMTQuMDgxLDE0Ljc5MiwxMi4zNzMsMTQuNzg4LDEwLjI2MnogTTguODUxLDguNzY5YzEuNDY4LDAuMDAzLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY4LTEuMTksMi42NTUtMi42NTgsMi42NTcNCgkJYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE4OS0yLj'+
			'Y1Ny0yLjY1N0M2LjE5Niw5Ljk1OSw3LjM4Myw4Ljc3Miw4Ljg1MSw4Ljc2OXogTTI3LjIxMSwyMy41MWwtMi44NC0xLjYzOQ0KCQljLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDBzLTAuMzIyLDAuMzI4LTAuMzIyLDAuNTU5djMuMTMxSDQuNzg5VjE1LjM4MmgxOC42MTV2Mi40OTlIMTAuMTIyDQoJCWMtMC4zNTUsMC0wLjY0NSwwLjI4OS0wLjY0NSwwLjY0NWMwLDAuMzU3LDAuMjg5LDAuNjQ1LDAuNjQ1LDAuNjQ1SDIzLjk5YzAuMDU0LDAsMC4xMDQtMC4wMDgsMC4xNTMtMC4wMg0KCQljMC4wNzktMC4wMTIsMC4xNTYtMC4wMzcsMC4yMjgtMC4wNzhsMi44NC0xLjY0MVYyMy41MXoi'+
			'Lz4NCgk8L2c+Cjwvc3ZnPg==';
		me._ht_video_vimeo_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_vimeo_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNzgsMTUuNzU4Yy0wLjItMC4xMTUtMC40NDUtMC4xMTUtMC42NDYsMGwtMi44MzksMS42Mzl2LTIuNjU5YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTYNCgkJcy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wNTZjMS4w'+
			'Ni0wLjkzNywxLjcyOS0yLjMwNSwxLjcyOS0zLjgzMUMyMy43MjIsNy40MzgsMjEuNDM0LDUuMTUsMTguNjEsNS4xNQ0KCQljLTIuODI0LDAtNS4xMTIsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUyNiwwLjY2OSwyLjg5NSwxLjcyOSwzLjgzMUgxMS43NmMwLjY0NC0wLjcwMiwxLjAzNy0xLjYzOCwxLjAzOC0yLjY2Ng0KCQljLTAuMDAxLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0N2MwLDEuMDI4LDAuMzk0LDEuOTY0LDEuMDM3LDIuNjY2SDQuMTQ0DQoJCWMtMC4xNjksMC0wLjMzNSwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MD'+
			'IsMy41LDE0LjU2OCwzLjUsMTQuNzM3djExLjQ2OGMwLDAuMTcsMC4wNjgsMC4zMzYsMC4xODgsMC40NTcNCgkJYzAuMTIsMC4xMTksMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA1YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OGMwLjEyLTAuMTIxLDAuMTg4LTAuMjg3LDAuMTg4LTAuNDU3di0yLjY2bDIuODM5LDEuNjQxDQoJCWMwLjIsMC4xMTUsMC40NDUsMC4xMTUsMC42NDYsMGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OXYtOC4zMTFDMjguNSwxNi4wODYsMjguMzc3LDE1Ljg3MywyOC4xNzgsMTUuNzU4eg0KCQkgTTE0Ljc4OCwxMC4yNjJjMC4wMDQtMi4x'+
			'MTEsMS43MTItMy44MTgsMy44MjMtMy44MjJjMi4xMTEsMC4wMDQsMy44MTksMS43MTEsMy44MjMsMy44MjJjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzDQoJCUMxNi41LDE0LjA4MSwxNC43OTIsMTIuMzczLDE0Ljc4OCwxMC4yNjJ6IE04Ljg1MSw4Ljc2OWMxLjQ2OCwwLjAwMywyLjY1NSwxLjE5LDIuNjU4LDIuNjU4Yy0wLjAwMiwxLjQ2OC0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3DQoJCWMtMS40NjctMC4wMDItMi42NTUtMS4xODktMi42NTctMi42NTdDNi4xOTYsOS45NTksNy4zODMsOC43NzIsOC44NTEsOC43Njl6IE0yNy4yMTEsMjMuNTFsLTIuODQtMS42MzkNCgkJYy'+
			'0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwcy0wLjMyMiwwLjMyOC0wLjMyMiwwLjU1OXYzLjEzMUg0Ljc4OVYxNS4zODJoMTguNjE1djIuNDk5SDEwLjEyMg0KCQljLTAuMzU1LDAtMC42NDUsMC4yODktMC42NDUsMC42NDVjMCwwLjM1NywwLjI4OSwwLjY0NSwwLjY0NSwwLjY0NUgyMy45OWMwLjA1NCwwLDAuMTA0LTAuMDA4LDAuMTUzLTAuMDINCgkJYzAuMDc5LTAuMDEyLDAuMTU2LTAuMDM3LDAuMjI4LTAuMDc4bDIuODQtMS42NDFWMjMuNTF6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0'+
			'cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNzgsMTUuNzU4Yy0wLjItMC4xMTUtMC40NDUtMC4xMTUtMC42NDYsMGwtMi44MzksMS42Mzl2LTIuNjU5YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTYNCgkJcy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wNTZjMS4wNi0wLjkzNywxLjcyOS0yLjMwNSwxLjcyOS0zLjgzMUMyMy43MjIsNy40MzgsMjEuNDM0LDUuMTUsMTguNjEsNS4xNQ0KCQljLTIuODI0LDAtNS4xMTIsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUyNiwwLjY2OSwyLjg5NSwxLjcyOSwzLjgzMUgxMS43Nm'+
			'MwLjY0NC0wLjcwMiwxLjAzNy0xLjYzOCwxLjAzOC0yLjY2Ng0KCQljLTAuMDAxLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0N2MwLDEuMDI4LDAuMzk0LDEuOTY0LDEuMDM3LDIuNjY2SDQuMTQ0DQoJCWMtMC4xNjksMC0wLjMzNSwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDIsMy41LDE0LjU2OCwzLjUsMTQuNzM3djExLjQ2OGMwLDAuMTcsMC4wNjgsMC4zMzYsMC4xODgsMC40NTcNCgkJYzAuMTIsMC4xMTksMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA1YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OGMwLjEy'+
			'LTAuMTIxLDAuMTg4LTAuMjg3LDAuMTg4LTAuNDU3di0yLjY2bDIuODM5LDEuNjQxDQoJCWMwLjIsMC4xMTUsMC40NDUsMC4xMTUsMC42NDYsMGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OXYtOC4zMTFDMjguNSwxNi4wODYsMjguMzc3LDE1Ljg3MywyOC4xNzgsMTUuNzU4eg0KCQkgTTE0Ljc4OCwxMC4yNjJjMC4wMDQtMi4xMTEsMS43MTItMy44MTgsMy44MjMtMy44MjJjMi4xMTEsMC4wMDQsMy44MTksMS43MTEsMy44MjMsMy44MjJjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzDQoJCUMxNi41LDE0LjA4MSwxNC43OTIsMTIuMzczLDE0Ljc4OCwxMC4yNj'+
			'J6IE04Ljg1MSw4Ljc2OWMxLjQ2OCwwLjAwMywyLjY1NSwxLjE5LDIuNjU4LDIuNjU4Yy0wLjAwMiwxLjQ2OC0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3DQoJCWMtMS40NjctMC4wMDItMi42NTUtMS4xODktMi42NTctMi42NTdDNi4xOTYsOS45NTksNy4zODMsOC43NzIsOC44NTEsOC43Njl6IE0yNy4yMTEsMjMuNTFsLTIuODQtMS42MzkNCgkJYy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwcy0wLjMyMiwwLjMyOC0wLjMyMiwwLjU1OXYzLjEzMUg0Ljc4OVYxNS4zODJoMTguNjE1djIuNDk5SDEwLjEyMg0KCQljLTAuMzU1LDAtMC42NDUsMC4yODktMC42NDUsMC42NDVjMCwwLjM1Nyww'+
			'LjI4OSwwLjY0NSwwLjY0NSwwLjY0NUgyMy45OWMwLjA1NCwwLDAuMTA0LTAuMDA4LDAuMTUzLTAuMDINCgkJYzAuMDc5LTAuMDEyLDAuMTU2LTAuMDM3LDAuMjI4LTAuMDc4bDIuODQtMS42NDFWMjMuNTF6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._ht_video_vimeo_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_vimeo_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_vimeo_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_image.onmouseover=function (e) {
			me._ht_video_vimeo_image__img.style.visibility='hidden';
			me._ht_video_vimeo_image__imgo.style.visibility='inherit';
		}
		me._ht_video_vimeo_image.onmouseout=function (e) {
			me._ht_video_vimeo_image__img.style.visibility='inherit';
			me._ht_video_vimeo_image__imgo.style.visibility='hidden';
		}
		me._ht_video_vimeo_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_image);
		el=me._tt_ht_video_vimeo=document.createElement('div');
		els=me._tt_ht_video_vimeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_vimeo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_vimeo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_vimeo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_vimeo.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_vimeo.style.top='-50px';
					me._tt_ht_video_vimeo.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_vimeo.ggDx=0;
					me._tt_ht_video_vimeo.style.top='22px';
					me._tt_ht_video_vimeo.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_vimeo'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_vimeo.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_vimeo.style.visibility=(Number(me._tt_ht_video_vimeo.style.opacity)>0||!me._tt_ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_vimeo.ggVisible=true;
				}
				else {
					me._tt_ht_video_vimeo.style.visibility="hidden";
					me._tt_ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_vimeo.appendChild(me._tt_ht_video_vimeo);
		me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
				else {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube.style.visibility=me._ht_video_youtube.ggVisible?'inherit':'hidden';
					me._ht_video_youtube.style.opacity=1;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
			skin._popup_video_youtube.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_popup_youtube', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ontouchend=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_image=document.createElement('div');
		els=me._ht_video_youtube_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAgMTI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTI1OyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQuNCw2My4xYy0wLjEtMjUuNCwyMS4zLTQ2LjMsNDctNDUuN0M3NS4yLDE4LDk2LDM3LjcsOTUuOSw2My40Qzk1LjgsODguNyw3NS4zLDEwOS4xLDUwLDEwOQ0KCVM0LjMsODguMyw0LjQsNjMuMXogTTcyLDYzLjljLTAuNi0wLjgtMS4zLTEuNi0yLjEtMi4yYy05LjIt'+
			'NS40LTE4LjMtMTAuOC0yNy42LTE2LjJjLTIuMy0xLjMtNC4xLTAuNC00LjEsMi4yDQoJYy0wLjEsMTAuOC0wLjEsMjEuNywwLDMyLjVjMCwyLjYsMS44LDMuNyw0LjEsMi4zYzkuMy01LjQsMTguNS0xMC44LDI3LjgtMTYuM0M3MC44LDY1LjgsNzEuMiw2NC44LDcyLDYzLjlMNzIsNjMuOXoiLz4NCjwvc3ZnPg0K';
		me._ht_video_youtube_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_youtube_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAgMTI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTI1OyIgeG1sOnNwYW'+
			'NlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojQ0MwMjAyO3N0cm9rZS13aWR0aDo3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQuNCw2My4xYy0wLjEtMjUuNCwyMS4zLTQ2LjMsNDctNDUuN0M3NS4yLDE4LDk2LDM3LjcsOTUuOSw2My40Qzk1LjgsODguNyw3NS4zLDEwOS4xLDUwLDEwOQ0KCVM0LjMsODguMyw0LjQsNjMuMXogTTcyLDYzLjljLTAuNi0wLjgtMS4zLTEuNi0yLjEtMi4yYy05LjIt'+
			'NS40LTE4LjMtMTAuOC0yNy42LTE2LjJjLTIuMy0xLjMtNC4xLTAuNC00LjEsMi4yDQoJYy0wLjEsMTAuOC0wLjEsMjEuNywwLDMyLjVjMCwyLjYsMS44LDMuNyw0LjEsMi4zYzkuMy01LjQsMTguNS0xMC44LDI3LjgtMTYuM0M3MC44LDY1LjgsNzEuMiw2NC44LDcyLDYzLjlMNzIsNjMuOXoiLz4NCjwvc3ZnPg0K';
		me._ht_video_youtube_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_youtube_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_youtube_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_image.onmouseover=function (e) {
			me._ht_video_youtube_image__img.style.visibility='hidden';
			me._ht_video_youtube_image__imgo.style.visibility='inherit';
		}
		me._ht_video_youtube_image.onmouseout=function (e) {
			me._ht_video_youtube_image__img.style.visibility='inherit';
			me._ht_video_youtube_image__imgo.style.visibility='hidden';
		}
		me._ht_video_youtube_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_image);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_youtube.style.top='-50px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_youtube.ggDx=0;
					me._tt_ht_video_youtube.style.top='22px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_youtube'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_ht_catalogo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_catalogo=document.createElement('div');
		el.ggId="ht_catalogo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.4,sy:1.4 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_catalogo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_catalogo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_catalogo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_catalogo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_catalogo.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_catalogo.ggCurrentLogicStateVisible == 0) {
					me._ht_catalogo.style.visibility="hidden";
					me._ht_catalogo.ggVisible=false;
				}
				else {
					me._ht_catalogo.style.visibility=(Number(me._ht_catalogo.style.opacity)>0||!me._ht_catalogo.style.opacity)?'inherit':'hidden';
					me._ht_catalogo.ggVisible=true;
				}
			}
		}
		me._ht_catalogo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_timer') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_catalogo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_catalogo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_catalogo.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._ht_catalogo.ggCurrentLogicStateAlpha == 0) {
					me._ht_catalogo.style.visibility=me._ht_catalogo.ggVisible?'inherit':'hidden';
					me._ht_catalogo.style.opacity=1;
				}
				else {
					me._ht_catalogo.style.visibility="hidden";
					me._ht_catalogo.style.opacity=0;
				}
			}
		}
		me._ht_catalogo.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_catalogo.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_catalogo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_catalogo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_catalogo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_image=document.createElement('div');
		els=me._ht_video_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MiA2NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTIgNjU7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMi43LDQ5LjVIMTAuMWMtMS4zLDAtMi40LTEuMS0yLjQtMi40VjQuOWMwLTEuMywxLjEtMi40LDIuNC0yLjRoMzEuOGMxLjMsMCwyLjQsMS4xLDIuNCwyLjR2MzMNCgkJCQkJYzAsMC4zLTAuMiwwLjUtMC41LDAuNXMtMC41LTAuMi0wLjUtMC41di0zM2MwLTAuOC0wLjYtMS40LTEuNC0xLjRI'+
			'MTAuMWMtMC44LDAtMS40LDAuNi0xLjQsMS40djQyLjFjMCwwLjgsMC42LDEuNCwxLjQsMS40DQoJCQkJCWgyMi43YzAuMywwLDAuNSwwLjIsMC41LDAuNVMzMyw0OS41LDMyLjcsNDkuNXoiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMi43LDQ5LjVjLTAuMSwwLTAuMSwwLTAuMiwwYy0wLjItMC4xLTAuMy0wLjMtMC4zLTAuNXYtOC44YzAtMS42LDEuMy0yLjgsMi44LTIuOGg4LjgNCgkJCQkJYzAuMiwwLDAuNCwwLjEsMC41LDAuM2MwLjEsMC4yLDAsMC40LTAuMSwwLjVMMzMuMSw0OS40QzMzLDQ5LjQsMzIuOSw0OS41LDMyLjcsNDkuNXogTTM1LjEsMz'+
			'guNGMtMSwwLTEuOCwwLjgtMS44LDEuOHY3LjYNCgkJCQkJbDkuNC05LjRIMzUuMXoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNiw0MkgxNC4yYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41SDI2YzAuMywwLDAuNSwwLjIsMC41LDAuNVMyNi4zLDQyLDI2LDQyeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsMzMuNEgxNC4yYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDIzLjZjMC4zLDAsMC41LDAuMiwwLjUsMC41UzM4LjEsMzMuNCwz'+
			'Ny44LDMzLjR6Ig0KCQkJCQkvPg0KCQkJPC9nPg0KCQkJPGc+DQoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsMjUuOEgxNC4yYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDIzLjZjMC4zLDAsMC41LDAuMiwwLjUsMC41UzM4LjEsMjUuOCwzNy44LDI1Ljh6Ig0KCQkJCQkvPg0KCQkJPC9nPg0KCQkJPGc+DQoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsMTguM2gtOC41Yy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDguNWMwLjMsMCwwLjUsMC4yLDAuNSwwLjVTMzguMSwxOC4zLDM3LjgsMTguM3oiDQoJCQkJCS8+DQoJCQk8L2'+
			'c+DQoJCQk8Zz4NCgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcuOCwxMC43aC04LjVjLTAuMywwLTAuNS0wLjItMC41LTAuNXMwLjItMC41LDAuNS0wLjVoOC41YzAuMywwLDAuNSwwLjIsMC41LDAuNVMzOC4xLDEwLjcsMzcuOCwxMC43eiINCgkJCQkJLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjMsMjAuMWMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMi0wLjEtMC4zLTAuMy0wLjMtMC41VjNjMC0wLjMsMC4yLTAuNSwwLjUtMC41aDguNGMwLjMsMCwwLjUsMC4yLDAuNSwwLjUNCgkJCXYxNi42YzAsMC4yLTAuMSwwLjQtMC4zLDAu'+
			'NWMtMC4yLDAuMS0wLjQsMC0wLjYtMC4ybC0zLjgtNS4zbC0zLjgsNS4zQzE1LjYsMjAsMTUuNCwyMC4xLDE1LjMsMjAuMXogTTE1LjgsMy41VjE4bDMuMy00LjYNCgkJCWMwLjItMC4zLDAuNi0wLjMsMC44LDBsMy4zLDQuNlYzLjVIMTUuOHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_video_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MiA2NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTIgNjU7IiB4bWw6c3BhY2U9In'+
			'ByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMi43LDQ5LjVIMTAuMWMtMS4zLDAtMi40LTEuMS0yLjQtMi40VjQuOWMwLTEuMywxLjEtMi40LDIuNC0yLjRoMzEuOGMxLjMsMCwyLjQsMS4xLDIuNCwyLjR2MzMNCgkJCQkJYzAsMC4zLTAuMiwwLjUtMC41LDAuNXMtMC41LTAuMi0wLjUtMC41di0zM2MwLTAuOC0wLjYtMS40LTEuNC0xLjRI'+
			'MTAuMWMtMC44LDAtMS40LDAuNi0xLjQsMS40djQyLjFjMCwwLjgsMC42LDEuNCwxLjQsMS40DQoJCQkJCWgyMi43YzAuMywwLDAuNSwwLjIsMC41LDAuNVMzMyw0OS41LDMyLjcsNDkuNXoiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMi43LDQ5LjVjLTAuMSwwLTAuMSwwLTAuMiwwYy0wLjItMC4xLTAuMy0wLjMtMC4zLTAuNXYtOC44YzAtMS42LDEuMy0yLjgsMi44LTIuOGg4LjgNCgkJCQkJYzAuMiwwLDAuNCwwLjEsMC41LDAuM2MwLjEsMC4yLDAsMC40LTAuMSwwLjVMMzMuMSw0OS40QzMzLDQ5LjQsMzIuOSw0OS41LDMyLjcsNDkuNXogTTM1LjEsMz'+
			'guNGMtMSwwLTEuOCwwLjgtMS44LDEuOHY3LjYNCgkJCQkJbDkuNC05LjRIMzUuMXoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNiw0MkgxNC4yYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41SDI2YzAuMywwLDAuNSwwLjIsMC41LDAuNVMyNi4zLDQyLDI2LDQyeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsMzMuNEgxNC4yYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDIzLjZjMC4zLDAsMC41LDAuMiwwLjUsMC41UzM4LjEsMzMuNCwz'+
			'Ny44LDMzLjR6Ig0KCQkJCQkvPg0KCQkJPC9nPg0KCQkJPGc+DQoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsMjUuOEgxNC4yYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDIzLjZjMC4zLDAsMC41LDAuMiwwLjUsMC41UzM4LjEsMjUuOCwzNy44LDI1Ljh6Ig0KCQkJCQkvPg0KCQkJPC9nPg0KCQkJPGc+DQoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsMTguM2gtOC41Yy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDguNWMwLjMsMCwwLjUsMC4yLDAuNSwwLjVTMzguMSwxOC4zLDM3LjgsMTguM3oiDQoJCQkJCS8+DQoJCQk8L2'+
			'c+DQoJCQk8Zz4NCgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcuOCwxMC43aC04LjVjLTAuMywwLTAuNS0wLjItMC41LTAuNXMwLjItMC41LDAuNS0wLjVoOC41YzAuMywwLDAuNSwwLjIsMC41LDAuNVMzOC4xLDEwLjcsMzcuOCwxMC43eiINCgkJCQkJLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjMsMjAuMWMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMi0wLjEtMC4zLTAuMy0wLjMtMC41VjNjMC0wLjMsMC4yLTAuNSwwLjUtMC41aDguNGMwLjMsMCwwLjUsMC4yLDAuNSwwLjUNCgkJCXYxNi42YzAsMC4yLTAuMSwwLjQtMC4zLDAu'+
			'NWMtMC4yLDAuMS0wLjQsMC0wLjYtMC4ybC0zLjgtNS4zbC0zLjgsNS4zQzE1LjYsMjAsMTUuNCwyMC4xLDE1LjMsMjAuMXogTTE1LjgsMy41VjE4bDMuMy00LjYNCgkJCWMwLjItMC4zLDAuNi0wLjMsMC44LDBsMy4zLDQuNlYzLjVIMTUuOHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_video_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_image.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._ht_video_url_image.onmouseover=function (e) {
			me._ht_video_url_image__img.style.visibility='hidden';
			me._ht_video_url_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_image']=true;
			me._catalogo.logicBlock_visible();
		}
		me._ht_video_url_image.onmouseout=function (e) {
			me._ht_video_url_image__img.style.visibility='inherit';
			me._ht_video_url_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_image']=false;
			me._catalogo.logicBlock_visible();
		}
		me._ht_video_url_image.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url_image']=false;
			me._catalogo.logicBlock_visible();
		}
		me._ht_video_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._catalogo=document.createElement('div');
		els=me._catalogo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Catalogo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._catalogo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._catalogo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._catalogo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._catalogo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._catalogo.style[domTransition]='left 0s, top 0s';
				if (me._catalogo.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._catalogo.style.top='-50px';
					me._catalogo.ggUpdatePosition(true);
				}
				else {
					me._catalogo.ggDx=0;
					me._catalogo.style.top='38px';
					me._catalogo.ggUpdatePosition(true);
				}
			}
		}
		me._catalogo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_url_image'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._catalogo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._catalogo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._catalogo.style[domTransition]='left 0s, top 0s';
				if (me._catalogo.ggCurrentLogicStateVisible == 0) {
					me._catalogo.style.visibility=(Number(me._catalogo.style.opacity)>0||!me._catalogo.style.opacity)?'inherit':'hidden';
					me._catalogo.ggVisible=true;
				}
				else {
					me._catalogo.style.visibility="hidden";
					me._catalogo.ggVisible=false;
				}
			}
		}
		me._catalogo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_url_image.appendChild(me._catalogo);
		me._ht_catalogo.appendChild(me._ht_video_url_image);
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPGcgb3BhY2l0eT0iMC40IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9Ik0yOC4wODQsMTYNCgkJCQljMC02LjQ3Ny01LjI3LTExLjc0Ni0xMS43NDYtMTEuNzQ2QzkuODYxLDQuMjU0LDQuNTkyLDkuNTIyLDQuNTkyLDE2YzAsNi40MzIsNS4yLDExLjY3LDExLjYxNSwxMS43NDENCgkJCQljMC4wMzcsMC4wMDQsMC4wNzIsMC4wMDYsMC4xMDcsMC4wMDZjMC4wMTIsMCwwLjAyMi0wLjAwMiwwLjAzMi0wLjAwMkMyMi44MTksMjcuNzQsMjguMDg0LDIyLjQ3MywyOC4wODQsMTZ6IE01Ljk5MywxNi42ODYNCgkJCQloMy4zMDRjMC4wNTYsMS42NTYsMC4zMDYsMy4yMDksMC43MTYsNC42SDcuNDJDNi42MDgsMTkuOTIsNi4xMDMsMTguMzU5LDUuOTkzLDE2LjY4'+
			'NnogTTI2LjY4NCwxNS4zMTJoLTMuMzUyDQoJCQkJYy0wLjA1NS0xLjY1MS0wLjMwMy0zLjItMC43MTItNC41ODZoMi42NDRDMjYuMDcsMTIuMDg2LDI2LjU3MiwxMy42NDYsMjYuNjg0LDE1LjMxMnogTTIxLjk1NywxNS4zMTJoLTQuOTMydi00LjU4Nmg0LjEzDQoJCQkJQzIxLjYwNywxMi4wOTQsMjEuODk0LDEzLjY1NywyMS45NTcsMTUuMzEyeiBNMTcuMDI1LDkuMzUxVjUuNzE5YzEuNDE4LDAuMzQzLDIuNjg5LDEuNjkyLDMuNTg5LDMuNjMySDE3LjAyNXogTTE1LjY1MSw1LjcwNw0KCQkJCXYzLjY0NGgtMy42MzVDMTIuOTI0LDcuMzkxLDE0LjIxMyw2LjAzMywxNS42NTEsNS43MDd6IE0xNS'+
			'42NTEsMTAuNzI3djQuNTg2aC00Ljk3N2MwLjA2My0xLjY1NiwwLjM0Ny0zLjIxOSwwLjgtNC41ODZIMTUuNjUxeg0KCQkJCSBNOS4yOTcsMTUuMzEySDUuOTkzYzAuMTA4LTEuNjY2LDAuNjE0LTMuMjI2LDEuNDItNC41ODZoMi41OThDOS42MDIsMTIuMTEzLDkuMzUzLDEzLjY2MSw5LjI5NywxNS4zMTJ6IE0xMC42NzQsMTYuNjg2aDQuOTc3DQoJCQkJdjQuNmgtNC4xNzRDMTEuMDIyLDE5LjkxNCwxMC43MzcsMTguMzQ4LDEwLjY3NCwxNi42ODZ6IE0xNS42NTEsMjIuNjZ2My42MzNjLTEuNDM1LTAuMzI0LTIuNzIyLTEuNjc4LTMuNjMtMy42MzNIMTUuNjUxeg0KCQkJCSBNMTcuMDI1LDI2LjI4'+
			'MVYyMi42NmgzLjU4M0MxOS43MTEsMjQuNTk0LDE4LjQ0LDI1LjkzOSwxNy4wMjUsMjYuMjgxeiBNMTcuMDI1LDIxLjI4NXYtNC42aDQuOTMyDQoJCQkJYy0wLjA2MywxLjY2Mi0wLjM1LDMuMjI5LTAuODA1LDQuNkgxNy4wMjV6IE0yMy4zMzIsMTYuNjg2aDMuMzUyYy0wLjExMSwxLjY3NC0wLjYxNywzLjIzNC0xLjQyOCw0LjZoLTIuNjM5DQoJCQkJQzIzLjAyNywxOS44OTUsMjMuMjc3LDE4LjM0MiwyMy4zMzIsMTYuNjg2eiBNMjQuMjg5LDkuMzUxaC0yLjE0NWMtMC40NDctMS4xMDItMS4wMDItMi4wNjQtMS42NDUtMi44NDgNCgkJCQlDMjEuOTczLDcuMTUyLDIzLjI3LDguMTMyLDI0LjI4OS'+
			'w5LjM1MXogTTEyLjEwMyw2LjUzOGMtMC42MywwLjc3Ni0xLjE3NywxLjcyNy0xLjYxNiwyLjgxM0g4LjM4NQ0KCQkJCUM5LjM5MSw4LjE1MiwxMC42NTksNy4xODYsMTIuMTAzLDYuNTM4eiBNOC4zOTcsMjIuNjZoMi4wOTRjMC40MzgsMS4wODIsMC45ODEsMi4wMjcsMS42MDksMi44MDENCgkJCQlDMTAuNjYyLDI0LjgxNCw5LjM5OCwyMy44NTQsOC4zOTcsMjIuNjZ6IE0yMC41MDIsMjUuNDk0YzAuNjM5LTAuNzc5LDEuMTkyLTEuNzM4LDEuNjM4LTIuODM0aDIuMTQNCgkJCQlDMjMuMjYsMjMuODczLDIxLjk3LDI0Ljg1LDIwLjUwMiwyNS40OTR6Ii8+DQoJCTwvZz4NCgkJPHBhdGggZmlsbD0i'+
			'I0ZGRkZGRiIgZD0iTTE2LjE5NywyNy44NEM5Ljc0NywyNy43Nyw0LjQ5MiwyMi40NTgsNC40OTIsMTZjMC02LjUzMiw1LjMxNC0xMS44NDYsMTEuODQ2LTExLjg0Ng0KCQkJYzYuNTMyLDAsMTEuODQ2LDUuMzE0LDExLjg0NiwxMS44NDZjMCw2LjUyNy01LjMxLDExLjg0LTExLjgzNywxMS44NDRsLTAuMDMyLDAuMDAyQzE2LjI3NiwyNy44NDYsMTYuMjM3LDI3Ljg0NCwxNi4xOTcsMjcuODR6DQoJCQkgTTEyLjE3OCwyMi43NmMwLjg5NCwxLjg1NywyLjA4MywzLjA1OSwzLjM3MywzLjQwNVYyMi43NkgxMi4xNzh6IE0xNy4xMjUsMjYuMTUxYzEuMjcxLTAuMzYyLDIuNDQ0LTEuNTU5LDMuMzI1LT'+
			'MuMzkyaC0zLjMyNQ0KCQkJVjI2LjE1MXogTTIyLjIwNywyMi43NmMtMC4zODUsMC45MzUtMC44NDYsMS43NjMtMS4zNzEsMi40N2MxLjIxOS0wLjU5NywyLjMyNS0xLjQ0MiwzLjIyNi0yLjQ3SDIyLjIwN3ogTTguNjE0LDIyLjc2DQoJCQljMC44NzgsMS4wMDIsMS45NTgsMS44MzUsMy4xNTEsMi40MzJjLTAuNTE1LTAuNjk5LTAuOTY1LTEuNTE1LTEuMzQyLTIuNDMySDguNjE0eiBNNi4xLDE2Ljc4NQ0KCQkJYzAuMTIxLDEuNTg2LDAuNTkzLDMuMDgyLDEuNDA2LDQuNDQ5bDIuMzc1LTAuMDQ3QzkuNDg4LDE5LjgxNiw5LjI2LDE4LjMzNyw5LjIsMTYuNzg1SDYuMXogTTI1LjI1NiwyMS4xODYN'+
			'CgkJCWMwLjcyOC0xLjMyLDEuMTk5LTIuODE1LDEuMzItNC40aC0zLjE0N2MtMC4wNTksMS41NTEtMC4yODYsMy4wMjktMC42NzksNC40SDI1LjI1NnogTTIxLjA4LDIxLjE4Ng0KCQkJYzAuNDM4LTEuMzQ2LDAuNzA1LTIuODYzLDAuNzcyLTQuNGgtNC43Mjh2NC40SDIxLjA4eiBNMTUuNTUxLDIxLjE4NnYtNC40aC00Ljc3M2MwLjA2NywxLjUzNywwLjMzMywzLjA1NSwwLjc3MSw0LjRIMTUuNTUxeg0KCQkJIE0yNi41NzYsMTUuMjEyYy0wLjEyMS0xLjU2My0wLjYwNC0zLjA5NS0xLjM5OC00LjQzNWwtMi40MjUsMC4wNDdjMC4zOSwxLjM2MywwLjYxNywyLjgzOCwwLjY3Niw0LjM4OEgyNi41Nz'+
			'Z6IE0yMS44NTMsMTUuMjEyDQoJCQljLTAuMDY3LTEuNTI5LTAuMzMzLTMuMDQyLTAuNzctNC4zODZoLTMuOTU4djQuMzg2SDIxLjg1M3ogTTE1LjU1MSwxNS4yMTJ2LTQuMzg2aC00LjAwNWMtMC40MzYsMS4zNC0wLjcwMSwyLjg1My0wLjc2OCw0LjM4Ng0KCQkJSDE1LjU1MXogTTkuMiwxNS4yMTJjMC4wNi0xLjU0NywwLjI4Ny0zLjAyMSwwLjY3Ny00LjM4Nkg3LjQ3Yy0wLjc4MSwxLjMzNS0xLjI1MywyLjg0OC0xLjM3LDQuMzg2SDkuMnogTTI0LjA3Miw5LjI1MQ0KCQkJYy0wLjg5OS0xLjAyOS0yLjAwOS0xLjg4LTMuMjM3LTIuNDgyYzAuNTI3LDAuNzA5LDAuOTksMS41NDIsMS4zNzcsMi40'+
			'ODJIMjQuMDcyeiBNMjAuNDU2LDkuMjUxDQoJCQljLTAuODgyLTEuODM4LTIuMDU4LTMuMDM5LTMuMzMxLTMuNDAydjMuNDAySDIwLjQ1NnogTTE1LjU1MSw5LjI1MVY1LjgzNWMtMS4yOTIsMC4zNDgtMi40ODMsMS41NTMtMy4zNzcsMy40MTZIMTUuNTUxeg0KCQkJIE0xMC40MTksOS4yNTFjMC4zNzgtMC45MjEsMC44MzEtMS43NDIsMS4zNDktMi40NDRjLTEuMTk3LDAuNTk3LTIuMjgxLDEuNDM0LTMuMTY2LDIuNDQ0SDEwLjQxOXoiLz4NCgkJPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTTE2LjMzOCw0LjI1NGM2LjQ3NywwLDExLjc0Niw1LjI2OSwxMS43NDYsMTEuNzQ2YzAsNi40NzMtNS4yNj'+
			'UsMTEuNzQxLTExLjczNywxMS43NDUNCgkJCWMtMC4wMSwwLTAuMDIxLDAuMDAyLTAuMDMyLDAuMDAyYy0wLjAzNSwwLTAuMDctMC4wMDItMC4xMDctMC4wMDZDOS43OTIsMjcuNjcsNC41OTIsMjIuNDMyLDQuNTkyLDE2DQoJCQlDNC41OTIsOS41MjIsOS44NjEsNC4yNTQsMTYuMzM4LDQuMjU0IE0xMi4wMTYsOS4zNTFoMy42MzVWNS43MDdDMTQuMjEzLDYuMDMzLDEyLjkyNCw3LjM5MSwxMi4wMTYsOS4zNTEgTTE3LjAyNSw5LjM1MWgzLjU4OQ0KCQkJYy0wLjg5OS0xLjk0LTIuMTcxLTMuMjg5LTMuNTg5LTMuNjMyVjkuMzUxIE0yMi4xNDUsOS4zNTFoMi4xNDVjLTEuMDItMS4yMTktMi4zMTYt'+
			'Mi4xOTktMy43ODktMi44NDgNCgkJCUMyMS4xNDMsNy4yODcsMjEuNjk3LDguMjQ5LDIyLjE0NSw5LjM1MSBNOC4zODUsOS4zNTFoMi4xMDFjMC40MzktMS4wODYsMC45ODYtMi4wMzcsMS42MTYtMi44MTMNCgkJCUMxMC42NTksNy4xODYsOS4zOTEsOC4xNTIsOC4zODUsOS4zNTEgTTIzLjMzMiwxNS4zMTJoMy4zNTJjLTAuMTExLTEuNjY2LTAuNjEzLTMuMjI2LTEuNDItNC41ODZIMjIuNjINCgkJCUMyMy4wMjksMTIuMTEzLDIzLjI3NywxMy42NjEsMjMuMzMyLDE1LjMxMiBNMTcuMDI1LDE1LjMxMmg0LjkzMmMtMC4wNjMtMS42NTYtMC4zNS0zLjIxOS0wLjgwMi00LjU4NmgtNC4xM1YxNS4zMT'+
			'INCgkJCSBNMTAuNjc0LDE1LjMxMmg0Ljk3N3YtNC41ODZoLTQuMTc3QzExLjAyMSwxMi4wOTQsMTAuNzM3LDEzLjY1NywxMC42NzQsMTUuMzEyIE01Ljk5MywxNS4zMTJoMy4zMDQNCgkJCWMwLjA1Ni0xLjY1MSwwLjMwNS0zLjIsMC43MTMtNC41ODZINy40MTNDNi42MDcsMTIuMDg2LDYuMTAxLDEzLjY0Niw1Ljk5MywxNS4zMTIgTTIyLjYxNywyMS4yODVoMi42MzkNCgkJCWMwLjgxMS0xLjM2NSwxLjMxNi0yLjkyNiwxLjQyOC00LjZoLTMuMzUyQzIzLjI3NywxOC4zNDIsMjMuMDI3LDE5Ljg5NSwyMi42MTcsMjEuMjg1IE0xNy4wMjUsMjEuMjg1aDQuMTI3DQoJCQljMC40NTUtMS4zNzEsMC43'+
			'NDEtMi45MzgsMC44MDUtNC42aC00LjkzMlYyMS4yODUgTTExLjQ3NywyMS4yODVoNC4xNzR2LTQuNmgtNC45NzdDMTAuNzM3LDE4LjM0OCwxMS4wMjIsMTkuOTE0LDExLjQ3NywyMS4yODUNCgkJCSBNNy40MiwyMS4yODVoMi41OTNjLTAuNDEtMS4zOTEtMC42NjEtMi45NDMtMC43MTYtNC42SDUuOTkzQzYuMTAzLDE4LjM1OSw2LjYwOCwxOS45Miw3LjQyLDIxLjI4NSBNMjAuNTAyLDI1LjQ5NA0KCQkJYzEuNDY4LTAuNjQ1LDIuNzU4LTEuNjIxLDMuNzc3LTIuODM0aC0yLjE0QzIxLjY5NCwyMy43NTYsMjEuMTQxLDI0LjcxNSwyMC41MDIsMjUuNDk0IE0xNy4wMjUsMjYuMjgxDQoJCQljMS40MT'+
			'UtMC4zNDIsMi42ODYtMS42ODgsMy41ODMtMy42MjFoLTMuNTgzVjI2LjI4MSBNMTUuNjUxLDI2LjI5M1YyMi42NmgtMy42M0MxMi45MjksMjQuNjE1LDE0LjIxNiwyNS45NjksMTUuNjUxLDI2LjI5Mw0KCQkJIE0xMi4xLDI1LjQ2MWMtMC42MjctMC43NzMtMS4xNzEtMS43MTktMS42MDktMi44MDFIOC4zOTdDOS4zOTgsMjMuODU0LDEwLjY2MiwyNC44MTQsMTIuMSwyNS40NjEgTTE2LjMzOCw0LjA1NA0KCQkJQzkuNzUxLDQuMDU0LDQuMzkyLDkuNDEzLDQuMzkyLDE2YzAsNi41MTMsNS4yOTksMTEuODcsMTEuODEzLDExLjk0MWMwLjAyNSwwLjAwMywwLjA2NywwLjAwNiwwLjEwOSwwLjAwNg0K'+
			'CQkJYzYuNjE0LTAuMDA2LDExLjk3LTUuMzY0LDExLjk3LTExLjk0N0MyOC4yODQsOS40MTMsMjIuOTI1LDQuMDU0LDE2LjMzOCw0LjA1NEwxNi4zMzgsNC4wNTR6IE0xMi4zMzQsOS4xNTENCgkJCWMwLjg0Mi0xLjY5NCwxLjkzNS0yLjgxLDMuMTE3LTMuMTgzdjMuMTgzSDEyLjMzNEwxMi4zMzQsOS4xNTF6IE0xNy4yMjYsOS4xNTFWNS45ODRjMS4xNjMsMC4zODcsMi4yMzksMS40OTcsMy4wNywzLjE2N0gxNy4yMjYNCgkJCUwxNy4yMjYsOS4xNTF6IE0yMi4yNzgsOS4xNTFjLTAuMzI0LTAuNzc4LTAuNzAxLTEuNDgzLTEuMTI0LTIuMTA0YzEuMDA4LDAuNTQ1LDEuOTI0LDEuMjYsMi42OTQsMi'+
			'4xMDRIMjIuMjc4TDIyLjI3OCw5LjE1MXoNCgkJCSBNOC44MjYsOS4xNTFjMC43NTQtMC44MjQsMS42NDYtMS41MjUsMi42MjItMi4wNjJjLTAuNDEzLDAuNjEyLTAuNzc5LDEuMzAzLTEuMDk2LDIuMDYySDguODI2TDguODI2LDkuMTUxeiBNMjIuODg2LDEwLjkyNw0KCQkJaDIuMjY0YzAuNzM0LDEuMjcyLDEuMTg4LDIuNzEzLDEuMzE4LDQuMTg2aC0yLjk0M0MyMy40NjIsMTMuNjM5LDIzLjI0OCwxMi4yMzIsMjIuODg2LDEwLjkyN0wyMi44ODYsMTAuOTI3eiBNMTcuMjI2LDEwLjkyNw0KCQkJaDMuNzg0YzAuNDExLDEuMjg4LDAuNjY1LDIuNzI4LDAuNzM4LDQuMTg2aC00LjUyMlYxMC45MjdM'+
			'MTcuMjI2LDEwLjkyN3ogTTExLjYxOSwxMC45MjdoMy44MzJ2NC4xODZoLTQuNTY4DQoJCQlDMTAuOTU2LDEzLjY1LDExLjIwOSwxMi4yMSwxMS42MTksMTAuOTI3TDExLjYxOSwxMC45Mjd6IE03LjUyNywxMC45MjdoMi4yMThjLTAuMzYyLDEuMzA4LTAuNTc4LDIuNzEzLTAuNjQxLDQuMTg2SDYuMjA4DQoJCQlDNi4zMzYsMTMuNjQ2LDYuNzg5LDEyLjIwNSw3LjUyNywxMC45MjdMNy41MjcsMTAuOTI3eiBNMjMuNTI0LDE2Ljg4NmgyLjk0M2MtMC4xMywxLjQ5MS0wLjU3NSwyLjkwMy0xLjMyNiw0LjE5OWgtMi4yNTkNCgkJCUMyMy4yNDcsMTkuNzcxLDIzLjQ2MiwxOC4zNjEsMjMuNTI0LDE2Lj'+
			'g4NkwyMy41MjQsMTYuODg2eiBNMTcuMjI2LDE2Ljg4Nmg0LjUyMmMtMC4wNzMsMS40NjYtMC4zMjgsMi45MS0wLjc0MSw0LjE5OWgtMy43ODENCgkJCVYxNi44ODZMMTcuMjI2LDE2Ljg4NnogTTEwLjg4MywxNi44ODZoNC41Njh2NC4xOTloLTMuODI5QzExLjIwOSwxOS43OTYsMTAuOTU2LDE4LjM1MiwxMC44ODMsMTYuODg2TDEwLjg4MywxNi44ODZ6DQoJCQkgTTYuMjA4LDE2Ljg4NmgyLjg5NmMwLjA2MywxLjQ3NiwwLjI3OSwyLjg4NiwwLjY0NCw0LjE5OUg3LjUzNEM2Ljc4MywxOS43ODksNi4zMzcsMTguMzc4LDYuMjA4LDE2Ljg4Nkw2LjIwOCwxNi44ODZ6DQoJCQkgTTIyLjI3MywyMi44'+
			'NmgxLjU2NGMtMC43NzEsMC44NDEtMS42ODQsMS41NTItMi42ODMsMi4wOTJDMjEuNTc2LDI0LjMzMywyMS45NTEsMjMuNjMzLDIyLjI3MywyMi44NkwyMi4yNzMsMjIuODZ6DQoJCQkgTTE3LjIyNiwyMi44NmgzLjA2NGMtMC44MjksMS42NjQtMS45MDMsMi43NzEtMy4wNjQsMy4xNTVWMjIuODZMMTcuMjI2LDIyLjg2eiBNMTIuMzM5LDIyLjg2aDMuMTEydjMuMTcyDQoJCQlDMTQuMjcxLDI1LjY2LDEzLjE4MSwyNC41NDksMTIuMzM5LDIyLjg2TDEyLjMzOSwyMi44NnogTTguODM4LDIyLjg2aDEuNTE4YzAuMzE0LDAuNzU1LDAuNjc5LDEuNDQsMS4wODgsMi4wNQ0KCQkJQzEwLjQ3MywyNC4zNz'+
			'QsOS41ODcsMjMuNjc4LDguODM4LDIyLjg2TDguODM4LDIyLjg2eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPGcgb3BhY2l0eT0iMC40IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9Ik0yOS4yNTksMTUuOTk5DQoJCQkJYzAtNy4xMjUtNS43OTYtMTIuOTItMTIuOTIxLTEyLjkyYy03LjEyNCwwLTEyLjkyLDUuNzk1LTEyLjkyLDEyLjkyYzAsNy4wNzUsNS43MiwxMi44MzgsMTIuNzc3LDEyLjkxNQ0KCQkJCWMwLjA0LDAuMDA0LDAuMDc4LDAuMDA3LDAuMTE3LDAuMDA3YzAuMDEzLDAsMC4wMjQtMC4wMDMsMC4wMzUtMC4wMDNDMjMuNDY4LDI4LjkxNCwyOS4yNTksMjMuMTIsMjkuMjU5LDE1Ljk5OXogTTQuOTU5LDE2Ljc1NA0KCQkJCWgzLjYzNGMwLjA2MiwxLjgyMiwwLjMzNywzLjUzLDAuNzg4LDUuMDZINi41MjhDNS42MzYsMjAuMzEyLDUuMDgsMTguNTk1LDQu'+
			'OTU5LDE2Ljc1NHogTTI3LjcxOSwxNS4yNDNoLTMuNjg3DQoJCQkJYy0wLjA2MS0xLjgxNi0wLjMzMy0zLjUyLTAuNzgzLTUuMDQ0aDIuOTA3QzI3LjA0NCwxMS42OTUsMjcuNTk2LDEzLjQxMSwyNy43MTksMTUuMjQzeiBNMjIuNTIsMTUuMjQzaC01LjQyNXYtNS4wNDRoNC41NDMNCgkJCQlDMjIuMTM1LDExLjcwMywyMi40NDksMTMuNDIyLDIyLjUyLDE1LjI0M3ogTTE3LjA5NSw4LjY4NlY0LjY5YzEuNTYsMC4zNzgsMi45NTgsMS44NjEsMy45NDcsMy45OTVIMTcuMDk1eiBNMTUuNTgzLDQuNjc4djQuMDA4DQoJCQkJaC0zLjk5OUMxMi41ODMsNi41MjksMTQuMDAxLDUuMDM2LDE1LjU4Myw0Lj'+
			'Y3OHogTTE1LjU4MywxMC4xOTl2NS4wNDRoLTUuNDc2YzAuMDY5LTEuODIxLDAuMzgyLTMuNTQsMC44OC01LjA0NEgxNS41ODN6DQoJCQkJIE04LjU5MywxNS4yNDNINC45NTljMC4xMTktMS44MzIsMC42NzUtMy41NDgsMS41NjItNS4wNDRoMi44NTdDOC45MjksMTEuNzI0LDguNjU0LDEzLjQyNyw4LjU5MywxNS4yNDN6IE0xMC4xMDcsMTYuNzU0aDUuNDc2DQoJCQkJdjUuMDZoLTQuNTkyQzEwLjQ5MSwyMC4zMDYsMTAuMTc3LDE4LjU4MiwxMC4xMDcsMTYuNzU0eiBNMTUuNTgzLDIzLjMyNnYzLjk5NmMtMS41NzgtMC4zNTYtMi45OTUtMS44NDYtMy45OTQtMy45OTZIMTUuNTgzeg0KCQkJCSBN'+
			'MTcuMDk1LDI3LjMxdi0zLjk4M2gzLjk0MUMyMC4wNDksMjUuNDUzLDE4LjY1MSwyNi45MzQsMTcuMDk1LDI3LjMxeiBNMTcuMDk1LDIxLjgxM3YtNS4wNmg1LjQyNQ0KCQkJCWMtMC4wNywxLjgyOC0wLjM4NSwzLjU1Mi0wLjg4Niw1LjA2SDE3LjA5NXogTTI0LjAzMiwxNi43NTRoMy42ODdjLTAuMTIzLDEuODQxLTAuNjc5LDMuNTU4LTEuNTcsNS4wNmgtMi45MDMNCgkJCQlDMjMuNjk2LDIwLjI4NCwyMy45NzIsMTguNTc2LDI0LjAzMiwxNi43NTR6IE0yNS4wODUsOC42ODZoLTIuMzU5Yy0wLjQ5Mi0xLjIxMi0xLjEwMy0yLjI3MS0xLjgwOS0zLjEzMw0KCQkJCUMyMi41MzYsNi4yNjcsMjMuOT'+
			'YzLDcuMzQ1LDI1LjA4NSw4LjY4NnogTTExLjY4LDUuNTkyYy0wLjY5MywwLjg1NC0xLjI5NSwxLjg5OS0xLjc3OCwzLjA5NEg3LjU5MQ0KCQkJCUM4LjY5Niw3LjM2NywxMC4wOTIsNi4zMDQsMTEuNjgsNS41OTJ6IE03LjYwNCwyMy4zMjZoMi4zMDNjMC40ODEsMS4xOSwxLjA4LDIuMjI5LDEuNzcsMy4wODENCgkJCQlDMTAuMDk1LDI1LjY5NSw4LjcwNCwyNC42MzksNy42MDQsMjMuMzI2eiBNMjAuOTE5LDI2LjQ0M2MwLjcwMi0wLjg1NywxLjMxMi0xLjkxMiwxLjgwMi0zLjExN2gyLjM1NA0KCQkJCUMyMy45NTIsMjQuNjYsMjIuNTMzLDI1LjczNCwyMC45MTksMjYuNDQzeiIvPg0KCQk8L2c+'+
			'DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNi4xODYsMjkuMDE0QzkuMDk0LDI4LjkzNywzLjMxOCwyMy4wOTgsMy4zMTgsMTUuOTk5YzAtNy4xNzksNS44NDEtMTMuMDIsMTMuMDItMTMuMDINCgkJCWM3LjE4LDAsMTMuMDIxLDUuODQxLDEzLjAyMSwxMy4wMmMwLDcuMTc1LTUuODM2LDEzLjAxNS0xMy4wMTEsMTMuMDE5bC0wLjAzNSwwLjAwM0MxNi4yNywyOS4wMjEsMTYuMjI5LDI5LjAxOCwxNi4xODYsMjkuMDE0eg0KCQkJIE0xMS43NDcsMjMuNDI2YzAuOTg4LDIuMDYxLDIuMzA3LDMuMzkxLDMuNzM2LDMuNzY5di0zLjc2OUgxMS43NDd6IE0xNy4xOTQsMjcuMThjMS40MDktMC4zOT'+
			'YsMi43MS0xLjcyMSwzLjY4NC0zLjc1NGgtMy42ODQNCgkJCVYyNy4xOHogTTIyLjc4OCwyMy40MjZjLTAuNDMsMS4wNDQtMC45NDUsMS45NjgtMS41MzUsMi43NTNjMS4zNjMtMC42NiwyLjYtMS42MDQsMy42MDQtMi43NTNIMjIuNzg4eiBNNy44MjEsMjMuNDI2DQoJCQljMC45NzcsMS4xMiwyLjE4NCwyLjA1LDMuNTIsMi43MTNjLTAuNTc5LTAuNzgtMS4wODMtMS42OS0xLjUwMi0yLjcxM0g3LjgyMXogTTUuMDY2LDE2Ljg1NGMwLjEzMSwxLjc1LDAuNjUxLDMuNCwxLjU0OCw0LjkwOQ0KCQkJbDIuNjM0LTAuMDQ3Yy0wLjQzNS0xLjUxMy0wLjY4Ny0zLjE0Ny0wLjc1Mi00Ljg2Mkg1LjA2Nnog'+
			'TTI2LjE0OCwyMS43MTRjMC44MTEtMS40NiwxLjMzLTMuMTEsMS40NjMtNC44NmgtMy40ODINCgkJCWMtMC4wNjQsMS43MTQtMC4zMTYsMy4zNDctMC43NTEsNC44NkgyNi4xNDh6IE0yMS41NjIsMjEuNzE0YzAuNDg1LTEuNDgzLDAuNzc5LTMuMTYsMC44NTQtNC44NmgtNS4yMjF2NC44NkgyMS41NjJ6DQoJCQkgTTE1LjQ4MywyMS43MTR2LTQuODZoLTUuMjcxYzAuMDc0LDEuNjk4LDAuMzY3LDMuMzc1LDAuODUyLDQuODZIMTUuNDgzeiBNMjcuNjExLDE1LjE0M2MtMC4xMzMtMS43MjYtMC42NjQtMy40MTUtMS41NDEtNC44OTMNCgkJCWwtMi42ODgsMC4wNDZjMC40MzIsMS41MDMsMC42ODMsMy'+
			'4xMzIsMC43NDcsNC44NDZIMjcuNjExeiBNMjIuNDE1LDE1LjE0M2MtMC4wNzQtMS42ODktMC4zNjctMy4zNi0wLjg1LTQuODQ0aC00LjM3MXY0Ljg0NA0KCQkJSDIyLjQxNXogTTE1LjQ4MywxNS4xNDN2LTQuODQ0SDExLjA2Yy0wLjQ4MiwxLjQ3OS0wLjc3NCwzLjE1LTAuODQ4LDQuODQ0SDE1LjQ4M3ogTTguNDk2LDE1LjE0Mw0KCQkJYzAuMDY1LTEuNzA4LDAuMzE3LTMuMzM3LDAuNzQ5LTQuODQ0SDYuNTc4Yy0wLjg2MywxLjQ3My0xLjM4NCwzLjE0NS0xLjUxMSw0Ljg0NEg4LjQ5NnogTTI0Ljg2OCw4LjU4NQ0KCQkJYy0xLjAwMi0xLjE1MS0yLjI0Mi0yLjEtMy42MTYtMi43NjhjMC41OTIs'+
			'MC43ODksMS4xMDksMS43MTgsMS41NDEsMi43NjhIMjQuODY4eiBNMjAuODg1LDguNTg1DQoJCQljLTAuOTc2LTIuMDM5LTIuMjc4LTMuMzY4LTMuNjktMy43NjZ2My43NjZIMjAuODg1eiBNMTUuNDgzLDguNTg1di0zLjc4Yy0xLjQzMywwLjM4LTIuNzUzLDEuNzE0LTMuNzQxLDMuNzhIMTUuNDgzeg0KCQkJIE05LjgzNCw4LjU4NWMwLjQyMi0xLjAzLDAuOTI5LTEuOTQ0LDEuNTEtMi43MjVjLTEuMzM5LDAuNjYyLTIuNTUxLDEuNTk2LTMuNTM2LDIuNzI1SDkuODM0eiIvPg0KCQk8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNMTYuMzM4LDMuMDc5YzcuMTI1LDAsMTIuOTIxLDUuNzk1LDEyLjkyMS'+
			'wxMi45MmMwLDcuMTIxLTUuNzkxLDEyLjkxNS0xMi45MTEsMTIuOTE5DQoJCQljLTAuMDExLDAtMC4wMjIsMC4wMDMtMC4wMzUsMC4wMDNjLTAuMDM5LDAtMC4wNzctMC4wMDMtMC4xMTctMC4wMDdjLTcuMDU4LTAuMDc3LTEyLjc3Ny01Ljg0LTEyLjc3Ny0xMi45MTUNCgkJCUMzLjQxOCw4Ljg3NCw5LjIxNCwzLjA3OSwxNi4zMzgsMy4wNzkgTTExLjU4NCw4LjY4NmgzLjk5OVY0LjY3OEMxNC4wMDEsNS4wMzYsMTIuNTgzLDYuNTI5LDExLjU4NCw4LjY4NiBNMTcuMDk1LDguNjg2aDMuOTQ3DQoJCQljLTAuOTg5LTIuMTM0LTIuMzg4LTMuNjE3LTMuOTQ3LTMuOTk1VjguNjg2IE0yMi43MjYsOC42'+
			'ODZoMi4zNTljLTEuMTIyLTEuMzQxLTIuNTQ5LTIuNDE5LTQuMTY4LTMuMTMzDQoJCQlDMjEuNjIzLDYuNDE1LDIyLjIzMyw3LjQ3NCwyMi43MjYsOC42ODYgTTcuNTkxLDguNjg2aDIuMzExYzAuNDgzLTEuMTk0LDEuMDg1LTIuMjQsMS43NzgtMy4wOTQNCgkJCUMxMC4wOTIsNi4zMDQsOC42OTYsNy4zNjcsNy41OTEsOC42ODYgTTI0LjAzMiwxNS4yNDNoMy42ODdjLTAuMTIzLTEuODMyLTAuNjc1LTMuNTQ4LTEuNTYyLTUuMDQ0aC0yLjkwNw0KCQkJQzIzLjY5OSwxMS43MjQsMjMuOTcyLDEzLjQyNywyNC4wMzIsMTUuMjQzIE0xNy4wOTUsMTUuMjQzaDUuNDI1Yy0wLjA3LTEuODIxLTAuMzg1LT'+
			'MuNTQtMC44ODItNS4wNDRoLTQuNTQzVjE1LjI0Mw0KCQkJIE0xMC4xMDcsMTUuMjQzaDUuNDc2di01LjA0NGgtNC41OTZDMTAuNDg5LDExLjcwMywxMC4xNzcsMTMuNDIyLDEwLjEwNywxNS4yNDMgTTQuOTU5LDE1LjI0M2gzLjYzNA0KCQkJYzAuMDYyLTEuODE2LDAuMzM2LTMuNTIsMC43ODUtNS4wNDRINi41MjFDNS42MzQsMTEuNjk1LDUuMDc4LDEzLjQxMSw0Ljk1OSwxNS4yNDMgTTIzLjI0NSwyMS44MTNoMi45MDMNCgkJCWMwLjg5Mi0xLjUwMiwxLjQ0Ny0zLjIxOSwxLjU3LTUuMDZoLTMuNjg3QzIzLjk3MiwxOC41NzYsMjMuNjk2LDIwLjI4NCwyMy4yNDUsMjEuODEzIE0xNy4wOTUsMjEu'+
			'ODEzaDQuNTM5DQoJCQljMC41MDEtMS41MDgsMC44MTUtMy4yMzEsMC44ODYtNS4wNmgtNS40MjVWMjEuODEzIE0xMC45OTEsMjEuODEzaDQuNTkydi01LjA2aC01LjQ3NkMxMC4xNzcsMTguNTgyLDEwLjQ5MSwyMC4zMDYsMTAuOTkxLDIxLjgxMw0KCQkJIE02LjUyOCwyMS44MTNoMi44NTNjLTAuNDUxLTEuNTI5LTAuNzI3LTMuMjM3LTAuNzg4LTUuMDZINC45NTlDNS4wOCwxOC41OTUsNS42MzYsMjAuMzEyLDYuNTI4LDIxLjgxMyBNMjAuOTE5LDI2LjQ0Mw0KCQkJYzEuNjE0LTAuNzA5LDMuMDMzLTEuNzgzLDQuMTU1LTMuMTE3aC0yLjM1NEMyMi4yMywyNC41MzEsMjEuNjIxLDI1LjU4NiwyMC'+
			'45MTksMjYuNDQzIE0xNy4wOTUsMjcuMzENCgkJCWMxLjU1Ny0wLjM3NiwyLjk1NC0xLjg1NiwzLjk0MS0zLjk4M2gtMy45NDFWMjcuMzEgTTE1LjU4MywyNy4zMjJ2LTMuOTk2aC0zLjk5NEMxMi41ODgsMjUuNDc3LDE0LjAwNSwyNi45NjYsMTUuNTgzLDI3LjMyMg0KCQkJIE0xMS42NzYsMjYuNDA3Yy0wLjY4OS0wLjg1Mi0xLjI4OC0xLjg5MS0xLjc3LTMuMDgxSDcuNjA0QzguNzA0LDI0LjYzOSwxMC4wOTUsMjUuNjk1LDExLjY3NiwyNi40MDcgTTE2LjMzOCwyLjg3OQ0KCQkJYy03LjIzNCwwLTEzLjEyLDUuODg2LTEzLjEyLDEzLjEyYzAsNy4xNTMsNS44MjEsMTMuMDM3LDEyLjk3NiwxMy4x'+
			'MTVjMC4wMjksMC4wMDMsMC4wNzQsMC4wMDcsMC4xMTksMC4wMDcNCgkJCWM3LjI2NS0wLjAwNywxMy4xNDYtNS44OTMsMTMuMTQ2LTEzLjEyMkMyOS40NTksOC43NjUsMjMuNTczLDIuODc5LDE2LjMzOCwyLjg3OUwxNi4zMzgsMi44Nzl6IE0xMS45MDEsOC40ODUNCgkJCWMwLjkzNy0xLjg5NywyLjE1OS0zLjE0MiwzLjQ4MS0zLjU0N3YzLjU0N0gxMS45MDFMMTEuOTAxLDguNDg1eiBNMTcuMjk1LDguNDg1VjQuOTU1YzEuMzAyLDAuNDIyLDIuNTA1LDEuNjYsMy40MywzLjUzMUgxNy4yOTUNCgkJCUwxNy4yOTUsOC40ODV6IE0yMi44NTksOC40ODVjLTAuMzY5LTAuODg4LTAuOC0xLjY4OC0xLj'+
			'I4Ni0yLjM5MmMxLjE1MSwwLjYxMiwyLjE5NywxLjQyNiwzLjA3MiwyLjM5MkgyMi44NTlMMjIuODU5LDguNDg1eg0KCQkJIE04LjAzMSw4LjQ4NWMwLjg1Ni0wLjk0MywxLjg3NS0xLjc0MSwyLjk5MS0yLjM0NmMtMC40NzQsMC42OTMtMC44OTUsMS40NzktMS4yNTUsMi4zNDZIOC4wMzFMOC4wMzEsOC40ODV6IE0yMy41MTUsMTAuMzk5DQoJCQloMi41MjdjMC44MTYsMS40MSwxLjMxOSwzLjAwOSwxLjQ2MSw0LjY0NGgtMy4yNzhDMjQuMTU2LDEzLjQwNSwyMy45MTgsMTEuODQ2LDIzLjUxNSwxMC4zOTlMMjMuNTE1LDEwLjM5OXogTTE3LjI5NSwxMC4zOTkNCgkJCWg0LjE5N2MwLjQ1NywxLjQy'+
			'NywwLjczOCwzLjAyNSwwLjgxOCw0LjY0NGgtNS4wMTZWMTAuMzk5TDE3LjI5NSwxMC4zOTl6IE0xMS4xMzIsMTAuMzk5aDQuMjV2NC42NDRoLTUuMDY2DQoJCQlDMTAuMzk2LDEzLjQyMSwxMC42NzYsMTEuODIzLDExLjEzMiwxMC4zOTlMMTEuMTMyLDEwLjM5OXogTTYuNjM1LDEwLjM5OWgyLjQ3OGMtMC40MDQsMS40NS0wLjY0NCwzLjAxLTAuNzEyLDQuNjQ0SDUuMTc0DQoJCQlDNS4zMTIsMTMuNDE1LDUuODE1LDExLjgxNiw2LjYzNSwxMC4zOTlMNi42MzUsMTAuMzk5eiBNMjQuMjI1LDE2Ljk1NGgzLjI3OGMtMC4xNDIsMS42NTYtMC42MzUsMy4yMjMtMS40NjksNC42NTloLTIuNTIzDQoJCQ'+
			'lDMjMuOTE3LDIwLjE1NywyNC4xNTcsMTguNTkyLDI0LjIyNSwxNi45NTRMMjQuMjI1LDE2Ljk1NHogTTE3LjI5NSwxNi45NTRoNS4wMTZjLTAuMDgsMS42MjktMC4zNjIsMy4yMzItMC44MjIsNC42NTloLTQuMTkzDQoJCQlWMTYuOTU0TDE3LjI5NSwxNi45NTR6IE0xMC4zMTYsMTYuOTU0aDUuMDY2djQuNjU5aC00LjI0N0MxMC42NzcsMjAuMTg1LDEwLjM5NiwxOC41ODEsMTAuMzE2LDE2Ljk1NEwxMC4zMTYsMTYuOTU0eg0KCQkJIE01LjE3NSwxNi45NTRIOC40YzAuMDY5LDEuNjM5LDAuMzA5LDMuMjA0LDAuNzE1LDQuNjU5SDYuNjQzQzUuODA4LDIwLjE3Niw1LjMxNCwxOC42MSw1LjE3NSwx'+
			'Ni45NTRMNS4xNzUsMTYuOTU0eg0KCQkJIE0yMi44NTQsMjMuNTI2aDEuNzc5Yy0wLjg3NiwwLjk2Mi0xLjkxNywxLjc3MS0zLjA1OSwyLjM3N0MyMi4wNTksMjUuMjA0LDIyLjQ4NywyNC40MDgsMjIuODU0LDIzLjUyNkwyMi44NTQsMjMuNTI2eg0KCQkJIE0xNy4yOTUsMjMuNTI2aDMuNDI0Yy0wLjkyMywxLjg2NS0yLjEyNSwzLjA5OS0zLjQyNCwzLjUyVjIzLjUyNkwxNy4yOTUsMjMuNTI2eiBNMTEuOTA3LDIzLjUyNmgzLjQ3NnYzLjUzNg0KCQkJQzE0LjA2MywyNi42NTgsMTIuODQzLDI1LjQxOCwxMS45MDcsMjMuNTI2TDExLjkwNywyMy41MjZ6IE04LjA0MywyMy41MjZoMS43MjljMC4zNT'+
			'csMC44NiwwLjc3NCwxLjY0MiwxLjI0NywyLjMzMg0KCQkJQzkuOTA1LDI1LjI1NCw4Ljg5MywyNC40NjEsOC4wNDMsMjMuNTI2TDguMDQzLDIzLjUyNnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == false) && 
				(player.getVariableValue('opt_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
				else {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
			}
		}
		me._ht_url_image.onclick=function (e) {
			skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
			skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
			if (skin._web_page.ggUpdateText) {
				skin._web_page.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._web_page.ggUpdatePosition) {
				skin._web_page.ggUpdatePosition();
			}
			skin._web_page.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_website', true);
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_catalogo.appendChild(me._ht_url_image);
		me.__div = me._ht_catalogo;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_file_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_url') {
			hotspot.skinid = 'ht_video_url';
			hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_url_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_vimeo') {
			hotspot.skinid = 'ht_video_vimeo';
			hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_vimeo_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_youtube') {
			hotspot.skinid = 'ht_video_youtube';
			hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_youtube_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website();;
		} else
		{
			hotspot.skinid = 'ht_catalogo';
			hsinst = new SkinHotspotClass_ht_catalogo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_catalogo_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_catalogo_configloaded();;
			me.callChildLogicBlocksHotspot_ht_catalogo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_timer();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_opt_url();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				hotspotTemplates['ht_video_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				hotspotTemplates['ht_video_vimeo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				hotspotTemplates['ht_video_youtube'][i] = null;
			}
		}
		if(hotspotTemplates['ht_catalogo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_catalogo'].length; i++) {
				hotspotTemplates['ht_catalogo'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-308;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					(me._map_pin.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADuCAYAAADV2YAhAAAMOElEQVR4nO3d/3XayBqH8SduwKSCsBWErSC6FcQdLOnA2wHbgVPB2hXcpIKLK1hcweIK1lSQ+8cgo3X4IWCkmRHP5xyOY8eGycHfvO+MRtK7Hz9+oGyNgEnjI8B4/ahNgOsjnnMFLBqfL9cPgPn64wJ4OeI51aN3hjYLFZswVoSQfkw2mo0nQnjnbMI9TzYaAYY2hQkhmJP1I4dwHuuJUI0XhBAv9n63ojK03asaj08pB9KxR0KA64c6YmjjGxMCerP+eMx8cyhWhOB+Y9NaKxJDG8eEENIbymx3u/ZECPA3bKXPZmhPNwam68eHlAMpzDNwv34sUw6kVIb2OCNCNb3FihrDE3BHqMAeYmrJ0LZTESrqb2mHMWgPhOo7TzuM/Bna/aZYVftWV9/7xO'+
			'PIlqH92YgQ1Fsuc+U3FytCeO+wdf4XQ7sxBmaEOathzcsD4b1Zph1GHgztJqzOV/NneLns0I4IrZdhLc8DYfpykW3zJYbWOeswXOyc99JCOyW8yYZ1OFaE/4DvE4+jN1epB9CTirB97k8M7NBcE97XBeF9Hryhh3ZE+B/4f3isdeg+Et7ne8L7PlhDbo9vCG+glfXyrAhToW+Jx9GJIVbaMeHN+i8G9lJdE97/b/z70jyDMLRKa3XVW4OrukOptCOsrtquWXUHMdcdQqWtCG+IYdUhK0I3Nk88jrOUXmlnhBVDA6s2rgm/L7PE4zhLqZW2boeHfKE0deuRUHWL201VYmgnhPbG6qpzrdhsvClGae3xFPgLA6s4rgm/T9PE4zhKSaG9I2xXk2L7k/D7VYQS2uN6K+LnxOPQ8H0nVN2s57m5h3ZEmL+6b1h9eSLMc7MN'+
			'bs7t8YSwQGBg1aePhN+7yaFvTCXXSusKsVLLdmU5x0prYJWDa8LvYXYVN7fQGljlJMvg5hRaA6scZRfcXEJrYJWzrIKbQ2gNrEqQTXBTh9bAqiRZBDdlaA2sSpQ8uKmO044Ix7+8GbNK9UwIbu87p1JU2nprooFVyT4Qfo97v4RNitDe49ZEDcNHEtzZoO/Q3uPZOhqWz/Qc3D5DO8U71GmYfqPHE+n7WoiaEK4QIA3Zr/RwgkEfoR0RbgLsoR0N3YpwR4NOV5T7aI+9JrEuxTU93Mmg69DO8DKnuiyf6Pi6yl22xxXhwtDSJfoPHd3JoKvQOo/VpetsfttVe3yPgdVlu6aj47ddhPYWN1BIEHJwG/tJY7fHY8JxKqusFKwI+xSWsZ4wdqW9x8BKTdHb5JihvcXDO9I2n4jYJsdqj10tlvaLtpocq9LeY2ClfaK1yT'+
			'EqbYWbKKS2zt50ESO0S7wKhdTWM6FNPtm57fEtBlY6xgfOXJQ6p9K6+CSd5qxFqXMq7S0GVjrFNWdU21Mr7Rj4+9QXlQTAL5ywU+rUSjs78eckbcxO+aFTKu0Yq6wUy9HV9pRKOzvhZyRtNzv2B46ttGOsslJsR1XbYyvt7Mjvl3TY7JhvPqbSjrHKSl1pXW2PqbTRz8CX9Kp1vtpWWnc/Sd1qvUuqbaWdYmClLl3T8n5AbSvtEk8MkLrW6gygNpX2BgMr9eEDIW97tQnt9OyhSGpreugbDrXHYzzMI/Vt7+GfQ5X2YKmWFN3e3B2qtEucz0p927sgta/STjCwUgofCPnbal9op9GHIqmt6a6/2NceL7HSSqnsbJF3VVpbYymtnS3yrtBOOxuKpLam2764qz1eYqWVUtvaIm+rtLbGUh62tsjbQlt1PhRJbVVvv7At'+
			'tO6CkvLxUx7fzmlHwD+9DUdSG+9pnBz/ttJWvQ5FUhtV8xNDK+Wvan5iaKX8Vc1PmnNa57NSvl7ntc1Ku/OsAknJveazGdqq/3FIaqmq/2Cllcrwms/mnPYFr20s5ep1H3IdWhehpPy9B17q9tjWWMrfBDZz2irdOCS1VMEmtONkw5DU1hgMrVSSMWwWolw5lvK3AkZ1aFvfDl5SUu+ucBFKKknV9qbSkjJhpZXKYqWVSnOFh3ukkowNrVSWse2xVJgrwhk+ksowevfjwK3gJeXF9lgqjKGVCmNopcIYWqkwhlYqjKGVCmNopcIYWqkwhlYqjKGVCmNopcIYWqkwhlYqjKGVCnNFuIWepDI8XwHL1KOQ1NrS9lgqzBXhPj6SyvByBSxSj0JSawvbY6kwVlqpLAvntFJZXt79+PFjBPyTeiSSWnnvTaWlsryrF6Iekw'+
			'5DUhuPsNl77LxWyt8LbELrCrKUvwUYWqkkhlYqzALgXeOmeS/AdbLhSNpnxfq2tM1tjFZbKV+v+WyGdt7/OCS1NK//YKWVyvCaz+ac1u2MUr7e8+Y4LesveL0oKT/PNDZAvT2fdt7rUCS1MW9+Ymil/M2bnzTntABj4O8eByPpsNf5LPxcaZfAU5+jkbTXE29O6Nl2jah5L0OR1Mb87Re2hfZb9+OQ1NJPeXw7p625D1lK73W/cdOuS6habaX0tubQ0Er52prDXe0x2CJLKW1tjWH//WmttlI6O/NnaKU87czfvvYYbJGlFHa2xrC/0gLcRx2KpDbu9/3loUo7xr3IUt9+IWwp3upQpV3iXmSpT0/sCSwcDi3AXZShSGrjYN4Otcc1F6Sk7u1dgKq1vRO81VbqXqucta20Y1yQkrq2dwGq1rbSLoGHMwYjab8HWgQW'+
			'2ldagAnw14kDkrTfr7S89njbSsv6Cb35tBTfI0fcLOCY0ALMjvx+SYfNjvnmY0M7x2orxfTIkddlOza0YLWVYpod+wOnhHaO1VaK4egqC6eFFqy2UgyzU37o1NDO8bitdI4HTrzG+DHHad8a4y4p6VStdj9tc2qlZf2Cf5zx89Kl+oMTAwvnVVoIZyQs8Qwgqa0VoUt9OfB9O51TaVm/8O2ZzyFdklvOCCycX2lrc+BTjCeSBuwRqM59klih9WQC6bDWJwXsc257XFvgopS0zx9ECCzEq7S1BfAx5hNKA/BE6EajiFVpay5KST+bxnyy2KGdY5ssNUVri2ux2+OabbIUuS2uxa60tSnhILJ0qVZEbotrXYV2gWcC6bLNiNwW17pqj2vfgM9dvoCUoe/ATVdP3nVoR4T/bT50+SJSRp4J89iztiru01V7XHsh/I/j/F'+
			'aXYEX4fe8ssNB9aCFUWo/f6hLc0tE8tqmP0EK4Se7Xnl5LSuErPd2Eves57VtzPBtIwxPl7J22+qq0tRu8SbWG5YkOV4q36bvSQjhrf4FXu1D5VoSV4mWfL9p3pYXwD6xwRVllWxF+j5d9v3CK0EKotL22FFJkN/SwUrxNqtBCWJT6kvD1pVN94cRrFseQMrQQlsgNrkryhZ4O7eySOrRgcFWO5IGFPEILBlf5yyKwkE9oweAqX9kEFvIKLRhc5SerwEJ+oQWDq3xkF1hIsyOqrYpwEr07p9S3+hS7eeJxbJVzaCFsEZtjcNWfeqdTko0TbeTYHjctCMH1JAP1ob56YraBhfxDC5u9yo9ph6GBq0+vW6YdxmElhBbC5Tsqwi3vpdgeCL9fnV4mJpZSQlub4sqy4vpCR9cn7kruC1G7TAgry17lUad6JuGZOucordLW'+
			'6gWq76kHoiJ9p4AFp11KDS1sLs/6e+qBqCi/08NlTrtUanv81oSwc8WbfmmXJ8Lctcjq2lRypW1aEFb/vEyrtvlK5hsmjjGUSttUEaqui1R6JlTXedphxDWUSts0J7TLVt3L9pXNNthBGWKlbXKue3kGM3fdZYiVtqk+NPQ7XrJ16FaE97nYQzltDT20tTvCRdJtmYfpK+H9vUs8jl4MvT3eZkxomb2nUPkeCa3wMu0w+nUplbZpSVhh/g+eOVSqR8L7V3FhgYXLDG1tjuEtTTOs86QjSeiSQ1ubY3hzZ1gbLnFOe0gFzHDOm4PvhMWleeJxZMXQ7jYmhPcGr1HVpxXhtMsZFzhfbcPQHjYirFDe4tbILj0Tquo9BZ+B0wdDe5wJIbxW3zjqqnrHwDdExGRoTzclhPdz4nGU6DshrPeJx1EkQ3u+ESG8Bni/OqjfsP'+
			'09i6GNrw5wxWXPgZ8Jq751UBWJoe3WhBDe+jHkefCKENL64Ry1I4a2XxM2QZ5Q9imDT4RgztcfDWlPDG16FeGYcB3oMXm11c+E46Xz9cf6z0rE0OZrQljkqtafj9eP+u9itNorNhVyuX68rL/2gtUzS4Z2GMZsAr3PEncZFe//z3UIPwC2PSUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 13px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me._map_pin_active.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me._map_pin_normal.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal.style.visibility="hidden";
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -36px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['map_pin'] == true) && 
				(me.ggUserdata.title != "")
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin.appendChild(me._map_pin_tt);
	};
	function SkinCloner_thumbnail_cloner_mobile_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_mobile=document.createElement('div');
		els=me._thumbnail_nodeimage_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_mobile_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_mobile;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage_mobile.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._thumbnail_nodeimage_mobile);
		el=me._checkmark_tick_mobile=document.createElement('div');
		els=me._checkmark_tick_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick_mobile__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_mobile;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick_mobile.ggElementNodeId()) == true) || 
				(me._checkmark_tick_mobile.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_mobile.style[domTransition]='';
				if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_mobile.style.visibility=(Number(me._checkmark_tick_mobile.style.opacity)>0||!me._checkmark_tick_mobile.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_mobile.ggVisible=true;
				}
				else {
					me._checkmark_tick_mobile.style.visibility="hidden";
					me._checkmark_tick_mobile.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick_mobile);
		el=me._thumbnail_active_mobile=document.createElement('div');
		el.ggId="thumbnail_active_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #bebebe;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active_mobile.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active_mobile.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active_mobile'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_mobile.style[domTransition]='border-color 0s';
				if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_mobile.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active_mobile.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active_mobile.style.borderColor="rgba(190,190,190,1)";
				}
			}
		}
		me._thumbnail_active_mobile.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnail_menu_mobile', false);
		}
		me._thumbnail_active_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=true;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_title_mobile=document.createElement('div');
		els=me._thumbnail_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.588235);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active_mobile'] == true) && 
				(me.ggUserdata.title != "") && 
				(player.getVariableValue('opt_thumbnail_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title_mobile.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title_mobile.style.visibility=me._thumbnail_title_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_title_mobile.style.opacity=1;
				}
				else {
					me._thumbnail_title_mobile.style.visibility="hidden";
					me._thumbnail_title_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_title_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active_mobile.appendChild(me._thumbnail_title_mobile);
		me.__div.appendChild(me._thumbnail_active_mobile);
	};
	me.addSkin();
	me._screentint.logicBlock_alpha();
	me._controller.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_alpha();
	me._image_10.logicBlock_visible();
	me._image_1.logicBlock_visible();
	me._barrasuperiormobile.logicBlock_scaling();
	me._barrasuperiormobile.logicBlock_visible();
	me._image_20.logicBlock_scaling();
	me._barrasuperiorpc.logicBlock_size();
	me._barrasuperiorpc.logicBlock_visible();
	me._loading_multires.logicBlock_visible();
	me._pantalla_completa.logicBlock_alpha();
	me._pantalla_completa_off.logicBlock_alpha();
	me._tt_fullscreen.logicBlock_text();
	me._show_controller_button.logicBlock_position();
	me._controller.logicBlock_position();
	me._controller.logicBlock_alpha();
	me._controller_slider.logicBlock_position();
	me._rotacin_buttons.logicBlock_position();
	me._rotacin_buttons.logicBlock_visible();
	me._rotacin_start.logicBlock_alpha();
	me._rotacin_stop.logicBlock_alpha();
	me._tt_rotacin.logicBlock_text();
	me._alejar.logicBlock_visible();
	me._acercar.logicBlock_visible();
	me._fullscreen_buttons.logicBlock_position();
	me._fullscreen_buttons.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_position();
	me._web_page.logicBlock_visible();
	me._userdata.logicBlock_visible();
	me._information.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	me._video_popup_url.logicBlock_visible();
	me._popup_video_url.logicBlock_visible();
	me._video_popup_controls_url.logicBlock_visible();
	me._video_popup_vimeo.logicBlock_visible();
	me._popup_video_vimeo.logicBlock_visible();
	me._video_popup_youtube.logicBlock_visible();
	me._popup_video_youtube.logicBlock_visible();
	me.__360image_gyro.logicBlock_visible();
	me.__360image.logicBlock_position();
	me.__360image.logicBlock_scaling();
	me._phone2.logicBlock_scaling();
	me._phone3.logicBlock_scaling();
	me._close.logicBlock_visible();
	me._cargando.logicBlock_visible();
	me._tt_ht_video_url0.logicBlock_visible();
	me._tt_ht_video_url.logicBlock_visible();
	me._tt_show_controller.logicBlock_position();
	me._tt_rotacin.logicBlock_position();
	me._tt_zoomout.logicBlock_position();
	me._tt_zoomin.logicBlock_position();
	me._tt_fullscreen.logicBlock_position();
	me._tt_ht_video_url0.logicBlock_position();
	me._tt_ht_video_url.logicBlock_position();
	player.addListener('sizechanged', function(args) { me._screentint.logicBlock_alpha();me._controller.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha();me._image_10.logicBlock_visible();me._image_1.logicBlock_visible();me._barrasuperiormobile.logicBlock_scaling();me._barrasuperiormobile.logicBlock_visible();me._image_20.logicBlock_scaling();me._barrasuperiorpc.logicBlock_size();me._barrasuperiorpc.logicBlock_visible(); });
	player.addListener('tilesready', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('tilesrequested', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('fullscreenenter', function(args) { me._pantalla_completa.logicBlock_alpha();me._pantalla_completa_off.logicBlock_alpha();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._pantalla_completa.logicBlock_alpha();me._pantalla_completa_off.logicBlock_alpha();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenodeid', function(args) { me._show_controller_button.logicBlock_position();me._loading_multires.logicBlock_visible();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._controller.logicBlock_alpha();me._controller_slider.logicBlock_position();me._rotacin_buttons.logicBlock_position();me._rotacin_buttons.logicBlock_visible();me._rotacin_start.logicBlock_alpha();me._rotacin_stop.logicBlock_alpha();me._tt_rotacin.logicBlock_text();me._alejar.logicBlock_visible();me._acercar.logicBlock_visible();me._fullscreen_buttons.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha();me._web_page.logicBlock_visible();me._userdata.logicBlock_visible();me._information.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me.__360image_gyro.logicBlock_visible();me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling();me._close.logicBlock_visible();me._cargando.logicBlock_visible();me._tt_ht_video_url0.logicBlock_visible();me._tt_ht_video_url.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._tt_show_controller.logicBlock_position();me._tt_rotacin.logicBlock_position();me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._tt_fullscreen.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_visible();me.__360image_gyro.logicBlock_visible();me._tt_ht_video_url0.logicBlock_position();me._tt_ht_video_url.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._rotacin_start.logicBlock_alpha();me._rotacin_stop.logicBlock_alpha();me._tt_rotacin.logicBlock_text(); });
	player.addListener('varchanged_vis_timer', function(args) { me._controller.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_position();me._userdata.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_website', function(args) { me._show_controller_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._web_page.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_opt_loader_mulires', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_mobile', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_auto_hide', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_opt_thumbnail', function(args) { me._thumbnail_menu_mobile.logicBlock_visible(); });
	player.addListener('varchanged_opt_gyro', function(args) { me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_vis_360image_once', function(args) { me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_opt_loader', function(args) { me._cargando.logicBlock_visible(); });
	player.addListener('varchanged_pos_controller', function(args) { me._controller_slider.logicBlock_position(); });
	player.addListener('varchanged_pos_360image', function(args) { me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling(); });
	player.addListener('varchanged_opt_autorotate', function(args) { me._rotacin_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_autorotate', function(args) { me._rotacin_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._alejar.logicBlock_visible();me._acercar.logicBlock_visible(); });
	player.addListener('varchanged_opt_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_position(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner_mobile.callChildLogicBlocks_changenodeid(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner_mobile.callChildLogicBlocks_active(); });
	player.addListener('varchanged_opt_thumbnail_tooltip', function(args) { me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip(); });
	player.addListener('changenodeid', function(args) { me._map_1.callChildLogicBlocksHotspot_map_pin_changenodeid(); });
	player.addListener('mouseover', function(args) { me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('mouseover', function(args) { me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('changenodeid', function(args) { me._map_1.callChildLogicBlocksHotspot_map_pin_active(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenodeid();me.callChildLogicBlocksHotspot_ht_url_changenodeid();me.callChildLogicBlocksHotspot_ht_info_changenodeid();me.callChildLogicBlocksHotspot_ht_image_changenodeid();me.callChildLogicBlocksHotspot_ht_video_file_changenodeid();me.callChildLogicBlocksHotspot_ht_video_url_changenodeid();me.callChildLogicBlocksHotspot_ht_video_vimeo_changenodeid();me.callChildLogicBlocksHotspot_ht_video_youtube_changenodeid();me.callChildLogicBlocksHotspot_ht_catalogo_changenodeid(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_url_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_video_url_configloaded();me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();me.callChildLogicBlocksHotspot_ht_catalogo_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_video_url_mouseover();me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();me.callChildLogicBlocksHotspot_ht_catalogo_mouseover(); });
	player.addListener('varchanged_vis_timer', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_timer();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_timer(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_vis_website(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview(); });
	player.addListener('varchanged_opt_url', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url();me.callChildLogicBlocksHotspot_ht_catalogo_varchanged_opt_url(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};