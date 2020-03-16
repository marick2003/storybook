<template>
        <select id="selectbox" @change="onChange($event)">          
             <option v-for="(item, value) in options" :value="item.value" :key="value">
                {{ item.text }}
            </option>
        </select>
</template>
<script>
export default {
    name:'Selectbox',
    props:{
       options:[]
    },
    methods:{
        onChange(event){
          
           this.$emit("updateselectbox", event);
        }
    }

}
</script>
<style scoped>

</style>