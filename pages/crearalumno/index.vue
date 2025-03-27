<template>

    

        
        

<form  @submit.prevent="registrarDatos" class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
    <input type="nombre" id="nombre" v-model="state.nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="dni" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
    <input type="dni" id="dni" v-model="state.dni" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="dni" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
    <input type="dni" id="dni" v-model="state.dni" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="dni" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
    <input type="dni" id="dni" v-model="state.dni" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
  
</template>

<script setup>



const state=reactive({
  nombre:'',
  dni:'',
  premiun:false

})


const registrarDatos=() => {

    state.nombre=''
    state.dni=''
    state.premiun=false
}

</script>