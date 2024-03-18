import { useState } from "react"


export const Tabs = ({tabs}) => {
  const [selectedItem , setSelectedItem] = useState(0)


  return (
    <div>
      <div className="buttons">
        {tabs.map((tab, index) => <span key={tab.label} onClick={() => setSelectedItem(index) }>{tab.label}</span>)}
      </div>
      <div className="content">
        {tabs[selectedItem].content}
      </div>
   </div>
  )
}
