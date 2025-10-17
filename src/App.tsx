import Form from "./components/Form"
import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activityReducer"
import ActivityList from "./components/ActivityList"


function App() {


  const[state, dispatch]=useReducer(activityReducer, initialState)




  return (
    <>
      <header className="bg-lime-700 py-4">

        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <h1 className="text-3xl font-black text-white font-[Inter]">
            CalTrack - Calorie Tracker
          </h1>
          <p className="text-base text-white font-[Inter]"> An App by Mario Sulé 💯</p>
        </div>
      </header>




       <section className="bg-lime-500 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <Form
              dispatch={dispatch}
            />

          </div>


        </section>


        <section className="p-10 mx-auto max-w-4xl">
          <ActivityList
            activities={state.activities}
          />
        </section>


    </>
  )
}

export default App
