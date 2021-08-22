import React from "react"
import "./Memory.css"

const Memory = ({ children }) => {
    return (
        <div className="memory">
            {children}
        </div>
    )
}

export { Memory }