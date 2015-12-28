<?php

//require '/libs/Smarty.class.php';
include_once('underscore.php');

class IndexTemple 
{
	private $data;
	private $obj;
	
	public function __construct($data) {
        $this->data = $data;
        $this->obj = json_decode($data);
    }
    private $tpl_diy_con_type1 = '
    	<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<div class="fulltext"><%=$content->{"fulltext"}%></div>
		</section>
    		';
    private $tpl_diy_con_type2 = '
    	<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<section class="members_special <%=$content->{"direction"}%> titlestyle<%=$content->{"style"}%>">
				<h2 class="j-title"><%=$content->{"title"}%></h2>
			</section>
		</section>
    		';
    private $tpl_diy_con_type3 = '';
    private $tpl_diy_con_type4 = '
    	<%$goodslist = $content->{"goodslist"};%>
		<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<% if($content->{"version"}== 1){ %>
				<% if($content->{"layout"}==1){ %>
    				<% if($content->{"goodstyle"}==1){ %>
					<section class="members_goodspic">
						<ul>
						<% if(count($goodslist)>0){ %>
    						<%__::each($goodslist, function($goods, $index) use ($content) {%>
								<li class="b_mingoods">
									<div class="b_mingoods_wrapper">
										<a href="<%=$goods->{"link"}%>">
											<% if($goods->{"is_compress"}){ %>
												<img src="<%=$goods->{"pic"}%>300x300" data-original="<%=$goods->{"pic"}%>300x300"  class="lazyload" width="100%">
											<% }else{ %>
												<img src="<%=$goods->{"pic"}%>" data-original="<%=$goods->{"pic"}%>" class="lazyload" width="100%">
											<% } %> 
										</a>
    									<% if(!empty($content->{"showIco"}) || !empty($content->{"showPrice"})){ %>
											<% if(!empty($content->{"showName"}) || $content->{"showName"} == 1){ %>
												<p class="goods-title <% if($content->{"titleLine"} == 1){ %>multiLine<% } %>"><%=$goods->{"title"} %></p>
											<% } %>
											<p class="pic_box"><span class="yj">&yen;<%= $goods->{"original_price"}%></span></p>
										<% } %>
										<p>
											<span class="goods-pirce fl"><i class="smallsize">&yen;</i><%=$goods->{"price"}%></span>
											<em class="r-selled-num fr"><strong><%=$content->{"sale_num"}%></strong>件已售</em>
										</p>
									</div>
								</li>
							<% }) %>
						<% } else { %>
						<% } %>
						</ul>
					</section>
					<% } else if($content->{"goodstyle"}==2){ %>
    					<section class="members_goodspic">
						<ul class="goodstyle2">
    					<% if(count($goodslist)>0){ %>
    						<%__::each($goodslist, function($goods, $index) use ($content) {%>
								<li class="b_mingoods">
									<div class="b_mingoods_wrapper">
										<a href="<%=$goods->{"link"}%>">
    										<% if($goods->{"is_compress"}){ %>
												<img src="<%=$goods->{"pic"}%>300x300" data-original="<%=$goods->{"pic"}%>300x300"  class="lazyload" width="100%">
											<% }else{ %>
												<img src="<%=$goods->{"pic"}%>" data-original="<%=$goods->{"pic"}%>" class="lazyload" width="100%">
											<% } %> 
										</a>
    									<% if(!empty($content->{"showIco"}) || !empty($content->{"showPrice"})){ %>
    										<% if(empty($content->{"showName"}) || $content->{"showName"} == 1){ %>
												<p class="goods-title <% if($content->{"titleLine"} == 1){ %>multiLine<% } %>"><%=$goods->{"title"} %></p>
											<% } %>
											<em class="r-selled-num">已售：<strong><%=$content->{"sale_num"}%></strong></em>
											<p class="pic_box"><span class="yj">&yen;<%=$goods->{"original_price"}%></span></p>
										<% } %>
										<p><span class="goods-pirce">&yen;<%= $goods->{"price"}%></span></p>
										<a href="" class="addcart"><i></i></a>
									</div>
								</li>
							<% }) %>
						<% } else { %>
						<% } %>
						</ul>
						</section>
					<% } else if($content->{"goodstyle"}==3){ %>
    					<section class="members_goodspic">
						<ul>
    					<% if(count($goodslist)>0){ %>
    						<%__::each($goodslist, function($goods, $index) use ($content) {%>
								<li class="b_mingoods">
									<div class="b_mingoods_wrapper">
    									<a href="<%=$goods->{"link"}%>">
    										<% if($goods->{"is_compress"}){ %>
												<img src="<%=$goods->{"pic"}%>300x300" data-original="<%=$goods->{"pic"}%>300x300"  class="lazyload" width="100%">
											<% }else{ %>
												<img src="<%=$goods->{"pic"}%>" data-original="<%=$goods->{"pic"}%>" class="lazyload" width="100%">
											<% } %> 
										</a>
    									<% if(!empty($content->{"showIco"}) || !empty($content->{"showPrice"})){ %>
    										<% if(empty($content->{"showName"}) || $content->{"showName"} == 1){ %>
    											<p class="goods-title <% if($content->{"titleLine"} == 1){ %>multiLine<% } %>"><%=$goods->{"title"} %></p>
											<% } %>
    										<p class="pic_box"><span class="yj">&yen;<%=$goods->{"original_price"}%></span></p>
										<% } %>
										<p>
											<span class="goods-pirce fl">&yen;<%= $goods->{"price"}%></span>
											<em class="r-selled-num fr"><strong><%= $content->{"sale_num"}%></strong>件已售</em>
										</p>
										<p class="goods-btn"><a href=""><%=$content->{"goodstxt"}%></a></p>
									</div>
								</li>
							<% }) %>
						<% } else { %>
						<% } %>
						</ul>
					</section>
					<% } %>
				<% } else if($content->{"layout"}==2){ %>
    				<section class="members_goodspic" style="margin-top:<%=$content->{"modulePadding"}%>px;margin-bottom:<%=$content->{"modulePadding"}%>px;">
						<ul>
						<% if (count($goodslist)>0){ %>
							<%__::each($goodslist, function($goods, $index) use ($content) {%>
								<li class="biggoods">
									<a class="goodsimg" href="<%=$goods->{"link"}%>">
										<% if($goods->{"is_compress"}){ %>
    										<img src="<%=$goods->{"pic"}%>300x300" data-original="<%=$goods->{"pic"}%>300x300" class="lazyload" width="100%" style="display: block;">
										<% }else{ %>
											<img src="<%=$goods->{"pic"}%>" data-original="<%=$goods->{"pic"}%>" class="lazyload" width="100%" style="display: block;">
										<% } %> 
										<% if($content->{"sale_num"} > 0){ %>
			                                <em class="selled-num">已售：<strong><%=$content->{"sale_num"}%></strong></em>
			                            <% } %>
									</a>
									<section class="members_goodsimg_name rename clearfix">
    									<% if(empty($content->{"showName"}) || $content->{"showName"} == 1){ %>
											<a href="<%=$goods->{"link"} %>" class="<% if($content->{"titleLine"} == 1){ %>multiLine<% } %>"><%=$goods->{"title"} %></a>
										<% } %>
										<span>
											<% if(!empty($content->{"showIco"})){ %>
												<i><a href="<%=$goods->{"link"}%>"></a></i>
											<% } %>
											<% if(!empty($content->{"showPrice"})){ %>
												&yen;<%=$goods->{"price"}%>
												<span class="original_price">原价：<s>&yen;<%=$goods->{"original_price"}%></s></span>
											<% } %>
										</span>
									</section>
								</li>
							<% }) %>
						<% } else { %>
						<% } %>
						</ul>
					</section>
				<% } %>
			<% } %>
		</section>
    		';
    private $tpl_diy_con_type5 = '';
    private $tpl_diy_con_type6 = '
    	<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<section class="members_search">
    			<form method="get" action="/">
    				<input type="text" id=="kw" name="kw" placeholder="商品搜索：请输入商品关键字"  >
					<button type="submit"></button>
	    		</form>
			</section>
		</section>
    		';
    private $tpl_diy_con_type7 = '
    	<% $dataset = $content->{"dataset"};
    	   $datasetCount = count($dataset);
    	%>
    	<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<section class="members_nav2">
				<ul>
				<% if($datasetCount>0){ %>
    				<%__::each($dataset, function($item, $index){%>
						<% if(!empty($item->{"linkType"})){ %>
							<li><a href="<%=$item->{"link"} %>"><%=$item->{"showtitle"} %></a><b></b></li>
						<%}else{%>
							<li><a href="#">请添加导航链接</a><b></b></li>
						<%}%>
					<% }) %>
				<% }else{ %>
				<% } %>
				</ul>
			</section>
		</section>
    		';
    private $tpl_diy_con_type8 = '
    	<% $dataset = $content->{"dataset"};
    	   $datasetCount = count($dataset);
    	%>
		<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
    		<%if(empty($content->{"layout"}) || $content->{"layout"}==2){ %>
				<section class="members_nav1">
					<ul>
    					<% if($datasetCount>0){ %>
    						<%__::each($dataset, function($value, $key) use ($datasetCount){%>
								<li class="lisw<%=$datasetCount%>">
									<span><a href="<%=$value->{"link"} %>">
    									<img
											src="<%=$value->{"pic"}%>"
											data-original="<%=$value->{"pic"}%>"
											class="lazyload" style="display: block;">
    								</a>
    								</span>
									<a class="members_nav1_name" href="<%=$value->{"link"} %>"><%=$value->{"showtitle"} %></a>
								</li>
							<% }) %>
						<% }else{ %>
							<li>
								<span><a href=""><img src="http://mp.wxfenxiao.com/Public/images/diy/waitupload.png" width="70" height="70"></a></span>
								<a class="members_nav1_name" href="">导航文字</a>
							</li>
							<li>
								<span><a href=""><img src="http://mp.wxfenxiao.com/Public/images/diy/waitupload.png" width="70" height="70"></a></span>
								<a class="members_nav1_name" href="">导航文字</a>
							</li>
							<li>
								<span><a href=""><img src="http://mp.wxfenxiao.com/Public/images/diy/waitupload.png" width="70" height="70"></a></span>
								<a class="members_nav1_name" href="">导航文字</a>
							</li>
							<li>
								<span><a href=""><img src="http://mp.wxfenxiao.com/Public/images/diy/waitupload.png" width="70" height="70"></a></span>
								<a class="members_nav1_name" href="">导航文字</a>
							</li>
						<% } %>
					</ul>
				</section>
			<%}else{%>
    			
    			<%if($content->{"layout1_style"}==1 || empty($content->{"layout1_style"})){%>
					<section class="diy-imgNav col<%=count($dataset)%> clearfix">
						<% if(count($dataset)>0){ %>
    						<%__::each($dataset, function($value, $key){%>
								<%
									$titleBackgroundColor="#FE9303";
									if(!empty($value->{"titleBackgroundColor"})){
										$titleBackgroundColor=$value->{"titleBackgroundColor"};
									}
								%>
						        <a href="<%=$value->{"link"} %>" class="imgNav-img bdbox" style="background-image: url(<%=$value->{"pic"} %>);">
						        	<%if(!empty($value->{"showtitle"})){%>
						            <p class="info bdbox" style="background-color:<%=$titleBackgroundColor%>"><%=$value->{"showtitle"}%></p>
						            <%}%>
						        </a>
							<% }) %>
						<% } %>
				    </section>
				<%}else if($content->{"layout1_style"}==2){%>
    				<section class="diy-imgNav-layout1-style2 clearfix">
				        <% if(count($dataset)>0){ %>
    						<%__::each($dataset, function($value, $key){%>
						        <a href="#" class="diy-imgNav-item bdbox">
						            <em class="photo-bg" style="background-image:url(<%=$value->{"pic"} %>);"></em>
    								<%if(!empty($value->{"showtitle"})){%>
						            	<p class="nav-txt"><%=$value->{"showtitle"}%></p>
						            <%}%>
						        </a>
							<% }) %>
						<% } %>
				    </section>
				<%}%>
    		
    		<%}%>
		</section>
    		';
    /** 模板 图片广告*/
    private $tpl_diy_con_type9 = 
    '<% $dataset = $content->{"dataset"};%>
		<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<%if($content->{"showType"}==1){ %>
				<section class="members_flash j-swipe">
					<ul class="clearfix">
						<%if(count($dataset)>0){ %>
    						<%__::each($dataset, function($value, $key){%>
								<li data-index="0">
									<a href="<%=$value->{"link"} %>" title="<%=$value->{"showtitle"} %>">
	    								<%if(!empty($value->{"pic"})){ %>
	    										<% if(isset($content->{"is_compress"}) && $content->{"is_compress"}){ %>
													<img src="<%=$value->{"pic"} %>300x300" width="100%" />
												<% }else{ %>
													<img src="<%=$value->{"pic"} %>" width="100%" />
												<% } %>
										<% }else{ %>
											<img src="http://mp.wxfenxiao.com/Public/images/diy/imgad.jpg" width="100%" />
										<% } %>
	    							</a>
								</li>
    						<%});%>
						<% }else{ %>
							<li><a href="" title=""><img src="http://mp.wxfenxiao.com/Public/images/diy/imgad.jpg" width="100%" /></a></li>
						<% } %>
					</ul>
    				<section class="members_flash_time">
						<% if(count($dataset)>1){ %>
    						<% $answers = array();%>
    						<%__::each($dataset, function($value, $key) use (&$answers) {%>
    							<span <%if($key==0){%>class="cur"<%}%>></span>
						    <%});%>
						<% } %>
					</section>
				</section>
			<% }else{ %>
    			<section class="members_imgad">
					<ul class="clearfix">
    					<%if(count($dataset)>0){ %>
    						<%__::each($dataset, function($value, $key){%>
								<li style="margin-bottom:<%if(empty($content->{"margin"})){print 0;}else{print $content->{"margin"};} %>px;">
									<a href="<%=$value->{"link"} %>" title="<%=$value->{"showtitle"} %>">
    									<%if(!empty($value->{"pic"})){ %>
    										<img data-original="<%=$value->{"pic"}%>" class="lazyload" width="100%"
												src="<%=$value->{"pic"}%>" style="display: inline;">
										<% }else{ %>
											<img src="http://mp.wxfenxiao.com/Public/images/diy/imgad.jpg" width="100%" />
										<% } %>
									</a>
								</li>
							<% }) %>
						<% }else{ %>
							<li><a href="" title=""><img src="http://mp.wxfenxiao.com/Public/images/diy/imgad.jpg" width="100%" /></a></li>
						<% } %>
					</ul>
				</section>
			<% } %>
		</section>
    		';
    private $tpl_diy_con_type10 = '
			<section class="custom-line-wrap"><hr class="custom-line"></section>
    		';
    private $tpl_diy_con_type11 = '
    	<section class="custom-space" style="height:<%=$content->{"height"}%>px;"></section>
    		';
    private $tpl_diy_con_type12 = '
    	<% $dataset = $content->{"dataset"};
    	   $datasetCount = count($dataset);
    	%>
    	<div class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
    		<%if(count($dataset)>0){ %>
				<% if($content->{"style"} == 1){ %>
					<div class="homeCnavbox swiper-container" style="height:50px;">
						<ul class="swiper-wrapper topnav clearfix">
    						<%__::each($dataset, function($item, $key) use ($content,$datasetCount){%>
								<li class="swiper-slide liwid<%=$datasetCount %>">
									<a href="<%=$item->{"link"}%>" class="colblue" style="background-color:<%=$item->{"bgColor"}%>;margin-right:<%= $content->{"marginstyle"}%>px">
										<img src="<%=$item->{"pic"}%>">
										<h3 style="color:<%=$item->{"fotColor"}%>"><%=$item->{"showtitle"}%></h3>
									</a>
								</li>
							<% }) %>				
						</ul>
					</div>
				<% }else{ %>
					<div class="homeCnavbox swiper-container" style="height:44px;line-height:44px;">
						<ul class="swiper-wrapper topnav clearfix" style="height:44px;line-height:44px;">
							<%__::each($dataset, function($item, $key) use ($content,$datasetCount){%>
								<li class="swiper-slide liwid<%=$datasetCount%>" style="height:44px;line-height:44px;">
									<a href="<%=$item->{"link"}%>" class="colblue" style="background-color:<%=$item->{"bgColor"}%>;height:44px;line-height:44px;margin-right:<%= $content->{"marginstyle"}%>px">
										<h3 style="color:<%=$item->{"fotColor"}%>;height:44px;line-height:44px;"><%=$item->{"showtitle"}%></h3>
									</a>
								</li>
							<% }) %>				
						</ul>
					</div>
				<% } %>	
			<%}%>
		</div>
    		';
    private $tpl_diy_con_type13 = '
    		<% $dataset = $content->{"dataset"};
	    	   $datasetCount = count($dataset);
	    	%>
    		<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
				<%if($content->{"layout"}==0){%>
					<section class="diy-showcase col2">
    					<%__::each($dataset, function($item, $index) use ($content,$datasetCount){%>
				        	<a href="#" class="con-img bdbox img-<%=$index+1%> lazyload lazyload-ph" data-original="<%=$item->{"pic"}%>" style="background-image:url(<%=$item->{"pic"}%>)">						
					        	<%if($item->{"showTitle"}==1){%>
					            	<p class="info bdbox"><%=$item->{"title"}%></p>
					            <%}%>
					        </a>
				        <%})%>
				    </section>
				<%}else if($content->{"layout"}==1){%>
					<section class="diy-showcase col3 clearfix">
						<%__::each($dataset, function($item, $index) use ($content,$datasetCount){%>
					        <a href="#" class="con-img bdbox" style="background-image:url(<%=$item->{"pic"}%>)">
					            <%if($item->{"showTitle"}==1){%>
					            	<p class="info bdbox"><%=$item->{"title"}%></p>
					            <%}%>
					        </a>
				        <%})%>
				    </section>
				<%}%>
		 </section>
    		';
    private $tpl_diy_con_type14 = '';
    private $tpl_diy_con_type15 = '';
    private $tpl_diy_con_type16 = '
    	<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<section class="members_notice" style="background-color:<%=$content->{"bgColor"}%>;">
	 				<h2 class="j-notice notice-con <%=$content->{"fontSize"}%>">公告：<%=$content->{"showtitle"}%></h2>
			</section>
		</section>
    		';
    private $tpl_diy_con_type17 = '
    	<% $dataset = $content->{"dataset"};
    	   $datasetCount = count($dataset);
    	%>
    	<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<section class="members_classify layoutstyle<%=$content->{"layout"}%>">
				<div class="swiper-container" >
					<ul class="clearfix">
    					<%__::each($dataset, function($item, $index) use ($content,$datasetCount){%>
						<li class="swiper-slide">
							<a href="<%=$item->{"link"}%>" class="colblue" style="background-color:<%=$item->{"bgColor"}%>;">
								<h3 style="color:<%=$item->{"fotColor"}%>;"><%=$item->{"showtitle"}%></h3>
							</a>
						</li>
						<% }) %>				
					</ul>
				</div>
			</section>
		</section>
    		';
    
