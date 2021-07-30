const login_btn = document.querySelector(".btn-primary");
const login_data = [{account:"subabawang", password:"su15wa6816"},{account:"123456", password:"123456"}];



login_btn.addEventListener(
    "click",
    function () {
        var AccountExist = false;
        const accountElement = document.getElementsByName('account-text');
        const account_input = accountElement[0].value;
        const passwordElement = document.getElementsByName('password-text');
        const password_input = passwordElement[0].value;
        

        //以上都抓得到
        for(let i=0;i<login_data.length;i++){
            if(login_data[i].account.trim()==account_input.trim()){
                AccountExist=true;
                if(login_data[i].password.trim()==password_input.trim()){
                    alert("早安"+account_input+"美好的一天"+"\n登入成功");
                    top.location='https://bigshoppa.github.io/index';
                    //
                    // var result = confirm("早安"+account_input+"美好的一天"+"\n登入成功");
                    // if (result) {
                    //     window.location.assign("/index.html");
                    // } else {
                    // }

                }else{
                    alert("密碼錯誤，登入失敗");
                    break;

                }
            }

        }
        if(AccountExist==false){
            alert("無此帳號");
        }
    },
    false
  );

