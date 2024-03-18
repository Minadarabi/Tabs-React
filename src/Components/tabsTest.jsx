import { Tabs } from "./Tabs"

import "./style.css"


export const TabsTest = () => {

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
        <Tabs tabs={tabsData} />
   </div>

  )
}

 
