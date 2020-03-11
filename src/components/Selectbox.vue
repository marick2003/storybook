<template>
        <select id="selectbox">          
             <option v-for="(text, value) in options" :value="value" :key="value">
                {{ text }}
            </option>
          
        </select>
</template>
<script>
export default {
    name:'selectbox',
  
    data:{
       selected: 'A',
       options: {
            "1": "foo",
            "2": "bar",
            "3": "baz"
        }
    },

}
</script>
<style scoped>

</style>