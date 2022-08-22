<template>
    <div class="container">
        <div class="image">
            <img 
                src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg" 
                width="100"
                height="100"
            />
        </div>
        <div class="resum">
            <p>MacBook Pro 2017</p>
            <p>(500 000) x 2</p>
        </div>
        <div class="prix">
            <p>1 000 000 (fcfa)</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:"CommandProduit"
    }
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        border-bottom:1px solid #ccc;
        justify-content: space-between;
    }
    .image{
        width:100px;
    }
    .resum{
        font-size:14px;
    }
    .resum > p{
        margin:5px 0px
    }
    .prix{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        font-size:12px;
        font-weight: bold;
        color:#E82F24;
    }
</style>