export default {
    name: 'Login',
    props: [''],
    methods: {
        checkLogin: function() {
            var emailToCheck = '';
            var passwordToCheck = '';
            // let customer = [];
            if (this.form.email && this.form.password) {
                console.log(this.form.email);
                emailToCheck = this.form.email;
                console.log(emailToCheck);
                console.log(this.form.password);
                passwordToCheck = this.form.password;
                console.log(this.form.checked);

                this.errors.pop();
                let customer = [];
                let nicknameTemporal;
                customer = JSON.parse(localStorage.getItem(this.form.email));
                if(!customer){
                    this.errors.push("This account does not exist");
                    return false;
                }
                console.log(customer);
                if(passwordToCheck == customer[0].password) {
                    this.show_content = !this.show_content;
                    nicknameTemporal = customer[0].nickName;
                    console.log(nicknameTemporal);
                    this.nickNameMenu = nicknameTemporal;
                    this.nickname_li = !this.nickname_li;
                    this.show_formLogin = !this.show_formLogin;
                    this.button_logout = !this.button_logout;
                    this.button_login = !this.button_login;
                    this.clearFormInputLogin();
                } else {
                    this.errors = [];      
                    if (!this.form.email || !this.form.password ) {
                        this.errors.push("All fields are required");
                    }  else {
                        this.errors.push("Wrong password");
                        
                    }
                };
            }
        },
        
    }, 
    template:`
    <div class="div_form" v-if="show_formLogin">
        <form id="form">
            <h2>Login</h2>
            <div class="div_error"  v-if="errors.length">
                <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
            </div>
            <div class="div_email">
                <label for="email">Email</label>
                <input type="text" v-model="form.email" name="email" id="email">
            </div>
            <div class="password">
                <label for="password">Password</label>
                <input type="text" v-model="form.password" name="password" id="password">
            </div>
            <div class="div_button">
                <input @click="checkLogin" type="button" value="Register">
            </div>
        </form>
    </div>
    `
}