	/**
	 * 获取类型9 图片广告的参数对象
	 * @return mixed
	 */
	public function getType9Obj($data) {
		$basicTemplate = __::template( $this->tpl_diy_con_type9);
		return $basicTemplate($data);
	}
	public function addTemple($data) {
		$type = $data->{"type"};
		$template = "";
		switch ($type) {
			case 1:
				$template = $this->tpl_diy_con_type1;
				break;
			case 2:
				$template = $this->tpl_diy_con_type2;
				break;
			case 3:
				$template = $this->tpl_diy_con_type3;
				break;
			case 4:
				$template = $this->tpl_diy_con_type4;
				break;
			case 5:
				$template = $this->tpl_diy_con_type5;
				break;
			case 6:
				$template = $this->tpl_diy_con_type6;
				break;
			case 7:
				$template = $this->tpl_diy_con_type7;
				break;	
			case 8:
				$template = $this->tpl_diy_con_type8;
				break;
			case 9:
				$template = $this->tpl_diy_con_type9;
				break;
			case 10:
				$template = $this->tpl_diy_con_type10;
				break;
			case 11:
				$template = $this->tpl_diy_con_type11;
				break;
			case 12:
				$template = $this->tpl_diy_con_type12;
				break;
			case 13:
				$template = $this->tpl_diy_con_type13;
				break;
			case 14:
				$template = $this->tpl_diy_con_type14;
				break;
			case 15:
				$template = $this->tpl_diy_con_type15;
				break;
			case 16:
				$template = $this->tpl_diy_con_type16;
				break;
			case 17:
				$template = $this->tpl_diy_con_type17;
				break;
		}
		$basicTemplate = __::template($template);
		return $basicTemplate($data);
	}
	public function getPageObj() {
		return $this->obj->{'page'};
	}
	public function getPModulesObj() {
		return $this->obj->{'PModules'};
	}
	public function getLModulesObj() {
		return $this->obj->{'LModules'};
	}
}

