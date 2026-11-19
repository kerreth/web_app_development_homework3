<template>
  <section class="signupPage">
  <HeaderComponent/>  
  <section class="login-box">
    <h1 class="welcome">Welcome</h1>
    <p>Please Sign Up</p>
    <form @submit.prevent="signup">
        <label for ="email">
        <span> Email </span>
        <input id="email" type="email" name="email" placeholder="Email" required>
        </label>

        <label for="password">
        <span> Password </span>
        <input id="password" type="password" name="password" placeholder="Password" v-model="password" required>
        </label>
        <p v-if="passwordErrors.length > 0 && password">
             Password is not valid:
        </p>
        <ul v-if="passwordErrors.length > 0 && password">
            <li v-for="error in passwordErrors" :key="error">
                {{ error }}
            </li>
        </ul>

        <button type="submit">Signup</button>
    </form>
  </section>
  <FooterComponent />
  </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'; 
import FooterComponent from '@/components/Footer.vue'; 

export default {
  name: 'SignUpView',
  components: { HeaderComponent, FooterComponent },

  data(){
    return{
        password:''
    };
  },

  computed: {
    passwordErrors() {
        const errors = [];

        if (this.password.length < 8 || this.password.length >= 15){
            errors.push('Password must be 8-14 characters long');
        }

        if (!/[A-Z]/.test(this.password)){
            errors.push('Password must include at least one uppercase letter');
        }
        if ((this.password.match(/[a-z]/g) || []).length < 2){
            errors.push('Password must include at least two lowercase letters');
        }
        if(!/[0-9]/.test(this.password)){
            errors.push('Password must include at least one number');
        }
        if(!/^[A-Z]/.test(this.password)){
            errors.push('Password must start with an uppercase letter');
        }
        if(!this.password.includes('_')){
            errors.push('Password must contain an underscore (_)');
        }
        return errors
    }

  },
  methods:{
    signup(){
        if(this.passwordErrors.length==0){
            alert('Password is valid');
        }
    }
  }
};
</script>

<style scoped>

.signupPage {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-box {
    width: 90%;
    background-color: #b5d9e7;
    border-radius: 12px;
    text-align: center;
    box-sizing: border-box;
    padding: 25px;
    box-shadow: 0 6px 18px rgba(60, 75, 50, 0.18);
    margin: auto;
    max-width: 380px;
}

.login-box > p {
    margin: 5px;
    font-size: 18px;
}
.login-box > .welcome {
    font-weight: bold;
    font-size: 25px;
}

input {
  min-width: 0;
  box-sizing: border-box;
  padding: 8px;
  margin: 4px 0;
  background-color: #fffdf7;
  border: 1px solid #899b7a;
  font-size: 16px;
  border-radius: 12px;
  text-align: center;
}
ul {
    color: #c62828;
    font-size: 13px;
    text-align: left;
    padding-left: 20px;
    margin: 10px 0;
}
button {
    background-color: #3487a8;
    color: white;
    padding: 10px 22px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
}

label {
  display: flex;
  align-items: center;
  width: 100%;
}

label span {
    flex: 1;
}

label + button {
    margin-top: 1em;
}

p + form {
    margin-top: 1em;
}

</style>
