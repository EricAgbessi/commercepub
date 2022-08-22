<template>
    <appbarsec></appbarsec>
    <div class="container">
        <div class="title">
            <h3>Commande #456B582</h3>
            <p>Date de la commande: 12/08/2022</p>
            <p>Montant Total: 12 200 FCFA</p>
            <button>REFAIRE LA COMMANDE</button>
        </div>
        <hr>
        <div class="bill">
            <div class="1h">
                <h3>Adress de facturation</h3>
                <p>AGBESSI Eric</p>
                <p>Akpakpa</p>
                <p>Akpakpa 12 avenu stemez BJ</p>
            </div>
            <div>
                <h3>Adress de livraison</h3>
                <p>AGBESSI Eric</p>
                <p>Akpakpa</p>
                <p>Akpakpa 12 avenu stemez BJ</p>
            </div>
        </div>
        <hr>
        <div class="product-list">
            <command_produit v-for="i in 5"></command_produit>
        </div>

    </div>
</template>

<script>
    import appbarsec from '@/components/appbarsec.vue';
    import command_produit from './command_produit.vue';
    export default{
        name:"CommandDetail",
        components:{
            appbarsec,
            command_produit
        }
    }
</script>

<style scoped>
.container{
    display:flex;
    flex-direction: column;
    padding:10px;
}
.title{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
}
.title>p{
    margin:5px 0px;
}
.title>h3{
    margin:5px 0px;
}
.title>button{
    border:1px solid #E82F24;
    padding:10px;
    border-radius: 15px;
    color: #E82F24;
    background-color: white;
}
hr{
    border: 1px solid #ccc;
    width:100%;
}
.bill{
    display: flex;
    flex-direction: row;
    font-size:12px;
    justify-content: space-between;
    padding-bottom: 20px;
}
.bill > div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.bill > div > p{
    margin:2px 0px;
}
</style>