import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { isAddShoppingListDialogOpenedGetter, toggleAddShoppingListDialog } from "../../api/ShoppingListItemsSlice";

interface Props {}

const AddShoppingListItemDialog: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const opened = useAppSelector(isAddShoppingListDialogOpenedGetter);

  const handleClose = () => {
    dispatch(toggleAddShoppingListDialog())
  }

  return (
    <Dialog open={opened} onClose={handleClose}>
      <DialogTitle>Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button color="neutral" onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddShoppingListItemDialog;
