import React from 'react'

import './Container.css'

const Container = ({ children }) => (
    <main className="app-container overflow-auto">
        {children}
    </main>
)

export default Container