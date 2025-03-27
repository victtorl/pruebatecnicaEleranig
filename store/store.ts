import { defineStore } from "pinia";
import { ref } from "vue";
import { nanoid } from "nanoid";



interface ICrud{
    id:any,
    nombre:string,
    dni:string
    premiun:boolean
}

export const useCrudStore=defineStore('crud-store',() => {

// const itemscrud=ref([{id:'Xzf1215',nombre:'Juanito alimaña',dni:'123455',premiun:true}]  )  


const itemscrud = ref<ICrud[]>(JSON.parse(localStorage.getItem('itemcrudstore') || '[]' ));

const addItem=(itm:Omit<ICrud,''>)=>{
    const existingItem= itemscrud.value.find(itemscrud=>itemscrud.id===itm.id)
    if(!existingItem){
        itemscrud.value.push({...itm,id:nanoid()})
    }
    
}


const deleteItem=(itm:ICrud) => {
    itemscrud.value=itemscrud.value.filter((itemscrud) =>itemscrud!==itm)
}


const saveItems = () => {
    localStorage.setItem('itemcrudstore', JSON.stringify(itemscrud.value));
  };

  watch(itemscrud, saveItems, { deep: true });


return { itemscrud,addItem,deleteItem}

})



