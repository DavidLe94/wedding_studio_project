function fValid(){
		var vName = document.formDK.txtName;
		var vAdr = document.formDK.txtAdr;
		var vPhone = document.formDK.txtPhone;
		if(vName.value==""){
			alert("Họ tên không được bỏ trống");
			vName.focus();
			return;
		}else if(vAdr.value==""){
			alert("Vui lòng nhập địa chỉ");
			vAdr.focus();
			return;
		}else if(vPhone.value==""){
			alert("Hãy nhập số điện thoại");
			vPhone.focus();
			return ;
		}/*else if(vPhone.value != (!isNaN)){
			alert("Số điện thoại phải là một số");
			vPhone.focus();
			return;
		}else if(vMail.value==""){
			alert("Hãy nhập Email");
			vMail.focus();
			return;
		}*/else{}
			
	}