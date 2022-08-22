<template>
    <appbarsec></appbarsec>
    <div class="container">
        <h2>List des commandes livrer</h2>
        <command v-for="i in 6"></command>
    </div>
</template>

<script>
    import appbarsec from '@/components/appbarsec.vue';
    import command from '@/components/command.vue';
    export default{
        name:"Commande",
        components:{
            appbarsec,
            command
        }
    }
</script>

<style scoped>
</style>