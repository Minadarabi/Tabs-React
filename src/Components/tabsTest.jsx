import { Tab } from "./Tab"




export const tabsTest = () => {

  const tabsData =  [    {
        label: "Tab1",
        content: "This is a content for tab1"
    }, {
        label: "Tab2",
        content: "This is a content for tab2"
    },  {
        label: "Tab3",
        content: "This is a content for tab3"
    },]
  return (
   <div>
    <div className="buttons">
        <Tab />
    </div>
    <div className="content"></div>
   </div>

  )
}

 
