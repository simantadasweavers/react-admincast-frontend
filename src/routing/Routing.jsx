import { Routes, Route } from "react-router"
import { PrivateRouting } from "./PrivateRouting"
import { Home } from "../pages/Home"
import { Error } from "../pages/Error"

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouting />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
