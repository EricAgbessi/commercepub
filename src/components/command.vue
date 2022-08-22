<template>
    <router-link to="/CommandDetail">
        <div class="container">
            <h3>Commande #456B582</h3>
            <p>Date de la commande: 12/08/2022</p>
            <p>Montant Total: 12 200 FCFA</p>
        </div>
    </router-link>   
</template>

<script>
    export default{
        name:"Commande"
    }
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        margin:5px;
        padding:5px;
        border:1px solid #ccc;
    }
    .container>p{
        margin:5px 0px;
    }
</style>