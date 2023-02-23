import Register from '/views/Register.js'
export default {
    name: 'HeaderComponent',
    props: ['button'],
    methods: {
        showForm: function() {
            this.$router.push('../views/Register.js');
        },
        showFormLogin: function() {
            this.$router.push('../views/Login.js');
        },
        showProducts: function() {
            this.$router.push('../views/Products.js');
        }
    },
    components: {
        Register
    },
    template: `
        <header>
            <div class="div_title">
                <h1 class="title">BIKES MENORCA</h1>
            </div>
            <nav class="nav">
                <ul class="ul_nav">
                    <li v-if="nickname_li" class="nickname_menu">Hello {{ nickNameMenu }}</li>
                    <li><button @click="showForm">Register</button></li>
                    <li><button @click="showFormLogin">Log-in</button></li>
                    <li><button @click="showProducts">Log-out</button></li>
                </ul>
            </nav>
        </header>
    `
}