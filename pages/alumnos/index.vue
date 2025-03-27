<template>
    <div class="container flex justify-center " >
        

<div class="relative overflow-x-auto my-8">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <!-- <th scope="col" class="px-6 py-3">
                    ID
                </th> -->
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Apellidos
                </th>
                <th scope="col" class="px-6 py-3">
                    Codigo
                </th>
                <th scope="col" class="px-6 py-3">
                    Correo
                </th>
               
            </tr>
        </thead>
        <tbody  >
            <tr v-for="item in alumnoST.groupalumnos"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.nombres }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.apellidos }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.codigo }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.correo }}
                </th>
            
           
            </tr>
        </tbody>
    </table>
</div>


    </div>
</template>

<script setup>

import { useAlumnoStore } from '~/store/alumnos';

   
const alumnoST=useAlumnoStore()

onMounted(async () => {
    const { data } = await useFetch('https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/alumnos')
  alumnoST.limpiarAlumnos()
  alumnoST.llenarAlumnos(data.value)  

})









</script>