import React from "react";

export default function Counter({
  totalNumberOfItems,
  totalNumberOfCheckedItems,
}) {
  return (
    <p>
      <b>{totalNumberOfCheckedItems}</b> / {totalNumberOfItems} Item packed
    </p>
  );
}
