//UI控制
	//全页面遮罩
	function whole_page_mask_switch(operation){
		if(operation=='on'){
			document.getElementById("whole_page_mask").style.visibility="visible";
			document.getElementById("whole_page_mask").style.background="rgba(0,0,0,0.8)";
			document.getElementById("container").style.WebkitFilter="blur(3px)";
			console.log("显示遮罩");}
		if(operation=='off'){
			document.getElementById("sign_in_box").style.visibility="hidden";
			document.getElementById("sign_up_box").style.visibility="hidden";
			document.getElementById("whole_page_mask").style.visibility="hidden";
			document.getElementById("whole_page_mask").style.background="rgba(0,0,0,0)";
			document.getElementById("container").style.WebkitFilter="blur(0px)";
			console.log("隐藏遮罩");
		}

	}
	//登录框注册框控制
	function sign_in_box_switch(operation){
		if(operation=='on'){
			document.getElementById("sign_in_box").style.top="50%";
			console.log("登录框下降");
			document.getElementById("sign_in_box").style.opacity="1";
			console.log("设置登录框不透明");
			document.getElementById("sign_in_box").style.visibility="visible";
			console.log("显示登录框");
			}
		if(operation=='off'){
			document.getElementById("sign_in_box").style.top="-50%";
			console.log("登录框上升");
			document.getElementById("sign_in_box").style.opacity="0";
			console.log("设置登录框透明");
			document.getElementById("sign_in_box").style.visibility="hidden";
			console.log("隐藏登录框");
			
		}

	}
	function sign_up_box_switch(operation){
		if(operation=='on'){	document.getElementById("sign_up_box").style.top="50%";
		console.log("注册框下降");			document.getElementById("sign_up_box").style.opacity="1";
		console.log("设置注册框不透明");	document.getElementById("sign_up_box").style.visibility="visible";
		console.log("显示注册框");
		}
		if(operation=='off'){	document.getElementById("sign_up_box").style.top="-50%";
			console.log("注册框上升");	document.getElementById("sign_up_box").style.opacity="0";
			console.log("设置注册框透明");
			document.getElementById("sign_up_box").style.visibility="hidden";
			console.log("隐藏注册框");		
		}
	}
	function sign_in_ui_on(){
		sign_up_box_switch('off');
		whole_page_mask_switch('on');
		sign_in_box_switch('on');
	}
	function sign_in_ui_off(){
		whole_page_mask_switch('off');
		sign_in_box_switch('off');
	}
	function sign_up_ui_on(){
		sign_in_box_switch('off');
		whole_page_mask_switch('on');
		sign_up_box_switch('on');
	}
	function sign_up_ui_off(){
		whole_page_mask_switch('off');
		sign_up_box_switch('off');
	}
	//关闭所有浮动UI
	function close_all_float_ui(){
		whole_page_mask_switch('off');
		sign_up_box_switch('off');
		sign_in_box_switch('off');
	}
	
	//登录表单检查	
	function sign_in_check_name(){
		var input_name=document.getElementById("name").value;
		if(input_name==""||input_name==null)
		{
			document.getElementById("name").style.borderColor="#FF5730";
			document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("name").style.borderColor="";
			document.getElementById("sign_in_fail_msg").style.display="none";
			document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;}
	}
	function sign_in_check_password(){
		var input_password=document.getElementById("password").value;
		if(input_password==""||input_password==null)
		{
			document.getElementById("password").style.borderColor="#FF5730";
			document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("password").style.borderColor="";
			document.getElementById("sign_in_fail_msg").style.display="none";
			document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;}
	}
	function sign_in_box_check_all(){
		sign_in_check_name();
		sign_in_check_password();
		if(!sign_in_check_name()||!sign_in_check_password())
		{
			document.getElementById("sign_in_fail_msg").style.display="block";
			document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("sign_in_input_area").submit();//提交表单
		}
	}

	//注册表单检查
	function sign_up_check_name(){
		var input_name=document.getElementById("sign_up_name").value;
		if(input_name==""||input_name==null)
		{
			document.getElementById("sign_up_name").style.borderColor="#FF5730";
			//document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("sign_up_name").style.borderColor="";
			//document.getElementById("sign_in_fail_msg").style.display="none";
			//document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;}
	}
	function sign_up_check_email(){
		var input_email=document.getElementById("sign_up_email").value;
		if(input_email==""||input_email==null)
		{
			document.getElementById("sign_up_email").style.borderColor="#FF5730";
			//document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("sign_up_email").style.borderColor="";
			//document.getElementById("sign_in_fail_msg").style.display="none";
			//document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;}
	}
	function sign_up_check_password(){
		var input_password=document.getElementById("sign_up_password").value;
		if(input_password==""||input_password==null)
		{
			document.getElementById("sign_up_password").style.borderColor="#FF5730";
			//document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("sign_up_password").style.borderColor="";
			//document.getElementById("sign_in_fail_msg").style.display="none";
			//document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;}
	}
	function sign_up_check_confirm_password(){
		var input_confirm_password=document.getElementById("sign_up_confirm_password").value;
		if(input_confirm_password==""||input_confirm_password==null)
		{
			document.getElementById("sign_up_confirm_password").style.borderColor="#FF5730";
			//document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			if(input_confirm_password!=document.getElementById("sign_up_password").value){
				document.getElementById("sign_up_confirm_password").style.borderColor="#FF8F00";
				return false;
			}else{
			document.getElementById("sign_up_confirm_password").style.borderColor="";
			//document.getElementById("sign_in_fail_msg").style.display="none";
			//document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;
		}		
	}
	}
	function sign_up_check_captcha(){
		var input_captcha=document.getElementById("sign_up_captcha").value;
		if(input_captcha==""||input_captcha==null)
		{
			document.getElementById("sign_up_captcha").style.borderColor="#FF5730";
			//document.getElementById("sign_in_fail_msg").style.display="block";
			//document.getElementById("sign_in_fail_msg").innerHTML="请输入用户名和密码";
			return false;
		}else{
			document.getElementById("sign_up_captcha").style.borderColor="";
			//document.getElementById("sign_in_fail_msg").style.display="none";
			//document.getElementById("sign_in_fail_msg").innerHTML="";
			return true;}			
		
	}
		
	function sign_up_box_check_all(){
		sign_up_check_name();
		sign_up_check_email();
		sign_up_check_password();
		sign_up_check_confirm_password();
		sign_up_check_captcha();
		if(!sign_up_check_name()||
		   !sign_up_check_email()||
		   !sign_up_check_password()||
		   !sign_up_check_confirm_password()||
		   !sign_up_check_captcha()
		  )
		{
			alert("请将注册信息填写完整");
			return false;
		}else{
			document.getElementById("sign_up_input_area").submit();//提交表单
		}
		
	}