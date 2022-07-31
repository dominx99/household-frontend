import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { BaseSyntheticEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectedGroupGetter } from "../../../components/groups/GroupSlice";
import { fetchShoppingListsByGroupAsync } from "../../../shopping-lists/api/ShoppingListSlice";
import { addShoppingListItemAsync, addShoppingListItemParamsGetter, isAddShoppingListDialogOpenedGetter, setAddShoppingListItemParams, toggleAddShoppingListDialog } from "../../api/ShoppingListItemsSlice";

interface Props {}

const AddShoppingListItemDialog: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const opened = useAppSelector(isAddShoppingListDialogOpenedGetter);
  const params = useAppSelector(addShoppingListItemParamsGetter);
  const selectedGroup = useAppSelector(selectedGroupGetter);

  const handleClose = () => {
    dispatch(toggleAddShoppingListDialog());
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    let name = e.target.name;

    dispatch(setAddShoppingListItemParams({
      ...params,
      form: {
        ...params?.form,
        [name]: e.target.value
      }
    }))
  }

  const handleAdd = async () => {
    // TODO: Find other way to handle this
    if (!params) {
      throw new Error('Failed to add item.');
    }

    dispatch(toggleAddShoppingListDialog());
    await dispatch(addShoppingListItemAsync(params));
    // TODO: Do not fetch all lists but only one or just add item to the list
    dispatch(fetchShoppingListsByGroupAsync(selectedGroup?.id || ''))
  }

  return (
    <Dialog open={opened} onClose={handleClose}>
      <DialogTitle>Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="neutral" onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddShoppingListItemDialog;
