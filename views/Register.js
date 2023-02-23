export default {
    name: 'Register',
    props: '',
    methods: {
        sendForm: function () {   
            if (this.form.email && this.form.nickName && this.form.password && this.form.passwordRepeat) {
                console.log(this.form.email);
                console.log(this.form.nickName);
                console.log(this.form.password);
                console.log(this.form.passwordRepeat);
                console.log(this.form.checked);

                this.list.push({
                    email: this.form.email,
                    nickName: this.form.nickName,
                    password: this.form.password,
                    passwordRepeat: this.form.passwordRepeat,
                    checked: this.form.checked,
                });

                console.log(this.list);
                let users = [];
                let user = {
                    email: this.form.email,
                    nickName: this.form.nickName,
                    password: this.form.password,
                    passwordRepeat: this.form.passwordRepeat
                };
                users.push(user);
                localStorage.setItem( user.email, JSON.stringify(users));      
                console.log(users);       
            } else {
                this.errors = [];      
                if (!this.form.email || !this.form.nickName || !this.form.password || !this.form.passwordRepeat) {
                    this.errors.push("All fields are required");
                }         
            }
            this.errors.pop();
            var reg =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            var reg_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

            if(!this.form.password.match(reg)) {
                this.errors.push("Wrong password format");
            } else if(this.form.password != this.form.passwordRepeat){
                this.errors.push("Passwords are not equal");
            } else if(!this.form.email.match(reg_email)) { 
                this.errors.push("Wrong email format");
            }else {
                this.show_content = !this.show_content;
                this.show_form = !this.show_form;
                this.nickNameMenu = this.form.nickName;
                this.nickname_li = !this.nickname_li;
                this.button_logout = !this.button_logout;
                this.button_login = !this.button_login;
                this.clearFormInputRegister();
            }
        },
    },
    template:`
    <div class="div_form" v-if="show_form">
        <form id="form">
            <h2>Register</h2>
            <div class="div_error"  v-if="errors.length">
                <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
            </div>
            <div class="div_email">
                <label for="email">Email</label>
                <input type="text" v-model="form.email" name="email" id="email">
            </div>
            <div class="div_nickName">
                <label for="nickName">Nickname</label>
                <input type="text" v-model="form.nickName" name="nickName" id="nickName">
            </div>
            <div class="password">
                <label for="password">Password</label><small>(Minimum eight characters, at least one uppercase letter, one lowercase letter and one number, no characters allowed)</small>
                <input type="text" v-model="form.password" name="password" id="password">
            </div>
            <div class="password">
                <label for="password">Repeat your password</label>
                <input type="text" v-model="form.passwordRepeat" name="passwordRepeat" id="passwordRepeat">
            </div>
            <div class="div_button">
                <input @click="sendForm" type="button" value="Register">
            </div>
        </form>
    </div>
    `
}