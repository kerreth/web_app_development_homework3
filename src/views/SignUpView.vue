<template>
  <section class="login-box">
    <h1 class="welcome">Welcome</h1>
    <p>Please Sign Up</p>
    <form>
        <label for ="email">
        <span> Email </span>
        <input type="email" name="email" placeholder="Email" required>
        </label>

        <label for="password">
        <span> Password </span>
        <input type="password" name="password" placeholder="Password" required>
        </label>

        <button type="submit">Signup</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'SignUpView',
};
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-box {
    width: 380px;
    background-color: #b5d9e7;
    border-radius: 12px;
    text-align: center;
    box-sizing: border-box;
    padding: 25px;
    box-shadow: 0 6px 18px rgba(60, 75, 50, 0.18);
    margin: auto;
    max-width: 100%;
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
