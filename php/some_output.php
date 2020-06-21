<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>
你好
<?php
	if(isset($_POST['name'])){
	echo '，'.$_POST['name'];
	}
	?>
	</title>
</head>

<body>

<?php
	if(isset($_POST['name'])){
	echo '用户名：'.$_POST['name'].'<br/>';}
	if(isset($_POST['password'])){
	echo '密码：'.md5($_POST['password']).'<br/>';
	}
	if(!isset($_POST['name'])||!isset($_POST['password'])){
		echo '请输入账户名和密码';
	}

	?>

</body>
</html>