 /* global $ */

 var prePhoneValid  = true,comPhoneValid  = true;
var preEmailValid  = true,comEmailValid  = true;

$(function() {
    $('#pre-mobile').blur(function() {
        prePhoneValid = true;
        var self = this;
        var mobile_reg = /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/; //匹配手机正则
        var phone = $(this).val();
        if (phone == '') {
            $(this).siblings('i').text('输入手机号，便于您找回密码，下载组件').css({'color': '#ccc'});
            $(this).css({'border': 'solid 1px #ccc'});
            $(this).siblings('i').removeClass('dui');
            prePhoneValid = true;
            return;
        } else if (!mobile_reg.test(phone)) {
            $(this).css({'border': 'solid 1px red'});
            $(this).siblings('i').text('请输入有效的手机号码').css({'color': 'red'});
            $(this).css({'border': 'solid 1px red'});
            $(this).siblings('i').removeClass('dui');
            prePhoneValid = false;
            return;
        }

        var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkPhone");
        requestObject.addParameter("phone", phone);
        requestObject.asynPostForObject(function(responseObject) {
            var code = responseObject.code;
            if (code===0) {
                $(self).siblings('i').text('手机已存在').css({'color': 'red'});
                $(self).siblings('i').removeClass('dui');
                $(self).css({'border': 'solid 1px red'});
                prePhoneValid = false;
            } else {
                $(self).siblings('i').text('').css({'color': 'green'});
                $(self).siblings('i').addClass('dui');
                $(self).css({'border': 'solid 1px green'});
                prePhoneValid = true;
            }
        });
    });
    
    $('#com-mobile').blur(function() {
        comPhoneValid  = true;
        var self = this;
        var phone = $(this).val();
        var mobile_reg = /^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/; //匹配手机正则
        if (phone == '') {
            $(this).siblings('i').text('输入手机号，便于您找回密码，下载组件').css({'color': '#ccc'});
            $(this).css({'border': 'solid 1px #ccc'});
            $(this).siblings('i').removeClass('dui');
            comPhoneValid = true;
            return;
        } else if (!mobile_reg.test(phone)) {
            $(this).siblings('i').text('请输入有效的手机号码').css({'color': 'red'});
            $(this).css({'border': 'solid 1px red'});
            $(this).siblings('i').removeClass('dui');
            comPhoneValid = false;
            return;
        }

        var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkPhone");
        requestObject.addParameter("phone", phone);
        requestObject.asynPostForObject(function(responseObject) {
            var code = responseObject.code;
            if (code===0) {
                $(self).siblings('i').text('手机已存在').css({'color': 'red'});
                $(self).siblings('i').removeClass('dui');
                $(self).css({'border': 'solid 1px red'});
                comPhoneValid = false;
            } else {
                $(self).siblings('i').text('').css({'color': 'green'});
                $(self).siblings('i').addClass('dui');
                $(self).css({'border': 'solid 1px green'});
                comPhoneValid = true;
            }
        });
    
    })

    $('#pre-email').blur(function() {
        preEmailValid = true;
        var self = this;
        var value = $(this).val();

        var email_reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/; //匹配邮箱正则
        if (value == '') {
            $(this).siblings('i').text('').css({'color': '#ccc'});
            $(this).css({'border': 'solid 1px #ccc'});
            $(this).siblings('i').removeClass('dui');
            preEmailValid = true;
            return ;
        } else if (!email_reg.test(value)) {
            $(this).siblings('i').text('邮箱格式不正确').css({'color': 'red'});
            $(this).siblings('i').removeClass('dui');
            $(this).css({'border': 'solid 1px red'});
            preEmailValid = false;
            return;
        } 

        var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkEmail");
        requestObject.addParameter("email", value);
        requestObject.asynPostForObject(function(responseObject) {
            var code = responseObject.code;
            if (code===0) {
                $(self).siblings('i').text('邮箱已存在').css({'color': 'red'});
                $(self).css({'border': 'solid 1px red'});
                $(self).siblings('i').removeClass('dui');
                preEmailValid = false;
            } else {
                $(self).siblings('i').text('').css({'color': 'green'});
                $(self).siblings('i').addClass('dui');
                $(self).css({'border': 'solid 1px green'});
                preEmailValid = true;
            }
        });
    });

    $('#com-email').blur(function() {
        comEmailValid = true;
        var self = this;
        var value = $(this).val();

        var email_reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/; //匹配邮箱正则
        if (value == '') {
            $(this).siblings('i').text('').css({'color': '#ccc'});
            $(this).css({'border': 'solid 1px #ccc'});
            $(this).siblings('i').removeClass('dui');
            comEmailValid = true;
            return ;
        } else if (!email_reg.test(value)) {
            $(this).siblings('i').text('邮箱格式不正确').css({'color': 'red'});
            $(this).siblings('i').removeClass('dui');
            $(this).css({'border': 'solid 1px red'});
            comEmailValid = false;
            return;
        } 

        var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkEmail");
        requestObject.addParameter("email", value);
        requestObject.asynPostForObject(function(responseObject) {
            var code = responseObject.code;
            if (code===0) {
                $(self).siblings('i').text('邮箱已存在').css({'color': 'red'});
                $(self).css({'border': 'solid 1px red'});
                $(self).siblings('i').removeClass('dui');
                comEmailValid = false;
            } else {
                $(self).siblings('i').text('').css({'color': 'green'});
                $(self).siblings('i').addClass('dui');
                $(self).css({'border': 'solid 1px green'});
                comEmailValid = true;
            }
        });
    });

    /*个人用户名验证*/
    $('#pre-name').blur(function() {
        var userName_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,  //只含有汉字、数字、字母、下划线
        userName = $('#pre-name').val();
        $(this).siblings('i').text('4～16个字符、支持字母、数字组合');
        /*判断文本框字符长度*/
        var num = 0;
        var nameVal = userName.split("");
        for (var i = 0; i < nameVal.length; i++) {
            if (nameVal[i].charCodeAt(0) < 299) {
                num++;
            } else {
                num += 2;
            }
        }
        if (userName == '') {
            $('#pre-name').siblings('i').text('4～16个字符、支持字母、数字组合').css({'color': '#ccc'});
            $('#pre-name').css({'border': 'solid 1px #ccc'});
            $('#pre-name').siblings('i').removeClass('dui');
        } else if (!userName_reg.test(userName)) {
            $('#pre-name').siblings('i').text('用户名只含有汉字、数字、字母、下划线').css({'color': 'red'});
            $('#pre-name').siblings('i').removeClass('dui');
            $('#pre-name').css({'border': 'solid 1px red'})
        } else if (num < 4 || num > 16) {
            $('#pre-name').siblings('i').text('请将用户名保持在4～16个字符之间').css({'color': 'red'});
            $('#pre-name').siblings('i').removeClass('dui');
            $('#pre-name').css({'border': 'solid 1px red'})
        } else {
            $('#pre-name').siblings('i').text('').css({'color': 'green'});
            var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkUser");
            requestObject.addParameter("account", $('#pre-name').val());
            requestObject.asynPostForObject(function(responseObject) {
                var code = responseObject.code;
                if (code===0) { //如果执行成功 则用户已存在，需重新填写用户名
                    $('#pre-name').siblings('i').text(responseObject.msg).css({'color': 'red'});
                    $('#pre-name').css({'border': 'solid 1px red'})
                    $('#pre-name').siblings('i').removeClass('dui');
                } else { //如果执行失败 则用户不存在可以注册
                    $('#pre-name').siblings('i').text('').css({'color': 'green'});
                    $('#pre-name').siblings('i').addClass('dui');
                    $('#pre-name').css({'border': 'solid 1px green'});
                }
            });
        }
    })
    /*企业用户名验证*/
    $('#com-name').blur(function() {
        var userName_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,  //只含有汉字、数字、字母、下划线
        userName = $('#com-name').val();
        $(this).siblings('i').text('4～16个字符、支持字母、数字组合');
        /*判断文本框字符长度*/
        var num = 0;
        var nameVal = userName.split("");
        for (var i = 0; i < nameVal.length; i++) {
            if (nameVal[i].charCodeAt(0) < 299) {
                num++;
            } else {
                num += 2;
            }
        }
        if (userName == '') {
            $('#com-name').siblings('i').text('4～16个字符、支持字母、数字组合').css({'color': '#ccc'});
            $('#com-name').css({'border': 'solid 1px #ccc'});
            $('#com-name').siblings('i').removeClass('dui');
        } else if (!userName_reg.test(userName)) {
            $('#com-name').siblings('i').text('用户名只含有汉字、数字、字母、下划线').css({'color': 'red'});
            $('#com-name').siblings('i').removeClass('dui');
            $('#com-name').css({'border': 'solid 1px red'})
        } else if (num < 4 || num > 16) {
            $('#com-name').siblings('i').text('请将用户名保持在4～16个字符之间').css({'color': 'red'});
            $('#com-name').siblings('i').removeClass('dui');
            $('#com-name').css({'border': 'solid 1px red'})
        } else {
            $('#com-name').siblings('i').text('').css({'color': 'green'});
            var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkUser");
            requestObject.addParameter("account", $('#com-name').val());
            requestObject.asynPostForObject(function(responseObject) {

                if (responseObject.code===0) { //如果执行成功 则用户已存在，需重新填写用户名
                    $('#com-name').siblings('i').text(responseObject.msg).css({'color': 'red'});
                    $('#com-name').css({'border': 'solid 1px red'})
                    $('#com-name').siblings('i').removeClass('dui');
                } else { //如果执行失败 则用户不存在可以注册
                    $('#com-name').siblings('i').text('').css({'color': 'green'});
                    $('#com-name').siblings('i').addClass('dui');
                    $('#com-name').css({'border': 'solid 1px green'});
                }
            });
        }
    })

    /*个人用户注册页面的短信验证*/
    $('#pre-phone-yanzheng').click(function() {
        //sendCode($('#pre-phone-yanzheng'));
        var tel = $('#pre-mobile').val();
        if (tel == "") {
            $('#pre-mobile').siblings('i').text('请输入手机号').css({'color': 'red'});
            $('#pre-mobile').css({'border': 'solid 1px red'})
            $('#pre-mobile').siblings('i').removeClass('dui');
            return;
        } else {
            $('.dzyzm').siblings('i').text('').css({'color': 'css'});
            $('.dzyzm').css({'border': 'solid 1px #ccc'})
            $('.dzyzm').siblings('i').removeClass('dui');
            mobile($('#pre-mobile').val(), $('#pre-mobile'))
        }
        var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Mobile/send");
        requestObject.addParameter("phone", tel);
        requestObject.asynPostForObject(function(responseObject) {

            if (responseObject.code===1) {
                var time = 60;
                var timer;
                timer = setInterval(function() {
                    time--;
                    if (time <= 0) {
                        $('#pre-phone-yanzheng').val('重新发送');
                        $('#pre-phone-yanzheng').attr('disabled', false)
                        clearInterval(timer);
                    } else {
                        $('#pre-phone-yanzheng').val(time + '秒后重试');
                        $('#pre-phone-yanzheng').attr('disabled', true)
                    }
                // console.log(time)
                }, 1000)
            
            } else{
                if (responseObject.msg == '该手机号已经注册') {
                    $('#pre-mobile').siblings('i').text('' + responseObject.msg + '').css({'color': 'red'});
                    $('#pre-mobile').css({'border': 'solid 1px red'})
                    $('#pre-mobile').siblings('i').removeClass('dui');
                }else if(responseObject.msg == '该手机号已激活'){
                    $('#pre-mobile').siblings('i').text('' + responseObject.msg + '').css({'color': 'red'});
                    $('#pre-mobile').css({'border': 'solid 1px red'})
                    $('#pre-mobile').siblings('i').removeClass('dui');
                } else {
                    $('#pre-phone-yanzheng').siblings('i').text(responseObject.msg).css({'color': 'red'});
                    $('.message-input-text').css({'border': 'solid 1px red'})
                    $('#pre-phone-yanzheng').siblings('i').removeClass('dui');
                }
                return;
            }
        });
    })

    /*企业用户注册页面的短信验证*/
    $('#com-input-yanzheng').click(function() {
        var tel = $('#com-mobile').val();
        if (tel == "") {
            $('#com-mobile').siblings('i').text('请输入手机号').css({'color': 'red'});
            $('#com-mobile').css({'border': 'solid 1px red'})
            return;
        } else {
            mobile($('#com-mobile').val(), $('#com-mobile'))
        }
        var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Mobile/send");
        requestObject.addParameter("phone", tel);
        requestObject.asynPostForObject(function(responseObject) {
            if (responseObject.code===1) {
                var time = 60;
                var timer;
                timer = setInterval(function() {
                    time--;
                    if (time <= 0) {
                        $('#com-input-yanzheng').val('重新发送');
                        $('#com-input-yanzheng').attr('disabled', false)
                        clearInterval(timer);
                    } else {
                        $('#com-input-yanzheng').val(time + '秒后重试');
                        $('#com-input-yanzheng').attr('disabled', true)
                    }
                // console.log(time)
                }, 1000)
            } else {
                if (responseObject.message == '该手机号已经注册') {
                    $('#com-mobile').siblings('i').text('' + responseObject.msg + '').css({'color': 'red'});
                    $('#com-mobile').css({'border': 'solid 1px red'})
                    $('#com-mobile').siblings('i').removeClass('dui');
                }else if(responseObject.msg == '该手机号已激活'){
                    $('#com-mobile').siblings('i').text('' + responseObject.msg + '').css({'color': 'red'});
                    $('#com-mobile').css({'border': 'solid 1px red'})
                    $('#com-mobile').siblings('i').removeClass('dui');
                } else {
                    $('#com-input-yanzheng').siblings('i').text('' + responseObject.msg + '').css({'color': 'red'});
                    $('.tpyzm').css({'border': 'solid 1px red'})
                    $('.tpyzm').siblings('i').removeClass('dui');
                }
                return;
            }
        });
    })


    /*个人用户注册页面注册提交*/
    $('#pre-register-but').click(function() {
        if(!pre_form()){
            return false;
        }
        if ($('#pre-mobile').val() != '' && $('.dzyzm').val() == '') {

            $('.dzyzm').siblings('i').text('请输入短信验证码').css({'color': 'red'});
            $('.dzyzm').css({'border': 'solid 1px red'})
            $('.dzyzm').siblings('i').removeClass('dui');
            return false;
        }else if($('.dzyzm').val() != ''){
            $('.dzyzm').siblings('i').text('');
            $('.dzyzm').css({'border': 'solid 1px green'})
        }else{
            $('.dzyzm').siblings('i').text('');
            $('.dzyzm').css({'border': 'solid 1px #ccc'});
        }
          
    
        if ($('#agree-but').is(':checked')) {
            $('#agree-zcxieyi').hide();
            var job = $('input:radio[name="same"]:checked').val();
            if (job == null) {
                $('#wrong-mesg').show();
                return false;
            } else {
                $('#wrong-mesg').hide();
                if ($('#pre-name').val() != '') {
                    var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkUser");
                    requestObject.addParameter("account", $('#pre-name').val());
                    requestObject.asynPostForObject(function(responseObject) {
                        var code = responseObject.code;
                        if (code === 0) { //如果执行成功 则用户已存在，需重新填写用户名
                            $('#pre-name').siblings('i').text(responseObject.msg).css({'color': 'red'});
                            $('#pre-name').css({'border': 'solid 1px red'})
                            $('#pre-name').siblings('i').removeClass('dui');
                        } else { //如果执行失败 则用户不存在可以注册
                            preJiekou();
                            $('#pre-name').text('');
                            $('#pre-name').css({'border': 'solid 1px green'})
                            $('#pre-name').siblings('i').addClass('dui');
                        }
                    });
                }
            }
        } else {
            $('#agree-zcxieyi').show();
            return
        }
        
        
        
        function preJiekou() {
            console.log($('#pre-email').val() + '|')
            var job = $("input[name='same']:checked").val();
            var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/registerA");
            requestObject.addParameter("job", job);
            requestObject.addParameter("account", $('#pre-name').val());
            requestObject.addParameter("pwd", $('#pre-password').val());
            requestObject.addParameter("email", $('#pre-email').val());
            requestObject.addParameter("tel", $('#pre-mobile').val());
            requestObject.addParameter("verify", $('.dzyzm').val());
            requestObject.addParameter("code", $('.tpyzm').val());
            
            var invitor = getInvitor();
            if(invitor){
              requestObject.addParameter("t", invitor.t);  
              requestObject.addParameter("id", invitor.id);  
            }

            
            requestObject.asynPostForObject(function(res) {
                var code = res.code;
                if (code === 1) {
                    $('.tpyzm').siblings('i').text('');
                    $('.pre-successTip').fadeIn().delay(1000).fadeOut(1000);
                    setTimeout(function() {
                        gotoHomePage();
                    }, 2000)
                
                } else {

                    if(res.msg == '手机已存在'){
                        $('#pre-mobile').css({'border': 'solid 1px red'})
                        .siblings('i').text('手机已存在')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }else if(res.msg == '用户已存在'){
                        $('#pre-name').css({'border': 'solid 1px red'})
                        .siblings('i').text('用户已存在')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }else if(res.msg == '邮箱已存在'){
                        $('#pre-email').css({'border': 'solid 1px red'})
                        .siblings('i').text('邮箱已存在')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }else if(res.msg == '短信验证码错误'){
                        $('.dzyzm').css({'border': 'solid 1px red'})
                        .siblings('i').text('短信验证码错误')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }

                    $("#afreshLinkzc").click();
                    $('.tpyzm').siblings('i').text('请重新输入验证码').css({'color':'red'});
                    $('.tpyzm').css({'border':'solid 1px red'})
                    $('.tpyzm').siblings('i').removeClass('dui');
                }
            });
        
        }
    
    
    })

    /*企业用户注册页面的注册提交*/
    $('.com-register-but').click(function() {
        //表单验证的方法
        if(!com_form()){
            return false;
        }
        if ($('#com-mobile').val() != ''&& $('.dzyzm2').val() == '') {
            $('.dzyzm2').siblings('i').text('请输入短信验证码').css({'color': 'red'});
            $('.dzyzm2').css({'border': 'solid 1px red'})
            $('.dzyzm2').siblings('i').removeClass('dui');
            return false;
        }else if($('.dzyzm2').val() != ''){
            $('.dzyzm2').siblings('i').text('');
            $('.dzyzm2').css({'border': 'solid 1px green'})
        }
        else{
            $('.dzyzm2').siblings('i').text('');
            $('.dzyzm2').css({'border': 'solid 1px $ccc'})
        }

        if ($('#agree-but2').is(':checked')) {
            $('#agree-zcxieyi2').hide();
            if ($('#com-name').val() != '') {
                var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/checkUser");
                requestObject.addParameter("account", $('#com-name').val());
                requestObject.asynPostForObject(function(responseObject) {
                    if (responseObject.code===0) { //如果执行成功 则用户已存在，需重新填写用户名
                        $('#com-name').siblings('i').text(responseObject.msg).css({'color': 'red'});
                        $('#com-name').css({'border': 'solid 1px red'})
                        $('#com-name').siblings('i').removeClass('dui');
                    } else { //如果执行失败 则用户不存在可以注册
                        $('#com-name').siblings('i').text('').css({'color': 'green'});
                        $('#com-name').siblings('i').addClass('dui');
                        $('#com-name').css({'border': 'solid 1px green'});
                        comJiekou();
                    }
                });
            }
        } else {
            $('#agree-zcxieyi2').show();
            return;
        }
      
        
        
        function comJiekou() {
            var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/registerB");
            requestObject.addParameter("account", $('#com-name').val());
            //requestObject.addParameter("company_nickname", $('#com-name').val());
            requestObject.addParameter("pwd", $('#com-password').val());
            requestObject.addParameter("email", $('#com-email').val());
            requestObject.addParameter("phone", $('#com-mobile').val());
            requestObject.addParameter("verify", $('.dzyzm2').val());
            requestObject.addParameter("code", $('.com-tpyzm').val());

            var invitor = getInvitor();
            if(invitor){
              requestObject.addParameter("t", invitor.t);  
              requestObject.addParameter("id", invitor.id);  
            }

            requestObject.asynPostForObject(function(res) {
                if (res.code===1) {
                    $('.com-tpyzm').siblings('i').text('');
                    $('.com-successTip').fadeIn().delay(1000).fadeOut(1000);
                    setTimeout(function() {
                        gotoHomePage();
                    }, 2000)
                } else {

                    if(res.msg == '手机已存在'){
                        $('#com-mobile').css({'border': 'solid 1px red'})
                        .siblings('i').text('手机已存在')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }else if(res.msg == '用户已存在'){
                        $('#com-name').css({'border': 'solid 1px red'})
                        .siblings('i').text('用户已存在')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }else if(res.msg == '邮箱已存在'){
                        $('#com-email').css({'border': 'solid 1px red'})
                        .siblings('i').text('邮箱已存在')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }else if(res.msg == '短信验证码错误'){
                        $('.dzyzm2').css({'border': 'solid 1px red'})
                        .siblings('i').text('短信验证码错误')
                        .css({'color': 'red'}).siblings('i').removeClass('dui');
                    }


                    $("#afreshLinkzc2").click();
                    $('.com-tpyzm').siblings('i').text('请重新输入验证码').css({'color': 'red'});
                    $('.com-tpyzm').css({'border': 'solid 1px red'})
                    $('.com-tpyzm').siblings('i').removeClass('dui');
                // parentalControl = new ParentalControl();
                }
            });
        }
    })
    
    
    function gotoHomePage() {
        location='index.html';
    }


    /*企业注册文本框内容同步*/
    function synchronize() {
        document.getElementById('company-name').value = document.getElementById('com-name').value;
    //alert("同步成功"); 
    }
    setInterval(synchronize, 500); //同步的时间间隔，每0.5秒同步一次 

})


