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
                    Categoria
                </th>
                <th scope="col" class="px-6 py-3">
                    Descripción
                </th>
                <th scope="col" class="px-6 py-3">
                    Cant. Alumnos
                </th>
                <th scope="col" class="px-6 py-3">
                    Fecha de Inicio
                </th>
                <th scope="col" class="px-6 py-3">
                    Fecha de Fin
                </th>
                <th scope="col" class="px-6 py-3">
                    Precio
                </th>
                <th scope="col" class="px-6 py-3">
                    Alumnos
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
            </tr>
        </thead>
        <tbody  >
            <tr v-for="item in cursoST.groupcursos"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.nombre }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.categoria }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.descripcion }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.cantidadAlumnos }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.inicio }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.fin }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.precio }}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    alumnos
                </th>
           
            </tr>
        </tbody>
    </table>


</div>


    </div>
</template>

<script setup>

import { useCursoStore } from '~/store/cursos';

   
const cursoST=useCursoStore()





onMounted(async () => {
    const { data } = await useFetch('https://662aa18dd3f63c12f4583be5.mockapi.io/api/pt/cursos')
  cursoST.limpiarCursos()
  cursoST.llenarCursos(data.value)  

})









</script>