// JavaScript Document
function fValid(){
		var vName = document.formTT.txtName;
		var vAdr = document.formTT.txtAdr;
		var vPhone = document.formTT.txtPhone;
		var vMail = document.formTT.txtMail;
		if(vName.value==""){
			alert("Họ tên không được bỏ trống");
			vName.focus();
			return;
		}
		if(vPhone.value ==""){
			alert("Hãy nhập số điện thoại");
			vPhone.focus();
			return;	
		}
		if(vMail.value==""){
			alert("Hãy nhập Email");
			vMail.focus();
			return;
		}
		
	}