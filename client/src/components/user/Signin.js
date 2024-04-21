import { Close, Send } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import {useRef } from "react";
import { useValue } from "../../context/ContextProvider";
import PasswordField from "./PasswordField";
import GoogleOneTapSignup from "./GoogleOneTapSignup";
import {register} from '../../actions/user';

const Signin = () => {
  const {
    state: { opensignin },
    dispatch,
  } = useValue();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: "CLOSE_SIGNIN" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // testing Loading
    dispatch({ type: "START_LOADING" });

    

    setTimeout(() => {
      dispatch({ type: "END_LOADING" });
    }, 6000);

    //testing Notification
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      dispatch({
        type: "UPDATE_ALERT",
        payload: {
          open: true,
          severity: "error",
          message: "Passwords do not match",
        },
      });
    }
    dispatch({ type: "CLOSE_SIGNIN" });

    register({ name, email, password }, dispatch);
  };
  return (
    <Dialog open={opensignin} onClose={handleClose}>
      <DialogTitle>
       Register
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>
            Please fill your information in the fields below:
          </DialogContentText>
          {
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={nameRef}
              inputProps={{ minLength: 2 }}
              required
            />
          }
          <TextField
            autoFocus
            margin="normal"
            variant="standard"
            id="email"
            label="Email"
            type="email"
            fullWidth
            inputRef={emailRef}
            required
          />
          <PasswordField {...{ passwordRef }} />
          {
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirm Password"
            />
          }
        </DialogContent>
        <DialogActions sx={{ px: "19px" }}>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: "center", py: "24px" }}>
        <GoogleOneTapSignup />
      </DialogActions>
    </Dialog>
  );
};

export default Signin;