/*验证用户名*/
function userName(value, selector) {
    var userName_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,  //只含有汉字、数字、字母、下划线
    userName = value;
    $(this).siblings('i').text('4～16个字符、支持字母、数字组合');
    /*判断文本框字符长度*/
    var num = 0;
    var nameVal = userName.split("");
    for (var i = 0; i < nameVal.length; i++) {
        if (nameVal[i].charCodeAt(0) < 299) {
            num++;
        } else {
            num += 2;
        }
    }
    //return num;
    if (userName == '') {
        selector.siblings('i').text('4～16个字符、支持字母、数字组合').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
    } else if (!userName_reg.test(userName)) {
        selector.siblings('i').text('用户名只含有汉字、数字、字母、下划线').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
    } else if (num < 4 || num > 16) {
        selector.siblings('i').text('请将用户名保持在4～16个字符之间').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
    } else {
        selector.siblings('i').text('').css({'color': 'green'});
        selector.siblings('i').addClass('dui');
        selector.css({'border': 'solid 1px green'});
        return true;
    }
}

/*密码验证*/
function passWord(value, selector) {
    if (value == '') {
        selector.siblings('i').text('6~20位字符，区分大小写').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
    } else if (value.length < 6 || value.length > 20) {
        selector.siblings('i').text('密码长度为6～20个字符').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
    } else {
        selector.siblings('i').text('').css({'color': 'green'});
        selector.css({'border': 'solid 1px green'});
        selector.siblings('i').addClass('dui');
        return true;
    }
}

function rePassword(value, selector) {
    var password = $('#pre-password').val();
    if (value == '') {
        //if( $("#foo").data("events")["click"] ){ //your code } 
        selector.siblings('i').text('').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
    } else if (value == password) {
        selector.siblings('i').text('');
        selector.css({'border': 'solid 1px green'});
        selector.siblings('i').addClass('dui');
        return true;
    } else if (value != password) {
        selector.siblings('i').text('密码不一致，请再次确认密码').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
    }
    
    var password2 = $('#com-password').val();
    if (value == '') {
        selector.siblings('i').text('').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
    } else if (value == password2) {
        selector.siblings('i').text('');
        selector.css({'border': 'solid 1px green'});
        selector.siblings('i').addClass('dui');
        return true;
    } else if (value != password) {
        selector.siblings('i').text('密码不一致，请再次确认密码').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
    }
}
/*验证邮箱*/

function email(value, selector) {
    var email_reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/; //匹配邮箱正则
    if (value == '') {
        selector.siblings('i').text('').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
        return true;
    } else if (!email_reg.test(value)) {
        selector.siblings('i').text('邮箱格式不正确').css({'color': 'red'});
        selector.css({'border': 'solid 1px red'});
        selector.siblings('i').removeClass('dui');
    }else{
        selector.siblings('i').text('').css({'color': 'green'});
        selector.css({'border': 'solid 1px green'});
        selector.siblings('i').addClass('dui');
        return true;
    }
}
/*验证手机*/
function mobile(value, selector) {
    var mobile_reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; //匹配手机正则
    if (value == '') {
        selector.siblings('i').text('请输入手机号').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
        return false;
    } else if (!mobile_reg.test(value)) {
        selector.siblings('i').text('请输入有效的手机号码!').css({'color': 'red'});
        selector.siblings('i').removeClass('dui');
        selector.css({'border': 'solid 1px red'});
        return false;
    }else{
        return true;
    }
}

/*验证码*/
function yanzhengma(value, selector) {
    if (value == '') {
        selector.siblings('i').text('').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
        return false;
    }else{
        return true;
    }
}


/*验证码*/
function yanzhengma_pic(value, selector) {
    if (value == '') {
        selector.siblings('i').text('').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
        return false;
    } else {
        selector.siblings('i').text('').css({'color': '#ccc'});
        selector.css({'border': 'solid 1px #ccc'});
        selector.siblings('i').removeClass('dui');
    }
}

function zhuceShow() {
    $('.opcity').show();
    $('.register-enter').attr('class', 'register-enter fadeInDown animated').show();
}


/*个人用户注册页面表单验证*/
function pre_form() {
    var valid = true;

    if(!userName($('#pre-name').val(), $('#pre-name'))){
        valid = false;
    }
    if(!passWord($('#pre-password').val(), $('#pre-password'))){
        valid = false;
    }
    if(!rePassword($('#pre-rePassword').val(), $('#pre-rePassword'))){
         valid = false;
    }
    if(!preEmailValid || !email($('#pre-email').val(), $('#pre-email'))){
         valid = false;
    }
    if(!prePhoneValid || !mobile($('#pre-mobile').val(), $('#pre-mobile'))){
        valid = false;
    }
    
    if ($('#pre-name').val() == '') {
        $('#pre-name').siblings('i').text('请输入用户名').css({'color': 'red'})
        $('#pre-name').css({'border': 'solid 1px red'})
        $('#pre-name').siblings('i').removeClass('dui');
        valid = false;
    }
    if ($('#pre-password').val() == '') {
        $('#pre-password').siblings('i').text('请输入密码').css({'color': 'red'})
        $('#pre-password').css({'border': 'solid 1px red'})
        $('#pre-password').siblings('i').removeClass('dui');
        valid = false;
    }
    if ($('#pre-rePassword').val() == '') {
        $('#pre-rePassword').siblings('i').text('请输入密码').css({'color': 'red'})
        $('#pre-rePassword').css({'border': 'solid 1px red'})
        $('#pre-rePassword').siblings('i').removeClass('dui');
        valid = false;
    }

    if ($('.tpyzm').val() == '') {
        $('.tpyzm').siblings('i').text('请输入验证码').css({'color':'red'});
        $('.tpyzm').css({'border':'solid 1px red'})
        $('.tpyzm').siblings('i').removeClass('dui');
        valid = false;
    }
    
    var job = $('input:radio[name="same"]:checked').val();
    if (job == null) {
        $('#wrong-mesg').show();
        valid = false;
    } else {
        console.log(job);
        $('#wrong-mesg').hide();
    }
    return valid;
}

/*企业用户注册页面表单验证*/
function com_form() {

    var valid = true;

    if(!userName($('#com-name').val(), $('#com-name'))){
        valid = false;
    }
    if(!passWord($('#com-password').val(), $('#com-password'))){
        valid = false;
    }
    if(!rePassword($('#com-rePassword').val(), $('#com-rePassword'))){
         valid = false;
    }
    if(!comEmailValid || !email($('#com-email').val(), $('#com-email'))){
         valid = false;
    }
    if(!comPhoneValid || !mobile($('#com-mobile').val(), $('#com-mobile'))){
        valid = false;
    }
    
    if ($('#com-name').val() == '') {
        $('#com-name').siblings('i').text('请输入公司名').css({'color': 'red'})
        $('#com-name').css({'border': 'solid 1px red'})
        $('#com-name').siblings('i').removeClass('dui');
        valid = false;
    }
    if ($('#com-password').val() == '') {
        $('#com-password').siblings('i').text('请输入密码').css({'color': 'red'})
        $('#com-password').css({'border': 'solid 1px red'})
        $('#com-password').siblings('i').removeClass('dui');
        valid = false;
    }
    if ($('#com-rePassword').val() == '') {
        $('#com-rePassword').siblings('i').text('请输入密码').css({'color': 'red'})
        $('#com-rePassword').css({'border': 'solid 1px red'})
        $('#com-rePassword').siblings('i').removeClass('dui');
        valid = false;
    }

    if ($('.com-tpyzm').val() == '') {
        $('.com-tpyzm').siblings('i').text('请输入验证码').css({'color': 'red'});
        $('.com-tpyzm').css({'border': 'solid 1px red'})
        $('.com-tpyzm').siblings('i').removeClass('dui');
        valid = false;
    }

    return valid;
}


function getInvitor(){
    if(!url) return null;
    var t = url('?t');
    var id = url('?id');

    if( t && id ){
        return {
            t:t,
            id:id
        }
    }else{
        return null;
    }
}
$(function(){
//发送手机短信验证码
$('#findMa-duanxinBut').click(function(){
	var tel = $('#findMa-mobile').val();
    if(tel ==""){
      $('#findMa-mobile').siblings('label').text('请输入手机号').css({'color':'red'});
      $('#findMa-mobile').css({'border':'solid 1px red'})
      return;
    }else{
      $('#findMa-duanxinText').siblings('label').text('').css({'color':'css'});
      $('#findMa-duanxinText').css({'border':'solid 1px #ccc'})
      if(!findMimaMobile($('#findMa-mobile').val(),$('#findMa-mobile'))){
      	return false;
      }else{
      	var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Mobile/resetPwdSend");
	    requestObject.addParameter("phone", tel);
	    requestObject.asynPostForObject(function(responseObject){
	      if(responseObject.code===1){
	        //$.messager.alert("提示信息", "短信发送成功");
	        var time=60;
	            var timer;
	            timer=setInterval(function(){
	                time--;
	                if(time<=0){
	                  $('#findMa-duanxinBut').val('重新发送');
	                  $('#findMa-duanxinBut').attr('disabled',false)        
	                  clearInterval(timer);
	                }else{
	                 $('#findMa-duanxinBut').val(time+'秒后重试');
	                 $('#findMa-duanxinBut').attr('disabled',true)
	                }
	               // console.log(time)
	            },1000)
	      }else{
	        $('#findMa-duanxinText').siblings('label').text(''+responseObject.msg+'').css({'color':'red'});
	        $('#findMa-duanxinText').css({'border':'solid 1px red'})
	        //$.messager.alert("提示信息", "短信发送失败" + responseObject.message, 'warning');
	        return;
	      }
	    });
      }
    }

    
})


/*点击找回密码按钮*/
$('#findMa-submitMobile-but').click(function(){
	if(!findMimaMobile($('#findMa-mobile').val(),$('#findMa-mobile'))){
		return false;
	}else{
		if($('#findMa-mobile').val() == '' ){
			$('#findMa-mobile').siblings('label').text('请输入手机号').css({'color':'red'});
	        $('#findMa-mobile').css({'border':'solid 1px red'})
		}else{
			if($('#findMa-duanxinText').val() == ''){
				$('#findMa-duanxinText').siblings('label').text('请输入短信验证码').css({'color':'red'});
		        $('#findMa-duanxinText').css({'border':'solid 1px red'})
		        return;
			}else{
				var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Mobile/resetPwdCheck");
				requestObject.addParameter("phone",$('#findMa-mobile').val());
			    requestObject.addParameter("verify", $('#findMa-duanxinText').val());
			    requestObject.asynPostForObject(function(responseObject){
			      if(responseObject.code==1){
			        $('.jihuo-main1').hide();
					$('.jihuo-main2').show();
					$('#progressbar li').eq(1).children('b').addClass('active').siblings('i').addClass('active');
			      }else{
			      	if(responseObject.msg =="该手机号未激活"){
			      		$('#findMa-mobile').siblings('label').text('该手机号未激活').css({'color':'red'});
	                    $('#findMa-mobile').css({'border':'solid 1px red'})
			      	}else{
			      		$('#findMa-duanxinText').siblings('label').text(''+responseObject.msg+'').css({'color':'red'});
			            $('#findMa-duanxinText').css({'border':'solid 1px red'})
			      	}
			        return;
			      }
			    });
			}
		}
	}
	
})


//重新修改密码
$('#resetMa-submitMobile-but').click(function(){
	if($('#newPassword').val()==''){
		$('#newPassword').siblings('label').text('请输入密码').css({'color':'red'});
		$('#newPassword').css({'border':'solid 1px red'});
		return false;
	}else if($('#newPasswordTrue').val()==''){
		$('#newPasswordTrue').siblings('label').text('请输入密码').css({'color':'red'})
		$('#newPasswordTrue').css({'border':'solid 1px red'});
		return false;
	}else{
		if(!MapassWord($('#newPassword').val(),$('#newPassword')) || !MarePassword($('#newPasswordTrue').val(),$('#newPasswordTrue')) ){
			return false;
		}else{
			var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/resetPwd");
				requestObject.addParameter("phone",$('#findMa-mobile').val());
			    requestObject.addParameter("verify", $('#findMa-duanxinText').val());
			    requestObject.addParameter("pwd", $('#newPassword').val());
			    requestObject.asynPostForObject(function(responseObject){

			      if(responseObject.code==1){
			        $('.jihuo-main1').hide();
					$('.jihuo-main2').hide();
					$('.jihuo-main3').show();
					$('#progressbar li').eq(2).children('b').addClass('active').siblings('i').addClass('active');
					setTimeout(function(){
					 	$('.findpasd-page').hide();
					 	$('.login-page').attr('class','login-page fadeInDown animated').show();
					},3000)

			      }else{
			        $('#newPasswordTrue').siblings('label').text(''+responseObject.msg+'').css({'color':'red'});
			        $('#newPasswordTrue').css({'border':'solid 1px red'})
			        return;
			      }
			    })
		}
		
	}
})






})
/*验证手机*/
function findMimaMobile(value,selector){
  var mobile_reg=/^(0|86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/; //匹配手机正则
  if( value == ''){
    selector.siblings('label').text('').css({'color':'#ccc'});
    selector.css({'border':'solid 1px #ccc'});
    return false;
  }else if( !mobile_reg . test( value ) ){
    selector.siblings('label').text('请输入有效的手机号码!').css({'color':'red'});
    selector.css({'border':'solid 1px red'});
    return false;
  }else if( mobile_reg . test( value )){
    selector.siblings('label').text('').css({'color':'green'});
    selector.css({'border':'solid 1px green'});
    return true;
  }
}

function duanxinText(value,selector){
	if( value == ''){
	    selector.siblings('label').text('').css({'color':'#ccc'});
	    selector.css({'border':'solid 1px #ccc'});
	   // return false;
	  }
}

function MapassWord(value,selector){
  if(value == ''){
    selector.siblings('label').text('');
    selector.css({'border':'solid 1px #ccc'});
    return false;
  }else if( value.length <6 || value.length > 20 ){
    selector.siblings('label').text('密码长度为6～20个字符').css({'color':'red'});
    return false;
  }else{
    selector.siblings('label').text('').css({'color':'green'});
    selector.css({'border':'solid 1px green'});
    return true;
  }
}

function MarePassword(value,selector){
  var password = $('#newPassword').val();
  if(value == ''){
    //if( $("#foo").data("events")["click"] ){ //your code } 
    selector.siblings('label').text('').css({'color':'#ccc'});
    selector.css({'border':'solid 1px #ccc'});
    return false;
  }else if(value != password){
    selector.siblings('label').text('密码不一致，请再次确认密码').css({'color':'red'});
    return false;
  }else if( value == password){
    selector.siblings('label').text('');
    selector.css({'border':'solid 1px green'});
    return true;
  }
}
var loginForm = {
    
    valid: function(username, password, randomCode) {
        if (!username) {
            $('.error').show();
            $('#errortip').text("请输入用户名");
            return false;
        } else {
            $('.error').hide();
        }
        if (!password) {
            $('.error').show();
            $('#errortip').text("请输入密码");
            return false;
        }
        if (!randomCode) {
            $('.error').show();
            $('#errortip').text("请输入验证码");
            return false;
        }
        
        return true;
    },
    
    enter: function() {
        if ($(".login-wrapper").is(":visible")) {
            this.login($("#username").val(), $("#password").val(), $("#randomCode").val(), "form");
        }
    },
    
    login: function(username, password, randomCode, enterType) {
        if (loginForm.valid(username, password, randomCode)) {
            if (username && 0 < username.indexOf("：")) {
                username = username.replace(/：/, ":");
            }
            var requestObject = new RequestObject("/ue_lib/Home/index.php/Home/Login/loginAgain");
            requestObject.addParameter("account", username);
            requestObject.addParameter("pwd", password);
            requestObject.addParameter("code", randomCode);
            requestObject.asynPostForObject(function(responseObject) {
                console.log(responseObject.first)
                if (responseObject.code === 0) {
                    $('.error').show();
                    $('#errortip').text(responseObject.msg);
                    $("#afreshLink").click();
                    if(responseObject.msg == '密码不正确！'){
                        $("#password").val('').focus();
                    }else if(responseObject.msg == '验证码错误'){
                        $("#randomCode").val('').focus();
                    }
                } else {
                    $('.error').hide();
                    if(responseObject.first==1){
                        $('.login-successTip').show().delay(1000).fadeOut(1000);
                        setTimeout(function(){
                            location = 'index.html';
                        },2000)
                    }else{
                        $('.login-successTip').hide();
                        location = 'index.html';
                    }
                }
            });
        }
    }
}

$(document).ready(function(){
    $.extend($.fn.validatebox.defaults.rules, {
        numberCheckSub: {
            validator: function(value) {
                return /^[0-9]+$/.test(value);
            },
            message: "输入正确手机号"
        },
        passwodCheck: {
            validator: function(value) {
                var passwod = $('#password1').val();
                return value == passwod;
            },
            message: "密码不一致"
        }
    });
    
    $("#loginSubmit").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        var randomCode = $("#randomCode").val();
        loginForm.login(username, password, randomCode, "form");
    });
    
    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            loginForm.enter();
        }
    });
})

