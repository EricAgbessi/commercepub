<template>
    <appbarsec></appbarsec>
    <div class="container">
       <h2>Creation de nouveau compte</h2>
       <input class="input" placeholder="Nom" type="text" />
       <input class="input" placeholder="Email" type="text" />
       <input class="input"  placeholder="Password" type="text" />
       <button class="button">Inscription</button>
    </div>
</template>

<script>
import appbarsec from '@/components/appbarsec.vue';
 export default{
    name:"SignUp",
    components:{
        appbarsec
    }
 }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        padding-top:100px;
        height: 100%;
    }
    .input{
        margin:5px 8px;
        height:40px;
        border-radius:20px;
        font-size: 20px;
        padding:5px 15px;
        border:2px solid #ccc;
    }
    .button{
        margin:30px 10px;
        height: 45px;
        border-radius:20px;
        font-size: 18px;
        border:none;
        background-color: #E82F24;
        color:white;
    }
   
</style>