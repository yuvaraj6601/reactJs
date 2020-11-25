import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { TEST_ACTION } from "utils/types.utils"
import { reducers } from "interfaces/common.interface.js"

export default function Test() {
  let test = useSelector((state: reducers)  => state.test)
  const dispatch = useDispatch()

  const handleTest = () => {
    dispatch({
      type: TEST_ACTION,
      payload: {
        foo: "bar",
        test: "testttt"
      }
    })
  }
  console.log(test)
  return (
    <h1 onClick={handleTest}>
      Test
    </h1>
  )
}