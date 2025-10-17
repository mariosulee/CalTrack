
import type { Activity } from "../types/types"


// 0. array del tipo Activity definido en types.ts
type ActivityState={
    activities:Activity[]
}


// 1. ESTE ES EL ESTADO, QUE INICIALMENTE ES UN OBJETO SIN ACTIVIDADES QUE EL USUARIO VA METIENDO A LO LARGO DEL DIA
export const initialState:ActivityState={
    activities:[]
}

// 2. LAS DIFERENTES ACCIONES QUE DESCRIBEN LO QUE PASA EN activityReducer
export type ActivityActions={ 
    type: 'save-activity', payload: {newActivity: Activity} // el payload va a ser un objeto que lo llamo newActivity y va a ser de tipo Activity
}


//3. LA FUNCION QUE CONECTA EL ESTADO ACTUAL Y LAS ACCIONES 
export const activityReducer= ( 
    state: ActivityState=initialState,
    action: ActivityActions
    ) => {  

        //TODAS ESTAS ACCIONES SERIAN EL DISPATCH
        if(action.type==='save-activity'){            
            return{
                ...state,  //hago siempre una copia del estado
                activities: [...state.activities, action.payload.newActivity ]
                //creo un nuevo array con todas las actividades anteriores + la nueva
            }
        }
        
    return state;
}

