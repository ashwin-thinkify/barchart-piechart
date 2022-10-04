import React from "react";
import ListTable from '../components/ListTable'
import THINKIFY_LIST from '../constants/thinkify.constants'

export default function TodoApp() {

  return (
    <div className="app-wrapper">
      <h1 className="text-3xl font-bold underline">
          Thinkify List
      </h1>
      <ListTable data={THINKIFY_LIST}/>
    </div>
  );
}
