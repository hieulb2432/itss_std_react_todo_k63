/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState } from 'react';
function TodoItem({item}) {
  const [itemCss,setItemCss] = React.useState("");
  const handleItem = () => setItemCss(itemCss == "" ? "has-text-grey-light" : "");
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={handleItem}/>
       <p className={itemCss}>{item.text}</p>
    </label>
  );
}

export default TodoItem;