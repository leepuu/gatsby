import React from "react"

import "../scss/common.scss"
import Header from "./header"

export default ({ children }) => {
	return (
		<>
			<Header></Header>

			{children}
		</>
	)
}
