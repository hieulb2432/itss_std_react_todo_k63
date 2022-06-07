/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState } from 'react';
function TodoItem({ item, handleCheck }) {
  const [itemCss,setItemCss] = React.useState("");
  const handleItem = (key) => {
    handleCheck(item)
  }
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={handleItem} checked={item.done}/>
       <p className={item.done? 'has-text-grey-light' : ''}>{item.text}</p>
    </label>
  );
}

export default TodoItem;