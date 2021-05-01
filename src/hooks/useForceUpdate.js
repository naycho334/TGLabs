import { useState } from "react"

const useForceUpdate = () => {
  const forceUpdate = useState(1)[1];
  return forceUpdate.bind(null, Math.random())
}

export default useForceUpdate;