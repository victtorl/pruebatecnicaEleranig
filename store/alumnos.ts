import { defineStore } from "pinia";
import { ref } from "vue";
import { nanoid } from "nanoid";






interface IAlumno{
    id:any,
    // nombre:string,
    // categoria:string
    // descripcion:boolean
    // cantidadAlumnos:string,
    // inicio:string,
    // fin:string,
    // precio:string,
    // alumnos:[]

}

export const useAlumnoStore=defineStore('alumno-store',() => {

// const itemsalumnos=ref([{id:'Xzf1215',nombre:'Juanito alimaña',dni:'123455',premiun:true}]  )  

const itemsalumnos = ref<IAlumno[]>(JSON.parse(localStorage.getItem('itemalumnostore') || '[]' ));



const addAlumno=(itm:Omit<IAlumno,''>)=>{
    const existingItem= itemsalumnos.value.find(itemsalumnos=>itemsalumnos.id===itm.id)
    if(!existingItem){
        itemsalumnos.value.push({...itm,id:nanoid()})
    }
    
}


const deleteAlumno=(itm:IAlumno) => {
    itemsalumnos.value=itemsalumnos.value.filter((itemsalumnos) =>itemsalumnos!==itm)
}


const guardarAlumnos = () => {
    localStorage.setItem('itemalumnostore', JSON.stringify(itemsalumnos.value));
  };

  watch(itemsalumnos, guardarAlumnos, { deep: true });
  
  
  const groupalumnos = ref([] as Array<{}|any|IAlumno>);
  



  function llenarAlumnos(itm:IAlumno[]){
      groupalumnos.value =itm

  
  }

  function limpiarAlumnos(){
      groupalumnos.value=[]
  }  


return { itemsalumnos,groupalumnos,addAlumno,deleteAlumno,llenarAlumnos,limpiarAlumnos}
})