$(window).on('load',function () {
	$('#wrong-mesg').hide();
	$('.creer input').change(function(){
		$('#wrong-mesg').hide();
	})
	$('#agree-but').change(function(){
		$('#agree-zcxieyi').hide();
	})
	$('#agree-but2').change(function(){
		$('#agree-zcxieyi2').hide();
	})
	$('.swiper-container').height( $(window).height());
	$(window).resize(function(){
	   $('.swiper-container').height( $(window).height());
	});
	$('.page1_left').hide();
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		speed:1000,
    	paginationClickable: true,
    	simulateTouch:false,
   		mode: 'vertical',  // 滑动方向上下垂直  horizontal
   		mousewheelControl : true,  // 鼠标滑轮
   		onFirstInit: function(swiper) {  // 首次初始化后马上执行
   			$('.header').attr('class','header header0');
			$('.page0_left').attr('class','page0_left rollIn animated').show();
   			$('.page0_right').css({'animation-delay':'1s'})
        	$('.page0_right').attr('class','page0_right fadeInRight animated').show();
			
        },
   		onSlideChangeEnd : function (swiper) {   // 过渡动画结束后执行、即滑块活动停止后执行、freeMode模式下不生效   		
        	switch(swiper.activeIndex){
        		case 0:
					$('.header').attr('class','header header0');
					$('.page0_left').attr('class','page0_left rollIn animated').show();
		   			$('.page0_right').css({'animation-delay':'1s'})
		        	$('.page0_right').attr('class','page0_right fadeInRight animated').show();
					break;
				case 1:
					$('.header').attr('class','header header1');
					$('.page1_left').attr('class','page1_left fadeInLeft animated').show();
		   			$('.page1_right').css({'animation-delay':'1s'})
		        	$('.page1_right').attr('class','page1_right fadeInRight animated').show();
		   			$('.page1_right').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {  // 当动画效果执行完成后还可以添加事件
		        		$(this).removeClass('fadeInRight animated');
							var second = 0;
							$('.tree-child span').each(function(index,item) {
								var _thatClass = $(item).attr("title");
								$(item).eq(0).addClass(_thatClass).show().css({'animation-delay':second+'s'});
								second += 0.1;
								$(item).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
									$(this).removeClass(_thatClass);
									$(this).addClass('shan');
								})
							});

		        	})	   			
					break;
				case 2:
					$('.header').attr('class','header header2');
					$('.page2-left').attr('class','page2-left fadeInLeft animated').show();
   					$('.page2-right').attr('class','page2-right fadeInRight animated').show().css({'animation-delay':'1s'});
					//autoPlay();
					break;
				case 3:
					$('.header').attr('class','header header3');

					$('.page3-text').attr('class','page3-text rotateInDownLeft animated').show();
					$('.page3-bottom').attr('class','page3-bottom zoomInDown animated').show().css({'animation-delay':'1s'});
					break;
				case 4:
					$('.header').attr('class','header header4');
					$('.page4-text').attr('class','page4-text rotateInDownRight animated').show();
					$('.page4-bottom').attr('class','page4-bottom fadeInUpBig animated').show().css({'animation-delay':'1s'});
					$('.money').css({'animation-delay':'2s','animation-iteration-count':'infinite'}).attr('class','money tada animated').show();
					
					break;
	   		}
   		},
    	onSetWrapperTransition:function (swiper){
   			switch(swiper.activeIndex){
   				case 0:
					$('.header').attr('class','header header0');
					$('.page0_left').attr('class','page0_left rotateOutUpLeft animated').show();
		   			$('.page0_right').css({'animation-delay':'0s'})
		        	$('.page0_right').attr('class','page0_right fadeOutRight animated').show();
					break;
				case 1:
					$('.header').attr('class','header header1');
					$('.page1_left').attr('class','page1_left fadeOutLeft animated');
					$('.page1_right').attr('class','page1_right fadeOutRight animated');
					$('.page1_right').css({'animation-delay':'0s'})
				case 2:
					$('.header').attr('class','header header2');
					$('.page2-left').attr('class','page2-left fadeOutLeft animated').show();
   					$('.page2-right').attr('class','page2-right fadeOutRight animated').show().css({'animation-delay':'0s'});
					break;
				case 3:
					$('.header').attr('class','header header3');
					$('.page3-text').attr('class','page3-text rotateOutUpLeft animated').show();
					$('.page3-bottom').attr('class','page3-bottom zoomOutUp animated').show().css({'animation-delay':'0s'});
					break;
				case 4:
					$('.header').attr('class','header header4');
					$('.page4-text').attr('class','page4-text rotateOutUpRight animated').show();
					$('.page4-bottom').attr('class','page4-bottom fadeOutDown animated').show().css({'animation-delay':'0s'});
					//$('.money').attr('class','money tada animated').show().css({'animation-delay':'0s'});
					
					break;
			}
   		}
    })
	$('.header-top li').eq(0).click(function(){
		console.log('2222')
		mySwiper.swipeTo(0, 1000, true);
	})
	$('.header-top li').eq(1).click(function(){
		console.log('2222')
		mySwiper.swipeTo(1, 1000, true);
	})
	$('.header-top li').eq(2).click(function(){
		console.log('2222')
		mySwiper.swipeTo(2, 1000, true);
	})
	$('.header-top li').eq(3).click(function(){
		console.log('2222')
		mySwiper.swipeTo(3, 1000, true);
	})
	$('.header-top li').eq(4).click(function(){
		console.log('2222')
		mySwiper.swipeTo(4, 1000, true);
	})


	$('.tree-child span').hover(function(e){
		$(this).children('label').toggle();
		/*var index=$(this).index();*/
		/*$(this).toggleClass('hov_or').siblings().removeClass('hov_or');
		$('.download-num-box > div').eq(index).toggle();*/
		e.stopPropagation();
	})

    autoPlay();
   /*第二屏图片自动切换*/
	function autoPlay(){

		var num=0,
			id=0,
			set=null;
		var timeInterval=3000;
		$(".page2-right>div").eq(0).show();
		set = window.setInterval(function(){
			num<$(".page2-right>div").length-1? num++ : num=0;
			$(".page2-right>div").eq(num).fadeIn().siblings().fadeOut();
			$(".page2-left ul li").eq(num).children().addClass('none').parent().siblings().children().removeClass('none');
			$(".page2-left ul li").eq(num).removeClass('none').siblings().addClass('none');
		},timeInterval);
		$(".page2-left ul li").mouseover(function(){
			clearInterval(set);
			num=$(this).index();
			$(".page2-right>div").eq(num).fadeIn().siblings().fadeOut(); 
			$(".page2-left ul li").eq(num).children().addClass('none').parent().siblings().children().removeClass('none');
			$(".page2-left ul li").eq(num).removeClass('none').siblings().addClass('none');
		});
		$(".page2-left ul li").mouseout(function(){
			set = window.setInterval(function(){
				num<$(".page2-right>div").length-1? num++ : num=0;
				$(".page2-right>div").eq(num).fadeIn().siblings().fadeOut();
				$(".page2-left ul li").eq(num).children().addClass('none').parent().siblings().children().removeClass('none');
				$(".page2-left ul li").eq(num).removeClass('none').siblings().addClass('none');
			},timeInterval);
		})

	}

	var verif_code_url=window.HOST_URL+'/ue_lib/Home/index.php/Home/Login/getVerify?t=';

	/*进入注册入口*/
	$('.register').bind('click',function(){
		reloadForm();
		$('.opcity').show();
		$('.register-enter').attr('class','register-enter fadeInDown animated').show();
	})

	/*进入个人用户注册*/
	$('.pre-register p').bind('click',function(){
		$('.perdonal-register').attr('class','perdonal-register zoomIn animated').show();
		$('.register-enter').attr('class','register-enter zoomOut animated').hide();
//		parentalControl = new ParentalControl();
		$("#afreshLinkzc").click(function() {
			loginForm.randomCode();
		});
		
		var loginForm = {
			randomCode: function() {
					$(".tpyzm").val('');
					$("#yzmzc").attr("src", verif_code_url + new Date().getTime());
			}
		}

		loginForm.randomCode();		
	})

	/*进入企业用户注册*/
	$('.com-register p').bind('click',function(){
		$('.company-register').attr('class','company-register zoomIn animated').show();
		$('.register-enter').attr('class','register-enter zoomOut animated').hide();
//		parentalControl = new ParentalControl();
		$("#afreshLinkzc2").click(function() {
			loginForm.randomCode();
		});
		
		var loginForm = {
				randomCode: function() {
					$(".com-tpyzm").val('');
					$("#yzmzc2").attr("src", verif_code_url + new Date().getTime());
			}
		}
		loginForm.randomCode();	
	})
	/*点击登陆按钮*/
	$('.login').bind('click',function(){
		$('.error').hide();
	 	$('#errortip').html('')
		$('.opcity').show();
		$('.login-page').attr('class','login-page fadeInDown animated').show();
		$('#username').val('');
	    $('#password').val('');
	    $('#randomCode').val('');
		$("#afreshLink").click(function() {
			loginForm.randomCode();
		});
		
		var loginForm = {
				randomCode: function() {
					$("#randomCode").val('');
					$("#yzm").attr("src", verif_code_url + new Date().getTime());
			}
		}
		var install = function() {
			$("#yzm").attr("src",verif_code_url + new Date().getTime());
		}
		install();		
	})

	/*点击登录页面的立即注册按钮*/
	$('#zcNow').click(function(){
		$('.register-enter').attr('class','register-enter flipInYY animated').show();
		$('.login-page').hide();
		$('.error').hide();
	 	$('#errortip').html('');
	})

	$('.get-password-logpage').click(function(){
		$('.findpasd-page').attr('class','findpasd-page flipInYY animated').show();
		$('.login-page').hide();
		$('.jihuo-main1').show();
		$('.jihuo-main2').hide();
		$('.jihuo-main3').hide();
		$('#findMa-mobile').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-mobile').siblings('label').text('');
	 	$('#findMa-duanxinText').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-duanxinText').siblings('label').text('');
	 	$('#newPassword').val('').css({'border':'solid 1px #ccc'});
	 	$('#newPassword').siblings('label').text('');
	 	$('#newPasswordTrue').val('').css({'border':'solid 1px #ccc'});
	 	$('#newPasswordTrue').siblings('label').text('');
	 	$('.error').hide();
	 	$('#errortip').html('');
	 	$('#progressbar li').eq(1).children('b').removeClass('active').siblings('i').removeClass('active')
	 	$('#progressbar li').eq(2).children('b').removeClass('active').siblings('i').removeClass('active')
	 	$('#findMa-duanxinBut').val('获取验证码');
	    $('#findMa-duanxinBut').attr('disabled',false)
	})

	$('.register-page-login').bind('click',function(){
		$('.login-page').attr('class','login-page flipInYY animated').show();
		$('.register-enter').hide();
		$('#username').val('');
	    $('#password').val('');
	    $('#randomCode').val('');
		
		$("#afreshLink").click(function() {
			loginForm.randomCode();
		});
		
		var loginForm = {
				randomCode: function() {
					$("#yzm").attr("src", verif_code_url + new Date().getTime());
			}
		}
		var install = function() {
			$("#yzm").attr("src",verif_code_url + new Date().getTime());
		}

		install();		
	})

	//找回密码页面点击取消按钮取消
	$('#findMa-cancel').click(function(){
		$('.findpasd-page').attr('class','findpasd-page zoomOut animated').delay(300).hide(0);
	 	$('.login-page').attr('class','login-page fadeInDown animated').show();
	 	$('#findMa-mobile').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-mobile').siblings('label').text('');
	 	$('#findMa-duanxinText').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-duanxinText').siblings('label').text('');
	 	$('#wrong-mesg').hide();
		$('#errortip').text('');
		$('.error').hide();
		$('#username').val('');
		$('#password').val('');
		$('#randomCode').val('');
	})
	$('#findMa-cancel2').click(function(){
		$('.findpasd-page').attr('class','findpasd-page zoomOut animated').delay(300).hide(0);
	 	$('.login-page').attr('class','login-page fadeInDown animated').show();
	 	$('#findMa-mobile').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-mobile').siblings('label').text('');
	 	$('#findMa-duanxinText').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-duanxinText').siblings('label').text('');
	 	$('#wrong-mesg').hide();
		$('#errortip').text('');
		$('.error').hide();
		$('#username').val('');
		$('#password').val('');
		$('#randomCode').val('');

	})

	/*点击关闭按钮*/
	$('.close').bind('click',function(){
		reloadForm();
		$('.perdonal-register').attr('class','perdonal-register zoomOut animated').delay(300).hide(0);
		$('.company-register').attr('class','company-register zoomOut animated').delay(300).hide(0);
		$('.register-enter').attr('class','register-enter zoomOut animated').delay(300).hide(0);
		$('.login-page').attr('class','login-page zoomOut animated').delay(300).hide(0);
		$('.findpasd-page').attr('class','findpasd-page zoomOut animated').delay(300).hide(0);
		$('.opcity').delay(300).hide(0);
		$('#wrong-mesg').hide();
		$('#errortip').text('');
		$('.error').hide();
	    
	})
	$('.close5').click(function(){
		reloadForm();
		$('.findpasd-page').attr('class','findpasd-page zoomOut animated').delay(300).hide(0);
	 	$('.login-page').attr('class','login-page fadeInDown animated').show();
	 	$('#findMa-mobile').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-mobile').siblings('label').text('');
	 	$('#findMa-duanxinText').val('').css({'border':'solid 1px #ccc'});
	 	$('#findMa-duanxinText').siblings('label').text('');
	 	$('#wrong-mesg').hide();
		$('#errortip').text('');
		$('.error').hide();
		$('#username').val('');
		$('#password').val('');
		$('#randomCode').val('');
	})

	/*点击用户注册协议*/
	$('#xieyi-dialog').click(function(){
		$('.xieyiText').show();
	})
	$('#xieyi-dialog2').click(function(){
		$('.xieyiText').show();
	})
	$('.agree-but-xie').click(function(){
		$('.xieyiText').hide();
	})
	$('.close-xieyi').click(function(){
		$('.xieyiText').hide();
	})

	/*登陆页面的焦点事件*/
	$('#username').focus(function(){
		$('.user-namebox p').addClass('border-color');
		$('.user-namebox p span').addClass('orbj');
	})
	$('#username').blur(function(){
		$('.user-namebox p').removeClass('border-color');
		$('.user-namebox p span').removeClass('orbj');
	})

	$('#password').focus(function(){
		$('.password-box p').addClass('border-color');
		$('.password-box p span').addClass('orbj');
	})
	$('#password').blur(function(){
		$('.password-box p').removeClass('border-color');
		$('.password-box p span').removeClass('orbj');
	})
	/*文本框得到或失去焦点事件*/
	$('input[name="text"]').focus(function(){
		$(this).css({'border': 'solid 1px #ff7800'})
	})


})

