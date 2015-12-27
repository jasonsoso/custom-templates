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
    
    private $getType9Temple = 
    '<% $dataset = $content->{"dataset"};%>
   	<div class="membersbox membersbox-box">
		<section class="modulePadding" style="padding-top:<%=$content->{"modulePadding"}%>px;padding-bottom:<%=$content->{"modulePadding"}%>px;">
			<%if($content->{"showType"}==1){ %>
				<section class="members_flash j-swipe">
					<ul class="clearfix">
						<%if(count($dataset)>1){ %>
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
    			
			<% } %>
		</section>
	</div>
    		';
    
	/**
	 * 获取类型9 图片广告的参数对象
	 * @return mixed
	 */
	public function getType9Obj($data) {
		$basicTemplate = __::template( $this->getType9Temple);
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

