import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const totalNumberOfItems = useItemsStore((state) => state.totalNumberOfItems());
  const totalNumberOfCheckedItems = useItemsStore(
    (state) => state.totalNumberOfCheckedItems()
  );

  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        totalNumberOfCheckedItems={totalNumberOfCheckedItems}
      />
    </header>
  );
}
