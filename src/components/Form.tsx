import { categories } from "../data/categories"
import { useState, type Dispatch} from "react"
import type { Activity } from "../types/types"
import type { ActivityActions } from "../reducers/activityReducer"
import { v4 as uuidv4 } from "uuid"

type FormProps={
    dispatch:Dispatch<ActivityActions>
}

const initialState: Activity={
    id:uuidv4(), //esto genera un id unico
    category:1,
    name:'',
    calories:0
}


export default function Form( {dispatch} : FormProps ){

    
    const [activity, setActivity]=useState<Activity>(initialState)



    const handleChange= (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>{  //esta funcion actualiza el estado
        
        const isNumberField=['category' , 'calories'].includes(e.target.id) //devolverá true si estoy escribiendo en ellos

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
            // es el id del elemento q ha cambiado (el input con id name, category, o calories) 
            // : es el valor nuevo q escribe el usuario
        })
    }


    const isValidActivity=() =>{ // para que este todo relleno
        const{name, calories}=activity //SE EXTRAEN LAS PROPIEDADES DEL ESTADO activity
        return name.trim() !=='' && calories >0
    }

    
    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()  //se previene la accion por defecto

        //dispatch envia una accion al reducer, diciendole q accion se debe realizar,
        //  y los datos q quiere guardar (payload), en este caso el estado activity
        dispatch( {type:"save-activity", payload:{newActivity:activity} })


        //q se borre todo al pulsar enviar
        setActivity({
            ...initialState,
            id: uuidv4() //genero un nuevo id
        })
    }


    return(
        <>
            <form className="space-y-5 bg-white shadow-xl p-10 rounded-lg"
            onSubmit={handleSubmit}>

                {/* CATEGORIA */}
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="category" className="font-[Inter] font-bold">Category:</label>  {/*htmlfor se usa para asociar la etiqueta a un input por su id */}
                    <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" id="category"
                        
                        value={activity.category} 
                        onChange={handleChange}>
                        {/* value es el valor por defecto*/}

                        {categories.map( category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}

                    </select>
                </div>


                {/* NOMBRE */}
                <div className="grid grid-cols-1 gap-3 mt-8">
                    
                    <label htmlFor="name" className="font-[Inter] font-bold">Activity:</label> 
                    <input id="name" type="text" className="border border-slate-300 p-2 rounded-lg"
                    placeholder="e.g. Tennis match, Dinner at a restaurant, 10km running..."
                    value={activity.name}
                    onChange={handleChange}/> 
                </div>


                {/* NUMERO DE CALORIAS */}
                <div className="grid grid-cols-1 gap-3 mt-8">
                    <label htmlFor="calories" className="font-[Inter] font-bold">Calories:</label> 
                    <input id="calories" type="number" className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calories consumed or burned"
                    value={activity.calories}
                    onChange={handleChange}/>
                </div>

                
                {/* SUBMIT */}
                <input type="submit" className="mt-5 bg-gray-900 hover:bg-lime-700 w-full p-2 font-bold text-white font-[Inter] cursor-pointer rounded-lg disabled:opacity-10"
                value={activity.category===1 ? 'Record Food' : "Record Exercise" }
                disabled={!isValidActivity()}/>
                        
            </form>
        
        
        </>
    )
}

