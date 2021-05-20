import { useState } from "react"

const useForceUpdate = () =>
  useState(1)[1].bind(null, Math.random())

export default useForceUpdate;