/*表单刷新初始化*/
function reloadForm(){
	$('input[name="text"]').css({'border':'solid 1px #ccc'})
    $('input[name="text"]').val('');
    $('#pre-name').siblings('i').text('4～16个字符、支持字母、数字组合').css({'color':'#ccc'})
    $('#pre-password').siblings('i').text('6~20位字符，区分大小写').css({'color':'#ccc'})
    $('#pre-rePassword').siblings('i').text('').css({'color':'#ccc'})
    $('#pre-mobile').siblings('i').text('输入手机号，便于您找回密码，下载组件').css({'color':'#ccc'})
    $('#pre-email').siblings('i').text('').css({'color':'#ccc'})
    $('.dzyzm').siblings('i').text('').css({'color':'#ccc'})
    $('.tpyzm').siblings('i').text('').css({'color':'#ccc'})
    $('#com-name').siblings('i').text('4～16个字符、支持字母、数字组合').css({'color':'#ccc'})
    $('#com-password').siblings('i').text('6~20位字符，区分大小写').css({'color':'#ccc'})
    $('#com-rePassword').siblings('i').text('').css({'color':'#ccc'})
    $('#com-mobile').siblings('i').text('输入手机号，便于您找回密码，下载组件').css({'color':'#ccc'})
    $('#com-email').siblings('i').text('').css({'color':'#ccc'})
    $('.dzyzm2').siblings('i').text('').css({'color':'#ccc'})
    $('.com-tpyzm').siblings('i').text('').css({'color':'#ccc'})
    $('#agree-zcxieyi').hide();
    $('#agree-zcxieyi2').hide();
    $('.creer input').attr('checked',false);
    $('#agree-but').attr('checked',false);
    $('#agree-but2').attr('checked',false);
    $('#findMa-mobile').val('').css({'border':'solid 1px #ccc'});
 	$('#findMa-mobile').siblings('label').text('');
 	$('#findMa-duanxinText').val('').css({'border':'solid 1px #ccc'});
 	$('#findMa-duanxinText').siblings('label').text('');
 	$('#pre-phone-yanzheng').val('获取验证码');
    $('#com-input-yanzheng').val('获取验证码');
    $('.error').hide();
    $('.register-wrapper>div i').removeClass('dui');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIiwiZmluZC1taW1hLmpzIiwibG9naW4uanMiLCJwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIGdsb2JhbCAkICovXHJcblxyXG4gdmFyIHByZVBob25lVmFsaWQgID0gdHJ1ZSxjb21QaG9uZVZhbGlkICA9IHRydWU7XHJcbnZhciBwcmVFbWFpbFZhbGlkICA9IHRydWUsY29tRW1haWxWYWxpZCAgPSB0cnVlO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJyNwcmUtbW9iaWxlJykuYmx1cihmdW5jdGlvbigpIHtcclxuICAgICAgICBwcmVQaG9uZVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG1vYmlsZV9yZWcgPSAvXigwfDg2fDE3OTUxKT8oMTNbMC05XXwxNVswLTldfDE3WzAtOV18MThbMC05XXwxNFswLTldKVswLTldezh9JC87IC8v5Yy56YWN5omL5py65q2j5YiZXHJcbiAgICAgICAgdmFyIHBob25lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZiAocGhvbmUgPT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJ+i+k+WFpeaJi+acuuWPt++8jOS+v+S6juaCqOaJvuWbnuWvhuegge+8jOS4i+i9vee7hOS7ticpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICBwcmVQaG9uZVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIW1vYmlsZV9yZWcudGVzdChwaG9uZSkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeacieaViOeahOaJi+acuuWPt+eggScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgcHJlUGhvbmVWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVxdWVzdE9iamVjdCA9IG5ldyBSZXF1ZXN0T2JqZWN0KFwiL3VlX2xpYi9Ib21lL2luZGV4LnBocC9Ib21lL0xvZ2luL2NoZWNrUGhvbmVcIik7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwaG9uZVwiLCBwaG9uZSk7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXNwb25zZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY29kZSA9IHJlc3BvbnNlT2JqZWN0LmNvZGU7XHJcbiAgICAgICAgICAgIGlmIChjb2RlPT09MCkge1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLnRleHQoJ+aJi+acuuW3suWtmOWcqCcpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAkKHNlbGYpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgcHJlUGhvbmVWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJ2dyZWVuJ30pO1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLmFkZENsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCBncmVlbid9KTtcclxuICAgICAgICAgICAgICAgIHByZVBob25lVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnI2NvbS1tb2JpbGUnKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbVBob25lVmFsaWQgID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBob25lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB2YXIgbW9iaWxlX3JlZyA9IC9eKDB8ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMC05XXwxOFswLTldfDE0WzAtOV0pWzAtOV17OH0kLzsgLy/ljLnphY3miYvmnLrmraPliJlcclxuICAgICAgICBpZiAocGhvbmUgPT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJ+i+k+WFpeaJi+acuuWPt++8jOS+v+S6juaCqOaJvuWbnuWvhuegge+8jOS4i+i9vee7hOS7ticpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICBjb21QaG9uZVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIW1vYmlsZV9yZWcudGVzdChwaG9uZSkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeacieaViOeahOaJi+acuuWPt+eggScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgY29tUGhvbmVWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVxdWVzdE9iamVjdCA9IG5ldyBSZXF1ZXN0T2JqZWN0KFwiL3VlX2xpYi9Ib21lL2luZGV4LnBocC9Ib21lL0xvZ2luL2NoZWNrUGhvbmVcIik7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwaG9uZVwiLCBwaG9uZSk7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXNwb25zZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY29kZSA9IHJlc3BvbnNlT2JqZWN0LmNvZGU7XHJcbiAgICAgICAgICAgIGlmIChjb2RlPT09MCkge1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLnRleHQoJ+aJi+acuuW3suWtmOWcqCcpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAkKHNlbGYpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgY29tUGhvbmVWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJ2dyZWVuJ30pO1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLmFkZENsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCBncmVlbid9KTtcclxuICAgICAgICAgICAgICAgIGNvbVBob25lVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIH0pXHJcblxyXG4gICAgJCgnI3ByZS1lbWFpbCcpLmJsdXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcHJlRW1haWxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIHZhciBlbWFpbF9yZWcgPSAvXltcXHctXSsoXFwuW1xcdy1dKykqQChbXFx3LV0rXFwuKStbYS16QS1aXSskLzsgLy/ljLnphY3pgq7nrrHmraPliJlcclxuICAgICAgICBpZiAodmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICBwcmVFbWFpbFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9IGVsc2UgaWYgKCFlbWFpbF9yZWcudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJ+mCrueuseagvOW8j+S4jeato+ehricpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgICAgICAgICAgcHJlRW1haWxWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Mb2dpbi9jaGVja0VtYWlsXCIpO1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwiZW1haWxcIiwgdmFsdWUpO1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3QuYXN5blBvc3RGb3JPYmplY3QoZnVuY3Rpb24ocmVzcG9uc2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGNvZGUgPSByZXNwb25zZU9iamVjdC5jb2RlO1xyXG4gICAgICAgICAgICBpZiAoY29kZT09PTApIHtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS50ZXh0KCfpgq7nrrHlt7LlrZjlnKgnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAkKHNlbGYpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgIHByZUVtYWlsVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdncmVlbid9KTtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS5hZGRDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAkKHNlbGYpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgICAgICAgICBwcmVFbWFpbFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2NvbS1lbWFpbCcpLmJsdXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29tRW1haWxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIHZhciBlbWFpbF9yZWcgPSAvXltcXHctXSsoXFwuW1xcdy1dKykqQChbXFx3LV0rXFwuKStbYS16QS1aXSskLzsgLy/ljLnphY3pgq7nrrHmraPliJlcclxuICAgICAgICBpZiAodmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICBjb21FbWFpbFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICB9IGVsc2UgaWYgKCFlbWFpbF9yZWcudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJ+mCrueuseagvOW8j+S4jeato+ehricpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgICAgICAgICAgY29tRW1haWxWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Mb2dpbi9jaGVja0VtYWlsXCIpO1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwiZW1haWxcIiwgdmFsdWUpO1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3QuYXN5blBvc3RGb3JPYmplY3QoZnVuY3Rpb24ocmVzcG9uc2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGNvZGUgPSByZXNwb25zZU9iamVjdC5jb2RlO1xyXG4gICAgICAgICAgICBpZiAoY29kZT09PTApIHtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS50ZXh0KCfpgq7nrrHlt7LlrZjlnKgnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAkKHNlbGYpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgJChzZWxmKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgIGNvbUVtYWlsVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdncmVlbid9KTtcclxuICAgICAgICAgICAgICAgICQoc2VsZikuc2libGluZ3MoJ2knKS5hZGRDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAkKHNlbGYpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgICAgICAgICBjb21FbWFpbFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyrkuKrkurrnlKjmiLflkI3pqozor4EqL1xyXG4gICAgJCgnI3ByZS1uYW1lJykuYmx1cihmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdXNlck5hbWVfcmVnID0gL15bYS16QS1aMC05X1xcdTRlMDAtXFx1OWZhNV0rJC8sICAvL+WPquWQq+acieaxieWtl+OAgeaVsOWtl+OAgeWtl+avjeOAgeS4i+WIkue6v1xyXG4gICAgICAgIHVzZXJOYW1lID0gJCgnI3ByZS1uYW1lJykudmFsKCk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJzTvvZ4xNuS4quWtl+espuOAgeaUr+aMgeWtl+avjeOAgeaVsOWtl+e7hOWQiCcpO1xyXG4gICAgICAgIC8q5Yik5pat5paH5pys5qGG5a2X56ym6ZW/5bqmKi9cclxuICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICB2YXIgbmFtZVZhbCA9IHVzZXJOYW1lLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZVZhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobmFtZVZhbFtpXS5jaGFyQ29kZUF0KDApIDwgMjk5KSB7XHJcbiAgICAgICAgICAgICAgICBudW0rKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG51bSArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyTmFtZSA9PSAnJykge1xyXG4gICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5zaWJsaW5ncygnaScpLnRleHQoJzTvvZ4xNuS4quWtl+espuOAgeaUr+aMgeWtl+avjeOAgeaVsOWtl+e7hOWQiCcpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggI2NjYyd9KTtcclxuICAgICAgICAgICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdXNlck5hbWVfcmVnLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLnNpYmxpbmdzKCdpJykudGV4dCgn55So5oi35ZCN5Y+q5ZCr5pyJ5rGJ5a2X44CB5pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/JykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgJCgnI3ByZS1uYW1lJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDQgfHwgbnVtID4gMTYpIHtcclxuICAgICAgICAgICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCfor7flsIbnlKjmiLflkI3kv53mjIHlnKg0772eMTbkuKrlrZfnrKbkuYvpl7QnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLnNpYmxpbmdzKCdpJykudGV4dCgnJykuY3NzKHsnY29sb3InOiAnZ3JlZW4nfSk7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0T2JqZWN0ID0gbmV3IFJlcXVlc3RPYmplY3QoXCIvdWVfbGliL0hvbWUvaW5kZXgucGhwL0hvbWUvTG9naW4vY2hlY2tVc2VyXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcImFjY291bnRcIiwgJCgnI3ByZS1uYW1lJykudmFsKCkpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFzeW5Qb3N0Rm9yT2JqZWN0KGZ1bmN0aW9uKHJlc3BvbnNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHJlc3BvbnNlT2JqZWN0LmNvZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZT09PTApIHsgLy/lpoLmnpzmiafooYzmiJDlip8g5YiZ55So5oi35bey5a2Y5Zyo77yM6ZyA6YeN5paw5aGr5YaZ55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KHJlc3BvbnNlT2JqZWN0Lm1zZykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+WmguaenOaJp+ihjOWksei0pSDliJnnlKjmiLfkuI3lrZjlnKjlj6/ku6Xms6jlhoxcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJ2dyZWVuJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLnNpYmxpbmdzKCdpJykuYWRkQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKuS8geS4mueUqOaIt+WQjemqjOivgSovXHJcbiAgICAkKCcjY29tLW5hbWUnKS5ibHVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB1c2VyTmFtZV9yZWcgPSAvXlthLXpBLVowLTlfXFx1NGUwMC1cXHU5ZmE1XSskLywgIC8v5Y+q5ZCr5pyJ5rGJ5a2X44CB5pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/XHJcbiAgICAgICAgdXNlck5hbWUgPSAkKCcjY29tLW5hbWUnKS52YWwoKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdpJykudGV4dCgnNO+9njE25Liq5a2X56ym44CB5pSv5oyB5a2X5q+N44CB5pWw5a2X57uE5ZCIJyk7XHJcbiAgICAgICAgLyrliKTmlq3mlofmnKzmoYblrZfnrKbplb/luqYqL1xyXG4gICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgIHZhciBuYW1lVmFsID0gdXNlck5hbWUuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lVmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lVmFsW2ldLmNoYXJDb2RlQXQoMCkgPCAyOTkpIHtcclxuICAgICAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbnVtICs9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJOYW1lID09ICcnKSB7XHJcbiAgICAgICAgICAgICQoJyNjb20tbmFtZScpLnNpYmxpbmdzKCdpJykudGV4dCgnNO+9njE25Liq5a2X56ym44CB5pSv5oyB5a2X5q+N44CB5pWw5a2X57uE5ZCIJykuY3NzKHsnY29sb3InOiAnI2NjYyd9KTtcclxuICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgICAgICAkKCcjY29tLW5hbWUnKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF1c2VyTmFtZV9yZWcudGVzdCh1c2VyTmFtZSkpIHtcclxuICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCfnlKjmiLflkI3lj6rlkKvmnInmsYnlrZfjgIHmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur8nKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICQoJyNjb20tbmFtZScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAkKCcjY29tLW5hbWUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgNCB8fCBudW0gPiAxNikge1xyXG4gICAgICAgICAgICAkKCcjY29tLW5hbWUnKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+WwhueUqOaIt+WQjeS/neaMgeWcqDTvvZ4xNuS4quWtl+espuS5i+mXtCcpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICQoJyNjb20tbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdncmVlbid9KTtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Mb2dpbi9jaGVja1VzZXJcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwiYWNjb3VudFwiLCAkKCcjY29tLW5hbWUnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYXN5blBvc3RGb3JPYmplY3QoZnVuY3Rpb24ocmVzcG9uc2VPYmplY3QpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VPYmplY3QuY29kZT09PTApIHsgLy/lpoLmnpzmiafooYzmiJDlip8g5YiZ55So5oi35bey5a2Y5Zyo77yM6ZyA6YeN5paw5aGr5YaZ55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KHJlc3BvbnNlT2JqZWN0Lm1zZykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb20tbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+WmguaenOaJp+ihjOWksei0pSDliJnnlKjmiLfkuI3lrZjlnKjlj6/ku6Xms6jlhoxcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29tLW5hbWUnKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJ2dyZWVuJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb20tbmFtZScpLnNpYmxpbmdzKCdpJykuYWRkQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb20tbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLyrkuKrkurrnlKjmiLfms6jlhozpobXpnaLnmoTnn63kv6Hpqozor4EqL1xyXG4gICAgJCgnI3ByZS1waG9uZS15YW56aGVuZycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vc2VuZENvZGUoJCgnI3ByZS1waG9uZS15YW56aGVuZycpKTtcclxuICAgICAgICB2YXIgdGVsID0gJCgnI3ByZS1tb2JpbGUnKS52YWwoKTtcclxuICAgICAgICBpZiAodGVsID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJCgnI3ByZS1tb2JpbGUnKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeaJi+acuuWPtycpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCgnI3ByZS1tb2JpbGUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAkKCcjcHJlLW1vYmlsZScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmR6eXptJykuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdjc3MnfSk7XHJcbiAgICAgICAgICAgICQoJy5kenl6bScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggI2NjYyd9KVxyXG4gICAgICAgICAgICAkKCcuZHp5em0nKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgbW9iaWxlKCQoJyNwcmUtbW9iaWxlJykudmFsKCksICQoJyNwcmUtbW9iaWxlJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXF1ZXN0T2JqZWN0ID0gbmV3IFJlcXVlc3RPYmplY3QoXCIvdWVfbGliL0hvbWUvaW5kZXgucGhwL0hvbWUvTW9iaWxlL3NlbmRcIik7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwaG9uZVwiLCB0ZWwpO1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3QuYXN5blBvc3RGb3JPYmplY3QoZnVuY3Rpb24ocmVzcG9uc2VPYmplY3QpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdC5jb2RlPT09MSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbWUgPSA2MDtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lcjtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1waG9uZS15YW56aGVuZycpLnZhbCgn6YeN5paw5Y+R6YCBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmUtcGhvbmUteWFuemhlbmcnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLXBob25lLXlhbnpoZW5nJykudmFsKHRpbWUgKyAn56eS5ZCO6YeN6K+VJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmUtcGhvbmUteWFuemhlbmcnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGltZSlcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VPYmplY3QubXNnID09ICfor6XmiYvmnLrlj7flt7Lnu4/ms6jlhownKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1tb2JpbGUnKS5zaWJsaW5ncygnaScpLnRleHQoJycgKyByZXNwb25zZU9iamVjdC5tc2cgKyAnJykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbW9iaWxlJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW1vYmlsZScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VPYmplY3QubXNnID09ICfor6XmiYvmnLrlj7flt7Lmv4DmtLsnKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW1vYmlsZScpLnNpYmxpbmdzKCdpJykudGV4dCgnJyArIHJlc3BvbnNlT2JqZWN0Lm1zZyArICcnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1tb2JpbGUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbW9iaWxlJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmUtcGhvbmUteWFuemhlbmcnKS5zaWJsaW5ncygnaScpLnRleHQocmVzcG9uc2VPYmplY3QubXNnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2UtaW5wdXQtdGV4dCcpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1waG9uZS15YW56aGVuZycpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8q5LyB5Lia55So5oi35rOo5YaM6aG16Z2i55qE55+t5L+h6aqM6K+BKi9cclxuICAgICQoJyNjb20taW5wdXQteWFuemhlbmcnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdGVsID0gJCgnI2NvbS1tb2JpbGUnKS52YWwoKTtcclxuICAgICAgICBpZiAodGVsID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJCgnI2NvbS1tb2JpbGUnKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeaJi+acuuWPtycpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCgnI2NvbS1tb2JpbGUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9iaWxlKCQoJyNjb20tbW9iaWxlJykudmFsKCksICQoJyNjb20tbW9iaWxlJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXF1ZXN0T2JqZWN0ID0gbmV3IFJlcXVlc3RPYmplY3QoXCIvdWVfbGliL0hvbWUvaW5kZXgucGhwL0hvbWUvTW9iaWxlL3NlbmRcIik7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwaG9uZVwiLCB0ZWwpO1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3QuYXN5blBvc3RGb3JPYmplY3QoZnVuY3Rpb24ocmVzcG9uc2VPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlT2JqZWN0LmNvZGU9PT0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IDYwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVyO1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29tLWlucHV0LXlhbnpoZW5nJykudmFsKCfph43mlrDlj5HpgIEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1pbnB1dC15YW56aGVuZycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb20taW5wdXQteWFuemhlbmcnKS52YWwodGltZSArICfnp5LlkI7ph43or5UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1pbnB1dC15YW56aGVuZycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lKVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdC5tZXNzYWdlID09ICfor6XmiYvmnLrlj7flt7Lnu4/ms6jlhownKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1tb2JpbGUnKS5zaWJsaW5ncygnaScpLnRleHQoJycgKyByZXNwb25zZU9iamVjdC5tc2cgKyAnJykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb20tbW9iaWxlJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29tLW1vYmlsZScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2VPYmplY3QubXNnID09ICfor6XmiYvmnLrlj7flt7Lmv4DmtLsnKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY29tLW1vYmlsZScpLnNpYmxpbmdzKCdpJykudGV4dCgnJyArIHJlc3BvbnNlT2JqZWN0Lm1zZyArICcnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1tb2JpbGUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb20tbW9iaWxlJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb20taW5wdXQteWFuemhlbmcnKS5zaWJsaW5ncygnaScpLnRleHQoJycgKyByZXNwb25zZU9iamVjdC5tc2cgKyAnJykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50cHl6bScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRweXptJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8q5Liq5Lq655So5oi35rOo5YaM6aG16Z2i5rOo5YaM5o+Q5LqkKi9cclxuICAgICQoJyNwcmUtcmVnaXN0ZXItYnV0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXByZV9mb3JtKCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKCcjcHJlLW1vYmlsZScpLnZhbCgpICE9ICcnICYmICQoJy5kenl6bScpLnZhbCgpID09ICcnKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZHp5em0nKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeefreS/oemqjOivgeeggScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgJCgnLmR6eXptJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgJCgnLmR6eXptJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZigkKCcuZHp5em0nKS52YWwoKSAhPSAnJyl7XHJcbiAgICAgICAgICAgICQoJy5kenl6bScpLnNpYmxpbmdzKCdpJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICQoJy5kenl6bScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmR6eXptJykuc2libGluZ3MoJ2knKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJCgnLmR6eXptJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaWYgKCQoJyNhZ3JlZS1idXQnKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAkKCcjYWdyZWUtemN4aWV5aScpLmhpZGUoKTtcclxuICAgICAgICAgICAgdmFyIGpvYiA9ICQoJ2lucHV0OnJhZGlvW25hbWU9XCJzYW1lXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKGpvYiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjd3JvbmctbWVzZycpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyN3cm9uZy1tZXNnJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNwcmUtbmFtZScpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Mb2dpbi9jaGVja1VzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJhY2NvdW50XCIsICQoJyNwcmUtbmFtZScpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFzeW5Qb3N0Rm9yT2JqZWN0KGZ1bmN0aW9uKHJlc3BvbnNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gcmVzcG9uc2VPYmplY3QuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IDApIHsgLy/lpoLmnpzmiafooYzmiJDlip8g5YiZ55So5oi35bey5a2Y5Zyo77yM6ZyA6YeN5paw5aGr5YaZ55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5zaWJsaW5ncygnaScpLnRleHQocmVzcG9uc2VPYmplY3QubXNnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5aaC5p6c5omn6KGM5aSx6LSlIOWImeeUqOaIt+S4jeWtmOWcqOWPr+S7peazqOWGjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlSmlla291KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmUtbmFtZScpLnNpYmxpbmdzKCdpJykuYWRkQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjYWdyZWUtemN4aWV5aScpLnNob3coKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHByZUppZWtvdSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJCgnI3ByZS1lbWFpbCcpLnZhbCgpICsgJ3wnKVxyXG4gICAgICAgICAgICB2YXIgam9iID0gJChcImlucHV0W25hbWU9J3NhbWUnXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdE9iamVjdCA9IG5ldyBSZXF1ZXN0T2JqZWN0KFwiL3VlX2xpYi9Ib21lL2luZGV4LnBocC9Ib21lL0xvZ2luL3JlZ2lzdGVyQVwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJqb2JcIiwgam9iKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJhY2NvdW50XCIsICQoJyNwcmUtbmFtZScpLnZhbCgpKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwd2RcIiwgJCgnI3ByZS1wYXNzd29yZCcpLnZhbCgpKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJlbWFpbFwiLCAkKCcjcHJlLWVtYWlsJykudmFsKCkpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcInRlbFwiLCAkKCcjcHJlLW1vYmlsZScpLnZhbCgpKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJ2ZXJpZnlcIiwgJCgnLmR6eXptJykudmFsKCkpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcImNvZGVcIiwgJCgnLnRweXptJykudmFsKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGludml0b3IgPSBnZXRJbnZpdG9yKCk7XHJcbiAgICAgICAgICAgIGlmKGludml0b3Ipe1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwidFwiLCBpbnZpdG9yLnQpOyAgXHJcbiAgICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJpZFwiLCBpbnZpdG9yLmlkKTsgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50cHl6bScpLnNpYmxpbmdzKCdpJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByZS1zdWNjZXNzVGlwJykuZmFkZUluKCkuZGVsYXkoMTAwMCkuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb3RvSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMubXNnID09ICfmiYvmnLrlt7LlrZjlnKgnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZS1tb2JpbGUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJ2knKS50ZXh0KCfmiYvmnLrlt7LlrZjlnKgnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsnY29sb3InOiAncmVkJ30pLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5tc2cgPT0gJ+eUqOaIt+W3suWtmOWcqCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLW5hbWUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJ2knKS50ZXh0KCfnlKjmiLflt7LlrZjlnKgnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsnY29sb3InOiAncmVkJ30pLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5tc2cgPT0gJ+mCrueuseW3suWtmOWcqCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJlLWVtYWlsJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCdpJykudGV4dCgn6YKu566x5bey5a2Y5ZyoJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7J2NvbG9yJzogJ3JlZCd9KS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXMubXNnID09ICfnn63kv6Hpqozor4HnoIHplJnor68nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmR6eXptJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCdpJykudGV4dCgn55+t5L+h6aqM6K+B56CB6ZSZ6K+vJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7J2NvbG9yJzogJ3JlZCd9KS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWZyZXNoTGlua3pjXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRweXptJykuc2libGluZ3MoJ2knKS50ZXh0KCfor7fph43mlrDovpPlhaXpqozor4HnoIEnKS5jc3Moeydjb2xvcic6J3JlZCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudHB5em0nKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRweXptJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB9KVxyXG5cclxuICAgIC8q5LyB5Lia55So5oi35rOo5YaM6aG16Z2i55qE5rOo5YaM5o+Q5LqkKi9cclxuICAgICQoJy5jb20tcmVnaXN0ZXItYnV0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy/ooajljZXpqozor4HnmoTmlrnms5VcclxuICAgICAgICBpZighY29tX2Zvcm0oKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoJyNjb20tbW9iaWxlJykudmFsKCkgIT0gJycmJiAkKCcuZHp5em0yJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgJCgnLmR6eXptMicpLnNpYmxpbmdzKCdpJykudGV4dCgn6K+36L6T5YWl55+t5L+h6aqM6K+B56CBJykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAkKCcuZHp5em0yJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgJCgnLmR6eXptMicpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYoJCgnLmR6eXptMicpLnZhbCgpICE9ICcnKXtcclxuICAgICAgICAgICAgJCgnLmR6eXptMicpLnNpYmxpbmdzKCdpJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICQoJy5kenl6bTInKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IGdyZWVuJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kenl6bTInKS5zaWJsaW5ncygnaScpLnRleHQoJycpO1xyXG4gICAgICAgICAgICAkKCcuZHp5em0yJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAkY2NjJ30pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnI2FncmVlLWJ1dDInKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAkKCcjYWdyZWUtemN4aWV5aTInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGlmICgkKCcjY29tLW5hbWUnKS52YWwoKSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Mb2dpbi9jaGVja1VzZXJcIik7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcImFjY291bnRcIiwgJCgnI2NvbS1uYW1lJykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXNwb25zZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdC5jb2RlPT09MCkgeyAvL+WmguaenOaJp+ihjOaIkOWKnyDliJnnlKjmiLflt7LlrZjlnKjvvIzpnIDph43mlrDloavlhpnnlKjmiLflkI1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KHJlc3BvbnNlT2JqZWN0Lm1zZykuY3NzKHsnY29sb3InOiAncmVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29tLW5hbWUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY29tLW5hbWUnKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+WmguaenOaJp+ihjOWksei0pSDliJnnlKjmiLfkuI3lrZjlnKjlj6/ku6Xms6jlhoxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdncmVlbid9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS5hZGRDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb20tbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbUppZWtvdSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2FncmVlLXpjeGlleWkyJykuc2hvdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBjb21KaWVrb3UoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0T2JqZWN0ID0gbmV3IFJlcXVlc3RPYmplY3QoXCIvdWVfbGliL0hvbWUvaW5kZXgucGhwL0hvbWUvTG9naW4vcmVnaXN0ZXJCXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcImFjY291bnRcIiwgJCgnI2NvbS1uYW1lJykudmFsKCkpO1xyXG4gICAgICAgICAgICAvL3JlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwiY29tcGFueV9uaWNrbmFtZVwiLCAkKCcjY29tLW5hbWUnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwicHdkXCIsICQoJyNjb20tcGFzc3dvcmQnKS52YWwoKSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwiZW1haWxcIiwgJCgnI2NvbS1lbWFpbCcpLnZhbCgpKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwaG9uZVwiLCAkKCcjY29tLW1vYmlsZScpLnZhbCgpKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJ2ZXJpZnlcIiwgJCgnLmR6eXptMicpLnZhbCgpKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJjb2RlXCIsICQoJy5jb20tdHB5em0nKS52YWwoKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW52aXRvciA9IGdldEludml0b3IoKTtcclxuICAgICAgICAgICAgaWYoaW52aXRvcil7XHJcbiAgICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJ0XCIsIGludml0b3IudCk7ICBcclxuICAgICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcImlkXCIsIGludml0b3IuaWQpOyAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYXN5blBvc3RGb3JPYmplY3QoZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGU9PT0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbS10cHl6bScpLnNpYmxpbmdzKCdpJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbS1zdWNjZXNzVGlwJykuZmFkZUluKCkuZGVsYXkoMTAwMCkuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb3RvSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLm1zZyA9PSAn5omL5py65bey5a2Y5ZyoJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb20tbW9iaWxlJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCdpJykudGV4dCgn5omL5py65bey5a2Y5ZyoJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7J2NvbG9yJzogJ3JlZCd9KS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXMubXNnID09ICfnlKjmiLflt7LlrZjlnKgnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1uYW1lJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCdpJykudGV4dCgn55So5oi35bey5a2Y5ZyoJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7J2NvbG9yJzogJ3JlZCd9KS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXMubXNnID09ICfpgq7nrrHlt7LlrZjlnKgnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbS1lbWFpbCcpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnaScpLnRleHQoJ+mCrueuseW3suWtmOWcqCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moeydjb2xvcic6ICdyZWQnfSkuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzLm1zZyA9PSAn55+t5L+h6aqM6K+B56CB6ZSZ6K+vJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kenl6bTInKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJ2knKS50ZXh0KCfnn63kv6Hpqozor4HnoIHplJnor68nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsnY29sb3InOiAncmVkJ30pLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWZyZXNoTGlua3pjMlwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jb20tdHB5em0nKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+mHjeaWsOi+k+WFpemqjOivgeeggScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuY29tLXRweXptJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAgICAgICAgICAgICAkKCcuY29tLXRweXptJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnRhbENvbnRyb2wgPSBuZXcgUGFyZW50YWxDb250cm9sKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZ290b0hvbWVQYWdlKCkge1xyXG4gICAgICAgIGxvY2F0aW9uPSdpbmRleC5odG1sJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyrkvIHkuJrms6jlhozmlofmnKzmoYblhoXlrrnlkIzmraUqL1xyXG4gICAgZnVuY3Rpb24gc3luY2hyb25pemUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbnktbmFtZScpLnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbS1uYW1lJykudmFsdWU7XHJcbiAgICAvL2FsZXJ0KFwi5ZCM5q2l5oiQ5YqfXCIpOyBcclxuICAgIH1cclxuICAgIHNldEludGVydmFsKHN5bmNocm9uaXplLCA1MDApOyAvL+WQjOatpeeahOaXtumXtOmXtOmalO+8jOavjzAuNeenkuWQjOatpeS4gOasoSBcclxuXHJcbn0pXHJcblxyXG5cclxuLyrpqozor4HnlKjmiLflkI0qL1xyXG5mdW5jdGlvbiB1c2VyTmFtZSh2YWx1ZSwgc2VsZWN0b3IpIHtcclxuICAgIHZhciB1c2VyTmFtZV9yZWcgPSAvXlthLXpBLVowLTlfXFx1NGUwMC1cXHU5ZmE1XSskLywgIC8v5Y+q5ZCr5pyJ5rGJ5a2X44CB5pWw5a2X44CB5a2X5q+N44CB5LiL5YiS57q/XHJcbiAgICB1c2VyTmFtZSA9IHZhbHVlO1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygnaScpLnRleHQoJzTvvZ4xNuS4quWtl+espuOAgeaUr+aMgeWtl+avjeOAgeaVsOWtl+e7hOWQiCcpO1xyXG4gICAgLyrliKTmlq3mlofmnKzmoYblrZfnrKbplb/luqYqL1xyXG4gICAgdmFyIG51bSA9IDA7XHJcbiAgICB2YXIgbmFtZVZhbCA9IHVzZXJOYW1lLnNwbGl0KFwiXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lVmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5hbWVWYWxbaV0uY2hhckNvZGVBdCgwKSA8IDI5OSkge1xyXG4gICAgICAgICAgICBudW0rKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBudW0gKz0gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL3JldHVybiBudW07XHJcbiAgICBpZiAodXNlck5hbWUgPT0gJycpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJzTvvZ4xNuS4quWtl+espuOAgeaUr+aMgeWtl+avjeOAgeaVsOWtl+e7hOWQiCcpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgfSBlbHNlIGlmICghdXNlck5hbWVfcmVnLnRlc3QodXNlck5hbWUpKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCfnlKjmiLflkI3lj6rlkKvmnInmsYnlrZfjgIHmlbDlrZfjgIHlrZfmr43jgIHkuIvliJLnur8nKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSk7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA8IDQgfHwgbnVtID4gMTYpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+WwhueUqOaIt+WQjeS/neaMgeWcqDTvvZ4xNuS4quWtl+espuS5i+mXtCcpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICBzZWxlY3Rvci5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdncmVlbid9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLmFkZENsYXNzKCdkdWknKTtcclxuICAgICAgICBzZWxlY3Rvci5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IGdyZWVuJ30pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKuWvhueggemqjOivgSovXHJcbmZ1bmN0aW9uIHBhc3NXb3JkKHZhbHVlLCBzZWxlY3Rvcikge1xyXG4gICAgaWYgKHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCc2fjIw5L2N5a2X56ym77yM5Yy65YiG5aSn5bCP5YaZJykuY3NzKHsnY29sb3InOiAnI2NjYyd9KTtcclxuICAgICAgICBzZWxlY3Rvci5jc3Moeydib3JkZXInOiAnc29saWQgMXB4ICNjY2MnfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA8IDYgfHwgdmFsdWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJ+WvhueggemVv+W6puS4ujbvvZ4yMOS4quWtl+espicpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICBzZWxlY3Rvci5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICdncmVlbid9KTtcclxuICAgICAgICBzZWxlY3Rvci5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IGdyZWVuJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdpJykuYWRkQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZVBhc3N3b3JkKHZhbHVlLCBzZWxlY3Rvcikge1xyXG4gICAgdmFyIHBhc3N3b3JkID0gJCgnI3ByZS1wYXNzd29yZCcpLnZhbCgpO1xyXG4gICAgaWYgKHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgLy9pZiggJChcIiNmb29cIikuZGF0YShcImV2ZW50c1wiKVtcImNsaWNrXCJdICl7IC8veW91ciBjb2RlIH0gXHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICcjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggI2NjYyd9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gcGFzc3dvcmQpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJycpO1xyXG4gICAgICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5hZGRDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCflr4bnoIHkuI3kuIDoh7TvvIzor7flho3mrKHnoa7orqTlr4bnoIEnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBwYXNzd29yZDIgPSAkKCcjY29tLXBhc3N3b3JkJykudmFsKCk7XHJcbiAgICBpZiAodmFsdWUgPT0gJycpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBwYXNzd29yZDIpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJycpO1xyXG4gICAgICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5hZGRDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IHBhc3N3b3JkKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCflr4bnoIHkuI3kuIDoh7TvvIzor7flho3mrKHnoa7orqTlr4bnoIEnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSk7XHJcbiAgICB9XHJcbn1cclxuLyrpqozor4Hpgq7nrrEqL1xyXG5cclxuZnVuY3Rpb24gZW1haWwodmFsdWUsIHNlbGVjdG9yKSB7XHJcbiAgICB2YXIgZW1haWxfcmVnID0gL15bXFx3LV0rKFxcLltcXHctXSspKkAoW1xcdy1dK1xcLikrW2EtekEtWl0rJC87IC8v5Yy56YWN6YKu566x5q2j5YiZXHJcbiAgICBpZiAodmFsdWUgPT0gJycpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICghZW1haWxfcmVnLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCfpgq7nrrHmoLzlvI/kuI3mraPnoa4nKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJ2dyZWVuJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggZ3JlZW4nfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5hZGRDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuLyrpqozor4HmiYvmnLoqL1xyXG5mdW5jdGlvbiBtb2JpbGUodmFsdWUsIHNlbGVjdG9yKSB7XHJcbiAgICB2YXIgbW9iaWxlX3JlZyA9IC9eKCgoMTNbMC05XXsxfSl8KDE1WzAtOV17MX0pfCgxOFswLTldezF9KSkrXFxkezh9KSQvOyAvL+WMuemFjeaJi+acuuato+WImVxyXG4gICAgaWYgKHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCfor7fovpPlhaXmiYvmnLrlj7cnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghbW9iaWxlX3JlZy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdpJykudGV4dCgn6K+36L6T5YWl5pyJ5pWI55qE5omL5py65Y+356CBIScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICBzZWxlY3Rvci5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyrpqozor4HnoIEqL1xyXG5mdW5jdGlvbiB5YW56aGVuZ21hKHZhbHVlLCBzZWxlY3Rvcikge1xyXG4gICAgaWYgKHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICcjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggI2NjYyd9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8q6aqM6K+B56CBKi9cclxuZnVuY3Rpb24geWFuemhlbmdtYV9waWModmFsdWUsIHNlbGVjdG9yKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gJycpIHtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzogJyNjY2MnfSk7XHJcbiAgICAgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0b3Iuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6ICcjY2NjJ30pO1xyXG4gICAgICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggI2NjYyd9KTtcclxuICAgICAgICBzZWxlY3Rvci5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gemh1Y2VTaG93KCkge1xyXG4gICAgJCgnLm9wY2l0eScpLnNob3coKTtcclxuICAgICQoJy5yZWdpc3Rlci1lbnRlcicpLmF0dHIoJ2NsYXNzJywgJ3JlZ2lzdGVyLWVudGVyIGZhZGVJbkRvd24gYW5pbWF0ZWQnKS5zaG93KCk7XHJcbn1cclxuXHJcblxyXG4vKuS4quS6uueUqOaIt+azqOWGjOmhtemdouihqOWNlemqjOivgSovXHJcbmZ1bmN0aW9uIHByZV9mb3JtKCkge1xyXG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBpZighdXNlck5hbWUoJCgnI3ByZS1uYW1lJykudmFsKCksICQoJyNwcmUtbmFtZScpKSl7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCFwYXNzV29yZCgkKCcjcHJlLXBhc3N3b3JkJykudmFsKCksICQoJyNwcmUtcGFzc3dvcmQnKSkpe1xyXG4gICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighcmVQYXNzd29yZCgkKCcjcHJlLXJlUGFzc3dvcmQnKS52YWwoKSwgJCgnI3ByZS1yZVBhc3N3b3JkJykpKXtcclxuICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCFwcmVFbWFpbFZhbGlkIHx8ICFlbWFpbCgkKCcjcHJlLWVtYWlsJykudmFsKCksICQoJyNwcmUtZW1haWwnKSkpe1xyXG4gICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoIXByZVBob25lVmFsaWQgfHwgIW1vYmlsZSgkKCcjcHJlLW1vYmlsZScpLnZhbCgpLCAkKCcjcHJlLW1vYmlsZScpKSl7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCQoJyNwcmUtbmFtZScpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCfor7fovpPlhaXnlKjmiLflkI0nKS5jc3Moeydjb2xvcic6ICdyZWQnfSlcclxuICAgICAgICAkKCcjcHJlLW5hbWUnKS5jc3Moeydib3JkZXInOiAnc29saWQgMXB4IHJlZCd9KVxyXG4gICAgICAgICQoJyNwcmUtbmFtZScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoJCgnI3ByZS1wYXNzd29yZCcpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgJCgnI3ByZS1wYXNzd29yZCcpLnNpYmxpbmdzKCdpJykudGV4dCgn6K+36L6T5YWl5a+G56CBJykuY3NzKHsnY29sb3InOiAncmVkJ30pXHJcbiAgICAgICAgJCgnI3ByZS1wYXNzd29yZCcpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgJCgnI3ByZS1wYXNzd29yZCcpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoJCgnI3ByZS1yZVBhc3N3b3JkJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAkKCcjcHJlLXJlUGFzc3dvcmQnKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeWvhueggScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KVxyXG4gICAgICAgICQoJyNwcmUtcmVQYXNzd29yZCcpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgJCgnI3ByZS1yZVBhc3N3b3JkJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJCgnLnRweXptJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAkKCcudHB5em0nKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpemqjOivgeeggScpLmNzcyh7J2NvbG9yJzoncmVkJ30pO1xyXG4gICAgICAgICQoJy50cHl6bScpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAkKCcudHB5em0nKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgam9iID0gJCgnaW5wdXQ6cmFkaW9bbmFtZT1cInNhbWVcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgaWYgKGpvYiA9PSBudWxsKSB7XHJcbiAgICAgICAgJCgnI3dyb25nLW1lc2cnKS5zaG93KCk7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coam9iKTtcclxuICAgICAgICAkKCcjd3JvbmctbWVzZycpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuLyrkvIHkuJrnlKjmiLfms6jlhozpobXpnaLooajljZXpqozor4EqL1xyXG5mdW5jdGlvbiBjb21fZm9ybSgpIHtcclxuXHJcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGlmKCF1c2VyTmFtZSgkKCcjY29tLW5hbWUnKS52YWwoKSwgJCgnI2NvbS1uYW1lJykpKXtcclxuICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoIXBhc3NXb3JkKCQoJyNjb20tcGFzc3dvcmQnKS52YWwoKSwgJCgnI2NvbS1wYXNzd29yZCcpKSl7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCFyZVBhc3N3b3JkKCQoJyNjb20tcmVQYXNzd29yZCcpLnZhbCgpLCAkKCcjY29tLXJlUGFzc3dvcmQnKSkpe1xyXG4gICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoIWNvbUVtYWlsVmFsaWQgfHwgIWVtYWlsKCQoJyNjb20tZW1haWwnKS52YWwoKSwgJCgnI2NvbS1lbWFpbCcpKSl7XHJcbiAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighY29tUGhvbmVWYWxpZCB8fCAhbW9iaWxlKCQoJyNjb20tbW9iaWxlJykudmFsKCksICQoJyNjb20tbW9iaWxlJykpKXtcclxuICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoJCgnI2NvbS1uYW1lJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAkKCcjY29tLW5hbWUnKS5zaWJsaW5ncygnaScpLnRleHQoJ+ivt+i+k+WFpeWFrOWPuOWQjScpLmNzcyh7J2NvbG9yJzogJ3JlZCd9KVxyXG4gICAgICAgICQoJyNjb20tbmFtZScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgkKCcjY29tLXBhc3N3b3JkJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAkKCcjY29tLXBhc3N3b3JkJykuc2libGluZ3MoJ2knKS50ZXh0KCfor7fovpPlhaXlr4bnoIEnKS5jc3Moeydjb2xvcic6ICdyZWQnfSlcclxuICAgICAgICAkKCcjY29tLXBhc3N3b3JkJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAkKCcjY29tLXBhc3N3b3JkJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnZHVpJyk7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgkKCcjY29tLXJlUGFzc3dvcmQnKS52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICQoJyNjb20tcmVQYXNzd29yZCcpLnNpYmxpbmdzKCdpJykudGV4dCgn6K+36L6T5YWl5a+G56CBJykuY3NzKHsnY29sb3InOiAncmVkJ30pXHJcbiAgICAgICAgJCgnI2NvbS1yZVBhc3N3b3JkJykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCByZWQnfSlcclxuICAgICAgICAkKCcjY29tLXJlUGFzc3dvcmQnKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdkdWknKTtcclxuICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkKCcuY29tLXRweXptJykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAkKCcuY29tLXRweXptJykuc2libGluZ3MoJ2knKS50ZXh0KCfor7fovpPlhaXpqozor4HnoIEnKS5jc3Moeydjb2xvcic6ICdyZWQnfSk7XHJcbiAgICAgICAgJCgnLmNvbS10cHl6bScpLmNzcyh7J2JvcmRlcic6ICdzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgICAgJCgnLmNvbS10cHl6bScpLnNpYmxpbmdzKCdpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG4gICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SW52aXRvcigpe1xyXG4gICAgaWYoIXVybCkgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgdCA9IHVybCgnP3QnKTtcclxuICAgIHZhciBpZCA9IHVybCgnP2lkJyk7XHJcblxyXG4gICAgaWYoIHQgJiYgaWQgKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0OnQsXHJcbiAgICAgICAgICAgIGlkOmlkXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCIkKGZ1bmN0aW9uKCl7XHJcbi8v5Y+R6YCB5omL5py655+t5L+h6aqM6K+B56CBXHJcbiQoJyNmaW5kTWEtZHVhbnhpbkJ1dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0dmFyIHRlbCA9ICQoJyNmaW5kTWEtbW9iaWxlJykudmFsKCk7XHJcbiAgICBpZih0ZWwgPT1cIlwiKXtcclxuICAgICAgJCgnI2ZpbmRNYS1tb2JpbGUnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCfor7fovpPlhaXmiYvmnLrlj7cnKS5jc3Moeydjb2xvcic6J3JlZCd9KTtcclxuICAgICAgJCgnI2ZpbmRNYS1tb2JpbGUnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggcmVkJ30pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1lbHNle1xyXG4gICAgICAkKCcjZmluZE1hLWR1YW54aW5UZXh0Jykuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJykuY3NzKHsnY29sb3InOidjc3MnfSk7XHJcbiAgICAgICQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggI2NjYyd9KVxyXG4gICAgICBpZighZmluZE1pbWFNb2JpbGUoJCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoKSwkKCcjZmluZE1hLW1vYmlsZScpKSl7XHJcbiAgICAgIFx0cmV0dXJuIGZhbHNlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgXHR2YXIgcmVxdWVzdE9iamVjdCA9IG5ldyBSZXF1ZXN0T2JqZWN0KFwiL3VlX2xpYi9Ib21lL2luZGV4LnBocC9Ib21lL01vYmlsZS9yZXNldFB3ZFNlbmRcIik7XHJcblx0ICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwicGhvbmVcIiwgdGVsKTtcclxuXHQgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXNwb25zZU9iamVjdCl7XHJcblx0ICAgICAgaWYocmVzcG9uc2VPYmplY3QuY29kZT09PTEpe1xyXG5cdCAgICAgICAgLy8kLm1lc3NhZ2VyLmFsZXJ0KFwi5o+Q56S65L+h5oGvXCIsIFwi55+t5L+h5Y+R6YCB5oiQ5YqfXCIpO1xyXG5cdCAgICAgICAgdmFyIHRpbWU9NjA7XHJcblx0ICAgICAgICAgICAgdmFyIHRpbWVyO1xyXG5cdCAgICAgICAgICAgIHRpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICAgICAgIHRpbWUtLTtcclxuXHQgICAgICAgICAgICAgICAgaWYodGltZTw9MCl7XHJcblx0ICAgICAgICAgICAgICAgICAgJCgnI2ZpbmRNYS1kdWFueGluQnV0JykudmFsKCfph43mlrDlj5HpgIEnKTtcclxuXHQgICAgICAgICAgICAgICAgICAkKCcjZmluZE1hLWR1YW54aW5CdXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpXHJcblx0ICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0ICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cdCAgICAgICAgICAgICAgICAgJCgnI2ZpbmRNYS1kdWFueGluQnV0JykudmFsKHRpbWUrJ+enkuWQjumHjeivlScpO1xyXG5cdCAgICAgICAgICAgICAgICAgJCgnI2ZpbmRNYS1kdWFueGluQnV0JykuYXR0cignZGlzYWJsZWQnLHRydWUpXHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lKVxyXG5cdCAgICAgICAgICAgIH0sMTAwMClcclxuXHQgICAgICB9ZWxzZXtcclxuXHQgICAgICAgICQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnK3Jlc3BvbnNlT2JqZWN0Lm1zZysnJykuY3NzKHsnY29sb3InOidyZWQnfSk7XHJcblx0ICAgICAgICAkKCcjZmluZE1hLWR1YW54aW5UZXh0JykuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4IHJlZCd9KVxyXG5cdCAgICAgICAgLy8kLm1lc3NhZ2VyLmFsZXJ0KFwi5o+Q56S65L+h5oGvXCIsIFwi55+t5L+h5Y+R6YCB5aSx6LSlXCIgKyByZXNwb25zZU9iamVjdC5tZXNzYWdlLCAnd2FybmluZycpO1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxufSlcclxuXHJcblxyXG4vKueCueWHu+aJvuWbnuWvhueggeaMiemSriovXHJcbiQoJyNmaW5kTWEtc3VibWl0TW9iaWxlLWJ1dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0aWYoIWZpbmRNaW1hTW9iaWxlKCQoJyNmaW5kTWEtbW9iaWxlJykudmFsKCksJCgnI2ZpbmRNYS1tb2JpbGUnKSkpe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1lbHNle1xyXG5cdFx0aWYoJCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoKSA9PSAnJyApe1xyXG5cdFx0XHQkKCcjZmluZE1hLW1vYmlsZScpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJ+ivt+i+k+WFpeaJi+acuuWPtycpLmNzcyh7J2NvbG9yJzoncmVkJ30pO1xyXG5cdCAgICAgICAgJCgnI2ZpbmRNYS1tb2JpbGUnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggcmVkJ30pXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoJCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnZhbCgpID09ICcnKXtcclxuXHRcdFx0XHQkKCcjZmluZE1hLWR1YW54aW5UZXh0Jykuc2libGluZ3MoJ2xhYmVsJykudGV4dCgn6K+36L6T5YWl55+t5L+h6aqM6K+B56CBJykuY3NzKHsnY29sb3InOidyZWQnfSk7XHJcblx0XHQgICAgICAgICQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggcmVkJ30pXHJcblx0XHQgICAgICAgIHJldHVybjtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Nb2JpbGUvcmVzZXRQd2RDaGVja1wiKTtcclxuXHRcdFx0XHRyZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcInBob25lXCIsJCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoKSk7XHJcblx0XHRcdCAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcInZlcmlmeVwiLCAkKCcjZmluZE1hLWR1YW54aW5UZXh0JykudmFsKCkpO1xyXG5cdFx0XHQgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXNwb25zZU9iamVjdCl7XHJcblx0XHRcdCAgICAgIGlmKHJlc3BvbnNlT2JqZWN0LmNvZGU9PTEpe1xyXG5cdFx0XHQgICAgICAgICQoJy5qaWh1by1tYWluMScpLmhpZGUoKTtcclxuXHRcdFx0XHRcdCQoJy5qaWh1by1tYWluMicpLnNob3coKTtcclxuXHRcdFx0XHRcdCQoJyNwcm9ncmVzc2JhciBsaScpLmVxKDEpLmNoaWxkcmVuKCdiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQgICAgICB9ZWxzZXtcclxuXHRcdFx0ICAgICAgXHRpZihyZXNwb25zZU9iamVjdC5tc2cgPT1cIuivpeaJi+acuuWPt+acqua/gOa0u1wiKXtcclxuXHRcdFx0ICAgICAgXHRcdCQoJyNmaW5kTWEtbW9iaWxlJykuc2libGluZ3MoJ2xhYmVsJykudGV4dCgn6K+l5omL5py65Y+35pyq5r+A5rS7JykuY3NzKHsnY29sb3InOidyZWQnfSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAkKCcjZmluZE1hLW1vYmlsZScpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCByZWQnfSlcclxuXHRcdFx0ICAgICAgXHR9ZWxzZXtcclxuXHRcdFx0ICAgICAgXHRcdCQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnK3Jlc3BvbnNlT2JqZWN0Lm1zZysnJykuY3NzKHsnY29sb3InOidyZWQnfSk7XHJcblx0XHRcdCAgICAgICAgICAgICQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggcmVkJ30pXHJcblx0XHRcdCAgICAgIFx0fVxyXG5cdFx0XHQgICAgICAgIHJldHVybjtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgfSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn0pXHJcblxyXG5cclxuLy/ph43mlrDkv67mlLnlr4bnoIFcclxuJCgnI3Jlc2V0TWEtc3VibWl0TW9iaWxlLWJ1dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0aWYoJCgnI25ld1Bhc3N3b3JkJykudmFsKCk9PScnKXtcclxuXHRcdCQoJyNuZXdQYXNzd29yZCcpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJ+ivt+i+k+WFpeWvhueggScpLmNzcyh7J2NvbG9yJzoncmVkJ30pO1xyXG5cdFx0JCgnI25ld1Bhc3N3b3JkJykuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4IHJlZCd9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9ZWxzZSBpZigkKCcjbmV3UGFzc3dvcmRUcnVlJykudmFsKCk9PScnKXtcclxuXHRcdCQoJyNuZXdQYXNzd29yZFRydWUnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCfor7fovpPlhaXlr4bnoIEnKS5jc3Moeydjb2xvcic6J3JlZCd9KVxyXG5cdFx0JCgnI25ld1Bhc3N3b3JkVHJ1ZScpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCByZWQnfSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fWVsc2V7XHJcblx0XHRpZighTWFwYXNzV29yZCgkKCcjbmV3UGFzc3dvcmQnKS52YWwoKSwkKCcjbmV3UGFzc3dvcmQnKSkgfHwgIU1hcmVQYXNzd29yZCgkKCcjbmV3UGFzc3dvcmRUcnVlJykudmFsKCksJCgnI25ld1Bhc3N3b3JkVHJ1ZScpKSApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dmFyIHJlcXVlc3RPYmplY3QgPSBuZXcgUmVxdWVzdE9iamVjdChcIi91ZV9saWIvSG9tZS9pbmRleC5waHAvSG9tZS9Mb2dpbi9yZXNldFB3ZFwiKTtcclxuXHRcdFx0XHRyZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcInBob25lXCIsJCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoKSk7XHJcblx0XHRcdCAgICByZXF1ZXN0T2JqZWN0LmFkZFBhcmFtZXRlcihcInZlcmlmeVwiLCAkKCcjZmluZE1hLWR1YW54aW5UZXh0JykudmFsKCkpO1xyXG5cdFx0XHQgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJwd2RcIiwgJCgnI25ld1Bhc3N3b3JkJykudmFsKCkpO1xyXG5cdFx0XHQgICAgcmVxdWVzdE9iamVjdC5hc3luUG9zdEZvck9iamVjdChmdW5jdGlvbihyZXNwb25zZU9iamVjdCl7XHJcblxyXG5cdFx0XHQgICAgICBpZihyZXNwb25zZU9iamVjdC5jb2RlPT0xKXtcclxuXHRcdFx0ICAgICAgICAkKCcuamlodW8tbWFpbjEnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQkKCcuamlodW8tbWFpbjInKS5oaWRlKCk7XHJcblx0XHRcdFx0XHQkKCcuamlodW8tbWFpbjMnKS5zaG93KCk7XHJcblx0XHRcdFx0XHQkKCcjcHJvZ3Jlc3NiYXIgbGknKS5lcSgyKS5jaGlsZHJlbignYicpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCBcdCQoJy5maW5kcGFzZC1wYWdlJykuaGlkZSgpO1xyXG5cdFx0XHRcdFx0IFx0JCgnLmxvZ2luLXBhZ2UnKS5hdHRyKCdjbGFzcycsJ2xvZ2luLXBhZ2UgZmFkZUluRG93biBhbmltYXRlZCcpLnNob3coKTtcclxuXHRcdFx0XHRcdH0sMzAwMClcclxuXHJcblx0XHRcdCAgICAgIH1lbHNle1xyXG5cdFx0XHQgICAgICAgICQoJyNuZXdQYXNzd29yZFRydWUnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnK3Jlc3BvbnNlT2JqZWN0Lm1zZysnJykuY3NzKHsnY29sb3InOidyZWQnfSk7XHJcblx0XHRcdCAgICAgICAgJCgnI25ld1Bhc3N3b3JkVHJ1ZScpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCByZWQnfSlcclxuXHRcdFx0ICAgICAgICByZXR1cm47XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgIH0pXHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pXHJcbi8q6aqM6K+B5omL5py6Ki9cclxuZnVuY3Rpb24gZmluZE1pbWFNb2JpbGUodmFsdWUsc2VsZWN0b3Ipe1xyXG4gIHZhciBtb2JpbGVfcmVnPS9eKDB8ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMC05XXwxOFswLTldfDE0WzAtOV0pWzAtOV17OH0kLzsgLy/ljLnphY3miYvmnLrmraPliJlcclxuICBpZiggdmFsdWUgPT0gJycpe1xyXG4gICAgc2VsZWN0b3Iuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJykuY3NzKHsnY29sb3InOicjY2NjJ30pO1xyXG4gICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4ICNjY2MnfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfWVsc2UgaWYoICFtb2JpbGVfcmVnIC4gdGVzdCggdmFsdWUgKSApe1xyXG4gICAgc2VsZWN0b3Iuc2libGluZ3MoJ2xhYmVsJykudGV4dCgn6K+36L6T5YWl5pyJ5pWI55qE5omL5py65Y+356CBIScpLmNzcyh7J2NvbG9yJzoncmVkJ30pO1xyXG4gICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4IHJlZCd9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ZWxzZSBpZiggbW9iaWxlX3JlZyAuIHRlc3QoIHZhbHVlICkpe1xyXG4gICAgc2VsZWN0b3Iuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJykuY3NzKHsnY29sb3InOidncmVlbid9KTtcclxuICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCBncmVlbid9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHVhbnhpblRleHQodmFsdWUsc2VsZWN0b3Ipe1xyXG5cdGlmKCB2YWx1ZSA9PSAnJyl7XHJcblx0ICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpLmNzcyh7J2NvbG9yJzonI2NjYyd9KTtcclxuXHQgICAgc2VsZWN0b3IuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4ICNjY2MnfSk7XHJcblx0ICAgLy8gcmV0dXJuIGZhbHNlO1xyXG5cdCAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBNYXBhc3NXb3JkKHZhbHVlLHNlbGVjdG9yKXtcclxuICBpZih2YWx1ZSA9PSAnJyl7XHJcbiAgICBzZWxlY3Rvci5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnKTtcclxuICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1lbHNlIGlmKCB2YWx1ZS5sZW5ndGggPDYgfHwgdmFsdWUubGVuZ3RoID4gMjAgKXtcclxuICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJ+WvhueggemVv+W6puS4ujbvvZ4yMOS4quWtl+espicpLmNzcyh7J2NvbG9yJzoncmVkJ30pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1lbHNle1xyXG4gICAgc2VsZWN0b3Iuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJykuY3NzKHsnY29sb3InOidncmVlbid9KTtcclxuICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCBncmVlbid9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTWFyZVBhc3N3b3JkKHZhbHVlLHNlbGVjdG9yKXtcclxuICB2YXIgcGFzc3dvcmQgPSAkKCcjbmV3UGFzc3dvcmQnKS52YWwoKTtcclxuICBpZih2YWx1ZSA9PSAnJyl7XHJcbiAgICAvL2lmKCAkKFwiI2Zvb1wiKS5kYXRhKFwiZXZlbnRzXCIpW1wiY2xpY2tcIl0gKXsgLy95b3VyIGNvZGUgfSBcclxuICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpLmNzcyh7J2NvbG9yJzonI2NjYyd9KTtcclxuICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1lbHNlIGlmKHZhbHVlICE9IHBhc3N3b3JkKXtcclxuICAgIHNlbGVjdG9yLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJ+WvhueggeS4jeS4gOiHtO+8jOivt+WGjeasoeehruiupOWvhueggScpLmNzcyh7J2NvbG9yJzoncmVkJ30pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1lbHNlIGlmKCB2YWx1ZSA9PSBwYXNzd29yZCl7XHJcbiAgICBzZWxlY3Rvci5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnKTtcclxuICAgIHNlbGVjdG9yLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCBncmVlbid9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufSIsInZhciBsb2dpbkZvcm0gPSB7XHJcbiAgICBcclxuICAgIHZhbGlkOiBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQsIHJhbmRvbUNvZGUpIHtcclxuICAgICAgICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICQoJy5lcnJvcicpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2Vycm9ydGlwJykudGV4dChcIuivt+i+k+WFpeeUqOaIt+WQjVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5lcnJvcicpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAkKCcuZXJyb3InKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJyNlcnJvcnRpcCcpLnRleHQoXCLor7fovpPlhaXlr4bnoIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyYW5kb21Db2RlKSB7XHJcbiAgICAgICAgICAgICQoJy5lcnJvcicpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnI2Vycm9ydGlwJykudGV4dChcIuivt+i+k+WFpemqjOivgeeggVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGVudGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJChcIi5sb2dpbi13cmFwcGVyXCIpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigkKFwiI3VzZXJuYW1lXCIpLnZhbCgpLCAkKFwiI3Bhc3N3b3JkXCIpLnZhbCgpLCAkKFwiI3JhbmRvbUNvZGVcIikudmFsKCksIFwiZm9ybVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCByYW5kb21Db2RlLCBlbnRlclR5cGUpIHtcclxuICAgICAgICBpZiAobG9naW5Gb3JtLnZhbGlkKHVzZXJuYW1lLCBwYXNzd29yZCwgcmFuZG9tQ29kZSkpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJuYW1lICYmIDAgPCB1c2VybmFtZS5pbmRleE9mKFwi77yaXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoL++8mi8sIFwiOlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdE9iamVjdCA9IG5ldyBSZXF1ZXN0T2JqZWN0KFwiL3VlX2xpYi9Ib21lL2luZGV4LnBocC9Ib21lL0xvZ2luL2xvZ2luQWdhaW5cIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwiYWNjb3VudFwiLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPYmplY3QuYWRkUGFyYW1ldGVyKFwicHdkXCIsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgcmVxdWVzdE9iamVjdC5hZGRQYXJhbWV0ZXIoXCJjb2RlXCIsIHJhbmRvbUNvZGUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T2JqZWN0LmFzeW5Qb3N0Rm9yT2JqZWN0KGZ1bmN0aW9uKHJlc3BvbnNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZU9iamVjdC5maXJzdClcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU9iamVjdC5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVycm9yJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNlcnJvcnRpcCcpLnRleHQocmVzcG9uc2VPYmplY3QubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FmcmVzaExpbmtcIikuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZU9iamVjdC5tc2cgPT0gJ+WvhueggeS4jeato+ehru+8gScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Bhc3N3b3JkXCIpLnZhbCgnJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXNwb25zZU9iamVjdC5tc2cgPT0gJ+mqjOivgeeggemUmeivrycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3JhbmRvbUNvZGVcIikudmFsKCcnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmVycm9yJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlT2JqZWN0LmZpcnN0PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLXN1Y2Nlc3NUaXAnKS5zaG93KCkuZGVsYXkoMTAwMCkuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24gPSAnaW5kZXguaHRtbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sMjAwMClcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmxvZ2luLXN1Y2Nlc3NUaXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gJ2luZGV4Lmh0bWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJC5leHRlbmQoJC5mbi52YWxpZGF0ZWJveC5kZWZhdWx0cy5ydWxlcywge1xyXG4gICAgICAgIG51bWJlckNoZWNrU3ViOiB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAvXlswLTldKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIui+k+WFpeato+ehruaJi+acuuWPt1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXNzd29kQ2hlY2s6IHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhc3N3b2QgPSAkKCcjcGFzc3dvcmQxJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gcGFzc3dvZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCLlr4bnoIHkuI3kuIDoh7RcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKFwiI2xvZ2luU3VibWl0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB1c2VybmFtZSA9ICQoXCIjdXNlcm5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gJChcIiNwYXNzd29yZFwiKS52YWwoKTtcclxuICAgICAgICB2YXIgcmFuZG9tQ29kZSA9ICQoXCIjcmFuZG9tQ29kZVwiKS52YWwoKTtcclxuICAgICAgICBsb2dpbkZvcm0ubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCByYW5kb21Db2RlLCBcImZvcm1cIik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkua2V5ZG93bihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uZW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuIiwiJCh3aW5kb3cpLm9uKCdsb2FkJyxmdW5jdGlvbiAoKSB7XHJcblx0JCgnI3dyb25nLW1lc2cnKS5oaWRlKCk7XHJcblx0JCgnLmNyZWVyIGlucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcjd3JvbmctbWVzZycpLmhpZGUoKTtcclxuXHR9KVxyXG5cdCQoJyNhZ3JlZS1idXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNhZ3JlZS16Y3hpZXlpJykuaGlkZSgpO1xyXG5cdH0pXHJcblx0JCgnI2FncmVlLWJ1dDInKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNhZ3JlZS16Y3hpZXlpMicpLmhpZGUoKTtcclxuXHR9KVxyXG5cdCQoJy5zd2lwZXItY29udGFpbmVyJykuaGVpZ2h0KCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHQgICAkKCcuc3dpcGVyLWNvbnRhaW5lcicpLmhlaWdodCggJCh3aW5kb3cpLmhlaWdodCgpKTtcclxuXHR9KTtcclxuXHQkKCcucGFnZTFfbGVmdCcpLmhpZGUoKTtcclxuXHR2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicse1xyXG5cdFx0cGFnaW5hdGlvbjogJy5wYWdpbmF0aW9uJyxcclxuXHRcdHNwZWVkOjEwMDAsXHJcbiAgICBcdHBhZ2luYXRpb25DbGlja2FibGU6IHRydWUsXHJcbiAgICBcdHNpbXVsYXRlVG91Y2g6ZmFsc2UsXHJcbiAgIFx0XHRtb2RlOiAndmVydGljYWwnLCAgLy8g5ruR5Yqo5pa55ZCR5LiK5LiL5Z6C55u0ICBob3Jpem9udGFsXHJcbiAgIFx0XHRtb3VzZXdoZWVsQ29udHJvbCA6IHRydWUsICAvLyDpvKDmoIfmu5Hova5cclxuICAgXHRcdG9uRmlyc3RJbml0OiBmdW5jdGlvbihzd2lwZXIpIHsgIC8vIOmmluasoeWIneWni+WMluWQjumprOS4iuaJp+ihjFxyXG4gICBcdFx0XHQkKCcuaGVhZGVyJykuYXR0cignY2xhc3MnLCdoZWFkZXIgaGVhZGVyMCcpO1xyXG5cdFx0XHQkKCcucGFnZTBfbGVmdCcpLmF0dHIoJ2NsYXNzJywncGFnZTBfbGVmdCByb2xsSW4gYW5pbWF0ZWQnKS5zaG93KCk7XHJcbiAgIFx0XHRcdCQoJy5wYWdlMF9yaWdodCcpLmNzcyh7J2FuaW1hdGlvbi1kZWxheSc6JzFzJ30pXHJcbiAgICAgICAgXHQkKCcucGFnZTBfcmlnaHQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UwX3JpZ2h0IGZhZGVJblJpZ2h0IGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0XHRcclxuICAgICAgICB9LFxyXG4gICBcdFx0b25TbGlkZUNoYW5nZUVuZCA6IGZ1bmN0aW9uIChzd2lwZXIpIHsgICAvLyDov4fmuKHliqjnlLvnu5PmnZ/lkI7miafooYzjgIHljbPmu5HlnZfmtLvliqjlgZzmraLlkI7miafooYzjgIFmcmVlTW9kZeaooeW8j+S4i+S4jeeUn+aViCAgIFx0XHRcclxuICAgICAgICBcdHN3aXRjaChzd2lwZXIuYWN0aXZlSW5kZXgpe1xyXG4gICAgICAgIFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHQkKCcuaGVhZGVyJykuYXR0cignY2xhc3MnLCdoZWFkZXIgaGVhZGVyMCcpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2UwX2xlZnQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UwX2xlZnQgcm9sbEluIGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0ICAgXHRcdFx0JCgnLnBhZ2UwX3JpZ2h0JykuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzonMXMnfSlcclxuXHRcdCAgICAgICAgXHQkKCcucGFnZTBfcmlnaHQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UwX3JpZ2h0IGZhZGVJblJpZ2h0IGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0JCgnLmhlYWRlcicpLmF0dHIoJ2NsYXNzJywnaGVhZGVyIGhlYWRlcjEnKTtcclxuXHRcdFx0XHRcdCQoJy5wYWdlMV9sZWZ0JykuYXR0cignY2xhc3MnLCdwYWdlMV9sZWZ0IGZhZGVJbkxlZnQgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQgICBcdFx0XHQkKCcucGFnZTFfcmlnaHQnKS5jc3MoeydhbmltYXRpb24tZGVsYXknOicxcyd9KVxyXG5cdFx0ICAgICAgICBcdCQoJy5wYWdlMV9yaWdodCcpLmF0dHIoJ2NsYXNzJywncGFnZTFfcmlnaHQgZmFkZUluUmlnaHQgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQgICBcdFx0XHQkKCcucGFnZTFfcmlnaHQnKS5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHsgIC8vIOW9k+WKqOeUu+aViOaenOaJp+ihjOWujOaIkOWQjui/mOWPr+S7pea3u+WKoOS6i+S7tlxyXG5cdFx0ICAgICAgICBcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZmFkZUluUmlnaHQgYW5pbWF0ZWQnKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2Vjb25kID0gMDtcclxuXHRcdFx0XHRcdFx0XHQkKCcudHJlZS1jaGlsZCBzcGFuJykuZWFjaChmdW5jdGlvbihpbmRleCxpdGVtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgX3RoYXRDbGFzcyA9ICQoaXRlbSkuYXR0cihcInRpdGxlXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JChpdGVtKS5lcSgwKS5hZGRDbGFzcyhfdGhhdENsYXNzKS5zaG93KCkuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzpzZWNvbmQrJ3MnfSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWNvbmQgKz0gMC4xO1xyXG5cdFx0XHRcdFx0XHRcdFx0JChpdGVtKS5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhfdGhhdENsYXNzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2hhbicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHQgICAgICAgIFx0fSlcdCAgIFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0JCgnLmhlYWRlcicpLmF0dHIoJ2NsYXNzJywnaGVhZGVyIGhlYWRlcjInKTtcclxuXHRcdFx0XHRcdCQoJy5wYWdlMi1sZWZ0JykuYXR0cignY2xhc3MnLCdwYWdlMi1sZWZ0IGZhZGVJbkxlZnQgYW5pbWF0ZWQnKS5zaG93KCk7XHJcbiAgIFx0XHRcdFx0XHQkKCcucGFnZTItcmlnaHQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UyLXJpZ2h0IGZhZGVJblJpZ2h0IGFuaW1hdGVkJykuc2hvdygpLmNzcyh7J2FuaW1hdGlvbi1kZWxheSc6JzFzJ30pO1xyXG5cdFx0XHRcdFx0Ly9hdXRvUGxheSgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0JCgnLmhlYWRlcicpLmF0dHIoJ2NsYXNzJywnaGVhZGVyIGhlYWRlcjMnKTtcclxuXHJcblx0XHRcdFx0XHQkKCcucGFnZTMtdGV4dCcpLmF0dHIoJ2NsYXNzJywncGFnZTMtdGV4dCByb3RhdGVJbkRvd25MZWZ0IGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2UzLWJvdHRvbScpLmF0dHIoJ2NsYXNzJywncGFnZTMtYm90dG9tIHpvb21JbkRvd24gYW5pbWF0ZWQnKS5zaG93KCkuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzonMXMnfSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHQkKCcuaGVhZGVyJykuYXR0cignY2xhc3MnLCdoZWFkZXIgaGVhZGVyNCcpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2U0LXRleHQnKS5hdHRyKCdjbGFzcycsJ3BhZ2U0LXRleHQgcm90YXRlSW5Eb3duUmlnaHQgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHRcdFx0XHQkKCcucGFnZTQtYm90dG9tJykuYXR0cignY2xhc3MnLCdwYWdlNC1ib3R0b20gZmFkZUluVXBCaWcgYW5pbWF0ZWQnKS5zaG93KCkuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzonMXMnfSk7XHJcblx0XHRcdFx0XHQkKCcubW9uZXknKS5jc3MoeydhbmltYXRpb24tZGVsYXknOicycycsJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnOidpbmZpbml0ZSd9KS5hdHRyKCdjbGFzcycsJ21vbmV5IHRhZGEgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdCAgIFx0XHR9XHJcbiAgIFx0XHR9LFxyXG4gICAgXHRvblNldFdyYXBwZXJUcmFuc2l0aW9uOmZ1bmN0aW9uIChzd2lwZXIpe1xyXG4gICBcdFx0XHRzd2l0Y2goc3dpcGVyLmFjdGl2ZUluZGV4KXtcclxuICAgXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHQkKCcuaGVhZGVyJykuYXR0cignY2xhc3MnLCdoZWFkZXIgaGVhZGVyMCcpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2UwX2xlZnQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UwX2xlZnQgcm90YXRlT3V0VXBMZWZ0IGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0ICAgXHRcdFx0JCgnLnBhZ2UwX3JpZ2h0JykuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzonMHMnfSlcclxuXHRcdCAgICAgICAgXHQkKCcucGFnZTBfcmlnaHQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UwX3JpZ2h0IGZhZGVPdXRSaWdodCBhbmltYXRlZCcpLnNob3coKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdCQoJy5oZWFkZXInKS5hdHRyKCdjbGFzcycsJ2hlYWRlciBoZWFkZXIxJyk7XHJcblx0XHRcdFx0XHQkKCcucGFnZTFfbGVmdCcpLmF0dHIoJ2NsYXNzJywncGFnZTFfbGVmdCBmYWRlT3V0TGVmdCBhbmltYXRlZCcpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2UxX3JpZ2h0JykuYXR0cignY2xhc3MnLCdwYWdlMV9yaWdodCBmYWRlT3V0UmlnaHQgYW5pbWF0ZWQnKTtcclxuXHRcdFx0XHRcdCQoJy5wYWdlMV9yaWdodCcpLmNzcyh7J2FuaW1hdGlvbi1kZWxheSc6JzBzJ30pXHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0JCgnLmhlYWRlcicpLmF0dHIoJ2NsYXNzJywnaGVhZGVyIGhlYWRlcjInKTtcclxuXHRcdFx0XHRcdCQoJy5wYWdlMi1sZWZ0JykuYXR0cignY2xhc3MnLCdwYWdlMi1sZWZ0IGZhZGVPdXRMZWZ0IGFuaW1hdGVkJykuc2hvdygpO1xyXG4gICBcdFx0XHRcdFx0JCgnLnBhZ2UyLXJpZ2h0JykuYXR0cignY2xhc3MnLCdwYWdlMi1yaWdodCBmYWRlT3V0UmlnaHQgYW5pbWF0ZWQnKS5zaG93KCkuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzonMHMnfSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0XHQkKCcuaGVhZGVyJykuYXR0cignY2xhc3MnLCdoZWFkZXIgaGVhZGVyMycpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2UzLXRleHQnKS5hdHRyKCdjbGFzcycsJ3BhZ2UzLXRleHQgcm90YXRlT3V0VXBMZWZ0IGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2UzLWJvdHRvbScpLmF0dHIoJ2NsYXNzJywncGFnZTMtYm90dG9tIHpvb21PdXRVcCBhbmltYXRlZCcpLnNob3coKS5jc3MoeydhbmltYXRpb24tZGVsYXknOicwcyd9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdCQoJy5oZWFkZXInKS5hdHRyKCdjbGFzcycsJ2hlYWRlciBoZWFkZXI0Jyk7XHJcblx0XHRcdFx0XHQkKCcucGFnZTQtdGV4dCcpLmF0dHIoJ2NsYXNzJywncGFnZTQtdGV4dCByb3RhdGVPdXRVcFJpZ2h0IGFuaW1hdGVkJykuc2hvdygpO1xyXG5cdFx0XHRcdFx0JCgnLnBhZ2U0LWJvdHRvbScpLmF0dHIoJ2NsYXNzJywncGFnZTQtYm90dG9tIGZhZGVPdXREb3duIGFuaW1hdGVkJykuc2hvdygpLmNzcyh7J2FuaW1hdGlvbi1kZWxheSc6JzBzJ30pO1xyXG5cdFx0XHRcdFx0Ly8kKCcubW9uZXknKS5hdHRyKCdjbGFzcycsJ21vbmV5IHRhZGEgYW5pbWF0ZWQnKS5zaG93KCkuY3NzKHsnYW5pbWF0aW9uLWRlbGF5JzonMHMnfSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcbiAgIFx0XHR9XHJcbiAgICB9KVxyXG5cdCQoJy5oZWFkZXItdG9wIGxpJykuZXEoMCkuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdGNvbnNvbGUubG9nKCcyMjIyJylcclxuXHRcdG15U3dpcGVyLnN3aXBlVG8oMCwgMTAwMCwgdHJ1ZSk7XHJcblx0fSlcclxuXHQkKCcuaGVhZGVyLXRvcCBsaScpLmVxKDEpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zb2xlLmxvZygnMjIyMicpXHJcblx0XHRteVN3aXBlci5zd2lwZVRvKDEsIDEwMDAsIHRydWUpO1xyXG5cdH0pXHJcblx0JCgnLmhlYWRlci10b3AgbGknKS5lcSgyKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0Y29uc29sZS5sb2coJzIyMjInKVxyXG5cdFx0bXlTd2lwZXIuc3dpcGVUbygyLCAxMDAwLCB0cnVlKTtcclxuXHR9KVxyXG5cdCQoJy5oZWFkZXItdG9wIGxpJykuZXEoMykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdGNvbnNvbGUubG9nKCcyMjIyJylcclxuXHRcdG15U3dpcGVyLnN3aXBlVG8oMywgMTAwMCwgdHJ1ZSk7XHJcblx0fSlcclxuXHQkKCcuaGVhZGVyLXRvcCBsaScpLmVxKDQpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zb2xlLmxvZygnMjIyMicpXHJcblx0XHRteVN3aXBlci5zd2lwZVRvKDQsIDEwMDAsIHRydWUpO1xyXG5cdH0pXHJcblxyXG5cclxuXHQkKCcudHJlZS1jaGlsZCBzcGFuJykuaG92ZXIoZnVuY3Rpb24oZSl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKCdsYWJlbCcpLnRvZ2dsZSgpO1xyXG5cdFx0Lyp2YXIgaW5kZXg9JCh0aGlzKS5pbmRleCgpOyovXHJcblx0XHQvKiQodGhpcykudG9nZ2xlQ2xhc3MoJ2hvdl9vcicpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2hvdl9vcicpO1xyXG5cdFx0JCgnLmRvd25sb2FkLW51bS1ib3ggPiBkaXYnKS5lcShpbmRleCkudG9nZ2xlKCk7Ki9cclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fSlcclxuXHJcbiAgICBhdXRvUGxheSgpO1xyXG4gICAvKuesrOS6jOWxj+WbvueJh+iHquWKqOWIh+aNoiovXHJcblx0ZnVuY3Rpb24gYXV0b1BsYXkoKXtcclxuXHJcblx0XHR2YXIgbnVtPTAsXHJcblx0XHRcdGlkPTAsXHJcblx0XHRcdHNldD1udWxsO1xyXG5cdFx0dmFyIHRpbWVJbnRlcnZhbD0zMDAwO1xyXG5cdFx0JChcIi5wYWdlMi1yaWdodD5kaXZcIikuZXEoMCkuc2hvdygpO1xyXG5cdFx0c2V0ID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdG51bTwkKFwiLnBhZ2UyLXJpZ2h0PmRpdlwiKS5sZW5ndGgtMT8gbnVtKysgOiBudW09MDtcclxuXHRcdFx0JChcIi5wYWdlMi1yaWdodD5kaXZcIikuZXEobnVtKS5mYWRlSW4oKS5zaWJsaW5ncygpLmZhZGVPdXQoKTtcclxuXHRcdFx0JChcIi5wYWdlMi1sZWZ0IHVsIGxpXCIpLmVxKG51bSkuY2hpbGRyZW4oKS5hZGRDbGFzcygnbm9uZScpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnbm9uZScpO1xyXG5cdFx0XHQkKFwiLnBhZ2UyLWxlZnQgdWwgbGlcIikuZXEobnVtKS5yZW1vdmVDbGFzcygnbm9uZScpLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ25vbmUnKTtcclxuXHRcdH0sdGltZUludGVydmFsKTtcclxuXHRcdCQoXCIucGFnZTItbGVmdCB1bCBsaVwiKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChzZXQpO1xyXG5cdFx0XHRudW09JCh0aGlzKS5pbmRleCgpO1xyXG5cdFx0XHQkKFwiLnBhZ2UyLXJpZ2h0PmRpdlwiKS5lcShudW0pLmZhZGVJbigpLnNpYmxpbmdzKCkuZmFkZU91dCgpOyBcclxuXHRcdFx0JChcIi5wYWdlMi1sZWZ0IHVsIGxpXCIpLmVxKG51bSkuY2hpbGRyZW4oKS5hZGRDbGFzcygnbm9uZScpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnbm9uZScpO1xyXG5cdFx0XHQkKFwiLnBhZ2UyLWxlZnQgdWwgbGlcIikuZXEobnVtKS5yZW1vdmVDbGFzcygnbm9uZScpLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ25vbmUnKTtcclxuXHRcdH0pO1xyXG5cdFx0JChcIi5wYWdlMi1sZWZ0IHVsIGxpXCIpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdHNldCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdG51bTwkKFwiLnBhZ2UyLXJpZ2h0PmRpdlwiKS5sZW5ndGgtMT8gbnVtKysgOiBudW09MDtcclxuXHRcdFx0XHQkKFwiLnBhZ2UyLXJpZ2h0PmRpdlwiKS5lcShudW0pLmZhZGVJbigpLnNpYmxpbmdzKCkuZmFkZU91dCgpO1xyXG5cdFx0XHRcdCQoXCIucGFnZTItbGVmdCB1bCBsaVwiKS5lcShudW0pLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ25vbmUnKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ25vbmUnKTtcclxuXHRcdFx0XHQkKFwiLnBhZ2UyLWxlZnQgdWwgbGlcIikuZXEobnVtKS5yZW1vdmVDbGFzcygnbm9uZScpLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ25vbmUnKTtcclxuXHRcdFx0fSx0aW1lSW50ZXJ2YWwpO1xyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgdmVyaWZfY29kZV91cmw9d2luZG93LkhPU1RfVVJMKycvdWVfbGliL0hvbWUvaW5kZXgucGhwL0hvbWUvTG9naW4vZ2V0VmVyaWZ5P3Q9JztcclxuXHJcblx0Lyrov5vlhaXms6jlhozlhaXlj6MqL1xyXG5cdCQoJy5yZWdpc3RlcicpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0cmVsb2FkRm9ybSgpO1xyXG5cdFx0JCgnLm9wY2l0eScpLnNob3coKTtcclxuXHRcdCQoJy5yZWdpc3Rlci1lbnRlcicpLmF0dHIoJ2NsYXNzJywncmVnaXN0ZXItZW50ZXIgZmFkZUluRG93biBhbmltYXRlZCcpLnNob3coKTtcclxuXHR9KVxyXG5cclxuXHQvKui/m+WFpeS4quS6uueUqOaIt+azqOWGjCovXHJcblx0JCgnLnByZS1yZWdpc3RlciBwJykuYmluZCgnY2xpY2snLGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcucGVyZG9uYWwtcmVnaXN0ZXInKS5hdHRyKCdjbGFzcycsJ3BlcmRvbmFsLXJlZ2lzdGVyIHpvb21JbiBhbmltYXRlZCcpLnNob3coKTtcclxuXHRcdCQoJy5yZWdpc3Rlci1lbnRlcicpLmF0dHIoJ2NsYXNzJywncmVnaXN0ZXItZW50ZXIgem9vbU91dCBhbmltYXRlZCcpLmhpZGUoKTtcclxuLy9cdFx0cGFyZW50YWxDb250cm9sID0gbmV3IFBhcmVudGFsQ29udHJvbCgpO1xyXG5cdFx0JChcIiNhZnJlc2hMaW5remNcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxvZ2luRm9ybS5yYW5kb21Db2RlKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dmFyIGxvZ2luRm9ybSA9IHtcclxuXHRcdFx0cmFuZG9tQ29kZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKFwiLnRweXptXCIpLnZhbCgnJyk7XHJcblx0XHRcdFx0XHQkKFwiI3l6bXpjXCIpLmF0dHIoXCJzcmNcIiwgdmVyaWZfY29kZV91cmwgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsb2dpbkZvcm0ucmFuZG9tQ29kZSgpO1x0XHRcclxuXHR9KVxyXG5cclxuXHQvKui/m+WFpeS8geS4mueUqOaIt+azqOWGjCovXHJcblx0JCgnLmNvbS1yZWdpc3RlciBwJykuYmluZCgnY2xpY2snLGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuY29tcGFueS1yZWdpc3RlcicpLmF0dHIoJ2NsYXNzJywnY29tcGFueS1yZWdpc3RlciB6b29tSW4gYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQkKCcucmVnaXN0ZXItZW50ZXInKS5hdHRyKCdjbGFzcycsJ3JlZ2lzdGVyLWVudGVyIHpvb21PdXQgYW5pbWF0ZWQnKS5oaWRlKCk7XHJcbi8vXHRcdHBhcmVudGFsQ29udHJvbCA9IG5ldyBQYXJlbnRhbENvbnRyb2woKTtcclxuXHRcdCQoXCIjYWZyZXNoTGlua3pjMlwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0bG9naW5Gb3JtLnJhbmRvbUNvZGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR2YXIgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHRcdHJhbmRvbUNvZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JChcIi5jb20tdHB5em1cIikudmFsKCcnKTtcclxuXHRcdFx0XHRcdCQoXCIjeXptemMyXCIpLmF0dHIoXCJzcmNcIiwgdmVyaWZfY29kZV91cmwgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGxvZ2luRm9ybS5yYW5kb21Db2RlKCk7XHRcclxuXHR9KVxyXG5cdC8q54K55Ye755m76ZmG5oyJ6ZKuKi9cclxuXHQkKCcubG9naW4nKS5iaW5kKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5lcnJvcicpLmhpZGUoKTtcclxuXHQgXHQkKCcjZXJyb3J0aXAnKS5odG1sKCcnKVxyXG5cdFx0JCgnLm9wY2l0eScpLnNob3coKTtcclxuXHRcdCQoJy5sb2dpbi1wYWdlJykuYXR0cignY2xhc3MnLCdsb2dpbi1wYWdlIGZhZGVJbkRvd24gYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQkKCcjdXNlcm5hbWUnKS52YWwoJycpO1xyXG5cdCAgICAkKCcjcGFzc3dvcmQnKS52YWwoJycpO1xyXG5cdCAgICAkKCcjcmFuZG9tQ29kZScpLnZhbCgnJyk7XHJcblx0XHQkKFwiI2FmcmVzaExpbmtcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxvZ2luRm9ybS5yYW5kb21Db2RlKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dmFyIGxvZ2luRm9ybSA9IHtcclxuXHRcdFx0XHRyYW5kb21Db2RlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoXCIjcmFuZG9tQ29kZVwiKS52YWwoJycpO1xyXG5cdFx0XHRcdFx0JChcIiN5em1cIikuYXR0cihcInNyY1wiLCB2ZXJpZl9jb2RlX3VybCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGluc3RhbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0JChcIiN5em1cIikuYXR0cihcInNyY1wiLHZlcmlmX2NvZGVfdXJsICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG5cdFx0fVxyXG5cdFx0aW5zdGFsbCgpO1x0XHRcclxuXHR9KVxyXG5cclxuXHQvKueCueWHu+eZu+W9lemhtemdoueahOeri+WNs+azqOWGjOaMiemSriovXHJcblx0JCgnI3pjTm93JykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5yZWdpc3Rlci1lbnRlcicpLmF0dHIoJ2NsYXNzJywncmVnaXN0ZXItZW50ZXIgZmxpcEluWVkgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQkKCcubG9naW4tcGFnZScpLmhpZGUoKTtcclxuXHRcdCQoJy5lcnJvcicpLmhpZGUoKTtcclxuXHQgXHQkKCcjZXJyb3J0aXAnKS5odG1sKCcnKTtcclxuXHR9KVxyXG5cclxuXHQkKCcuZ2V0LXBhc3N3b3JkLWxvZ3BhZ2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLmZpbmRwYXNkLXBhZ2UnKS5hdHRyKCdjbGFzcycsJ2ZpbmRwYXNkLXBhZ2UgZmxpcEluWVkgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQkKCcubG9naW4tcGFnZScpLmhpZGUoKTtcclxuXHRcdCQoJy5qaWh1by1tYWluMScpLnNob3coKTtcclxuXHRcdCQoJy5qaWh1by1tYWluMicpLmhpZGUoKTtcclxuXHRcdCQoJy5qaWh1by1tYWluMycpLmhpZGUoKTtcclxuXHRcdCQoJyNmaW5kTWEtbW9iaWxlJykudmFsKCcnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggI2NjYyd9KTtcclxuXHQgXHQkKCcjZmluZE1hLW1vYmlsZScpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpO1xyXG5cdCBcdCQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS52YWwoJycpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG5cdCBcdCQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnKTtcclxuXHQgXHQkKCcjbmV3UGFzc3dvcmQnKS52YWwoJycpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG5cdCBcdCQoJyNuZXdQYXNzd29yZCcpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpO1xyXG5cdCBcdCQoJyNuZXdQYXNzd29yZFRydWUnKS52YWwoJycpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG5cdCBcdCQoJyNuZXdQYXNzd29yZFRydWUnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnKTtcclxuXHQgXHQkKCcuZXJyb3InKS5oaWRlKCk7XHJcblx0IFx0JCgnI2Vycm9ydGlwJykuaHRtbCgnJyk7XHJcblx0IFx0JCgnI3Byb2dyZXNzYmFyIGxpJykuZXEoMSkuY2hpbGRyZW4oJ2InKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2knKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHQgXHQkKCcjcHJvZ3Jlc3NiYXIgbGknKS5lcSgyKS5jaGlsZHJlbignYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdCBcdCQoJyNmaW5kTWEtZHVhbnhpbkJ1dCcpLnZhbCgn6I635Y+W6aqM6K+B56CBJyk7XHJcblx0ICAgICQoJyNmaW5kTWEtZHVhbnhpbkJ1dCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSlcclxuXHR9KVxyXG5cclxuXHQkKCcucmVnaXN0ZXItcGFnZS1sb2dpbicpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0JCgnLmxvZ2luLXBhZ2UnKS5hdHRyKCdjbGFzcycsJ2xvZ2luLXBhZ2UgZmxpcEluWVkgYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0XHQkKCcucmVnaXN0ZXItZW50ZXInKS5oaWRlKCk7XHJcblx0XHQkKCcjdXNlcm5hbWUnKS52YWwoJycpO1xyXG5cdCAgICAkKCcjcGFzc3dvcmQnKS52YWwoJycpO1xyXG5cdCAgICAkKCcjcmFuZG9tQ29kZScpLnZhbCgnJyk7XHJcblx0XHRcclxuXHRcdCQoXCIjYWZyZXNoTGlua1wiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0bG9naW5Gb3JtLnJhbmRvbUNvZGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR2YXIgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHRcdHJhbmRvbUNvZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JChcIiN5em1cIikuYXR0cihcInNyY1wiLCB2ZXJpZl9jb2RlX3VybCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGluc3RhbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0JChcIiN5em1cIikuYXR0cihcInNyY1wiLHZlcmlmX2NvZGVfdXJsICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluc3RhbGwoKTtcdFx0XHJcblx0fSlcclxuXHJcblx0Ly/mib7lm57lr4bnoIHpobXpnaLngrnlh7vlj5bmtojmjInpkq7lj5bmtohcclxuXHQkKCcjZmluZE1hLWNhbmNlbCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuZmluZHBhc2QtcGFnZScpLmF0dHIoJ2NsYXNzJywnZmluZHBhc2QtcGFnZSB6b29tT3V0IGFuaW1hdGVkJykuZGVsYXkoMzAwKS5oaWRlKDApO1xyXG5cdCBcdCQoJy5sb2dpbi1wYWdlJykuYXR0cignY2xhc3MnLCdsb2dpbi1wYWdlIGZhZGVJbkRvd24gYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0IFx0JCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoJycpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG5cdCBcdCQoJyNmaW5kTWEtbW9iaWxlJykuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJyk7XHJcblx0IFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnZhbCgnJykuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4ICNjY2MnfSk7XHJcblx0IFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpO1xyXG5cdCBcdCQoJyN3cm9uZy1tZXNnJykuaGlkZSgpO1xyXG5cdFx0JCgnI2Vycm9ydGlwJykudGV4dCgnJyk7XHJcblx0XHQkKCcuZXJyb3InKS5oaWRlKCk7XHJcblx0XHQkKCcjdXNlcm5hbWUnKS52YWwoJycpO1xyXG5cdFx0JCgnI3Bhc3N3b3JkJykudmFsKCcnKTtcclxuXHRcdCQoJyNyYW5kb21Db2RlJykudmFsKCcnKTtcclxuXHR9KVxyXG5cdCQoJyNmaW5kTWEtY2FuY2VsMicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuZmluZHBhc2QtcGFnZScpLmF0dHIoJ2NsYXNzJywnZmluZHBhc2QtcGFnZSB6b29tT3V0IGFuaW1hdGVkJykuZGVsYXkoMzAwKS5oaWRlKDApO1xyXG5cdCBcdCQoJy5sb2dpbi1wYWdlJykuYXR0cignY2xhc3MnLCdsb2dpbi1wYWdlIGZhZGVJbkRvd24gYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0IFx0JCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoJycpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG5cdCBcdCQoJyNmaW5kTWEtbW9iaWxlJykuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJyk7XHJcblx0IFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnZhbCgnJykuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4ICNjY2MnfSk7XHJcblx0IFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpO1xyXG5cdCBcdCQoJyN3cm9uZy1tZXNnJykuaGlkZSgpO1xyXG5cdFx0JCgnI2Vycm9ydGlwJykudGV4dCgnJyk7XHJcblx0XHQkKCcuZXJyb3InKS5oaWRlKCk7XHJcblx0XHQkKCcjdXNlcm5hbWUnKS52YWwoJycpO1xyXG5cdFx0JCgnI3Bhc3N3b3JkJykudmFsKCcnKTtcclxuXHRcdCQoJyNyYW5kb21Db2RlJykudmFsKCcnKTtcclxuXHJcblx0fSlcclxuXHJcblx0Lyrngrnlh7vlhbPpl63mjInpkq4qL1xyXG5cdCQoJy5jbG9zZScpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0cmVsb2FkRm9ybSgpO1xyXG5cdFx0JCgnLnBlcmRvbmFsLXJlZ2lzdGVyJykuYXR0cignY2xhc3MnLCdwZXJkb25hbC1yZWdpc3RlciB6b29tT3V0IGFuaW1hdGVkJykuZGVsYXkoMzAwKS5oaWRlKDApO1xyXG5cdFx0JCgnLmNvbXBhbnktcmVnaXN0ZXInKS5hdHRyKCdjbGFzcycsJ2NvbXBhbnktcmVnaXN0ZXIgem9vbU91dCBhbmltYXRlZCcpLmRlbGF5KDMwMCkuaGlkZSgwKTtcclxuXHRcdCQoJy5yZWdpc3Rlci1lbnRlcicpLmF0dHIoJ2NsYXNzJywncmVnaXN0ZXItZW50ZXIgem9vbU91dCBhbmltYXRlZCcpLmRlbGF5KDMwMCkuaGlkZSgwKTtcclxuXHRcdCQoJy5sb2dpbi1wYWdlJykuYXR0cignY2xhc3MnLCdsb2dpbi1wYWdlIHpvb21PdXQgYW5pbWF0ZWQnKS5kZWxheSgzMDApLmhpZGUoMCk7XHJcblx0XHQkKCcuZmluZHBhc2QtcGFnZScpLmF0dHIoJ2NsYXNzJywnZmluZHBhc2QtcGFnZSB6b29tT3V0IGFuaW1hdGVkJykuZGVsYXkoMzAwKS5oaWRlKDApO1xyXG5cdFx0JCgnLm9wY2l0eScpLmRlbGF5KDMwMCkuaGlkZSgwKTtcclxuXHRcdCQoJyN3cm9uZy1tZXNnJykuaGlkZSgpO1xyXG5cdFx0JCgnI2Vycm9ydGlwJykudGV4dCgnJyk7XHJcblx0XHQkKCcuZXJyb3InKS5oaWRlKCk7XHJcblx0ICAgIFxyXG5cdH0pXHJcblx0JCgnLmNsb3NlNScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRyZWxvYWRGb3JtKCk7XHJcblx0XHQkKCcuZmluZHBhc2QtcGFnZScpLmF0dHIoJ2NsYXNzJywnZmluZHBhc2QtcGFnZSB6b29tT3V0IGFuaW1hdGVkJykuZGVsYXkoMzAwKS5oaWRlKDApO1xyXG5cdCBcdCQoJy5sb2dpbi1wYWdlJykuYXR0cignY2xhc3MnLCdsb2dpbi1wYWdlIGZhZGVJbkRvd24gYW5pbWF0ZWQnKS5zaG93KCk7XHJcblx0IFx0JCgnI2ZpbmRNYS1tb2JpbGUnKS52YWwoJycpLmNzcyh7J2JvcmRlcic6J3NvbGlkIDFweCAjY2NjJ30pO1xyXG5cdCBcdCQoJyNmaW5kTWEtbW9iaWxlJykuc2libGluZ3MoJ2xhYmVsJykudGV4dCgnJyk7XHJcblx0IFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnZhbCgnJykuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4ICNjY2MnfSk7XHJcblx0IFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnNpYmxpbmdzKCdsYWJlbCcpLnRleHQoJycpO1xyXG5cdCBcdCQoJyN3cm9uZy1tZXNnJykuaGlkZSgpO1xyXG5cdFx0JCgnI2Vycm9ydGlwJykudGV4dCgnJyk7XHJcblx0XHQkKCcuZXJyb3InKS5oaWRlKCk7XHJcblx0XHQkKCcjdXNlcm5hbWUnKS52YWwoJycpO1xyXG5cdFx0JCgnI3Bhc3N3b3JkJykudmFsKCcnKTtcclxuXHRcdCQoJyNyYW5kb21Db2RlJykudmFsKCcnKTtcclxuXHR9KVxyXG5cclxuXHQvKueCueWHu+eUqOaIt+azqOWGjOWNj+iuriovXHJcblx0JCgnI3hpZXlpLWRpYWxvZycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcueGlleWlUZXh0Jykuc2hvdygpO1xyXG5cdH0pXHJcblx0JCgnI3hpZXlpLWRpYWxvZzInKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnhpZXlpVGV4dCcpLnNob3coKTtcclxuXHR9KVxyXG5cdCQoJy5hZ3JlZS1idXQteGllJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy54aWV5aVRleHQnKS5oaWRlKCk7XHJcblx0fSlcclxuXHQkKCcuY2xvc2UteGlleWknKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnhpZXlpVGV4dCcpLmhpZGUoKTtcclxuXHR9KVxyXG5cclxuXHQvKueZu+mZhumhtemdoueahOeEpueCueS6i+S7tiovXHJcblx0JCgnI3VzZXJuYW1lJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy51c2VyLW5hbWVib3ggcCcpLmFkZENsYXNzKCdib3JkZXItY29sb3InKTtcclxuXHRcdCQoJy51c2VyLW5hbWVib3ggcCBzcGFuJykuYWRkQ2xhc3MoJ29yYmonKTtcclxuXHR9KVxyXG5cdCQoJyN1c2VybmFtZScpLmJsdXIoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy51c2VyLW5hbWVib3ggcCcpLnJlbW92ZUNsYXNzKCdib3JkZXItY29sb3InKTtcclxuXHRcdCQoJy51c2VyLW5hbWVib3ggcCBzcGFuJykucmVtb3ZlQ2xhc3MoJ29yYmonKTtcclxuXHR9KVxyXG5cclxuXHQkKCcjcGFzc3dvcmQnKS5mb2N1cyhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnBhc3N3b3JkLWJveCBwJykuYWRkQ2xhc3MoJ2JvcmRlci1jb2xvcicpO1xyXG5cdFx0JCgnLnBhc3N3b3JkLWJveCBwIHNwYW4nKS5hZGRDbGFzcygnb3JiaicpO1xyXG5cdH0pXHJcblx0JCgnI3Bhc3N3b3JkJykuYmx1cihmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnBhc3N3b3JkLWJveCBwJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1jb2xvcicpO1xyXG5cdFx0JCgnLnBhc3N3b3JkLWJveCBwIHNwYW4nKS5yZW1vdmVDbGFzcygnb3JiaicpO1xyXG5cdH0pXHJcblx0LyrmlofmnKzmoYblvpfliLDmiJblpLHljrvnhKbngrnkuovku7YqL1xyXG5cdCQoJ2lucHV0W25hbWU9XCJ0ZXh0XCJdJykuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuY3NzKHsnYm9yZGVyJzogJ3NvbGlkIDFweCAjZmY3ODAwJ30pXHJcblx0fSlcclxuXHJcblxyXG59KVxyXG5cclxuLyrooajljZXliLfmlrDliJ3lp4vljJYqL1xyXG5mdW5jdGlvbiByZWxvYWRGb3JtKCl7XHJcblx0JCgnaW5wdXRbbmFtZT1cInRleHRcIl0nKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggI2NjYyd9KVxyXG4gICAgJCgnaW5wdXRbbmFtZT1cInRleHRcIl0nKS52YWwoJycpO1xyXG4gICAgJCgnI3ByZS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCc0772eMTbkuKrlrZfnrKbjgIHmlK/mjIHlrZfmr43jgIHmlbDlrZfnu4TlkIgnKS5jc3Moeydjb2xvcic6JyNjY2MnfSlcclxuICAgICQoJyNwcmUtcGFzc3dvcmQnKS5zaWJsaW5ncygnaScpLnRleHQoJzZ+MjDkvY3lrZfnrKbvvIzljLrliIblpKflsI/lhpknKS5jc3Moeydjb2xvcic6JyNjY2MnfSlcclxuICAgICQoJyNwcmUtcmVQYXNzd29yZCcpLnNpYmxpbmdzKCdpJykudGV4dCgnJykuY3NzKHsnY29sb3InOicjY2NjJ30pXHJcbiAgICAkKCcjcHJlLW1vYmlsZScpLnNpYmxpbmdzKCdpJykudGV4dCgn6L6T5YWl5omL5py65Y+377yM5L6/5LqO5oKo5om+5Zue5a+G56CB77yM5LiL6L2957uE5Lu2JykuY3NzKHsnY29sb3InOicjY2NjJ30pXHJcbiAgICAkKCcjcHJlLWVtYWlsJykuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6JyNjY2MnfSlcclxuICAgICQoJy5kenl6bScpLnNpYmxpbmdzKCdpJykudGV4dCgnJykuY3NzKHsnY29sb3InOicjY2NjJ30pXHJcbiAgICAkKCcudHB5em0nKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzonI2NjYyd9KVxyXG4gICAgJCgnI2NvbS1uYW1lJykuc2libGluZ3MoJ2knKS50ZXh0KCc0772eMTbkuKrlrZfnrKbjgIHmlK/mjIHlrZfmr43jgIHmlbDlrZfnu4TlkIgnKS5jc3Moeydjb2xvcic6JyNjY2MnfSlcclxuICAgICQoJyNjb20tcGFzc3dvcmQnKS5zaWJsaW5ncygnaScpLnRleHQoJzZ+MjDkvY3lrZfnrKbvvIzljLrliIblpKflsI/lhpknKS5jc3Moeydjb2xvcic6JyNjY2MnfSlcclxuICAgICQoJyNjb20tcmVQYXNzd29yZCcpLnNpYmxpbmdzKCdpJykudGV4dCgnJykuY3NzKHsnY29sb3InOicjY2NjJ30pXHJcbiAgICAkKCcjY29tLW1vYmlsZScpLnNpYmxpbmdzKCdpJykudGV4dCgn6L6T5YWl5omL5py65Y+377yM5L6/5LqO5oKo5om+5Zue5a+G56CB77yM5LiL6L2957uE5Lu2JykuY3NzKHsnY29sb3InOicjY2NjJ30pXHJcbiAgICAkKCcjY29tLWVtYWlsJykuc2libGluZ3MoJ2knKS50ZXh0KCcnKS5jc3Moeydjb2xvcic6JyNjY2MnfSlcclxuICAgICQoJy5kenl6bTInKS5zaWJsaW5ncygnaScpLnRleHQoJycpLmNzcyh7J2NvbG9yJzonI2NjYyd9KVxyXG4gICAgJCgnLmNvbS10cHl6bScpLnNpYmxpbmdzKCdpJykudGV4dCgnJykuY3NzKHsnY29sb3InOicjY2NjJ30pXHJcbiAgICAkKCcjYWdyZWUtemN4aWV5aScpLmhpZGUoKTtcclxuICAgICQoJyNhZ3JlZS16Y3hpZXlpMicpLmhpZGUoKTtcclxuICAgICQoJy5jcmVlciBpbnB1dCcpLmF0dHIoJ2NoZWNrZWQnLGZhbHNlKTtcclxuICAgICQoJyNhZ3JlZS1idXQnKS5hdHRyKCdjaGVja2VkJyxmYWxzZSk7XHJcbiAgICAkKCcjYWdyZWUtYnV0MicpLmF0dHIoJ2NoZWNrZWQnLGZhbHNlKTtcclxuICAgICQoJyNmaW5kTWEtbW9iaWxlJykudmFsKCcnKS5jc3Moeydib3JkZXInOidzb2xpZCAxcHggI2NjYyd9KTtcclxuIFx0JCgnI2ZpbmRNYS1tb2JpbGUnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnKTtcclxuIFx0JCgnI2ZpbmRNYS1kdWFueGluVGV4dCcpLnZhbCgnJykuY3NzKHsnYm9yZGVyJzonc29saWQgMXB4ICNjY2MnfSk7XHJcbiBcdCQoJyNmaW5kTWEtZHVhbnhpblRleHQnKS5zaWJsaW5ncygnbGFiZWwnKS50ZXh0KCcnKTtcclxuIFx0JCgnI3ByZS1waG9uZS15YW56aGVuZycpLnZhbCgn6I635Y+W6aqM6K+B56CBJyk7XHJcbiAgICAkKCcjY29tLWlucHV0LXlhbnpoZW5nJykudmFsKCfojrflj5bpqozor4HnoIEnKTtcclxuICAgICQoJy5lcnJvcicpLmhpZGUoKTtcclxuICAgICQoJy5yZWdpc3Rlci13cmFwcGVyPmRpdiBpJykucmVtb3ZlQ2xhc3MoJ2R1aScpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9