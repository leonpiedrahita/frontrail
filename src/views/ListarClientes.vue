<template>
    <listar-clientes-component v-if="this.$store.state.user.rol ==='administrador'"></listar-clientes-component>
</template>

<script>
import  ListarClientesComponent  from '../components/ListarClientesComponent'

export default ({
    components:{
        ListarClientesComponent
    }
    
})
</script>