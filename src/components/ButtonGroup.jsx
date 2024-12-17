import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const markResetToInitial = useItemsStore((state) => state.markResetToInitial);
  const markRemoveAllItems = useItemsStore((state) => state.markRemoveAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={markResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={markRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
