#configuraciones importantes

#para el layout se crea dos carpetas
1 layouts  -> aqui metes la forma como se representa arriba el navbar abajo un <slot/>
2 pages  ->los nombras y dentro metes un index.vue en cada carpeta
y se elimina app.vue

#tailwind
se instala tailwind nuxt como paquete nuxt 
sigues las intrucciones del instalado

se crea assets css y tailwind css
ahi metes el 
@tailwind base;
@tailwind components;
@tailwind utilities;

#pinia
para pinia lo mismo sigues las opciones del instalador de pinia nuxt

#components
crea la carpeta components
ahi metes el navbar


#para el estado


#para el nabvar
activeClass="active"  <--- usar esa clase en en NuxtLink 
y agregar un style en el script
.active {
    font-weight: semibold;
    color:blue;
}


#ssr false
ssr:false en nuxt.config 
util para usar localstorage

#para el form 
validacion facil usar 
<form  @submit.prevent=""/>
debe haber abajo un button submmit



