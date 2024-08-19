import { $, Data, Export, Memory, Module } from "../src"

const $mem = <Memory name="mem" pageSize={1} />
export default (
  <Module>
    <Data value="hello world" index={0} />
    <Export value={$mem} />
  </Module>
)
