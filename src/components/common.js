import React from "react"

import "../scss/common.scss"
import Header from "./header"

export default ({ children }) => {
	return (
		<div>
			<Header></Header>

			{children}
		</div>
	)
}
