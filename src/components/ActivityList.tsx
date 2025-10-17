import type { Activity } from "../types/types"


export type ActivityListProps={
    activities:Activity[]
}

export default function ActivityList( {activities}: ActivityListProps){
    return(
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Food & Exercise</h2>

            {activities.map( (act) => (
                <div key={act.id} className="px-5 py-10 bg-white mt-5 flex justify-between">

                        <div className="space-y-2 relative"> {/*ESTE AL LADO IZQ POR EL JUSTIFY-BETWEEN */}

                            <p>Category {act.category}</p>

                            <p className="text-2xl font-bold pt-5">{act.name}</p>
                        
                            <p className="font-black text-4xl text-lime-600">{act.calories} Calorias</p>
                        </div>

                        <div> {/*ESTE AL LADO DCHO POR EL JUSTIFY-BETWEEN */}

                        </div>
                </div>

            ))}
        
        </>
    )
}

