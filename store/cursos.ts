import { defineStore } from "pinia";
import { ref } from "vue";
import { nanoid } from "nanoid";






interface ICurso{
    id:any,
    nombre:string,
    categoria:string
    descripcion:boolean
    cantidadAlumnos:string,
    inicio:string,
    fin:string,
    precio:string,
    alumnos:[]

}

export const useCursoStore=defineStore('curso-store',() => {

// const itemscursos=ref([{id:'Xzf1215',nombre:'Juanito alimaña',dni:'123455',premiun:true}]  )  

const itemscursos = ref<ICurso[]>(JSON.parse(localStorage.getItem('itemcursostore') || '[]' ));



const addCurso=(itm:Omit<ICurso,''>)=>{
    const existingItem= itemscursos.value.find(itemscursos=>itemscursos.id===itm.id)
    if(!existingItem){
        itemscursos.value.push({...itm,id:nanoid()})
    }
    
}


const deleteCurso=(itm:ICurso) => {
    itemscursos.value=itemscursos.value.filter((itemscursos) =>itemscursos!==itm)
}


const guardarCursos = () => {
    localStorage.setItem('itemcursostore', JSON.stringify(itemscursos.value));
  };

  watch(itemscursos, guardarCursos, { deep: true });
  
  
  const groupcursos = ref([] as Array<{}|any|ICurso>);
  



  function llenarCursos(itm:ICurso[]){
      groupcursos.value =itm

  
  }

  function limpiarCursos(){
      groupcursos.value=[]
  }  


return { itemscursos,groupcursos,addCurso,deleteCurso,llenarCursos,limpiarCursos}
})



