<template>
  <div>
    <div class="login_wrapper">
      <div class="animate form login_form">
        <section class="login_content">
          <form>
            <h1>管理员登录</h1>
            <div>
              <input type="text"
                     v-model="uname"
                     class="form-control"
                     placeholder="管理员登录名" required />
            </div>
            <div>
              <input type="password"
                     v-model="upwd"
                     class="form-control"
                     placeholder="管理员登录密码" required />
            </div>
            <div>
              <a
                @click="doLogin"
                class="btn btn-default submit" >&nbsp;登&nbsp;录&nbsp;</a>
            </div>

            <div class="clearfix"></div>

            <div class="separator">
              <div class="clearfix"></div>
              <br />

              <div>
                <h1><img src="../assets/img/favicon.ico">学子商城后台管理系统</h1>
                <p>©2017 版权所有，CODEBOY.COM</p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      data:function(){
        return {
          uname:'',
          upwd:''
        }
      },
      methods:{
        doLogin:function(){
          //得到用户名和密码
          // this.uname this.upwd

          //发给服务器
          this.$http
            .get('http://localhost/admin/data/user/login.php?uname='+this.uname+'&upwd='+this.upwd)
            .then((response)=>{
              console.log(response.data);
              if(response.data.code == 200){
                //js跳转到main
                this.$router.push('/main');
              }
            })
        }
      }
  }
</script>

