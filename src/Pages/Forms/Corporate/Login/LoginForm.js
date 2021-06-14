import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoginCmp from "../../../../Components/Forms/CorporateCmp/LoginCmp";
// import { LoginUserAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import { actionLoginRequestSaga } from "../../../../Store/Actions/SagaActions/DashboardSaga/LoginSagaActions";
import { checkObjectProperties } from "../../../../utils/utils";

const LoginForm = (props) => {
  // =========***Main Object***=========
  const initialState = {
    email: '',
    password: '',
  };

  // =========***Error Object***=========
  const errorsObj = initialState;

  const [loginObj, setLoginObj] = useState(initialState);
  const [errors, setErrors] = useState(errorsObj);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const dispatch = useDispatch();

  // const type = localStorage.getItem('type') || props.type;
  const type = props?.type || localStorage.getItem("type");

  useEffect(() => {
    localStorage.removeItem("amount");
    localStorage.removeItem("regStatus");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("orderID");
    // sessionStorage.removeItem("steps");
    // sessionStorage.removeItem("secondary");
    // sessionStorage.removeItem("primary");
    // sessionStorage.removeItem("contact");
    // sessionStorage.removeItem("image1");
    // sessionStorage.removeItem("base64Img");
    sessionStorage.clear();
  }, []);

  useEffect(() => {
    const isErrorsObjEmpty = checkObjectProperties(errors);
    setIsBtnDisabled(isErrorsObjEmpty);
  }, [errors]);

  const handleChange = (name, value, errorMessage) => {
    setLoginObj(preState => ({
      ...preState,
      [name]: value
    }));
    setErrors(preState => ({
      ...preState,
      [name]: errorMessage
    }));
  }

  const onSuccess = (redirectUrl) => {
    if (redirectUrl === "/dashboard") {
      props.history.push("/dashboard");
    } else {
      props.history.push("/register/payment");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = loginObj;
    if (email && password) {
      const model = {
        stakeholder: type,
        userID: email,
        password: password,
      };
      dispatch(
        actionLoginRequestSaga({
          apiPayloadRequest: model,
          callback: onSuccess,
        })
      );
    } else {
      toast.error("Please enter all input fields");
    }
  };

  return (
    <LoginCmp
      type={type}
      loginObj={loginObj}
      errors={errors}
      isBtnDisabled={isBtnDisabled}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default LoginForm;
